-- Escola de Iniciáticos · lista de presença e quiz de fixação (Supabase)
-- Rode uma vez no SQL Editor do MESMO projeto do Templo Virtual (depois do realtime.sql).
--
-- O que isto cria (tudo com o prefixo escola_, separado das tabelas do Templo Virtual):
--   escola_sessoes       uma linha por apresentação (sala), com o hash da chave do apresentador
--   escola_participantes quem entrou na sala pelo celular (nome e capítulo) = lista de presença
--   escola_respostas     cada resposta do quiz de fixação (acertou, tempo, pontos)
--
-- Segurança: as tabelas têm RLS ligado e NENHUMA política para anon/authenticated,
-- ou seja, a chave pública do site não lê nem grava nada direto nelas.
-- Todo acesso passa pelas três funções abaixo, que exigem a chave do apresentador
-- (a mesma do link do passador). Quem só tem o link da plateia não consegue ler nomes nem notas.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.escola_sessoes (
  id          uuid primary key default gen_random_uuid(),
  sala        text not null unique check (sala ~ '^[a-z0-9]{3,12}$'),
  chave_hash  text not null,
  deck        text not null default 'esc',
  titulo      text,
  criada_em   timestamptz not null default now(),
  atualizada_em timestamptz not null default now()
);

create table if not exists public.escola_participantes (
  sessao_id   uuid not null references public.escola_sessoes(id) on delete cascade,
  uid         text not null check (length(uid) between 4 and 16),
  nome        text not null check (length(nome) between 1 and 60),
  capitulo    text check (length(capitulo) <= 60),
  entrou_em   timestamptz not null default now(),
  primary key (sessao_id, uid)
);

create table if not exists public.escola_respostas (
  sessao_id   uuid not null references public.escola_sessoes(id) on delete cascade,
  uid         text not null,
  pergunta    smallint not null check (pergunta between 0 and 99),
  opcao       smallint not null check (opcao between 0 and 9),
  correta     boolean not null,
  ms          integer not null check (ms between 0 and 600000),
  pontos      integer not null check (pontos between 0 and 1000),
  respondida_em timestamptz not null default now(),
  primary key (sessao_id, uid, pergunta),
  foreign key (sessao_id, uid) references public.escola_participantes(sessao_id, uid) on delete cascade
);

alter table public.escola_sessoes       enable row level security;
alter table public.escola_participantes enable row level security;
alter table public.escola_respostas     enable row level security;
revoke all on public.escola_sessoes, public.escola_participantes, public.escola_respostas from anon, authenticated;

-- Confere a chave do apresentador e devolve o id da sessão (cria na primeira vez).
create or replace function public.escola_sessao(p_sala text, p_chave text, p_deck text default 'esc', p_titulo text default null)
returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare v_id uuid; v_hash text; v_ok text;
begin
  if p_sala !~ '^[a-z0-9]{3,12}$' or length(coalesce(p_chave,'')) < 12 then
    raise exception 'sala ou chave inválida';
  end if;
  v_hash := encode(digest(p_chave, 'sha256'), 'hex');
  select id, chave_hash into v_id, v_ok from escola_sessoes where sala = p_sala;
  if v_id is null then
    insert into escola_sessoes (sala, chave_hash, deck, titulo)
    values (p_sala, v_hash, left(coalesce(p_deck,'esc'),20), left(p_titulo,120))
    on conflict (sala) do nothing
    returning id into v_id;
    if v_id is null then
      select id, chave_hash into v_id, v_ok from escola_sessoes where sala = p_sala;
    else
      return v_id;
    end if;
  end if;
  if v_ok is distinct from v_hash then
    raise exception 'chave do apresentador não confere';
  end if;
  return v_id;
end $$;

