const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const quebradas=[
 {n:'Quirio',st:'orange',label:'Alta prioridad',flight:'05 Oct 2026',hall:3,tramos:28,lat:-11.929,lng:-76.698},
 {n:'Pedregal',st:'yellow',label:'Observación',flight:'02 Oct 2026',hall:2,tramos:23,lat:-11.938,lng:-76.704},
 {n:'Carossio',st:'green',label:'Normal',flight:'28 Sep 2026',hall:0,tramos:20,lat:-11.947,lng:-76.715},
 {n:'Libertad',st:'green',label:'Normal',flight:'25 Sep 2026',hall:0,tramos:18,lat:-11.921,lng:-76.713},
 {n:'California',st:'green',label:'Normal',flight:'22 Sep 2026',hall:0,tramos:17,lat:-11.953,lng:-76.690},
 {n:'San Antonio',st:'yellow',label:'Observación',flight:'20 Sep 2026',hall:1,tramos:16,lat:-11.914,lng:-76.689},
 {n:'Mariscal Castilla',st:'green',label:'Normal',flight:'18 Sep 2026',hall:0,tramos:15,lat:-11.960,lng:-76.705},
 {n:'La Ronda',st:'green',label:'Normal',flight:'16 Sep 2026',hall:1,tramos:14,lat:-11.935,lng:-76.681}
];
const findings=[
 ['GG-014','05/10/26','Quirio','Q-14','Sedimento','orange','Validado'],
 ['GG-015','05/10/26','Quirio','Q-19','Bloque de roca','yellow','Pendiente'],
 ['GG-016','05/10/26','Quirio','Q-23','Grieta','orange','Validado'],
 ['GG-013','02/10/26','Pedregal','P-08','Cambio elevación','yellow','Pendiente'],
 ['GG-012','02/10/26','Pedregal','P-11','Sedimento','yellow','Validado'],
 ['GG-011','20/09/26','San Antonio','S-07','Sección cauce','yellow','Validado'],
 ['GG-010','16/09/26','La Ronda','L-04','Represamiento','yellow','Seguimiento']
];
let interventions=[
 ['INT-026','GG-014','Inspección física','Gestión del Riesgo','06 Oct','Alta','En curso'],
 ['INT-025','GG-012','Limpieza preventiva','Obras','10 Oct','Media','Programada'],
 ['INT-024','GG-010','Seguimiento','COEL','15 Oct','Media','Pendiente'],
 ['INT-023','GG-011','Inspección','Defensa Civil','08 Oct','Media','Programada']
];
const colors={green:'#22a06b',yellow:'#d9a315',orange:'#d66b1f',red:'#c83b3b'};
const badge=(st,label)=>`<span class="badge b-${st}">${label}</span>`;

