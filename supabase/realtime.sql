-- Apresentações ao vivo do Templo Virtual · Supabase Realtime (Broadcast)
-- Rode uma vez no SQL Editor do projeto Supabase.
--
-- O que isto faz: libera canais PRIVADOS de broadcast cujo nome começa com
-- "templo-apres:" (ex.: templo-apres:fdj:k3m9xa) para a chave pública do site.
-- Não cria tabela e não grava nada no banco: o broadcast só passa pelo Realtime.
-- Nenhum outro canal ou tabela do projeto é afetado.

-- Receber mensagens (telão, plateia, passador e roteiro escutam o canal)
drop policy if exists "templo_apres_receber" on realtime.messages;
create policy "templo_apres_receber"
on realtime.messages
for select
to anon, authenticated
using (
  realtime.messages.extension = 'broadcast'
  and (select realtime.topic()) like 'templo-apres:%'
);

-- Enviar mensagens (comandos do passador, votos, reações e perguntas)
drop policy if exists "templo_apres_enviar" on realtime.messages;
create policy "templo_apres_enviar"
on realtime.messages
for insert
to anon, authenticated
with check (
  realtime.messages.extension = 'broadcast'
  and (select realtime.topic()) like 'templo-apres:%'
);

-- Para desfazer:
-- drop policy if exists "templo_apres_receber" on realtime.messages;
-- drop policy if exists "templo_apres_enviar"  on realtime.messages;
