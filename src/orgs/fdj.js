const META = { key:'fdj', name:'Filhas de Jó', footTag:'BETHEL', siteUrl:'https://fdj.templovirtual.app' };

const SLIDES = [
  {
    title: 'Templo Virtual para Bethéis', time: 60, links: [L.fdj, L.site],
    notes: `Boa noite. Eu sou o Pedro, e junto com o Lucas Borges desenvolvo o <b>Templo Virtual</b>, que já está no dia a dia do DeMolay e agora chega aos Bethéis das Filhas de Jó.
<b>Antes de começar:</b> peguem o celular e apontem a câmera pro QR Code. Vocês vão reagir, votar e receber todos os links que eu citar.
Espere o contador "na sala" subir antes de avançar.`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">TEMPLO VIRTUAL · FILHAS DE JÓ</div>
    <h1>A gestão do Bethel<br>num lugar <em>só</em>.</h1>
    <p class="lead">Filhas, atas, presenças, tesouraria, calendário e eventos. Gratuito para paramaçônicas, de código aberto e feito para o celular.</p>
    <div class="byline"><b>Pedro Bossle</b> &amp; <b>Lucas Borges</b> · Caxias do Sul/RS</div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="plateia"></div><div class="qr-cap">aponte a câmera e entre na sala</div></div>
</div>`,
  },
  {
    title: 'Como o Bethel se organiza hoje?', time: 75, links: [],
    vote: { q: 'Onde fica a tesouraria do seu Bethel hoje?', opts: ['Planilha', 'Caderno', 'Algum sistema', 'Não sei'] },
    notes: `Abra a votação pelo passador (botão <b>votar</b>).
Pergunte: onde fica a tesouraria do Bethel hoje?
Comente o resultado ao vivo e feche a votação antes de avançar.`,
    html: `<div class="center">
  <div class="kicker">PERGUNTA RÁPIDA · VOTE PELO CELULAR</div>
  <h2 class="huge">Onde fica a tesouraria<br>do seu Bethel <em>hoje</em>?</h2>
  <div class="vote-live" data-vote></div>
</div>`,
  },
  {
    title: 'O problema', time: 90, links: [],
    notes: `Muitos Bethéis se organizam com o que têm à mão: a planilha que só a Tesoureira sabe abrir, as atas espalhadas, a lista das Filhas num grupo de WhatsApp e a chamada no caderno.
<b>Funciona, até a gestão mudar.</b> Cada nova Honorável Rainha começa procurando o que a anterior deixou.
Pergunte quem já assumiu um cargo e precisou "caçar" informação.`,
    html: `<div class="split">
  <div>
    <div class="kicker">O PROBLEMA</div>
    <h2>Funciona.<br>Até a gestão <em>mudar</em>.</h2>
    <p class="lead">Cada nova gestão começa procurando o que a anterior deixou.</p>
  </div>
  <ul class="pains">
    <li><span>📊</span><div><b>Tesouraria numa planilha</b>que só a Tesoureira sabe abrir</div></li>
    <li><span>📄</span><div><b>Atas em arquivos</b>espalhados por drives e celulares</div></li>
    <li><span>💬</span><div><b>Filhas no WhatsApp</b>sem histórico de cargos e presenças</div></li>
    <li><span>📒</span><div><b>Chamada no caderno</b>e a frequência calculada na mão</div></li>
  </ul>
</div>`,
  },
  {
    title: 'A proposta', time: 75, links: [L.fdj],
    notes: `O Templo Virtual junta tudo isso num lugar só, com um espaço próprio para os Bethéis: <b>fdj.templovirtual.app</b>, com visual branco, roxo e detalhes em dourado.
Cada pessoa entra com a própria conta e vê o que o cargo permite. <b>O histórico fica no Bethel, não na pessoa.</b>
Funciona no navegador, no computador e no celular. Não precisa instalar nada.`,
    html: `<div class="split">
  <div>
    <div class="kicker">A PROPOSTA</div>
    <h2>Tudo do Bethel,<br>num lugar <em>só</em>.</h2>
    <p class="lead">Cada uma entra com a própria conta e vê o que o cargo permite. O histórico fica no Bethel, não na pessoa.</p>
    <div class="chips"><span>Filhas</span><span>Atas</span><span>Presenças</span><span>Tesouraria</span><span>Mensalidades</span><span>Calendário</span><span>Eventos</span></div>
    <p class="small mono">FDJ.TEMPLOVIRTUAL.APP · COMPUTADOR E CELULAR</p>
  </div>
  ${mock('Bethel nº 00 · Início', [['Próxima reunião','sábado, 15h','acc'],['Saldo do mês','R$ 1.240,00','ok'],['Filhas ativas','32'],['Mensalidades em aberto','5','warn'],['Aniversariantes do mês','3']])}
</div>`,
  },
  {
    title: 'Bethel, cargo e escopo', time: 75, links: [L.guia],
    notes: `Três ideias explicam todo o controle de acesso.
<b>Bethel:</b> toda informação pertence a um Bethel.
<b>Cargo:</b> o cargo define o que cada uma pode fazer. A Tesoureira cuida do caixa, a Secretária das atas, e a Honorável Rainha acompanha tudo.
<b>Escopo:</b> quem participa de mais de uma instituição escolhe onde está trabalhando, e o menu muda junto.`,
    html: `<div class="center">
  <div class="kicker">COMO FUNCIONA O ACESSO</div>
  <h2>Três ideias explicam tudo.</h2>
  <div class="trio">
    <div class="card"><div class="n">01</div><h3>Bethel</h3><p>Toda informação pertence a um Bethel. Cada uma só enxerga os Bethéis aos quais está vinculada.</p></div>
    <div class="card"><div class="n">02</div><h3>Cargo</h3><p>Honorável Rainha, Secretária, Tesoureira: cada cargo vê e faz o que lhe cabe.</p></div>
    <div class="card"><div class="n">03</div><h3>Escopo</h3><p>Participa de mais de uma instituição? Escolha onde trabalhar e o menu muda junto.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Secretaria', time: 105, links: [L.guia],
    notes: `<b>Cadastro passo a passo.</b> Como a maioria das Filhas é menor de idade, o cadastro tem uma etapa para os responsáveis (até dois) e para o consentimento de dados.
<b>Atas:</b> rascunho → em revisão → aprovada, com as assinaturas oficiais e exportação em PDF. No rascunho dá para compartilhar uma visão pública com link e senha.
<b>Chamada ao vivo:</b> durante a reunião marca presente/ausente, e a frequência se monta sozinha.`,
    html: `<div class="split">
  <div>
    <div class="kicker">SECRETARIA · SECRETÁRIA</div>
    <h2>Da ficha à<br>ata <em>assinada</em>.</h2>
    <ul class="ticks">
      <li><b>Cadastro passo a passo</b>, com responsáveis e consentimento para menores</li>
      <li><b>Atas</b>: rascunho → revisão → aprovada, com assinaturas e PDF</li>
      <li><b>Consulta pública</b> da ata por link e senha</li>
      <li><b>Chamada ao vivo</b> na reunião, e a frequência se monta sozinha</li>
    </ul>
  </div>
  ${mock('Chamada ao vivo · Reunião ordinária', [['Ana L.','presente','ok'],['Beatriz M.','presente','ok'],['Carolina S.','ausente · justificou','warn'],['Daniela R.','presente','ok'],['Eduarda P.','presente','ok']])}
</div>`,
  },
  {
    title: 'Tesouraria', time: 110, links: [L.guia],
    notes: `<b>Livro-caixa</b> com categorias prontas e a possibilidade de criar as do Bethel. Cada evento pode virar uma subcategoria, então dá para saber quanto entrou e saiu de cada um.
<b>Mensalidade paga vira lançamento no caixa sozinha.</b> Desfez o pagamento? O lançamento sai junto.
<b>Cobrança:</b> a mensagem sai pronta no WhatsApp, com o PIX do Bethel.
Relatório em PDF com logo e página de assinaturas, pronto para o Conselho Guardião conferir.
Bom slide para pedir reações 🔥.`,
    html: `<div class="split">
  <div>
    <div class="kicker">TESOURARIA · TESOUREIRA</div>
    <h2>Mensalidade paga<br>entra no caixa <em>sozinha</em>.</h2>
    <ul class="ticks">
      <li><b>Livro-caixa</b> com categorias e subcategorias por evento</li>
      <li><b>Mensalidades</b> do mês geradas de uma vez</li>
      <li><b>Cobrança</b> pronta no WhatsApp, com o PIX do Bethel</li>
      <li><b>Relatório em PDF</b> para o Conselho Guardião conferir</li>
    </ul>
  </div>
  ${mock('Fluxo de caixa · este mês', [['Mensalidade · Ana L.','+ R$ 20,00','ok'],['Mensalidade · Beatriz M.','+ R$ 20,00','ok'],['Chá beneficente · ingressos','+ R$ 640,00','ok'],['Chá beneficente · compras','− R$ 212,50','bad'],['Saldo do período','R$ 467,50','acc']])}
</div>`,
  },
  {
    title: 'Calendário e eventos', time: 105, links: [L.guia],
    notes: `<b>Calendário</b> com reuniões, eventos, filantropia e entretenimento, cada um com local, traje e se é obrigatório. Vai pro Google Agenda, Outlook ou celular com um clique.
<b>Convocação pronta</b> para colar no grupo.
<b>Eventos:</b> ingressos com QR Code enviados por e-mail, mapa de mesas, comanda virtual e check-in na portaria pela câmera do celular.
<b>Cargos por gestão</b>, com o histórico preservado.`,
    html: `<div class="split">
  <div>
    <div class="kicker">GESTÃO E EVENTOS</div>
    <h2>Do calendário<br>à <em>portaria</em>.</h2>
    <ul class="ticks">
      <li><b>Calendário</b> com local, traje e obrigatoriedade</li>
      <li><b>Google Agenda, Outlook</b> ou celular com um clique</li>
      <li><b>Ingressos com QR Code</b>, mapa de mesas e comanda</li>
      <li><b>Check-in pela câmera</b> do celular na entrada</li>
    </ul>
  </div>
  <div class="mini-cards">
    <div><b>Reunião ordinária</b>Sábado, 15h · Templo · traje de reunião · presença obrigatória</div>
    <div><b>Chá beneficente</b>Domingo, 16h · 80 ingressos · check-in pela câmera</div>
    <div><b>Ação de filantropia</b>Arrecadação de agasalhos · aberto ao público</div>
  </div>
</div>`,
  },
  {
    title: 'Filhas e Conselho Guardião', time: 75, links: [L.fdj],
    notes: `No Bethel, as Filhas conduzem e o <b>Conselho Guardião do Bethel</b> acompanha. Pelas regras da Ordem, a Guardiã Secretária supervisiona o trabalho da Secretária, e a Guardiã Tesoureira, o da Tesoureira.
O sistema foi pensado para essa estrutura: <b>as oficiais fazem o trabalho no dia a dia, e os adultos acompanham</b> o caixa, as atas e as presenças com os mesmos dados.
Reforce: ninguém precisa pedir a planilha para ninguém.`,
    html: `<div class="center">
  <div class="kicker">FEITO PARA O BETHEL</div>
  <h2>As Filhas conduzem.<br>O Conselho Guardião <em>acompanha</em>.</h2>
  <div class="trio">
    <div class="card"><div class="n">01</div><h3>Honorável Rainha</h3><p>Visão do Bethel inteiro: reuniões, presenças, caixa e próximos compromissos.</p></div>
    <div class="card"><div class="n">02</div><h3>Secretária e Tesoureira</h3><p>Fazem o trabalho do dia a dia: atas, chamada, mensalidades e livro-caixa.</p></div>
    <div class="card"><div class="n">03</div><h3>Conselho Guardião</h3><p>Acompanha e confere com os mesmos dados, sem depender de planilha.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Cuidado com os dados', time: 90, links: [L.doc],
    notes: `O Bethel guarda dados de meninas e adolescentes, então esse ponto foi tratado com rigor.
<b>CPF e RG ficam cifrados no banco.</b> Mesmo quem tem acesso direto ao banco não consegue ler.
Na tela aparecem só os dois últimos dígitos. Ver o documento completo é uma ação deliberada e registrada.
O consentimento dos responsáveis é coletado no cadastro.`,
    html: `<div class="split">
  <div>
    <div class="kicker">PROTEÇÃO DE DADOS · LGPD</div>
    <h2>Dados das Filhas,<br>tratados com <em>rigor</em>.</h2>
    <p class="lead">Quem tem acesso direto ao banco também não consegue ler os documentos.</p>
  </div>
  <div class="lock">
    <div class="doc-line"><span>CPF</span><b>•••.•••.•••-<em>42</em></b></div>
    <div class="doc-line"><span>RG</span><b>••••••••<em>17</em></b></div>
    <ul class="ticks tight">
      <li><b>Cifrados</b> no banco de dados</li>
      <li><b>Mascarados</b> na tela</li>
      <li><b>Revelar</b> é uma ação registrada</li>
      <li><b>Consentimento</b> dos responsáveis no cadastro</li>
    </ul>
  </div>
</div>`,
  },
  {
    title: 'Onde estamos', time: 75, links: [L.site],
    notes: `O Templo Virtual nasceu e foi validado no dia a dia do <b>Farrapos 1111</b>, um capítulo DeMolay.
<b>Agora:</b> testes com outras organizações paramaçônicas, e o espaço dos Bethéis (fdj.templovirtual.app) é parte disso.
O próximo passo é ajustar os módulos ao que cada Bethel precisa. É aqui que vocês entram.`,
    html: `<div class="center">
  <div class="kicker">ONDE ESTAMOS</div>
  <h2>Validado no DeMolay.<br>Agora, com os <em>Bethéis</em>.</h2>
  <ol class="road">
    <li class="done"><i>✓</i><b>Escopo e base do projeto</b><span>concluído</span></li>
    <li class="done"><i>✓</i><b>Uso diário no Farrapos 1111</b><span>concluído</span></li>
    <li class="now"><i>●</i><b>Testes com Bethéis e outras ordens</b><span>agora</span></li>
    <li><i>4</i><b>Módulos sob medida para o Bethel</b><span>próximo</span></li>
    <li><i>5</i><b>Expansão no estado e app</b><span>depois</span></li>
  </ol>
</div>`,
  },
  {
    title: 'Quanto custa', time: 70, links: [L.repo],
    notes: `Para paramaçônicas, e isso inclui as Filhas de Jó: <b>R$ 0,00</b>, com acesso completo e os módulos que o Bethel quiser.
O código é aberto: qualquer um pode ler, sugerir e contribuir.
Quem quiser ajudar a manter o servidor no ar pode doar via Pix: pix@templovirtual.com.br. Sem cadastro e sem valor mínimo.`,
    html: `<div class="split">
  <div>
    <div class="kicker">QUANTO CUSTA</div>
    <div class="price">R$ 0<small>,00</small></div>
    <p class="lead">para o Bethel, com acesso completo. E continua assim.</p>
  </div>
  <div class="stack">
    <div class="card"><h3>Código aberto</h3><p>Licença AGPL-3.0. O repositório é público e aceita contribuições.</p></div>
    <div class="card gold"><h3>Apoie o projeto</h3><p>Pix: <b class="mono">pix@templovirtual.com.br</b><br>Sem cadastro e sem valor mínimo. Cobre servidor, domínio, backups e mensagens.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Como começar', time: 75, links: [L.fdj, L.guia],
    vote: { q: 'Seu Bethel toparia testar o Templo Virtual?', opts: ['👍 Topa', '🤔 Quero saber mais', '👎 Agora não'] },
    notes: `Quatro passos:
1. Solicitar a inclusão do Bethel e o cadastro inicial da liderança (Honorável Rainha).
2. No primeiro acesso, cadastrar as Filhas e o calendário.
3. Configurar tesouraria, secretaria e as outras áreas.
4. Sugerir melhorias.
Abra a última votação: <b>seu Bethel toparia testar?</b>`,
    html: `<div class="split">
  <div>
    <div class="kicker">COMO COMEÇAR</div>
    <h2>Quatro passos.</h2>
    <ol class="steps">
      <li><b>Solicite a inclusão</b> do Bethel e o cadastro da Honorável Rainha</li>
      <li><b>Cadastre as Filhas</b> e o calendário no primeiro acesso</li>
      <li><b>Configure</b> tesouraria, secretaria e as outras áreas</li>
      <li><b>Sugira melhorias</b>. O sistema cresce com quem usa</li>
    </ol>
  </div>
  <div class="vote-side"><div class="kicker">VOTE PELO CELULAR</div><h3>Seu Bethel toparia testar?</h3><div class="vote-live" data-vote></div></div>
</div>`,
  },
  {
    title: 'Obrigado', time: 120, links: [L.fdj, L.site, L.doc],
    notes: `Agradeça e abra para perguntas. As perguntas enviadas pela plateia aparecem aqui no roteiro.
Todos os links continuam no celular de cada uma.
Pedro Bossle: pedro.bossle.s@gmail.com · Lucas Borges: lucasboeiraborges@gmail.com`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">OBRIGADO</div>
    <h1>Perguntas?</h1>
    <p class="lead">Mande pelo celular ou levante a mão. Todos os links desta apresentação continuam no seu celular.</p>
    <div class="contacts">
      <div><b>Pedro Bossle</b><span>programador e cofundador</span><span class="mono">pedro.bossle.s@gmail.com</span></div>
      <div><b>Lucas Borges</b><span>programador e cofundador</span><span class="mono">lucasboeiraborges@gmail.com</span></div>
    </div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="site"></div><div class="qr-cap">fdj.templovirtual.app</div></div>
</div>`,
  },
];
