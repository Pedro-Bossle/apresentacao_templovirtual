const SITE = 'https://www.templovirtual.app';
const L = {
  site: { t: 'Templo Virtual · site oficial', u: SITE },
  guia: { t: 'Guia do Usuário', u: SITE + '/documentacao/guia' },
  doc: { t: 'Documentação completa', u: SITE + '/documentacao' },
  repo: { t: 'Código aberto · GitHub farrapos1111/sgc-dm', u: 'https://github.com/farrapos1111/sgc-dm' },
  odm: { t: 'Ordem DeMolay · odm.templovirtual.app', u: 'https://odm.templovirtual.app' },
  fdj: { t: 'Filhas de Jó · fdj.templovirtual.app', u: 'https://fdj.templovirtual.app' },
  loja: { t: 'Lojas Maçônicas · loja.templovirtual.app', u: 'https://loja.templovirtual.app' },
  osrc: { t: 'Como contribuir (open source)', u: SITE + '/documentacao/open-source' },
};


// Janela ilustrativa (para os modelos sem print real). rows: [[rótulo, valor, classe?], ...]
const mock = (title, rows, foot='dados ilustrativos') =>
  `<div class="mock"><div class="mock-h"><i></i><i></i><i></i><span>${title}</span></div>${rows.map(r =>
    `<div class="mock-r"><span>${r[0]}</span><b class="${r[2] ? 'mk-' + r[2] : ''}">${r[1]}</b></div>`).join('')}<div class="mock-f">${foot}</div></div>`;
// Estrela de cinco pontas genérica (decorativa), cada ponta numa cor.
const STAR5 = (size=360) => {
  const cols = ['#3b6fd8','#f2c230','#f4f4f4','#3aa864','#d8413a'];
  const cx=50, cy=52, R=48, r=19, pts=[];
  for (let k=0;k<10;k++){ const a=-Math.PI/2+k*Math.PI/5, rr=k%2?r:R; pts.push([cx+rr*Math.cos(a), cy+rr*Math.sin(a)]); }
  const tris = [0,2,4,6,8].map((k,j)=>{ const p=pts[k], l=pts[(k+9)%10], rt=pts[k+1];
    return `<path d="M${cx} ${cy}L${l[0]} ${l[1]}L${p[0]} ${p[1]}L${rt[0]} ${rt[1]}Z" fill="${cols[j]}"/>`; }).join('');
  return `<svg class="star5" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">${tris}<path d="M${pts.map(p=>p.join(' ')).join('L')}Z" fill="none" stroke="rgba(255,255,255,.35)" stroke-width=".6"/></svg>`;
};