function render(){
 $('#kpis').innerHTML=[['Quebradas monitoreadas','8','Piloto distrital'],['Hallazgos activos','7','3 requieren revisión'],['Prioridad alta','1','Quebrada Quirio'],['Intervenciones abiertas','4','2 dentro de 24 h'],['Campañas ejecutadas','87%','Meta ≥ 85%'],['Último vuelo','05 Oct','Quirio · CAM-026']].map(x=>`<div class="kpi"><small>${x[0]}</small><b>${x[1]}</b><em>${x[2]}</em></div>`).join('');
 $('#analyticsKpis').innerHTML=[['Error geométrico','4.2 cm','Meta ≤ 5 cm'],['Campañas comparables','93%','Meta ≥ 90%'],['Procesamiento','10.3 h','Meta < 12 h'],['mAP detección','0.78','Meta ≥ 0.75'],['IoU segmentación','0.73','Meta ≥ 0.70'],['Recall prioridad','0.92','Meta ≥ 0.90']].map(x=>`<div class="kpi"><small>${x[0]}</small><b>${x[1]}</b><em>${x[2]}</em></div>`).join('');
 $('#riskList').innerHTML=quebradas.map(q=>`<div class="risk-item"><span class="dot ${q.st}"></span><div><strong>${q.n}</strong><small>${q.hall} hallazgos activos · ${q.flight}</small></div>${badge(q.st,q.label)}</div>`).join('');
 $('#qBody').innerHTML=quebradas.map(q=>`<tr><td><b>${q.n}</b></td><td>${badge(q.st,q.label)}</td><td>${q.flight}</td><td>${q.hall}</td><td>${q.tramos}</td><td>${q.st==='orange'?'Alta':q.st==='yellow'?'Media':'Baja'}</td></tr>`).join('');
 $('#hBody').innerHTML=findings.map(h=>`<tr><td><b>${h[0]}</b></td><td>${h[1]}</td><td>${h[2]}</td><td>${h[3]}</td><td>${h[4]}</td><td>${badge(h[5],h[5]==='orange'?'Alta':'Media')}</td><td>${h[6]}</td></tr>`).join('');
 renderInterventions();
 $('#bars').innerHTML=[2,3,4,3,5,7].map((v,i)=>`<div class="bar" style="height:${v*25}px"><span>${v}</span><small>CAM-${21+i}</small></div>`).join('');
}
function renderInterventions(){
 $('#iBody').innerHTML=interventions.map(i=>`<tr><td><b>${i[0]}</b></td><td>${i[1]}</td><td>${i[2]}</td><td>${i[3]}</td><td>${i[4]}</td><td>${i[5]}</td><td>${badge(i[6]==='En curso'?'orange':i[6]==='Programada'?'yellow':'green',i[6])}</td></tr>`).join('');
}
window.createIntervention=function(){
 if(!interventions.some(x=>x[0]==='INT-027')) interventions.unshift(['INT-027','GG-014','Inspección de verificación','Gestión del Riesgo','06 Oct','Alta','Pendiente']);
 renderInterventions();toast('Intervención INT-027 creada y registrada');
}
window.toast=function(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__tt);window.__tt=setTimeout(()=>t.classList.remove('show'),2500)}
function showPage(id){$$('.page').forEach(p=>p.classList.remove('active'));$('#'+id).classList.add('active');$$('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===id));setTimeout(()=>{if(id==='mapa')mainMap.invalidateSize();if(id==='inicio')homeMap.invalidateSize()},120)}
$$('#nav button[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
$('#notifBtn').addEventListener('click',()=>toast('3 notificaciones: GG-014 validado · CAM-026 publicada · INT-026 pendiente'));
$('#logoutBtn').addEventListener('click',()=>{sessionStorage.removeItem('geoguardia');$('#app').classList.add('hidden');$('#login').classList.remove('hidden');toast('Sesión cerrada')});
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();const ok=$('#user').value==='muni'&&$('#pass').value==='muni';$('#loginError').classList.toggle('show',!ok);if(ok){sessionStorage.setItem('geoguardia','1');$('#login').classList.add('hidden');$('#app').classList.remove('hidden');setTimeout(()=>homeMap.invalidateSize(),150)}});
function initMap(el,zoom){
 const m=L.map(el).setView([-11.938,-76.700],zoom);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(m);
 quebradas.forEach(q=>L.circleMarker([q.lat,q.lng],{radius:q.st==='orange'?10:8,color:'#fff',weight:3,fillColor:colors[q.st],fillOpacity:1}).addTo(m).bindPopup(`<b>${q.n}</b><br>${q.label}<br>${q.hall} hallazgos activos<br><small>Último vuelo: ${q.flight}</small>`));
 return m;
}
const homeMap=initMap('homeMap',13),mainMap=initMap('mainMap',14);
const layers=['Quebradas','Tramos monitoreados','Hallazgos IA','Obras de protección','Ortomosaico último vuelo','Modelo de elevación','Sedimentos','Bloques de roca','Erosión','Vegetación','Infraestructura expuesta'];
$('#layerList').innerHTML=layers.map((l,i)=>`<div class="layer"><span>${l}</span><button class="switch ${i<4?'on':''}" aria-label="${l}"></button></div>`).join('');
$$('.switch').forEach(s=>s.addEventListener('click',()=>{s.classList.toggle('on');toast('Capa actualizada en el visor')}));
render();
if(sessionStorage.getItem('geoguardia')==='1'){ $('#login').classList.add('hidden');$('#app').classList.remove('hidden');setTimeout(()=>homeMap.invalidateSize(),150); }
