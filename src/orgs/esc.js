const META = {
  key:'esc', name:'Escola de Iniciáticos', brand:'Escola de Iniciáticos', host:'ORDEM DEMOLAY',
  footTag:'LINHA DO TEMPO', siteUrl:'https://www.templovirtual.app',
  names:true,   // plateia entra com nome (lista de presença)
  db:true,      // grava presença e quiz nas tabelas escola_* do Supabase do Templo Virtual
  quizAuto:3,   // a pergunta abre sozinha 3 s depois de o slide entrar (o passador ainda pode encerrar antes)
  emojis:['👏','❤️','🔥','🤯'],
};
// Escola de Iniciáticos · Ordem DeMolay · Linha do Tempo
// Cada slide: título, tempo previsto (s), notas do roteiro, links (vão pro celular da plateia),
// votação opcional (vote), quiz opcional (quiz) e o HTML do slide (1600×900).
// quiz: { q, opts:[4], ok:índice da certa, t:segundos, exp:explicação mostrada no fim }

const E = {
  livro:  { t: 'Os Cavaleiros da Távola Redonda · leitura recomendada', u: 'https://drive.google.com/file/d/1Esbade7Ln29byv0pMJDHQQg1wthjYQ61/view?usp=drive_link' },
  sinuca: { t: 'Vídeo · Mansur na sinuca', u: 'https://www.youtube.com/watch?v=RY_o06dIJok' },
  discurso: { t: 'Vídeo · Discurso do Tio Mansur', u: 'https://www.youtube.com/watch?v=Ln0Bq0EoXVE' },
};

// Ano atual lido do dispositivo (o telão/celular), para a linha do tempo não ficar presa a um ano fixo.
const ANO = new Date().getFullYear();

// Ícones de traço (SVG), na cor do tema, no lugar dos emojis de exemplo.
const svg = d => `<svg class="ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICON = {
  espadas: svg('<path d="M10 10l20 20M30 30l-4 4M30 30l4-4M28 32l6 6M8 8l4 1 17 17-3 3L9 12z"/><path d="M38 10L18 30M18 30l4 4M18 30l-4-4M20 32l-6 6M40 8l-4 1-17 17 3 3 17-17z"/>'),
  globo: svg('<circle cx="24" cy="24" r="16"/><path d="M8 24h32M24 8c5 4.5 7 10 7 16s-2 11.5-7 16c-5-4.5-7-10-7-16s2-11.5 7-16z"/>'),
  globoPin: svg('<circle cx="22" cy="26" r="14"/><path d="M8 26h28M22 12c4 4 6 9 6 14s-2 10-6 14c-4-4-6-9-6-14s2-10 6-14z"/><path d="M38 6a5 5 0 0 1 5 5c0 4-5 9-5 9s-5-5-5-9a5 5 0 0 1 5-5z" fill="currentColor" stroke="none"/>'),
  jornal: svg('<rect x="8" y="10" width="26" height="30" rx="3"/><path d="M34 18h6v18a4 4 0 0 1-4 4H12"/><path d="M14 17h14M14 23h14M14 29h8M14 34h8"/><rect x="24" y="28" width="5" height="6"/>'),
  escudo: svg('<path d="M24 6l15 5v11c0 10-7 17-15 20C16 39 9 32 9 22V11z"/><path d="M17 17l14 14M31 17L17 31"/>'),
  escola: svg('<path d="M4 18l20-9 20 9-20 9z"/><path d="M12 22v10c0 3 5 6 12 6s12-3 12-6V22M44 18v12"/>'),
};
const pic = (k, cls='') => `<img class="pic ${cls}" src="${IMG[k]}" alt="">`;
const photo = (k, w, h, cap='', pos='center top') => `<figure class="photo" style="--w:${w}px;--h:${h}px"><div class="frame"><img src="${IMG[k]}" alt="" style="object-position:${pos}"></div>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
const chap = (n, t) => `<div class="chap"><span>CAPÍTULO ${n}</span>${t}</div>`;
const EXTRA = `<div class="extra">EXTRA</div>`;
// Ficha de personagem: foto, nome, nascimento e falecimento
const bio = (k, nome, nasc, lnasc, mor, lmor, w=340, h=420, pos='center top') => `<figure class="bio" style="--w:${w}px;--h:${h}px"><img src="${IMG[k]}" alt="" style="object-position:${pos}"><figcaption><b>${nome}</b>
  <span>★ ${nasc} · ${lnasc}</span><span>✝ ${mor} · ${lmor}</span></figcaption></figure>`;
const quote = (txt, who) => `<blockquote class="quote">“${txt}”${who ? `<cite>${who}</cite>` : ''}</blockquote>`;
// Linha do tempo: [ano, rótulo, ícone (IMG) ou emoji]
const timeline = (items, cls='') => `<ol class="tl ${cls}">${items.map(([y, t, ic], k) =>
  `<li style="--d:${k * 90}ms"><i class="${ICON[ic] ? 'is-ico' : ''}">${IMG[ic] ? `<img src="${IMG[ic]}" alt="">` : (ICON[ic] || ic)}</i><b>${y}</b><span>${t}</span></li>`).join('')}</ol>`;

