# Apresentações ao vivo · Templo Virtual

Apresentações interativas do [Templo Virtual](https://www.templovirtual.app) em quatro versões: DeMolay, Filhas de Jó, Lojas Maçônicas e Estrela do Oriente.

Cada apresentação tem quatro telas que conversam entre si em tempo real:

| Tela | Onde abrir | O que faz |
|---|---|---|
| **Telão** | computador do projetor | slides, QR Code da plateia, reações, votações, laser e foco |
| **Passador** | seu celular | avançar/voltar, laser, foco, tela preta, votar, enviar tela, zerar tempo |
| **Roteiro** | notebook ou tablet | falas de cada slide, cronômetro, próximo slide e perguntas da plateia |
| **Plateia** | celular do público (via QR Code) | slide atual, links citados, votação, telas enviadas, reações e perguntas |

Os links do passador e do roteiro levam a chave do apresentador (`k=`). Sem ela, ninguém controla a apresentação.

## Publicar (GitHub Pages)

1. **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, pasta `/ (root)`.
2. O site fica em `https://pedro-bossle.github.io/apresentacao_templovirtual/`.

## Ligar no Supabase

1. No **SQL Editor** do projeto, rode [`supabase/realtime.sql`](supabase/realtime.sql). Ele só libera canais de broadcast `templo-apres:*`; não cria tabela nem grava dados.
2. Em [`config.js`](config.js), preencha a URL do projeto e a chave **pública** (`anon` ou `sb_publishable_...`). Nunca a `service_role`/`sb_secret`.
3. Faça o commit. A página inicial de cada apresentação passa a mostrar **"Modo online"**.

Sem `config.js` preenchido, tudo funciona em **modo ensaio**: telão, passador e roteiro sincronizam entre abas do mesmo navegador.

## Atalhos do telão

`→` / espaço / clique avança · `←` volta · `B` tela preta · `F` tela cheia

## Editar o conteúdo

Os slides ficam em `src/orgs/*.js` (título, tempo previsto, notas do roteiro, links citados, votação e HTML de cada slide). O visual fica em `src/template.html` e os temas por organização em `build.py`.

Depois de editar, gere os HTMLs de novo:

```bash
python3 build.py            # todas
python3 build.py fdj loja   # só algumas (odm, fdj, loja, oes)
```

Cada HTML é autossuficiente (imagens e bibliotecas embutidas). Só o `config.js` fica separado, para trocar a conexão sem gerar tudo de novo.
