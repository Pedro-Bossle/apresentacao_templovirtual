const META = { key:'loja', name:'Lojas Maçônicas', footTag:'LOJA', siteUrl:'https://loja.templovirtual.app' };

const SLIDES = [
  {
    title: 'Templo Virtual para Lojas', time: 60, links: [L.loja, L.site],
    notes: `Boa noite, meus Irmãos. Eu sou o Pedro, e junto com o Lucas Borges desenvolvo o <b>Templo Virtual</b>, que já organiza o dia a dia de capítulos DeMolay e agora tem uma versão para Lojas.
<b>Antes de começar:</b> peguem o celular e apontem a câmera pro QR Code. Vocês vão votar, reagir e receber todos os links que eu citar.
Espere o contador "na sala" subir antes de avançar.`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">TEMPLO VIRTUAL · LOJAS MAÇÔNICAS</div>
    <h1>A administração<br>da Loja num lugar <em>só</em>.</h1>
    <p class="lead">Quadro de obreiros, balaústres, frequência, tesouraria e calendário. Um projeto sob medida para a sua Loja.</p>
    <div class="byline"><b>Pedro Bossle</b> &amp; <b>Lucas Borges</b> · Caxias do Sul/RS</div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="plateia"></div><div class="qr-cap">aponte a câmera e entre na sala</div></div>
</div>`,
  },
  {
    title: 'Como a Loja se organiza hoje?', time: 75, links: [],
    vote: { q: 'Onde fica a tesouraria da Loja hoje?', opts: ['Planilha', 'Livro / caderno', 'Algum sistema', 'Não sei'] },
    notes: `Abra a votação pelo passador (botão <b>votar</b>).
Pergunte: onde fica a tesouraria da Loja hoje?
Comente o resultado ao vivo e feche a votação antes de avançar.`,
    html: `<div class="center">
  <div class="kicker">PERGUNTA RÁPIDA · VOTE PELO CELULAR</div>
  <h2 class="huge">Onde fica a tesouraria<br>da Loja <em>hoje</em>?</h2>
  <div class="vote-live" data-vote></div>
</div>`,
  },
  {
    title: 'O problema', time: 90, links: [],
    notes: `Muitas Lojas ainda dependem de uma planilha que só o Tesoureiro abre, de balaústres em arquivos soltos, do livro de presença e de um quadro de obreiros que ninguém atualiza.
<b>A cada nova administração, recomeça do zero.</b>
Pergunte quem já assumiu um cargo e precisou reconstruir o histórico.`,
    html: `<div class="split">
  <div>
    <div class="kicker">O PROBLEMA</div>
    <h2>A cada administração,<br><em>recomeça</em> do zero.</h2>
    <p class="lead">O histórico da Loja fica espalhado entre pessoas, arquivos e cadernos.</p>
  </div>
  <ul class="pains">
    <li><span>📊</span><div><b>Tesouraria numa planilha</b>que só o Tesoureiro sabe abrir</div></li>
    <li><span>📄</span><div><b>Balaústres em arquivos</b>espalhados e sem versão final</div></li>
    <li><span>📒</span><div><b>Frequência no livro</b>e o cálculo feito na mão</div></li>
    <li><span>👥</span><div><b>Quadro de obreiros</b>desatualizado, sem graus e cargos</div></li>
  </ul>
</div>`,
  },
  {
    title: 'A proposta', time: 75, links: [L.loja],
    notes: `O Templo Virtual junta tudo isso num lugar só, com um espaço próprio para Lojas: <b>loja.templovirtual.app</b>.
Cada Irmão entra com a própria conta e vê o que o cargo permite. <b>O histórico fica na Loja, não no Irmão.</b>
Funciona no navegador, no computador e no celular.`,
    html: `<div class="split">
  <div>
    <div class="kicker">A PROPOSTA</div>
    <h2>Tudo da Loja,<br>num lugar <em>só</em>.</h2>
    <p class="lead">Cada Irmão entra com a própria conta e vê o que o cargo permite. O histórico fica na Loja, não no Irmão.</p>
    <div class="chips"><span>Obreiros</span><span>Balaústres</span><span>Frequência</span><span>Tesouraria</span><span>Mensalidades</span><span>Calendário</span><span>Eventos</span></div>
    <p class="small mono">LOJA.TEMPLOVIRTUAL.APP · COMPUTADOR E CELULAR</p>
  </div>
  ${mock('Loja nº 0000 · Início', [['Próxima sessão','quinta, 20h','acc'],['Saldo do mês','R$ 4.380,00','ok'],['Obreiros no quadro','48'],['Mensalidades em aberto','6','warn'],['Aniversariantes do mês','4']])}
</div>`,
  },
  {
    title: 'Loja, cargo e escopo', time: 75, links: [L.guia],
    notes: `Três ideias explicam todo o controle de acesso.
<b>Loja:</b> toda informação pertence à Loja.
<b>Cargo:</b> o Venerável Mestre administra tudo; o Secretário cuida do quadro e dos balaústres; o Tesoureiro, do caixa.
<b>Escopo:</b> o Irmão que também atua num capítulo DeMolay ou noutra instituição escolhe onde está trabalhando.`,
    html: `<div class="center">
  <div class="kicker">COMO FUNCIONA O ACESSO</div>
  <h2>Três ideias explicam tudo.</h2>
  <div class="trio">
    <div class="card"><div class="n">01</div><h3>Loja</h3><p>Toda informação pertence à Loja. Cada Irmão só enxerga as Lojas às quais está vinculado.</p></div>
    <div class="card"><div class="n">02</div><h3>Cargo</h3><p>Venerável Mestre administra tudo. Secretário e Tesoureiro cuidam das suas áreas.</p></div>
    <div class="card"><div class="n">03</div><h3>Escopo</h3><p>Também atua num capítulo DeMolay? Escolha onde trabalhar e o menu muda junto.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Secretaria', time: 105, links: [L.guia],
    notes: `<b>Quadro de obreiros</b> com a ficha de cada Irmão: grau (Aprendiz, Companheiro, Mestre), histórico de cargos e presenças.
<b>Balaústres:</b> rascunho → em revisão → aprovado, com assinaturas e exportação em PDF.
<b>Frequência:</b> a chamada é feita na sessão e o percentual de cada Irmão se monta sozinho.
<b>Acesso:</b> a conta do Irmão é criada na própria ficha.`,
    html: `<div class="split">
  <div>
    <div class="kicker">SECRETARIA · SECRETÁRIO</div>
    <h2>Do quadro ao<br>balaústre <em>aprovado</em>.</h2>
    <ul class="ticks">
      <li><b>Quadro de obreiros</b> com grau, cargos e histórico</li>
      <li><b>Balaústres</b>: rascunho → revisão → aprovado, com PDF</li>
      <li><b>Frequência</b> na sessão, com o percentual de cada Irmão</li>
      <li><b>Acesso do Irmão</b> criado na própria ficha</li>
    </ul>
  </div>
  ${mock('Sessão ordinária · frequência', [['Ir. Antônio C. · M∴','presente','ok'],['Ir. Bruno F. · C∴','presente','ok'],['Ir. Carlos D. · M∴','ausente · justificou','warn'],['Ir. Diego S. · A∴','presente','ok'],['Frequência da sessão','86%','acc']])}
</div>`,
  },
  {
    title: 'Tesouraria', time: 110, links: [L.guia],
    notes: `<b>Livro-caixa</b> com categorias e a possibilidade de criar as da Loja. Cada evento pode virar uma subcategoria.
<b>Mensalidade paga vira lançamento no caixa sozinha.</b> Desfez o pagamento? O lançamento sai junto.
<b>Cobrança dos atrasados</b> com a mensagem pronta no WhatsApp e o PIX da Loja.
Importação e exportação em planilha, e relatório em PDF com logo e página de assinaturas para a prestação de contas.`,
    html: `<div class="split">
  <div>
    <div class="kicker">TESOURARIA · TESOUREIRO</div>
    <h2>Prestação de contas<br>em <em>um clique</em>.</h2>
    <ul class="ticks">
      <li><b>Livro-caixa</b> com categorias e subcategorias por evento</li>
      <li><b>Mensalidade paga</b> entra no caixa sozinha</li>
      <li><b>Cobrança dos atrasados</b> pronta no WhatsApp, com o PIX</li>
      <li><b>Relatório em PDF</b> com logo e assinaturas</li>
    </ul>
  </div>
  ${mock('Fluxo de caixa · este mês', [['Mensalidades (42)','+ R$ 3.780,00','ok'],['Jantar ritualístico · adesões','+ R$ 1.150,00','ok'],['Jantar ritualístico · despesas','− R$ 890,00','bad'],['Conta de luz do templo','− R$ 312,40','bad'],['Saldo do período','R$ 3.727,60','acc']])}
</div>`,
  },
  {
    title: 'Calendário, eventos e hospitalaria', time: 100, links: [L.guia],
    notes: `<b>Calendário</b> com sessões, sessões magnas, eventos e filantropia, cada um com local, traje e se é obrigatório. Vai pro Google Agenda, Outlook ou celular com um clique, e a convocação sai pronta para o grupo.
<b>Eventos:</b> ingressos com QR Code, mapa de mesas, comanda virtual e check-in pela câmera.
<b>Hospitalaria:</b> cardápios com custo estimado e escala de serviço, o que ajuda o Tesoureiro a planejar.`,
    html: `<div class="split">
  <div>
    <div class="kicker">GESTÃO, EVENTOS E HOSPITALARIA</div>
    <h2>A convocação<br>sai <em>pronta</em>.</h2>
    <ul class="ticks">
      <li><b>Calendário</b> com sessões, traje, local e obrigatoriedade</li>
      <li><b>Google Agenda, Outlook</b> ou celular com um clique</li>
      <li><b>Eventos</b> com ingresso QR Code, mesas e check-in</li>
      <li><b>Hospitalaria</b> com cardápio, custo e escala</li>
    </ul>
  </div>
  <div class="mini-cards">
    <div><b>Sessão ordinária</b>Quinta, 20h · Templo · traje escuro · presença obrigatória</div>
    <div><b>Sessão magna de iniciação</b>Sábado, 19h · aberta a Irmãos visitantes</div>
    <div><b>Jantar beneficente</b>120 lugares · mapa de mesas · check-in pela câmera</div>
  </div>
</div>`,
  },
  {
    title: 'Sob medida', time: 90, links: [L.loja],
    notes: `Para Lojas, o Templo Virtual é um <b>projeto sob medida</b>: a gente conversa com a administração, entende o rito, a Potência e a rotina da Loja, e escolhe junto os módulos.
O orçamento é feito depois dessa conversa, de acordo com os módulos.
Pergunte: o que mais toma tempo da administração hoje?`,
    html: `<div class="center">
  <div class="kicker">PROJETO SOB MEDIDA</div>
  <h2>Sua Loja escolhe os <em>módulos</em>.</h2>
  <ol class="road four">
    <li class="now"><i>1</i><b>Conversa com a administração</b><span>rotina, rito e Potência</span></li>
    <li><i>2</i><b>Escolha dos módulos</b><span>o que a Loja precisa</span></li>
    <li><i>3</i><b>Orçamento</b><span>conforme os módulos</span></li>
    <li><i>4</i><b>Implantação</b><span>cadastro e treinamento</span></li>
  </ol>
</div>`,
  },
  {
    title: 'Cuidado com os dados', time: 80, links: [L.doc],
    notes: `Os dados dos Irmãos e das famílias são tratados com rigor.
<b>CPF e RG ficam cifrados no banco.</b> Mesmo quem tem acesso direto ao banco não consegue ler.
Na tela aparecem só os dois últimos dígitos, e ver o documento completo é uma ação deliberada e registrada.`,
    html: `<div class="split">
  <div>
    <div class="kicker">PROTEÇÃO DE DADOS · LGPD</div>
    <h2>Os dados do quadro,<br>tratados com <em>rigor</em>.</h2>
    <p class="lead">Quem tem acesso direto ao banco também não consegue ler os documentos.</p>
  </div>
  <div class="lock">
    <div class="doc-line"><span>CPF</span><b>•••.•••.•••-<em>42</em></b></div>
    <div class="doc-line"><span>RG</span><b>••••••••<em>17</em></b></div>
    <ul class="ticks tight">
      <li><b>Cifrados</b> no banco de dados</li>
      <li><b>Mascarados</b> na tela</li>
      <li><b>Revelar</b> é uma ação registrada</li>
      <li><b>Acesso por cargo</b>, sempre</li>
    </ul>
  </div>
</div>`,
  },
  {
    title: 'A Loja e as paramaçônicas', time: 70, links: [L.odm, L.fdj],
    notes: `Muitas Lojas patrocinam um capítulo DeMolay ou um Bethel. Para essas organizações o Templo Virtual é <b>gratuito</b>.
Com tudo na mesma plataforma, a Loja acompanha de perto os jovens que patrocina, e o Irmão que atua nos dois lugares usa uma conta só.
Se a Loja ainda não tem o capítulo ou o Bethel no sistema, a gente ajuda a incluir.`,
    html: `<div class="center">
  <div class="kicker">UMA PLATAFORMA, TODA A FAMÍLIA</div>
  <h2>A Loja e as paramaçônicas<br>que ela <em>patrocina</em>.</h2>
  <div class="orgs">
    <div class="org"><img src="${IMG.loja}" alt="Emblema maçônico"><h3>Loja</h3><p>Projeto sob medida</p><span class="mono">loja.templovirtual.app</span></div>
    <div class="org"><img src="${IMG.odm}" alt="Emblema DeMolay"><h3>Ordem DeMolay</h3><p>Gratuito para o capítulo</p><span class="mono">odm.templovirtual.app</span></div>
    <div class="org"><img src="${IMG.fdj}" alt="Emblema Filhas de Jó"><h3>Filhas de Jó</h3><p>Gratuito para o Bethel</p><span class="mono">fdj.templovirtual.app</span></div>
  </div>
</div>`,
  },
  {
    title: 'Como começar', time: 75, links: [L.loja, L.site],
    vote: { q: 'A Loja tem interesse em uma proposta?', opts: ['👍 Sim', '🤔 Quero ver uma demonstração', '👎 Agora não'] },
    notes: `Quatro passos:
1. Uma conversa com a administração (Venerável Mestre, Secretário e Tesoureiro).
2. Escolha dos módulos.
3. Orçamento sob medida.
4. Implantação: cadastro do Venerável Mestre, do quadro e do calendário.
Abra a última votação: <b>a Loja tem interesse em uma proposta?</b>`,
    html: `<div class="split">
  <div>
    <div class="kicker">COMO COMEÇAR</div>
    <h2>Quatro passos.</h2>
    <ol class="steps">
      <li><b>Conversa</b> com o Venerável Mestre, o Secretário e o Tesoureiro</li>
      <li><b>Escolha dos módulos</b> que a Loja precisa</li>
      <li><b>Orçamento</b> sob medida</li>
      <li><b>Implantação</b> com o quadro e o calendário</li>
    </ol>
  </div>
  <div class="vote-side"><div class="kicker">VOTE PELO CELULAR</div><h3>A Loja tem interesse numa proposta?</h3><div class="vote-live" data-vote></div></div>
</div>`,
  },
  {
    title: 'Obrigado', time: 120, links: [L.loja, L.site, L.doc],
    notes: `Agradeça e abra para perguntas. As perguntas enviadas pela plateia aparecem aqui no roteiro.
Pedro Bossle: pedro.bossle.s@gmail.com · Lucas Borges: lucasboeiraborges@gmail.com`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">OBRIGADO, MEUS IRMÃOS</div>
    <h1>Perguntas?</h1>
    <p class="lead">Mande pelo celular ou levante a mão. Todos os links desta apresentação continuam no seu celular.</p>
    <div class="contacts">
      <div><b>Pedro Bossle</b><span>programador e cofundador</span><span class="mono">pedro.bossle.s@gmail.com</span></div>
      <div><b>Lucas Borges</b><span>programador e cofundador</span><span class="mono">lucasboeiraborges@gmail.com</span></div>
    </div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="site"></div><div class="qr-cap">loja.templovirtual.app</div></div>
</div>`,
  },
];
