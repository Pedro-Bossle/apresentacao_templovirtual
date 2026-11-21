# Apresentações ao vivo · Templo Virtual

Apresentações interativas do [Templo Virtual](https://www.templovirtual.app) em quatro versões: DeMolay, Filhas de Jó, Lojas Maçônicas e Estrela do Oriente. Extra: a aula da **Escola de Iniciáticos** (Ordem DeMolay · linha do tempo), com presença e quiz.

Cada apresentação tem quatro telas que conversam entre si em tempo real:

| Tela | Onde abrir | O que faz |
|---|---|---|
| **Telão** | computador do projetor | slides, QR Code da plateia, reações, votações, laser e foco |
| **Passador** | seu celular | avançar/voltar, laser, foco, tela preta, votar, enviar tela, zerar tempo |
| **Roteiro** | notebook ou tablet | falas de cada slide, cronômetro, próximo slide e perguntas da plateia |
| **Plateia** | celular do público (via QR Code) | slide atual, links citados, votação, telas enviadas, reações, perguntas e, no fim, o PDF |

Os links do passador e do roteiro levam a chave do apresentador (`k=`). Sem ela, ninguém controla a apresentação.

## Extra: Escola de Iniciáticos

[`escola-de-iniciaticos.html`](escola-de-iniciaticos.html) é a aula **Ordem DeMolay · Linha do tempo** da Escola de Iniciáticos, no mesmo formato (telão, passador, roteiro e plateia), com três recursos a mais:

- **Lista de presença:** ao entrar pelo QR Code, cada pessoa informa nome e capítulo (opcional).
- **Quiz de fixação ao vivo:** 10 perguntas de 20 segundos no fim da aula (substitui o Blooket). No passador, o botão vira **abrir quiz**; a pergunta fecha sozinha quando acaba o tempo ou todos respondem. Quem acerta ganha de 500 a 1000 pontos, conforme a rapidez. O telão mostra o resultado e a explicação, e o celular de cada um diz se acertou e a posição.
- **Ranking e relatório:** slide de ranking ao vivo e, na página inicial da sala, **Presença e notas do quiz**, com a turma e o botão para baixar a planilha (CSV).

A presença e as respostas ficam no **mesmo Supabase do Templo Virtual**, em tabelas separadas (`escola_sessoes`, `escola_participantes`, `escola_respostas`). Para ligar, rode [`supabase/escola.sql`](supabase/escola.sql) no SQL Editor (depois do `realtime.sql`). As tabelas não têm acesso direto pela chave pública: tudo passa por três funções que exigem a chave do apresentador. Se o telão for recarregado no meio da aula, ele retoma presença e pontuação do banco. Sem o SQL aplicado, o quiz funciona igual, só não fica salvo.

Conteúdo em `src/orgs/esc.js` (slides, notas e perguntas), visual em `src/orgs/esc.css` e imagens em `src/img/esc/`.

## Publicar (GitHub Pages)

1. **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, pasta `/ (root)`.
2. O site fica em `https://pedro-bossle.github.io/apresentacao_templovirtual/`.

## Ligar no Supabase

1. No **SQL Editor** do projeto, rode [`supabase/realtime.sql`](supabase/realtime.sql). Ele só libera canais de broadcast `templo-apres:*`; não cria tabela nem grava dados.
2. Em [`config.js`](config.js), preencha a URL do projeto e a chave **pública** (`anon` ou `sb_publishable_...`). Nunca a `service_role`/`sb_secret`.
3. Faça o commit. A página inicial de cada apresentação passa a mostrar **"Modo online"**.

Sem `config.js` preenchido, tudo funciona em **modo ensaio**: telão, passador e roteiro sincronizam entre abas do mesmo navegador.

## No celular

- **Passador:** deslize para os lados (fora da miniatura do slide) para avançar ou voltar. Toque duplo não pula dois slides, a tela não apaga durante a apresentação e puxar para baixo não recarrega a página.
- **Plateia:** o celular vibra e mostra um aviso quando abre uma votação ou chega uma tela enviada. Quando a apresentação chega ao último slide, aparece o botão **Baixar em PDF** no topo.
- Nada é selecionável com toque longo (exceto o campo de pergunta), para não atrapalhar os toques.

## Atalhos do telão

`→` / espaço / clique avança · `←` volta · `B` tela preta · `F` tela cheia

## Editar o conteúdo

Os slides ficam em `src/orgs/*.js` (título, tempo previsto, notas do roteiro, links citados, votação, quiz e HTML de cada slide). O visual fica em `src/template.html` e os temas por organização em `build.py`.

Depois de editar, gere os HTMLs e os PDFs de novo:

```bash
python3 build.py            # HTMLs: todas (ou: python3 build.py fdj loja)
python3 render_pdf.py       # PDFs que a plateia baixa no fim (precisa do Playwright)
```

Para o `render_pdf.py`: `pip install playwright && python3 -m playwright install chromium`.

Cada HTML é autossuficiente (imagens e bibliotecas embutidas). Só o `config.js` fica separado, para trocar a conexão sem gerar tudo de novo.