const SLIDES = [
  /* ============ ABERTURA ============ */
  {
    title: 'Escola de Iniciáticos', time: 75, links: [],
    notes: `Boa noite! Bem-vindos à <b>Escola de Iniciáticos</b>.
<b>Antes de começar:</b> peguem o celular e apontem a câmera pro QR Code. Coloquem o nome (e o capítulo): isso já é a <b>lista de presença</b> de hoje e também o nome de vocês no ranking do quiz do final.
Hoje a gente vai percorrer a linha do tempo da Ordem DeMolay: dos Templários, em 1119, até a Escola de Iniciáticos, em ${ANO}.
Espere o contador "na sala" subir antes de avançar.`,
    html: `<div class="cover esc-cover">
  <div class="cover-l">
    <div class="kicker">ESCOLA DE INICIÁTICOS</div>
    <h1>Ordem<br><em>DeMolay</em></h1>
    <p class="lead">A linha do tempo da Ordem: dos Templários a ${ANO}, passando por nove garotos, um homem e a chegada ao Brasil.</p>
    <div class="faces">${['c_land','c_marshall','c_molay','c_lower','c_mansur'].map(k => `<img src="${IMG[k]}" alt="">`).join('')}</div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="plateia"></div><div class="qr-cap">entre na sala e marque presença</div></div>
</div>`,
  },
  {
    title: 'Quanto você já conhece?', time: 75, links: [],
    vote: { q: 'Quanto você já conhecia da história da Ordem?', opts: ['Quase nada', 'Só o nome DeMolay', 'Sabia do Frank Land', 'Conheço bem'] },
    notes: `Abra a votação pelo passador (botão <b>votar</b>).
Pergunte: quanto vocês já conheciam da história da Ordem antes de entrar?
Comente o resultado. Se "quase nada" ganhar, ótimo: é exatamente pra isso que existe a Escola. Feche a votação antes de avançar.`,
    html: `<div class="center">
  <div class="kicker">PERGUNTA RÁPIDA · VOTE PELO CELULAR</div>
  <h2 class="huge">Quanto você já conhecia<br>da história da <em>Ordem</em>?</h2>
  <div class="vote-live" data-vote></div>
</div>`,
  },
  {
    title: 'Linha do tempo', time: 120, links: [],
    notes: `Esta é a nossa linha do tempo, e cada ponto dela é um capítulo da aula.
<b>1119 a 1314:</b> os Templários, de onde vem a inspiração do nome.
<b>1914 a 1919:</b> a Primeira Guerra e a fundação da Ordem DeMolay, em Kansas City.
<b>1979 a 1985:</b> a chegada ao Brasil, a primeira iniciação no Capítulo Rio de Janeiro nº 1 e o primeiro Supremo Conselho brasileiro.
<b>2001 a 2019:</b> o Pergaminho de Chinon, a divisão e a unificação dos Supremos.
<b>${ANO}:</b> nós, aqui, na Escola de Iniciáticos.
Use o botão <b>enviar tela</b> do passador: a linha do tempo vai pro celular de todos, para acompanharem.`,
    html: `<div class="center" style="justify-content:flex-start">
  <div class="kicker">LINHA DO TEMPO</div>
  <h2>De <em>1119</em> a <em>${ANO}</em>.</h2>
  ${timeline([
    ['1119','Criação dos Templários','selo'], ['1307','Captura templária','molay_cena'], ['1314','Fim dos Templários','placa'],
    ['1914','1ª Guerra Mundial','espadas'], ['1919','Fundação da Ordem DeMolay','e1919'], ['1979','DeMolays no Brasil','brasil'],
    ['1980','1ª iniciação brasileira · RJ nº 01','rj1_emb'], ['1985','Fundação do SCODB','scodb'], ['2001','Pergaminho de Chinon','pergaminho'],
    ['2004','Fundação do SCODRFB','scodrfb'], ['2019','Unificação dos Supremos','scdb'], [String(ANO),'Escola de Iniciáticos','escola'],
  ], 'big')}
</div>`,
  },

  /* ============ CAPÍTULO 1 ============ */
  {
    title: 'Cap. 1 · O fundador', time: 120, links: [],
    notes: `A história da Ordem DeMolay está diretamente ligada à de seu fundador, <b>Frank Sherman Land</b>.
Nascido em <b>21 de junho de 1890</b>, tinha fortes raízes religiosas e uma capacidade rara de inspirar grandes aspirações e organizar ideias.
Amante das artes, estudou no Instituto de Artes de Kansas City, onde conheceu a futura esposa, Nell.
Ainda criança, em Saint Louis, conduzia cultos religiosos para outras crianças no porão de casa.
Em 1911, aos 21 anos, recebeu da avó o desejo do falecido avô: vê-lo ingressar na Maçonaria. Com a indicação de dois fregueses do seu restaurante, foi iniciado em <b>24 de maio de 1912</b>, na <b>Loja Ivanhoe nº 446</b>, de Kansas City, e logo se tornou um dos membros mais atuantes.
Frase dele para guardar: <b>"O começo é o mais importante."</b>`,
    html: `${chap(1, 'O início de tudo')}<div class="split esc-split">
  ${bio('land', 'Frank Sherman Land', '21/06/1890', 'Kansas City, EUA', '08/11/1959', 'Kansas City, EUA')}
  <div>
    <div class="kicker">O FUNDADOR</div>
    <h2>Um garoto que<br>organizava <em>ideias</em>.</h2>
    <ul class="ticks tight">
      <li>Conduzia cultos para outras crianças <b>no porão de casa</b></li>
      <li>Estudou artes em Kansas City, onde conheceu <b>Nell</b>, sua esposa</li>
      <li>Iniciado na Maçonaria em <b>24/05/1912</b>, na Loja Ivanhoe nº 446</li>
    </ul>
    ${quote('O começo é o mais importante.', 'Frank Sherman Land')}
  </div>
</div>`,
  },
  {
    title: 'Cap. 1 · A Maçonaria e a guerra', time: 105, links: [],
    notes: `Sobre a Maçonaria, a biografia dele diz: <b>"tocava um acorde acolhedor"</b>. Era um meio de expressar o amor fraternal, a compaixão pelos que estavam com problemas e o desejo de mudar o homem.
Em <b>1914</b>, recebeu o convite para ser <b>Secretário da Comissão de Assistência do Rito Escocês</b> de Kansas City. Isso mudou a vida dele.
Na Primeira Guerra, a Comissão distribuiu alimentos, mantimentos e roupas às famílias atingidas e trabalhou na geração de empregos: segundo os registros, <b>cerca de 16 mil empregos até 1923</b>.
Esse idealismo, somado anos depois a um jovem com quem ele se identificou profundamente, levou à decisão de fundar uma organização que reunisse jovens dispostos a fazer a diferença por meio de princípios morais.`,
    html: `${chap(1, 'O início de tudo')}<div class="split esc-split">
  <div>
    <div class="kicker">1914 · COMISSÃO DE ASSISTÊNCIA DO RITO ESCOCÊS</div>
    <div class="bignum">16 mil</div>
    <p class="lead">empregos gerados até 1923, além de comida, mantimentos e roupas para as famílias atingidas pela Primeira Guerra.</p>
    ${quote('A Maçonaria tocava um acorde acolhedor. Parecia alguma coisa que estava instintivamente procurando.')}
  </div>
  ${photo('carta', 600, 400, '', 'center')}
</div>`,
  },
  {
    title: 'Cap. 1 · Depois da guerra', time: 75, links: [],
    notes: `Depois da Primeira Guerra, o país vivia um clima de <b>tensão, luto e incerteza</b>.
Muitos jovens tinham sido mandados para as trincheiras. Ao voltar, encontravam um futuro indefinido. Muitos precisavam de orientação e apoio de um adulto, ainda mais os que não tinham mais os pais.
Foi nesse cenário que o caminho de Frank Land cruzou com o de um desses jovens…
(O vitral ao lado diz "I do so promise and vow": "Assim, prometo e juro".)`,
    html: `<div class="split esc-split">
  <div>
    <div class="kicker">O PRIMEIRO DEMOLAY</div>
    <h2>Tensão, luto<br>e <em>incerteza</em>.</h2>
    <p class="lead">Jovens voltando das trincheiras, sem rumo e, muitos, sem os pais. Faltava quem os orientasse.</p>
    <p class="lead" style="font-style:italic">Foi nesse cenário que o tempo cruzaria o caminho de Frank Land com um desses jovens…</p>
  </div>
  ${photo('vitral', 470, 550, '“I do so promise and vow” · Assim, prometo e juro', 'center')}
</div>`,
  },
  {
    title: 'Cap. 1 · Louis Gordon Lower', time: 120, links: [],
    notes: `<b>Louis Gordon Lower</b> nasceu em <b>2 de fevereiro de 1902</b>, filho mais velho de um contador e de uma enfermeira.
Autoconfiante, assumia responsabilidades nas situações difíceis, principalmente em casa. Idealista, proativo e atento: qualidades que chamaram a atenção de Land.
O pai, Elmer E. Lower, morreu após uma infecção na perna, causada por um acidente numa caçada. A mãe, enfermeira-chefe do Hospital Geral, não conseguia sustentar sozinha os quatro filhos, e Louis foi atrás do primeiro emprego.
Assim conheceu <b>Sam Freet</b>, da Loja Ivanhoe, que procurou Frank Land para ajudar o rapaz.
O encontro foi amistoso. Ao apertar a mão de Louis, Frank pensou: <b>"Se eu tivesse um filho, eu gostaria que ele fosse como esse rapaz."</b>`,
    html: `${chap(1, 'O início de tudo')}<div class="split esc-split">
  ${bio('lower', 'Louis Gordon Lower', '02/02/1902', 'Kansas City, EUA', '18/07/1943', 'Kansas City, EUA', 320, 400)}
  <div>
    <div class="kicker">O PRIMEIRO DEMOLAY</div>
    <h2>O filho que Land<br><em>não teve</em>.</h2>
    <ul class="ticks tight">
      <li>Perdeu o pai cedo e foi trabalhar para <b>ajudar a mãe e os irmãos</b></li>
      <li><b>Sam Freet</b>, da Loja Ivanhoe, o apresentou a Frank Land</li>
      <li>Idealista, proativo e atento: <b>afinidade imediata</b></li>
    </ul>
    ${quote('Se eu tivesse um filho, eu gostaria que ele fosse como esse rapaz.', 'Frank Sherman Land, ao conhecer Louis')}
  </div>
</div>`,
  },

  /* ============ CAPÍTULO 2 ============ */
  {
    title: 'Cap. 2 · Nove garotos e um homem', time: 120, links: [],
    notes: `Consolidado como um dos principais prestadores de serviço de Kansas City, Land queria apoiar os jovens que perderam os pais na guerra.
Procurou líderes da cidade para orientá-los, mas faltava tempo a esses mentores. Daí veio a ideia de uma <b>associação para reunir os garotos</b>.
Em <b>19 de fevereiro de 1919</b>, Louis Gordon Lower e oito amigos foram à Loja. Conheceram os templos do edifício e ficaram encantados.
Land sentou com eles e apresentou o projeto. Os garotos adoraram e logo começaram a discutir o novo grupo.
Leia os nove nomes em voz alta, devagar.`,
    html: `${chap(2, 'A fundação')}<div class="split esc-split">
  <div>
    <div class="kicker">19 DE FEVEREIRO DE 1919</div>
    <h2>Nove garotos<br>e <em>um homem</em>.</h2>
    <div class="nine">${['Louis G. Lower','Ralph Sewell','Elmer Dorsey','Edmund Marshall','Jerome Jacobson','William Steinhilber','Ivan Betley','Gorman McBride','Clyde Stream'].map((n,k)=>`<span><i>${k+1}</i>${n}</span>`).join('')}</div>
  </div>
  <figure class="emb-hero">${pic('e1919')}</figure>
</div>`,
  },
  {
    title: 'Extra · As pérolas e os rubis', time: 105, links: [],
    notes: `Ao longo dos anos, o emblema passou por várias mudanças: formato do escudo, cores e outros elementos heráldicos.
O que nunca mudou foram as <b>nove pedras</b> no escudo. No começo eram <b>pérolas</b>, em homenagem aos nove DeMolays originais e a Frank Land. Conforme esses membros faleceram, as pérolas viraram <b>rubis</b>, em sinal de respeito à memória deles.
Repare também nas espadas do terceiro emblema, viradas para cima. Na heráldica, espadas erguidas costumam representar participação ativa em guerras; voltadas para baixo, períodos de paz.`,
    html: `${EXTRA}<div class="center" style="justify-content:flex-start">
  <div class="kicker">AS PÉROLAS E OS RUBIS</div>
  <h2>Nove pedras que <em>nunca saíram</em> do escudo.</h2>
  <div class="embs">
    <figure>${pic('e1919')}<figcaption>1919</figcaption></figure>
    <figure>${pic('e1920')}<figcaption>1920 – 1931</figcaption></figure>
    <figure>${pic('e1932')}<figcaption>1932 – 1948 <small>espadas para cima</small></figcaption></figure>
    <figure>${pic('e1949')}<figcaption>1949 – 2001</figcaption></figure>
  </div>
  <p class="lead" style="max-width:1150px">Pérolas pelos nove DeMolays originais e por Frank Land. Com o falecimento deles, viraram <b>rubis</b>, em respeito à sua memória.</p>
</div>`,
  },
  {
    title: 'Cap. 2 · A inspiração por trás do nome', time: 120, links: [],
    vote: { q: 'Que nome você teria escolhido?', opts: ['Sir Galahad', 'Cavaleiros da Távola Redonda', 'DeMolay', 'Outro nome'] },
    notes: `Faltava um nome. Land sugeriu nomes da cavalaria medieval, como <b>Sir Galahad</b> e os <b>Cavaleiros da Távola Redonda</b>, mas os garotos não aceitaram.
A busca levou semanas, até que ele contou a história de <b>Jacques de Molay</b>, último Grão-Mestre dos Templários, morto em <b>18 de março de 1314</b> por não revelar o paradeiro dos companheiros nem entregar as riquezas da Ordem. Os garotos se encantaram.
Em meio ao luto da guerra, um homem que preferiu guardar a honra diante de uma morte injusta era a inspiração certa.
Em <b>24 de março de 1919</b> era fundado o <b>"Conselho DeMolay"</b>.
Abra a votação: que nome eles teriam escolhido? Feche antes de avançar.`,
    html: `${chap(2, 'A fundação')}<div class="split esc-split">
  ${photo('molay', 340, 470, 'Jacques de Molay · último Grão-Mestre templário', 'center top')}
  <div>
    <div class="kicker">JACQUES DE MOLAY · ÚLTIMO GRÃO-MESTRE TEMPLÁRIO</div>
    <h2>24/03/1919:<br>nasce o <em>Conselho DeMolay</em>.</h2>
    <p class="lead" style="font-size:26px">Morto em 18/03/1314 por não trair os companheiros. Os garotos recusaram Sir Galahad e a Távola Redonda e escolheram ele.</p>
    <div class="vote-side"><b style="font-size:26px">E você, que nome teria escolhido?</b><div class="vote-live" data-vote></div></div>
  </div>
</div>`,
  },
  {
    title: 'Extra · Os Templários', time: 150, links: [],
    notes: `Um passeio rápido pela história dos Templários:
<b>1119:</b> Hugo de Payens e mais oito cavaleiros. Missão: proteger os peregrinos a caminho da Terra Santa. Uma ordem monástica.
<b>1129:</b> o Concílio de Troyes reconhece oficialmente a Ordem (Bernardo de Claraval e o Papa Honório II): autonomia e autoridade.
<b>1189:</b> Cerco de Acre, vitória templária.
<b>1291:</b> novo Cerco de Acre, agora derrota. Morre Guillaume de Beaujeu, a Terra Santa se perde e a Ordem foge para Chipre.
<b>1298</b> (como está no material): morre Teobaldo Gaudin; disputa entre Jacques de Molay e Hugo de Pairaud; De Molay vira Grão-Mestre.
<b>1305:</b> Clemente V é eleito Papa: o Rei e o Papa.
<b>1307:</b> captura dos Templários na França e no exterior, com falsas acusações.
<b>1314:</b> julgamento final. Morrem Clemente V (20/04) e Filipe IV (29/11). A bula Vox in Excelso é de 1312.
<b>1319:</b> D. Dinis I de Portugal cria a Ordem de Cristo (bula Ad ea ex quibus).
<b>2001:</b> é encontrado o Pergaminho de Chinon.`,
    html: `${EXTRA}<div class="center" style="justify-content:flex-start">
  <div class="kicker">OS TEMPLÁRIOS</div>
  <h2>Dois séculos de <em>cavalaria</em>.</h2>
  ${timeline([
    ['1119','Hugo de Payens + 8 cavaleiros protegem os peregrinos','selo'],
    ['1129','Concílio de Troyes reconhece a Ordem','bernardo'],
    ['1189','Cerco de Acre: vitória','cruzada'],
    ['1291','Cerco de Acre: derrota e fuga para Chipre','escudo'],
    ['1298','Jacques de Molay vira Grão-Mestre','c_molay'],
    ['1305','Clemente V eleito: o Rei e o Papa','clemente'],
    ['1307','Captura templária e falsas acusações','filipe'],
    ['1314','Julgamento final','placa'],
    ['1319','D. Dinis I cria a Ordem de Cristo','dinis'],
    ['2001','Pergaminho de Chinon','pergaminho'],
  ], 'mid')}
</div>`,
  },
  {
    title: 'Extra · Sir Galahad e a Távola Redonda', time: 75, links: [E.livro],
    notes: `<b>Sir Galahad</b> foi um dos cavaleiros da corte do Rei Arthur, membro da Távola Redonda, símbolo de igualdade entre os cavaleiros de Camelot.
Filho de Sir Lancelot, era conhecido pela pureza, coragem e lealdade: o mais virtuoso dos cavaleiros.
Segundo as lendas, foi o único digno de completar a busca pelo <b>Santo Graal</b>. Sua história simboliza honra, fé e perfeição moral.
<b>Recomendação de leitura:</b> "Os Cavaleiros da Távola Redonda" (Contos Arturianos). Leitura indicada para o Comendador da Cavalaria e o Cavaleiro da Grã-Cruz da Cavalaria.
O link do livro já está no celular de todos.`,
    html: `${EXTRA}<div class="split esc-split">
  <div>
    <div class="kicker">SIR GALAHAD E OS CAVALEIROS DA TÁVOLA REDONDA</div>
    <h2>O mais virtuoso<br>dos <em>cavaleiros</em>.</h2>
    <ul class="ticks tight">
      <li>Filho de <b>Sir Lancelot</b>, da corte do Rei Arthur</li>
      <li>Pureza, coragem e lealdade</li>
      <li>O único digno de completar a busca pelo <b>Santo Graal</b></li>
    </ul>
    <p class="small" style="margin-top:26px">Leitura recomendada para o Comendador e o Cavaleiro da Grã-Cruz da Cavalaria. <b>O link está no seu celular.</b></p>
  </div>
  ${photo('livro', 310, 476, 'Os Cavaleiros da Távola Redonda', 'center')}
</div>`,
  },
  {
    title: 'Cap. 2 · Frank Arthur Marshall e o Ritual', time: 120, links: [],
    notes: `Nos anos 30, perguntaram a Frank Land numa entrevista de rádio o que diferenciava a Ordem DeMolay das outras organizações juvenis. Resposta instantânea: <b>"Ela tem um Ritual."</b>
Nos primeiros meses a fraternidade já se destacava pelos esportes, ações sociais e serviço à comunidade. Mas faltava algo que desse identidade única.
A resposta foi <b>Frank Arthur Marshall</b>, da Loja Ivanhoe, conhecido pelo talento ritualístico. Relutou no começo, mas entendeu a importância do projeto e se dedicou a escrever os ritos.
Pelo Ritual, os membros transmitem ideais e virtudes de forma única, com um juramento pessoal e muito estímulo à expressividade.
Em <b>27 de setembro de 1919</b>, o Grau Iniciático e o Grau DeMolay foram executados pela primeira vez, com grande sucesso.`,
    html: `${chap(2, 'A fundação')}<div class="split esc-split">
  ${bio('marshall', 'Frank Arthur Marshall', '13/11/1865', 'Leavenworth, EUA', '24/03/1931', 'Kansas City, EUA', 300, 362)}
  <div>
    <div class="kicker">O AUTOR DO RITUAL</div>
    <h2>“Ela tem<br>um <em>Ritual</em>.”</h2>
    <p class="lead" style="font-size:27px">Para Frank Land, era isso que diferenciava a Ordem DeMolay de qualquer outra organização juvenil.</p>
    <div class="date-card"><b>27/09/1919</b><span>Primeira execução do <b>Grau Iniciático</b> e do <b>Grau DeMolay</b></span></div>
  </div>
</div>`,
  },

  /* ============ CAPÍTULO 3 ============ */
  {
    title: 'Cap. 3 · O sonho perpetua', time: 120, links: [],
    notes: `A Ordem cresceu rápido. O que começou com nove jovens virou um movimento com milhares de membros.
Em <b>1924</b>, cinco anos depois da fundação, já estava em quase todos os estados americanos e no Canadá. Depois, outros continentes: <b>Austrália em 1959</b>, <b>Japão e Alemanha em 1960</b> e o <b>Brasil a partir de 1979</b>.
Costuma-se dizer que a história de Frank Land é a história da Ordem. Conhecido como <b>"Dad" Land</b>, virou figura paterna para milhares de jovens e milhões que nunca conheceu.
Presidentes, congressistas, juízes e militares do seu círculo se tornaram colaboradores. Na foto, de 1934, Franklin D. Roosevelt, 32º Presidente dos EUA, recebe de Land o título de Grande Mestre Honorário.`,
    html: `${chap(3, 'Expansão')}<div class="split esc-split">
  <div>
    <div class="kicker">“DAD” LAND</div>
    <h2>De nove jovens<br>a <em>milhões</em>.</h2>
    ${timeline([['1924','EUA e Canadá','e1920'],['1959','Austrália','globoPin'],['1960','Japão e Alemanha','globo'],['1979','Brasil','brasil']], 'small')}
  </div>
  ${photo('roosevelt', 640, 478, 'Franklin D. Roosevelt recebe de Frank Land o título de Grande Mestre Honorário (1934)', 'center')}
</div>`,
  },
  {
    title: 'Cap. 3 · A despedida', time: 120, links: [],
    notes: `<b>Nell Land</b>, a esposa, é peça importantíssima dessa jornada. Apoiou em silêncio o marido, que muitas vezes rodou o país divulgando a Ordem. A saudade era grande, mas saber que ele estava numa missão pela juventude a confortava.
Frank Sherman Land faleceu em <b>8 de novembro de 1959</b>, aos 69 anos. Nunca foi pai, mas inúmeros rapazes do mundo o tiveram como um.
No leito de morte, com a esposa e a irmã, disse suas últimas palavras: <b>"É só o começo."</b>
Leia a citação do slide com calma. Use o <b>foco</b> do passador se quiser destacar a última frase.`,
    html: `${chap(3, 'Expansão')}<div class="split esc-split">
  ${photo('land_velho', 340, 430, 'Frank S. Land · 1890 – 1959', 'center top')}
  <div>
    <div class="kicker">08/11/1959 · ÚLTIMAS PALAVRAS</div>
    <h2 class="huge">“É só o <em>começo</em>.”</h2>
    <blockquote class="quote long">Se trabalharmos sobre o mármore, um dia ele acabará. Se trabalharmos sobre o metal, um dia o tempo o consumirá. Se erguermos templos, um dia se tornarão pó. Mas se trabalharmos sobre almas jovens e imortais […], o mundo poderá ser diferente, talvez porque fomos importantes na vida dos jovens.<cite>Frank Sherman Land</cite></blockquote>
  </div>
</div>`,
  },

  /* ============ CAPÍTULO 4 ============ */
  {
    title: 'Cap. 4 · O precursor', time: 75, links: [], cls: 'br',
    notes: `Em <b>7 de setembro de 1822</b>, às margens do Ipiranga, Dom Pedro I proclamava a Independência do Brasil: força e bravura para conduzir um país independente.
Exatos <b>100 anos depois</b>, em <b>7 de setembro de 1922</b>, nascia um garoto chamado <b>Alberto Mansur</b>, descendente de libaneses, que anos mais tarde traria uma grande oportunidade de mudança para a juventude brasileira…`,
    html: `${chap(4, 'No Brasil')}<div class="center">
  <div class="kicker">O PRECURSOR</div>
  <div class="twin"><div><b>07/09/1822</b><span>Independência do Brasil</span></div><i>+100 anos</i><div><b>07/09/1922</b><span>nasce Alberto Mansur</span></div></div>
  <p class="lead" style="max-width:1000px">Um garoto descendente de libaneses que traria uma grande oportunidade de mudança para a juventude brasileira.</p>
</div>`,
  },
  {
    title: 'Cap. 4 · Alberto Mansur', time: 120, links: [], cls: 'br',
    notes: `Alberto Mansur tinha um talento especial para negócios: vendedor, herdou os negócios do pai. Percepção aguçada para lidar com pessoas, curioso e estudioso dos mais variados temas.
Entre os clientes, conheceu <b>Chaia Chainferber</b>, da Loja Maçônica <b>Perfeita União</b>, de Valença (RJ).
Sem saber, Chaia tomou uma das decisões mais importantes da história da Maçonaria no Brasil: propôs o nome de Alberto Mansur para iniciação na sua Loja.
Leia a frase dele: <b>"Nós não queremos de vocês Super Heróis… queremos homens simples, pondo em prática essas sete virtudes. Nós poderemos mudar o Mundo!"</b>`,
    html: `${chap(4, 'No Brasil')}<div class="split esc-split">
  ${bio('mansur', 'Alberto Mansur', '07/09/1922', 'Vargem Alegre, RJ', '17/07/2012', 'Rio de Janeiro, RJ', 360, 420, '50% 20%')}
  <div>
    <div class="kicker">ALBERTO MANSUR</div>
    <h2>Homens simples,<br><em>sete virtudes</em>.</h2>
    <p class="lead" style="font-size:26px">Vendedor e estudioso, foi proposto para a Maçonaria por um cliente: <b>Chaia Chainferber</b>, da Loja Perfeita União, de Valença (RJ).</p>
    ${quote('Não queremos de vocês Super Heróis, Super Homens… queremos homens simples, pondo em prática essas sete virtudes extraordinárias. Nós poderemos mudar o Mundo!', 'Alberto Mansur')}
  </div>
</div>`,
  },
  {
    title: 'Cap. 4 · Família maçônica', time: 105, links: [], cls: 'br',
    notes: `No século XX a Maçonaria brasileira viveu uma era de conquistas internas, e Alberto Mansur foi um dos protagonistas.
No <b>Supremo Conselho do Grau 33</b> do Rito Escocês Antigo e Aceito, mudou o modo de tratar a Maçonaria, permitindo que muitos maçons chegassem até o Grau 33.
Chegou a <b>Soberano Grande Comendador</b>, o cargo mais alto da instituição, com acesso à Maçonaria do mundo todo.
Nos Estados Unidos percebeu que a Maçonaria envolvia <b>a família inteira</b>: homens na Ordem Maçônica, mulheres na Estrela do Oriente, filhas nas Filhas de Jó e jovens na Ordem DeMolay.
Quis trazer esse modelo ao Brasil: o que ele chamava de <b>"congraçamento da família maçônica"</b>.`,
    html: `${chap(4, 'No Brasil')}<div class="split esc-split">
  <div>
    <div class="kicker">SOBERANO GRANDE COMENDADOR</div>
    <h2>O “congraçamento da<br><em>família maçônica</em>”.</h2>
    <div class="fam"><div><b>Homens</b>Ordem Maçônica</div><div><b>Mulheres</b>Estrela do Oriente</div><div><b>Filhas</b>Filhas de Jó</div><div class="me"><b>Jovens</b>Ordem DeMolay</div></div>
  </div>
  ${photo('mansur2', 380, 500, 'Alberto Mansur', 'center top')}
</div>`,
  },
  {
    title: 'Cap. 4 · A Ordem chega ao Brasil', time: 120, links: [], cls: 'br',
    notes: `Em <b>1969</b>, Mansur leu no jornal The New Age uma matéria sobre os 50 anos da Ordem DeMolay. Passou cerca de <b>10 anos</b> tentando contato com o Supremo Conselho Internacional, sem sucesso.
Em <b>1979</b>, numa visita aos EUA, conseguiu se reunir com o Grande Mestre Internacional <b>C. C. Faulkner Jr.</b> Visitou a sede em Kansas City, recebeu autorização e voltou como <b>Oficial Executivo</b>, responsável pela instalação da Ordem no país.
Em <b>16 de agosto de 1980</b>, na sede do Supremo Conselho do Grau 33, <b>59 jovens</b> se tornaram os primeiros DeMolays do Brasil, iniciados no <b>Capítulo Rio de Janeiro nº 1</b>, o primeiro do Brasil e da América Latina.
A foto é da instalação da 92ª gestão do Capítulo Rio de Janeiro nº 01, em 31/01/2026.`,
    html: `${chap(4, 'No Brasil')}<div class="split esc-split">
  <div>
    <div class="kicker">A ORDEM DEMOLAY CHEGA AO BRASIL</div>
    ${timeline([['1969','Mansur lê sobre a Ordem no The New Age','jornal'],['1979','Autorização em Kansas City: Oficial Executivo','e1949'],['1980','59 jovens iniciados no Capítulo RJ nº 1','rj1_emb']], 'small')}
    <div class="date-card"><b>16/08/1980</b><span>Primeira iniciação: o 1º capítulo do Brasil e da América Latina</span></div>
  </div>
  ${photo('rj1', 640, 410, 'Instalação da 92ª gestão do Capítulo Rio de Janeiro nº 01 · 31/01/2026', 'center')}
</div>`,
  },

  /* ============ CAPÍTULO 5 ============ */
  {
    title: 'Cap. 5 · Supremos', time: 120, links: [], cls: 'br',
    notes: `Depois de 16/08/1980, a Ordem cresceu rápido no Brasil, e Mansur quis um <b>Supremo Conselho nacional</b>, com mais autonomia.
O combinado com o Supremo Conselho Internacional: com <b>25 capítulos</b>, o Brasil poderia fundar o seu. Em 1985, com a fundação do Capítulo nº 26, a meta foi batida.
Em <b>12 de abril de 1985</b>, no Rio, Mansur recebeu a Carta Constitutiva do <b>SCODB</b> (Supremo Conselho da Ordem DeMolay para o Brasil) e foi seu primeiro Grande Mestre, até 2004.
Entre 1999 e 2004, divergências internas geraram a crise conhecida como <b>"a divisão da Ordem DeMolay brasileira"</b>.
Em <b>6 de julho de 2004</b> foi fundado o <b>SCODRFB</b> (para a República Federativa do Brasil), com Carta entregue pelo Grande Mestre Internacional Greg L. Kimberling, em agosto, em Brasília.`,
    html: `${chap(5, 'Supremos')}<div class="center" style="justify-content:flex-start">
  <div class="kicker">A DIVISÃO DA ORDEM DEMOLAY BRASILEIRA</div>
  <h2>25 capítulos, <em>dois</em> Supremos.</h2>
  <div class="sup">
    <figure>${pic('scodb')}<figcaption><b>SCODB</b><span>12/04/1985 · Mansur, 1º Grande Mestre</span></figcaption></figure>
    <div class="sup-mid"><b>1999 – 2004</b><span>a divisão</span></div>
    <figure>${pic('scodrfb')}<figcaption><b>SCODRFB</b><span>06/07/2004 · carta de Greg L. Kimberling</span></figcaption></figure>
  </div>
</div>`,
  },
  {
    title: 'Cap. 5 · A unificação', time: 120, links: [], cls: 'br',
    notes: `Por anos, os dois Supremos coexistiram. Centenas de homens buscaram convergência no meio de divergências políticas, institucionais e até pessoais.
O desfecho só veio em <b>2019</b>, justamente quando a Ordem completava <b>100 anos</b>.
O bom momento da Maçonaria brasileira levou à última tratativa. Sentaram à mesa o <b>GOB</b>, a <b>CMSB</b>, a <b>COMAB</b>, a <b>DeMolay International</b>, o <b>SCODRFB</b> e o <b>SCODB</b>. Foram meses de articulação, "onde paixões foram vencidas e divergências superadas".
Em <b>8 de dezembro de 2019</b>, em Brasília, no Centro Nacional de Liderança DeMolay, foi celebrado o <b>Tratado de Unificação</b>, criando o <b>Supremo Conselho DeMolay Brasil (SCDB)</b> como única instituição a administrar a Ordem no país.
Ótimo slide para pedir reações 👏.`,
    html: `${chap(5, 'Supremos')}<div class="split esc-split">
  <figure class="emb-hero">${pic('scdb')}</figure>
  <div>
    <div class="kicker">08/12/2019 · BRASÍLIA · 100 ANOS DA ORDEM</div>
    <h2>Um só Supremo:<br>o <em>SCDB</em>.</h2>
    <p class="lead" style="font-size:26px">O Tratado de Unificação pôs fim aos anos de divisão. Na mesa:</p>
    <div class="chips"><span>GOB</span><span>CMSB</span><span>COMAB</span><span>DeMolay International</span><span>SCODRFB</span><span>SCODB</span></div>
  </div>
</div>`,
  },
  {
    title: 'Extra · Outros momentos de Mansur', time: 60, links: [E.discurso, E.sinuca], cls: 'br',
    notes: `Para fechar a parte histórica, dois vídeos do Tio Mansur: um discurso e um momento descontraído na sinuca.
Os dois links já estão no celular de todos. Se der tempo, passe um trecho do discurso.
A foto é de Mansur com a corte Chevalier.`,
    html: `${EXTRA}<div class="split esc-split">
  ${photo('chevalier', 640, 426, 'Mansur e a corte Chevalier', 'center')}
  <div>
    <div class="kicker">OUTROS MOMENTOS DE ALBERTO MANSUR</div>
    <h2>O “Tio <em>Mansur</em>”.</h2>
    <div class="vids"><div><span>▶</span><b>Discurso do Tio Mansur</b></div><div><span>▶</span><b>Mansur na sinuca</b></div></div>
    <p class="small" style="margin-top:20px">Os dois vídeos estão no seu celular.</p>
  </div>
</div>`,
  },

  /* ============ FIXAÇÃO DE CONTEÚDO ============ */
  {
    title: 'Fixação de conteúdo', time: 60, links: [],
    notes: `Agora é a <b>fixação de conteúdo</b>: um quiz de 10 perguntas, valendo ranking.
Quem ainda não colocou o nome no celular, coloque agora. Sem nome não dá para responder.
Regras: cada pergunta abre por <b>20 segundos</b>. Acertou, ganha de 500 a 1000 pontos: <b>quanto mais rápido, mais pontos</b>. Errou, zero.
Cada pergunta <b>abre sozinha</b> 3 segundos depois de entrar no slide. Leia em voz alta, espere o tempo acabar (ou todos responderem) e comente a resposta certa. O botão <b>encerrar</b> do passador fecha antes, se precisar.`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">FIXAÇÃO DE CONTEÚDO</div>
    <h1>Hora do<br><em>quiz</em>.</h1>
    <ul class="ticks tight">
      <li><b>10 perguntas</b>, 20 segundos cada, pelo celular</li>
      <li>Acertou: <b>500 a 1000 pontos</b>. Quanto mais rápido, mais pontos</li>
      <li>Coloque seu <b>nome</b> no celular para entrar no ranking</li>
    </ul>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="plateia"></div><div class="qr-cap">ainda não entrou? escaneie</div></div>
</div>`,
  },
  ...[
    { q:'Quem foi o primeiro DeMolay?', opts:['Frank Arthur Marshall','Louis Gordon Lower','Ralph Sewell','Sam Freet'], ok:1,
      exp:'<b>Louis Gordon Lower</b>, apresentado a Frank Land por Sam Freet, da Loja Ivanhoe.' },
    { q:'Em que data foi fundado o “Conselho DeMolay”?', opts:['19/02/1919','24/03/1919','27/09/1919','16/08/1980'], ok:1,
      exp:'<b>24 de março de 1919.</b> Em 19/02 foi o primeiro encontro dos garotos; em 27/09, a primeira execução do Ritual.' },
    { q:'Quem era Jacques de Molay?', opts:['O fundador da Ordem DeMolay','O primeiro Grande Mestre do SCODB','O último Grão-Mestre dos Templários','Um cavaleiro da Távola Redonda'], ok:2,
      exp:'O <b>último Grão-Mestre dos Templários</b>, morto em 18/03/1314 por não trair os companheiros.' },
    { q:'Que nomes os garotos recusaram antes de escolher “DeMolay”?', opts:['Sir Galahad e a Távola Redonda','Hugo de Payens e Acre','Ivanhoe e Kansas City','Nenhum: DeMolay foi a primeira ideia'], ok:0,
      exp:'Land sugeriu <b>Sir Galahad</b> e os <b>Cavaleiros da Távola Redonda</b>; a busca levou semanas.' },
    { q:'Quem escreveu o Ritual DeMolay?', opts:['Frank Sherman Land','Alberto Mansur','Louis Gordon Lower','Frank Arthur Marshall'], ok:3,
      exp:'<b>Frank Arthur Marshall</b>, da Loja Ivanhoe. Para Land, o Ritual é o que diferencia a Ordem.' },
    { q:'Por que as pérolas do emblema viraram rubis?', opts:['Pela cor da bandeira americana','Em respeito à memória dos membros originais falecidos','Porque o emblema ganhou espadas','Por causa da Segunda Guerra'], ok:1,
      exp:'As nove pedras homenageiam os <b>DeMolays originais e Frank Land</b>; com o falecimento deles, viraram rubis.' },
    { q:'Quais foram as últimas palavras de Frank Land?', opts:['“O começo é o mais importante”','“Assim, prometo e juro”','“É só o começo”','“Ela tem um Ritual”'], ok:2,
      exp:'<b>“É só o começo”</b>, em 8 de novembro de 1959. “O começo é o mais importante” também é dele, mas não foi a última frase.' },
    { q:'Quantos jovens foram iniciados na 1ª iniciação no Brasil, em 16/08/1980?', opts:['9','25','59','100'], ok:2,
      exp:'<b>59 jovens</b>, no Capítulo Rio de Janeiro nº 1, o primeiro do Brasil e da América Latina.' },
    { q:'Quem foi o primeiro Grande Mestre do SCODB, em 1985?', opts:['Alberto Mansur','C. C. Faulkner Jr.','Greg L. Kimberling','Chaia Chainferber'], ok:0,
      exp:'<b>Alberto Mansur</b>, que ficou no cargo até 2004.' },
    { q:'Qual instituição administra a Ordem no Brasil desde 2019?', opts:['SCODB','SCODRFB','SCDB','GOB'], ok:2,
      exp:'O <b>Supremo Conselho DeMolay Brasil (SCDB)</b>, criado pelo Tratado de Unificação de 08/12/2019.' },
  ].map((quiz, k) => ({
    title: `Quiz ${k+1} · ${quiz.q.replace(/[“”]/g,'"')}`, time: 45, links: [], quiz: { t: 20, ...quiz },
    notes: `A pergunta <b>abre sozinha</b> em 3 segundos. Leia em voz alta.
Ela fecha em 20 segundos, ou quando todos responderem (o <b>encerrar</b> do passador fecha antes).
<b>Resposta certa: ${['A','B','C','D'][quiz.ok]}) ${quiz.opts[quiz.ok]}</b>
${quiz.exp}`,
  })),
  {
    title: 'Ranking', time: 90, links: [E.livro, E.discurso],
    notes: `O ranking final da turma, ao vivo.
Chame os três primeiros pelo nome e puxe os aplausos 👏.
As notas e a presença ficam salvas: na página inicial da apresentação, em <b>Presença e notas do quiz</b>, dá para ver a turma e baixar a planilha.`,
    html: `<div class="center" style="justify-content:flex-start">
  <div class="kicker">FIXAÇÃO DE CONTEÚDO · RANKING</div>
  <h2>Quem mais <em>fixou</em>.</h2>
  <div class="rank" data-rank="8"></div>
</div>`,
  },
  {
    title: 'É só o começo', time: 60, links: [E.livro, E.discurso, E.sinuca],
    notes: `Encerramento.
Lembre a frase do fundador: <b>"É só o começo."</b> A história da Ordem continua com cada um de vocês.
O PDF da aula aparece agora no celular de todos, com as respostas do quiz marcadas, para estudar depois.
Agradeça a presença.`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">ESCOLA DE INICIÁTICOS · ORDEM DEMOLAY</div>
    <h1>É só o<br><em>começo</em>.</h1>
    <p class="lead">A história da Ordem continua com você. O PDF desta aula, com as respostas do quiz, já está no seu celular.</p>
  </div>
  <div class="cover-r"><figure class="emb-hero end">${pic('emblema')}</figure></div>
</div>`,
  },
];