-- Grava presença e respostas em lote (o telão chama a cada poucos segundos).
-- p_participantes: [{"uid":"...","nome":"...","capitulo":"..."}]
-- p_respostas:     [{"uid":"...","q":0,"o":2,"ok":true,"ms":5400,"pts":870}]
create or replace function public.escola_salvar(p_sala text, p_chave text, p_participantes jsonb default '[]', p_respostas jsonb default '[]')
returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
declare v_id uuid;
begin
  v_id := escola_sessao(p_sala, p_chave);
  if jsonb_array_length(coalesce(p_participantes,'[]')) > 500 or jsonb_array_length(coalesce(p_respostas,'[]')) > 2000 then
    raise exception 'lote grande demais';
  end if;

  insert into escola_participantes (sessao_id, uid, nome, capitulo)
  select v_id, left(x->>'uid',16), left(btrim(x->>'nome'),60), nullif(left(btrim(coalesce(x->>'capitulo','')),60),'')
  from jsonb_array_elements(coalesce(p_participantes,'[]')) x
  where length(coalesce(x->>'uid','')) between 4 and 16 and length(btrim(coalesce(x->>'nome',''))) > 0
  on conflict (sessao_id, uid) do update set nome = excluded.nome, capitulo = excluded.capitulo;

  insert into escola_respostas (sessao_id, uid, pergunta, opcao, correta, ms, pontos)
  select v_id, left(x->>'uid',16), (x->>'q')::smallint, (x->>'o')::smallint, (x->>'ok')::boolean,
         least(greatest((x->>'ms')::int,0),600000), least(greatest((x->>'pts')::int,0),1000)
  from jsonb_array_elements(coalesce(p_respostas,'[]')) x
  where exists (select 1 from escola_participantes p where p.sessao_id = v_id and p.uid = left(x->>'uid',16))
  on conflict (sessao_id, uid, pergunta) do nothing;

  update escola_sessoes set atualizada_em = now() where id = v_id;
end $$;

-- Resultado da sala: presença + pontuação + respostas (para o relatório e para o telão retomar após recarregar).
create or replace function public.escola_resultado(p_sala text, p_chave text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare v_id uuid; v_out jsonb;
begin
  v_id := escola_sessao(p_sala, p_chave);
  select jsonb_build_object(
    'sala', s.sala, 'criada_em', s.criada_em,
    'participantes', coalesce((
      select jsonb_agg(jsonb_build_object(
        'uid', p.uid, 'nome', p.nome, 'capitulo', p.capitulo, 'entrou_em', p.entrou_em,
        'pontos', coalesce(r.pts,0), 'acertos', coalesce(r.ok,0), 'respondidas', coalesce(r.n,0))
        order by coalesce(r.pts,0) desc, p.nome)
      from escola_participantes p
      left join (select uid, sum(pontos) pts, count(*) filter (where correta) ok, count(*) n
                 from escola_respostas where sessao_id = v_id group by uid) r on r.uid = p.uid
      where p.sessao_id = v_id), '[]'::jsonb),
    'respostas', coalesce((
      select jsonb_agg(jsonb_build_object('uid', uid, 'q', pergunta, 'o', opcao, 'ok', correta, 'ms', ms, 'pts', pontos))
      from escola_respostas where sessao_id = v_id), '[]'::jsonb)
  ) into v_out
  from escola_sessoes s where s.id = v_id;
  return v_out;
end $$;

revoke all on function public.escola_sessao(text,text,text,text)   from public;
revoke all on function public.escola_salvar(text,text,jsonb,jsonb) from public;
revoke all on function public.escola_resultado(text,text)          from public;
grant execute on function public.escola_sessao(text,text,text,text)   to anon, authenticated;
grant execute on function public.escola_salvar(text,text,jsonb,jsonb) to anon, authenticated;
grant execute on function public.escola_resultado(text,text)          to anon, authenticated;

-- Faz a API do Supabase enxergar as funções na hora (sem isso pode dar "Could not find the function ... in the schema cache").
notify pgrst, 'reload schema';

-- Para desfazer:
-- drop function if exists public.escola_resultado(text,text);
-- drop function if exists public.escola_salvar(text,text,jsonb,jsonb);
-- drop function if exists public.escola_sessao(text,text,text,text);
-- drop table if exists public.escola_respostas, public.escola_participantes, public.escola_sessoes;
