const META = { key:'odm', name:'Ordem DeMolay', footTag:'', siteUrl:'https://www.templovirtual.app' };
// Conteúdo da apresentação. Cada slide: título, tempo previsto (s), notas do roteiro,
// links citados (aparecem no celular da plateia), votação opcional e o HTML do slide (1600×900).
const shot = (name, cap) =>
  `<figure class="shot"><div class="shot-bar"><i></i><i></i><i></i><span>${cap}</span></div><img src="${IMG[name]}" alt="Tela do Templo Virtual: ${cap}"></figure>`;

const SLIDES = [
  {
    title: 'Templo Virtual', time: 60, links: [L.site],
    notes: `Boa noite, irmãos. Eu sou o Pedro, e junto com o Lucas Borges a gente desenvolve o <b>Templo Virtual</b>.
<b>Antes de começar:</b> peguem o celular e apontem a câmera pro QR Code. Nesta apresentação o celular de vocês não compete comigo, ele faz parte dela. Vocês vão reagir, votar e receber todos os links que eu citar.
Espere o contador "na sala" subir antes de avançar.`,
    html: `<div class="cover">
  <div class="cover-l">
    <div class="kicker">APRESENTAÇÃO · TEMPLO VIRTUAL</div>
    <h1>A gestão do capítulo<br>num lugar <em>só</em>.</h1>
    <p class="lead">Membros, atas, presenças, caixa, mensalidades, calendário e comissões. Gratuito para paramaçônicas, de código aberto e feito para o celular.</p>
    <div class="byline"><b>Pedro Bossle</b> &amp; <b>Lucas Borges</b> · Caxias do Sul/RS</div>
  </div>
  <div class="cover-r"><div class="qr-big" data-qr="plateia"></div><div class="qr-cap">aponte a câmera e entre na sala</div></div>
</div>`,
  },
  {
    title: 'Como seu capítulo se organiza hoje?', time: 75, links: [],
    vote: { q: 'Onde fica o caixa do seu capítulo hoje?', opts: ['Planilha', 'Caderno', 'Algum sistema', 'Não sei'] },
    notes: `Abra a votação pelo passador (botão <b>votar</b>).
Pergunte: onde fica o caixa do capítulo de vocês hoje?
Comente o resultado ao vivo. Se "planilha" ou "não sei" ganhar, é a deixa perfeita pro próximo slide. Feche a votação antes de avançar.`,
    html: `<div class="center">
  <div class="kicker">PERGUNTA RÁPIDA · VOTE PELO CELULAR</div>
  <h2 class="huge">Onde fica o caixa<br>do seu capítulo <em>hoje</em>?</h2>
  <div class="vote-live" data-vote></div>
</div>`,
  },
  {
    title: 'O problema', time: 90, links: [L.guia],
    notes: `A maioria dos capítulos se organiza com o que tem à mão: a planilha de caixa que só o Tesoureiro sabe abrir, as atas em arquivos espalhados, a lista de membros no grupo de WhatsApp e a chamada anotada num caderno.
<b>Funciona, até a gestão mudar de mãos.</b> Aí o semestre começa com metade da informação perdida e a outra metade desatualizada.
Pergunte quem já pegou um cargo e precisou "caçar" informação da gestão anterior.`,
    html: `<div class="split">
  <div>
    <div class="kicker">O PROBLEMA</div>
    <h2>Funciona.<br>Até a gestão <em>mudar de mãos</em>.</h2>
    <p class="lead">O semestre começa com metade da informação perdida e a outra metade desatualizada.</p>
  </div>
  <ul class="pains">
    <li><span>📊</span><div><b>Caixa numa planilha</b>que só o Tesoureiro sabe abrir</div></li>
    <li><span>📄</span><div><b>Atas em arquivos</b>espalhados por drives e celulares</div></li>
    <li><span>💬</span><div><b>Membros no WhatsApp</b>sem histórico, cargos ou graus</div></li>
    <li><span>📒</span><div><b>Chamada no caderno</b>e a frequência calculada na mão</div></li>
  </ul>
</div>`,
  },
  {
    title: 'A proposta', time: 75, links: [L.site, L.odm],
    notes: `O Templo Virtual junta tudo isso num lugar só. Cada pessoa entra com a própria conta e vê exatamente o que o cargo dela permite.
<b>O histórico fica no capítulo, não na pessoa.</b> Quando a gestão passa adiante, tudo continua lá.
Funciona no navegador, no computador e no celular. Não precisa instalar nada.`,
    html: `<div class="split">
  <div>
    <div class="kicker">A PROPOSTA</div>
    <h2>Tudo do capítulo,<br>num lugar <em>só</em>.</h2>
    <p class="lead">Cada um entra com a própria conta e vê o que o cargo permite. O histórico fica no capítulo, não na pessoa.</p>
    <div class="chips"><span>Membros</span><span>Atas</span><span>Presenças</span><span>Caixa</span><span>Mensalidades</span><span>Calendário</span><span>Comissões</span></div>
    <p class="small mono">NAVEGADOR · COMPUTADOR E CELULAR · SEM INSTALAR NADA</p>
  </div>
  ${shot('overview', 'Início · painel do capítulo')}
</div>`,
  },
  {
    title: 'Capítulo, cargo e escopo', time: 75, links: [L.guia],
    notes: `Três ideias explicam todo o controle de acesso.
<b>Capítulo:</b> toda informação pertence a um capítulo.
<b>Cargo:</b> o cargo define o que você pode fazer. O Tesoureiro não edita atas, o Escrivão não lança pagamentos.
<b>Escopo:</b> quem é de mais de um capítulo, ou tem cargo regional/estadual, escolhe onde está trabalhando e o menu muda junto.`,
    html: `<div class="center">
  <div class="kicker">COMO FUNCIONA O ACESSO</div>
  <h2>Três ideias explicam tudo.</h2>
  <div class="trio">
    <div class="card"><div class="n">01</div><h3>Capítulo</h3><p>Toda informação pertence a um capítulo. Você só enxerga os capítulos aos quais está vinculado.</p></div>
    <div class="card"><div class="n">02</div><h3>Cargo</h3><p>O cargo define o que você faz. O Tesoureiro mexe no caixa, o Escrivão nas atas.</p></div>
    <div class="card"><div class="n">03</div><h3>Escopo</h3><p>Mais de um capítulo ou cargo regional? Escolha onde trabalhar e o menu muda junto.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Secretaria', time: 105, links: [L.guia],
    notes: `<b>Membros:</b> o cadastro é passo a passo. Se o candidato for menor de idade, ganha uma etapa para os responsáveis (até dois) e para o consentimento de dados.
<b>Atas:</b> rascunho → em revisão → aprovada, com as três assinaturas: Presidente do Conselho, Mestre Conselheiro e Escrivão. No rascunho dá para compartilhar uma visão pública com link e senha, e os membros aprovam ou reprovam com justificativa.
<b>Chamada ao vivo:</b> durante a sessão marca presente/ausente, e a frequência se monta sozinha.
Use o botão <b>foco</b> do passador para destacar a tela.`,
    html: `<div class="split">
  <div>
    <div class="kicker">SECRETARIA · ESCRIVÃO</div>
    <h2>Do cadastro à<br>ata <em>assinada</em>.</h2>
    <ul class="ticks">
      <li><b>Cadastro passo a passo</b>, com responsáveis e consentimento para menores</li>
      <li><b>Atas</b>: rascunho → revisão → aprovada, com 3 assinaturas</li>
      <li><b>Consulta pública</b> da ata por link e senha</li>
      <li><b>Chamada ao vivo</b> na sessão, e a frequência se monta sozinha</li>
    </ul>
  </div>
  ${shot('secretaria', 'Chamada ao vivo')}
</div>`,
  },
  {
    title: 'Tesouraria', time: 120, links: [L.guia],
    notes: `<b>Fluxo de caixa</b> com categorias prontas (Eventos, Hospitalaria, Mensalidades, SCDB/GCE…). A própria comissão cria as subcategorias, então dá para saber quanto entrou e saiu de cada evento.
<b>O ponto mais prático: mensalidade paga vira lançamento no caixa sozinha.</b> Desfez o pagamento? O lançamento sai junto. Não tem como contar duas vezes nem esquecer.
<b>Atrasados:</b> a mensagem de cobrança sai pronta no WhatsApp, com o PIX do capítulo e o nome do Tesoureiro.
Também importa e exporta planilha e gera o relatório em PDF com logo e página de assinaturas.
Ótimo slide para pedir reações 🔥.`,
    html: `<div class="split">
  <div>
    <div class="kicker">TESOURARIA · TESOUREIRO</div>
    <h2>Mensalidade paga<br>entra no caixa <em>sozinha</em>.</h2>
    <ul class="ticks">
      <li><b>Livro-caixa</b> com categorias e subcategorias por evento</li>
      <li><b>Mensalidades</b> do mês geradas de uma vez (Sênior e Maçom isentos)</li>
      <li><b>Cobrança dos atrasados</b> pronta no WhatsApp, com o PIX</li>
      <li><b>Planilha</b> de entrada e saída, e <b>relatório em PDF</b> com assinaturas</li>
    </ul>
  </div>
  ${shot('tesouraria', 'Fluxo de caixa')}
</div>`,
  },
  {
    title: 'Gestão e calendário', time: 90, links: [L.guia],
    notes: `<b>Calendário</b> com cinco tipos: sessão ritualística, sessão administrativa, evento, filantropia e entretenimento. Cada compromisso vai pro celular, pro Google Agenda ou pro Outlook com um clique.
<b>Chave do dia</b> gerada a partir do calendário, pronta pra colar no grupo.
<b>Cargos e comissões por semestre</b>, com o histórico preservado.
<b>Identidade do capítulo:</b> logo, cor de destaque, número, cidade e lojas vinculadas.`,
    html: `<div class="split">
  <div>
    <div class="kicker">GESTÃO · MESTRE CONSELHEIRO</div>
    <h2>A chave do dia<br>sai <em>pronta</em>.</h2>
    <ul class="ticks">
      <li><b>Calendário</b> com 5 tipos de compromisso, traje, local e obrigatoriedade</li>
      <li><b>Google Agenda, Outlook</b> ou celular com um clique</li>
      <li><b>Cargos e comissões</b> por semestre, com histórico</li>
      <li><b>Identidade do capítulo</b>: logo e cor colorem o sistema todo</li>
    </ul>
  </div>
  ${shot('gestao', 'Calendário do capítulo')}
</div>`,
  },
  {
    title: 'Comissões', time: 105, links: [L.guia],
    notes: `<b>Eventos:</b> ingressos com QR Code enviados por e-mail, mapa de mesas e lugares e check-in na portaria pela câmera do celular. A comanda virtual registra o consumo de cada um.
<b>Sindicâncias:</b> fichas dos candidatos, processos com parecer e votação da comissão, do Conselho Consultivo e dos conselheiros.
<b>Hospitalaria:</b> cardápios com custo estimado e escala de serviço.
Cada área aparece só para quem é da comissão, ou para quem administra o capítulo.`,
    html: `<div class="split">
  <div>
    <div class="kicker">COMISSÕES</div>
    <h2>Cada comissão<br>com a <em>sua</em> área.</h2>
    <div class="mini-cards">
      <div><b>Eventos</b>Ingresso com QR Code, mapa de mesas, comanda e check-in pela câmera</div>
      <div><b>Sindicâncias</b>Fichas, processos, pareceres e votação</div>
      <div><b>Hospitalaria</b>Cardápio com custo estimado e escala de serviço</div>
    </div>
  </div>
  ${shot('comissoes', 'Comissão de Eventos · comanda')}
</div>`,
  },
  {
    title: 'Regional e estadual', time: 60, links: [L.guia],
    notes: `Para quem tem cargo acima do capítulo: <b>panorama</b> de todos os capítulos da jurisdição (membros ativos e próxima atividade), <b>calendário unificado</b> e <b>busca de membros</b> entre capítulos.
É uma visão <b>somente de consulta</b>, e sempre com os documentos protegidos. Quem acompanha não altera os dados do capítulo.`,
    html: `<div class="center">
  <div class="kicker">REGIONAL E ESTADUAL</div>
  <h2>Acompanhar sem <em>mexer</em>.</h2>
  <div class="trio">
    <div class="card"><div class="n">01</div><h3>Panorama</h3><p>Todos os capítulos da jurisdição, com membros ativos e a próxima atividade.</p></div>
    <div class="card"><div class="n">02</div><h3>Calendário unificado</h3><p>Os compromissos de todos os capítulos numa agenda só.</p></div>
    <div class="card"><div class="n">03</div><h3>Busca de membros</h3><p>Entre capítulos, somente consulta e com os documentos protegidos.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Cuidado com os dados', time: 90, links: [L.doc],
    notes: `O sistema guarda dados de adolescentes, então esse ponto foi tratado com rigor.
<b>CPF e RG ficam cifrados no banco.</b> Mesmo quem tem acesso direto ao banco não consegue ler.
Na tela, aparecem só os dois últimos dígitos. Ver o documento completo é uma ação deliberada e registrada.
O consentimento é coletado no cadastro. E quem acompanha pela regional ou estadual não vê documentos.`,
    html: `<div class="split">
  <div>
    <div class="kicker">PROTEÇÃO DE DADOS · LGPD</div>
    <h2>Dados de jovens,<br>tratados com <em>rigor</em>.</h2>
    <p class="lead">Quem tem acesso direto ao banco também não consegue ler os documentos.</p>
  </div>
  <div class="lock">
    <div class="doc-line"><span>CPF</span><b>•••.•••.•••-<em>42</em></b></div>
    <div class="doc-line"><span>RG</span><b>••••••••<em>17</em></b></div>
    <ul class="ticks tight">
      <li><b>Cifrados</b> no banco de dados</li>
      <li><b>Mascarados</b> na tela</li>
      <li><b>Revelar</b> é uma ação registrada</li>
      <li><b>Consentimento</b> coletado no cadastro</li>
      <li><b>Regional e estadual</b> sem documentos</li>
    </ul>
  </div>
</div>`,
  },
  {
    title: 'Para quem é', time: 75, links: [L.odm, L.fdj, L.loja],
    notes: `<b>Ordem DeMolay:</b> capítulos, Escudeiros, Cavalaria e Alumni (odm.templovirtual.app).
<b>Filhas de Jó:</b> gestão pensada para os Bethéis (fdj.templovirtual.app).
<b>Lojas Maçônicas:</b> projeto sob medida (loja.templovirtual.app).
Em expansão: Ação Paramaçônica Juvenil (APJ), Arco-Íris e Estrela do Oriente.
Os três links já estão no celular de vocês.`,
    html: `<div class="center">
  <div class="kicker">PARA QUEM É</div>
  <h2>Um sistema, cada ordem do <em>seu</em> jeito.</h2>
  <div class="orgs">
    <div class="org"><img src="${IMG.odm}" alt="Emblema DeMolay"><h3>Ordem DeMolay</h3><p>Capítulos, Escudeiros, Cavalaria e Alumni</p><span class="mono">odm.templovirtual.app</span></div>
    <div class="org"><img src="${IMG.fdj}" alt="Emblema Filhas de Jó"><h3>Filhas de Jó</h3><p>Gestão pensada para os Bethéis</p><span class="mono">fdj.templovirtual.app</span></div>
    <div class="org"><img src="${IMG.loja}" alt="Emblema maçônico"><h3>Lojas Maçônicas</h3><p>Projeto sob medida</p><span class="mono">loja.templovirtual.app</span></div>
  </div>
  <div class="expand"><span class="mono">EM EXPANSÃO</span>${expOrg('apj', 'APJ', 'Ação Paramaçônica Juvenil')}${expOrg('arco', 'AI', 'Arco-Íris')}${expOrg('oes', 'EO', 'Estrela do Oriente')}</div>
</div>`,
  },
  {
    title: 'Onde estamos', time: 75, links: [L.site],
    notes: `O escopo e a base do projeto estão prontos, e o sistema já é usado no dia a dia do <b>Farrapos 1111</b>.
<b>Agora:</b> testes com outras organizações paramaçônicas para entender o que cada uma precisa. É aqui que vocês entram.
Depois: implementar essas necessidades por organização e expandir pelo resto do estado, com um app para celular.`,
    html: `<div class="center">
  <div class="kicker">ONDE ESTAMOS</div>
  <h2>Validado no Farrapos 1111.<br>Agora, com <em>vocês</em>.</h2>
  <ol class="road">
    <li class="done"><i>✓</i><b>Escopo e base do projeto</b><span>concluído</span></li>
    <li class="done"><i>✓</i><b>Uso diário no Farrapos 1111</b><span>concluído</span></li>
    <li class="now"><i>●</i><b>Testes com outras organizações</b><span>agora</span></li>
    <li><i>4</i><b>Módulos por organização</b><span>próximo</span></li>
    <li><i>5</i><b>Expansão no estado e app</b><span>depois</span></li>
  </ol>
</div>`,
  },
  {
    title: 'Quanto custa', time: 75, links: [L.repo, L.osrc],
    notes: `Para paramaçônicas (DeMolay, Filhas de Jó, APJ): <b>R$ 0,00</b>, com acesso completo e os módulos que quiserem.
Para Lojas, o orçamento é feito depois de entender os módulos necessários.
O código é aberto (AGPL-3.0): qualquer um pode ler, sugerir e contribuir.
Quem quiser ajudar a manter o servidor no ar pode doar via Pix: pix@templovirtual.com.br. Sem cadastro, sem valor mínimo.`,
    html: `<div class="split">
  <div>
    <div class="kicker">QUANTO CUSTA</div>
    <div class="price">R$ 0<small>,00</small></div>
    <p class="lead">para paramaçônicas, com acesso completo. E continua assim.</p>
    <p class="small">Lojas Maçônicas: orçamento sob medida, conforme os módulos.</p>
  </div>
  <div class="stack">
    <div class="card"><h3>Código aberto</h3><p>Licença AGPL-3.0. O repositório é público, com issues para quem está começando.</p></div>
    <div class="card gold"><h3>Apoie o projeto</h3><p>Pix: <b class="mono">pix@templovirtual.com.br</b><br>Sem cadastro e sem valor mínimo. Cobre servidor, domínio, backups e mensagens.</p></div>
  </div>
</div>`,
  },
  {
    title: 'Como começar', time: 75, links: [L.site, L.guia],
    vote: { q: 'Seu capítulo toparia testar o Templo Virtual?', opts: ['👍 Topa', '🤔 Quero saber mais', '👎 Agora não'] },
    notes: `Quatro passos:
1. Solicitar a inclusão da organização e o cadastro inicial da liderança (MC, HR, VM).
2. No primeiro acesso, cadastrar os demais membros e o calendário.
3. Configurar tesouraria, secretaria e as outras áreas.
4. Sugerir melhorias.
Abra a última votação: <b>seu capítulo toparia testar?</b>`,
    html: `<div class="split">
  <div>
    <div class="kicker">COMO COMEÇAR</div>
    <h2>Quatro passos.</h2>
    <ol class="steps">
      <li><b>Solicite a inclusão</b> da organização e o cadastro da liderança (MC, HR, VM)</li>
      <li><b>Cadastre os membros</b> e o calendário no primeiro acesso</li>
      <li><b>Configure</b> tesouraria, secretaria e as outras áreas</li>
      <li><b>Sugira melhorias</b>. O sistema cresce com quem usa</li>
    </ol>
  </div>
  <div class="vote-side"><div class="kicker">VOTE PELO CELULAR</div><h3>Seu capítulo toparia testar?</h3><div class="vote-live" data-vote></div></div>
</div>`,
  },
  {
    title: 'Obrigado', time: 120, links: [L.site, L.doc, L.repo],
    notes: `Agradeça e abra para perguntas. As perguntas enviadas pela plateia aparecem aqui no roteiro.
Lembre que os links e o PDF da apresentação ficam liberados no celular de cada um.
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
