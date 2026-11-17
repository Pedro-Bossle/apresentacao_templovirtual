const META = { key:'oes', name:'Estrela do Oriente', footTag:'ESTRELA DO ORIENTE', siteUrl:'https://www.templovirtual.app' };

const SLIDES = [
  {
    title: 'Templo Virtual para a Estrela do Oriente', time: 60, links: [L.site],
    notes: `Boa noite. Eu sou o Pedro, e junto com o Lucas Borges desenvolvo o <b>Templo Virtual</b>, que já organiza o dia a dia de capítulos DeMolay e de Bethéis das Filhas de Jó.
Hoje a ideia é mostrar como ele pode servir aos Capítulos da <b>Ordem da Estrela do Oriente</b>, e ouvir de vocês o que precisa ser adaptado.
<b>Antes de começar:</b> peguem o celular e apontem a câmera pro QR Code. Vocês vão votar, reagir e receber todos os links.`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">TEMPLO VIRTUAL · ORDEM DA ESTRELA DO ORIENTE</div>
    <h1>A gestão do Capítulo<br>num lugar <em>só</em>.</h1>
    <p class="lead">Irmãs e Irmãos, atas, presenças, tesouraria e calendário, num sistema que funciona no celular.</p>
    <div class="byline"><b>Pedro Bossle</b> &amp; <b>Lucas Borges</b> · Caxias do Sul/RS</div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="plateia"></div><div class="qr-cap">aponte a câmera e entre na sala</div></div>
</div>`,
  },
  {
    title: 'Como o Capítulo se organiza hoje?', time: 75, links: [],
    vote: { q: 'Onde fica a tesouraria do seu Capítulo hoje?', opts: ['Planilha', 'Caderno / livro', 'Algum sistema', 'Não sei'] },
    notes: `Abra a votação pelo passador (botão <b>votar</b>).
Pergunte: onde fica a tesouraria do Capítulo hoje?
Comente o resultado ao vivo e feche a votação antes de avançar.`,
    html: `<div class="center">
  <div class="kicker">PERGUNTA RÁPIDA · VOTE PELO CELULAR</div>
  <h2 class="huge">Onde fica a tesouraria<br>do seu Capítulo <em>hoje</em>?</h2>
  <div class="vote-live" data-vote></div>
</div>`,
  },
  {
    title: 'O problema', time: 85, links: [],
    notes: `A realidade de muitos Capítulos: a planilha que só a Tesoureira abre, as atas em arquivos soltos, a lista de Irmãs e Irmãos no WhatsApp e a presença anotada no livro.
<b>Funciona, até a gestão mudar.</b> A nova Digna Matriarca começa procurando o que a anterior deixou.`,
    html: `<div class="split">
  <div>
    <div class="kicker">O PROBLEMA</div>
    <h2>Funciona.<br>Até a gestão <em>mudar</em>.</h2>
    <p class="lead">Cada nova gestão começa procurando o que a anterior deixou.</p>
  </div>
  <ul class="pains">
    <li><span>📊</span><div><b>Tesouraria numa planilha</b>que só a Tesoureira sabe abrir</div></li>
    <li><span>📄</span><div><b>Atas em arquivos</b>espalhados por drives e celulares</div></li>
    <li><span>💬</span><div><b>Membros no WhatsApp</b>sem histórico de cargos e presenças</div></li>
    <li><span>📒</span><div><b>Presença no livro</b>e a frequência calculada na mão</div></li>
  </ul>
</div>`,
  },
  {
    title: 'A proposta', time: 75, links: [L.site],
    notes: `O Templo Virtual junta tudo isso num lugar só. Cada Irmã e cada Irmão entra com a própria conta e vê o que o cargo permite.
<b>O histórico fica no Capítulo, não na pessoa.</b>
Funciona no navegador, no computador e no celular. Não precisa instalar nada.`,
    html: `<div class="split">
  <div>
    <div class="kicker">A PROPOSTA</div>
    <h2>Tudo do Capítulo,<br>num lugar <em>só</em>.</h2>
    <p class="lead">Cada membro entra com a própria conta e vê o que o cargo permite. O histórico fica no Capítulo, não na pessoa.</p>
    <div class="chips"><span>Irmãs e Irmãos</span><span>Atas</span><span>Presenças</span><span>Tesouraria</span><span>Mensalidades</span><span>Calendário</span><span>Eventos</span></div>
    <p class="small mono">NAVEGADOR · COMPUTADOR E CELULAR · SEM INSTALAR NADA</p>
  </div>
  ${mock('Capítulo nº 00 · Início', [['Próxima reunião','terça, 20h','acc'],['Saldo do mês','R$ 2.150,00','ok'],['Membros ativos','27'],['Mensalidades em aberto','3','warn'],['Aniversariantes do mês','2']])}
</div>`,
  },
  {
    title: 'Capítulo, cargo e escopo', time: 75, links: [L.guia],
    notes: `Três ideias explicam todo o controle de acesso.
<b>Capítulo:</b> toda informação pertence ao Capítulo.
<b>Cargo:</b> a Digna Matriarca e o Digno Patriarca acompanham tudo; a Secretária cuida das atas e do cadastro; a Tesoureira, do caixa.
<b>Escopo:</b> quem também atua numa Loja ou num Bethel escolhe onde está trabalhando, e o menu muda junto.`,
    html: `<div class="center">
  <div class="kicker">COMO FUNCIONA O ACESSO</div>
  <h2>Três ideias explicam tudo.</h2>
  <div class="trio">
    <div class="card"><div class="n">01</div><h3>Capítulo</h3><p>Toda informação pertence ao Capítulo. Cada membro só enxerga os Capítulos aos quais está vinculado.</p></div>
    <div class="card"><div class="n">02</div><h3>Cargo</h3><p>Digna Matriarca e Digno Patriarca acompanham tudo. Secretária e Tesoureira cuidam das suas áreas.</p></div>
    <div class="card"><div class="n">03</div><h3>Escopo</h3><p>Também atua numa Loja ou num Bethel? Escolha onde trabalhar e o menu muda junto.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Secretaria', time: 100, links: [L.guia],
    notes: `<b>Cadastro</b> de cada Irmã e Irmão, com histórico de cargos e presenças.
<b>Atas:</b> rascunho → em revisão → aprovada, com assinaturas e exportação em PDF. No rascunho dá para compartilhar uma visão pública com link e senha.
<b>Chamada:</b> feita na reunião, e a frequência de cada membro se monta sozinha.
<b>Acesso:</b> a conta é criada na própria ficha.`,
    html: `<div class="split">
  <div>
    <div class="kicker">SECRETARIA · SECRETÁRIA</div>
    <h2>Da ficha à<br>ata <em>aprovada</em>.</h2>
    <ul class="ticks">
      <li><b>Cadastro</b> de Irmãs e Irmãos, com cargos e histórico</li>
      <li><b>Atas</b>: rascunho → revisão → aprovada, com PDF</li>
      <li><b>Consulta pública</b> da ata por link e senha</li>
      <li><b>Chamada</b> na reunião, e a frequência se monta sozinha</li>
    </ul>
  </div>
  ${mock('Reunião ordinária · presenças', [['Ir. Ana M.','presente','ok'],['Ir. Beatriz C.','presente','ok'],['Ir. Carlos R.','presente','ok'],['Ir. Denise L.','ausente · justificou','warn'],['Frequência da reunião','92%','acc']])}
</div>`,
  },
  {
    title: 'Tesouraria', time: 105, links: [L.guia],
    notes: `<b>Livro-caixa</b> com categorias e subcategorias por evento: dá para saber quanto entrou e saiu de cada um.
<b>Mensalidade paga vira lançamento no caixa sozinha.</b> Desfez o pagamento? O lançamento sai junto.
<b>Cobrança</b> com a mensagem pronta no WhatsApp e o PIX do Capítulo.
Relatório em PDF com logo e assinaturas, para a prestação de contas.`,
    html: `<div class="split">
  <div>
    <div class="kicker">TESOURARIA · TESOUREIRA</div>
    <h2>Mensalidade paga<br>entra no caixa <em>sozinha</em>.</h2>
    <ul class="ticks">
      <li><b>Livro-caixa</b> com categorias e subcategorias por evento</li>
      <li><b>Mensalidades</b> do mês geradas de uma vez</li>
      <li><b>Cobrança</b> pronta no WhatsApp, com o PIX do Capítulo</li>
      <li><b>Relatório em PDF</b> com logo e assinaturas</li>
    </ul>
  </div>
  ${mock('Fluxo de caixa · este mês', [['Mensalidades (24)','+ R$ 1.440,00','ok'],['Bazar beneficente','+ R$ 980,00','ok'],['Doação à filantropia','− R$ 500,00','bad'],['Material do bazar','− R$ 146,90','bad'],['Saldo do período','R$ 1.773,10','acc']])}
</div>`,
  },
  {
    title: 'Calendário e eventos', time: 95, links: [L.guia],
    notes: `<b>Calendário</b> com reuniões, iniciações, eventos e filantropia, cada um com local, traje e se é obrigatório. Vai pro Google Agenda, Outlook ou celular com um clique, e a convocação sai pronta para o grupo.
<b>Eventos:</b> ingressos com QR Code enviados por e-mail, mapa de mesas, comanda virtual e check-in pela câmera do celular.
<b>Cargos por gestão</b>, com o histórico preservado.`,
    html: `<div class="split">
  <div>
    <div class="kicker">CALENDÁRIO E EVENTOS</div>
    <h2>A convocação<br>sai <em>pronta</em>.</h2>
    <ul class="ticks">
      <li><b>Calendário</b> com local, traje e obrigatoriedade</li>
      <li><b>Google Agenda, Outlook</b> ou celular com um clique</li>
      <li><b>Ingressos com QR Code</b>, mapa de mesas e comanda</li>
      <li><b>Cargos por gestão</b>, com histórico</li>
    </ul>
  </div>
  <div class="mini-cards">
    <div><b>Reunião ordinária</b>Terça, 20h · Sala Capitular · presença obrigatória</div>
    <div><b>Cerimônia de iniciação</b>Sábado, 17h · aberta a membros visitantes</div>
    <div><b>Bazar beneficente</b>Domingo · arrecadação para a filantropia</div>
  </div>
</div>`,
  },
  {
    title: 'Cuidado com os dados', time: 75, links: [L.doc],
    notes: `Os dados das Irmãs, dos Irmãos e das famílias são tratados com rigor.
<b>CPF e RG ficam cifrados no banco.</b> Mesmo quem tem acesso direto ao banco não consegue ler.
Na tela aparecem só os dois últimos dígitos, e ver o documento completo é uma ação deliberada e registrada.`,
    html: `<div class="split">
  <div>
    <div class="kicker">PROTEÇÃO DE DADOS · LGPD</div>
    <h2>Os dados do Capítulo,<br>tratados com <em>rigor</em>.</h2>
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
    title: 'Uma plataforma para a família', time: 70, links: [L.odm, L.fdj, L.loja],
    notes: `A Estrela do Oriente caminha junto com a Maçonaria e apoia as Filhas de Jó. O Templo Virtual já atende capítulos DeMolay, tem espaço para Bethéis e para Lojas.
Com o Capítulo na mesma plataforma, <b>quem atua em mais de uma instituição usa uma conta só</b>, e o Capítulo acompanha de perto o Bethel que apoia.`,
    html: `<div class="split">
  <div>
    <div class="kicker">UMA PLATAFORMA, TODA A FAMÍLIA</div>
    <h2>O Capítulo ao lado<br>da Loja e do <em>Bethel</em>.</h2>
    <p class="lead">Quem atua em mais de uma instituição usa uma conta só.</p>
    <div class="chips"><span>Lojas</span><span>Filhas de Jó</span><span>DeMolay</span><span>Estrela do Oriente</span></div>
  </div>
  <div class="star-wrap">${STAR5(420)}</div>
</div>`,
  },
  {
    title: 'Construído com vocês', time: 90, links: [L.site],
    notes: `Seja transparente: <b>o módulo da Estrela do Oriente ainda não existe pronto</b>. A base (secretaria, tesouraria, calendário, eventos e proteção de dados) já funciona; o que muda são cargos, termos e algumas regras.
A proposta é construir junto: entender a rotina do Capítulo, adaptar cargos e termos, rodar um piloto num Capítulo e depois expandir.
Pergunte: o que mais toma tempo da gestão hoje?`,
    html: `<div class="center">
  <div class="kicker">PRÓXIMOS PASSOS</div>
  <h2>A base está pronta.<br>A adaptação, a gente faz <em>com vocês</em>.</h2>
  <ol class="road four">
    <li class="done"><i>✓</i><b>Base do sistema</b><span>já em uso</span></li>
    <li class="now"><i>●</i><b>Entender a rotina do Capítulo</b><span>agora</span></li>
    <li><i>3</i><b>Adaptar cargos e termos</b><span>próximo</span></li>
    <li><i>4</i><b>Piloto num Capítulo</b><span>depois</span></li>
  </ol>
</div>`,
  },
  {
    title: 'Quanto custa', time: 70, links: [L.repo],
    notes: `<b>Confirme antes de apresentar:</b> o site diz que o Templo Virtual é gratuito para organizações paramaçônicas. Se isso vale também para a Estrela do Oriente, mantenha o R$ 0,00.
O código é aberto: qualquer um pode ler, sugerir e contribuir.
Quem quiser ajudar a manter o servidor no ar pode doar via Pix: pix@templovirtual.com.br.`,
    html: `<div class="split">
  <div>
    <div class="kicker">QUANTO CUSTA</div>
    <div class="price">R$ 0<small>,00</small></div>
    <p class="lead">para organizações paramaçônicas, com acesso completo.</p>
  </div>
  <div class="stack">
    <div class="card"><h3>Código aberto</h3><p>Licença AGPL-3.0. O repositório é público e aceita contribuições.</p></div>
    <div class="card gold"><h3>Apoie o projeto</h3><p>Pix: <b class="mono">pix@templovirtual.com.br</b><br>Sem cadastro e sem valor mínimo. Cobre servidor, domínio, backups e mensagens.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Como começar', time: 75, links: [L.site],
    vote: { q: 'Seu Capítulo toparia ser o piloto?', opts: ['👍 Topa', '🤔 Quero saber mais', '👎 Agora não'] },
    notes: `Quatro passos:
1. Uma conversa com a Digna Matriarca, a Secretária e a Tesoureira.
2. Ajuste dos cargos e termos do Capítulo.
3. Cadastro dos membros e do calendário.
4. Uso no dia a dia e sugestões de melhoria.
Abra a última votação: <b>seu Capítulo toparia ser o piloto?</b>`,
    html: `<div class="split">
  <div>
    <div class="kicker">COMO COMEÇAR</div>
    <h2>Quatro passos.</h2>
    <ol class="steps">
      <li><b>Conversa</b> com a Digna Matriarca, a Secretária e a Tesoureira</li>
      <li><b>Ajuste</b> dos cargos e termos do Capítulo</li>
      <li><b>Cadastro</b> dos membros e do calendário</li>
      <li><b>Uso no dia a dia</b> e sugestões de melhoria</li>
    </ol>
  </div>
  <div class="vote-side"><div class="kicker">VOTE PELO CELULAR</div><h3>Seu Capítulo toparia ser o piloto?</h3><div class="vote-live" data-vote></div></div>
</div>`,
  },
  {
    title: 'Obrigado', time: 120, links: [L.site, L.doc],
    notes: `Agradeça e abra para perguntas. As perguntas enviadas pela plateia aparecem aqui no roteiro.
Pedro Bossle: pedro.bossle.s@gmail.com · Lucas Borges: lucasboeiraborges@gmail.com`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">OBRIGADO</div>
    <h1>Perguntas?</h1>
    <p class="lead">Mande pelo celular ou levante a mão. Os links e o PDF desta apresentação estão no seu celular.</p>
    <div class="contacts">
      <div><b>Pedro Bossle</b><span>programador e cofundador</span><span class="mono">pedro.bossle.s@gmail.com</span></div>
      <div><b>Lucas Borges</b><span>programador e cofundador</span><span class="mono">lucasboeiraborges@gmail.com</span></div>
    </div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="site"></div><div class="qr-cap">templovirtual.app</div></div>
</div>`,
  },
];
