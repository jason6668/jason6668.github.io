---
title: 马老师星座分析
date: 2026-09-30
---

<style>
.xz-wrap{max-width:960px;margin:0 auto;padding:10px 14px 40px;font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#333}
.xz-hero{text-align:center;padding:34px 10px 18px}
.xz-hero h1{font-size:30px;margin:0 0 8px;color:#1a1a2e}
.xz-hero p{color:#888;margin:4px 0}
.xz-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin:18px 0}
.xz-sign{background:#fff;border:2px solid #eef0f7;border-radius:14px;padding:12px 4px;text-align:center;cursor:pointer;transition:.2s}
.xz-sign:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(66,90,239,.15)}
.xz-sign.active{border-color:#425AEF;box-shadow:0 8px 20px rgba(66,90,239,.25)}
.xz-sign .s{font-size:30px}
.xz-sign .n{font-size:13px;font-weight:700;margin-top:4px}
.xz-sign .d{font-size:11px;color:#999}
.xz-tabs{display:flex;gap:8px;justify-content:center;margin:20px 0;flex-wrap:wrap}
.xz-tab{padding:9px 22px;border-radius:20px;border:2px solid #eef0f7;background:#fff;cursor:pointer;font-size:14px;font-weight:600}
.xz-tab.active{background:#425AEF;color:#fff;border-color:#425AEF}
.xz-tab small{font-weight:400;font-size:11px;color:#999;display:block;margin-top:2px}
.xz-tab.active small{color:#dde4ff}
.xz-card{background:#fff;border-radius:18px;padding:24px;box-shadow:0 6px 24px rgba(0,0,0,.06);margin-bottom:18px}
.xz-card h2{margin:0 0 4px;font-size:22px}
.xz-card .sub{color:#999;font-size:13px;margin-bottom:16px}
.xz-dim{margin:10px 0}
.xz-dim .row{display:flex;justify-content:space-between;font-size:14px;margin-bottom:4px}
.xz-bar{height:10px;background:#f0f2f8;border-radius:6px;overflow:hidden}
.xz-bar i{display:block;height:100%;background:linear-gradient(90deg,#ffb800,#ff7a45);border-radius:6px;transition:width .6s}
.xz-lucky{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
.xz-lucky .lk{flex:1;min-width:140px;background:#f7f9fe;border-radius:12px;padding:12px;text-align:center}
.xz-lucky .lk .k{font-size:12px;color:#999}
.xz-lucky .lk .v{font-size:17px;font-weight:700;margin-top:4px}
.xz-summary{background:#f7f9fe;border-left:4px solid #425AEF;border-radius:0 12px 12px 0;padding:14px 16px;margin-top:16px;font-size:14px;line-height:1.8}
.xz-sec-title{font-size:19px;font-weight:800;margin:26px 0 12px}
.xz-pair{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:14px}
.xz-pair select{padding:10px 14px;border-radius:10px;border:2px solid #eef0f7;font-size:14px}
.xz-pair button{padding:10px 24px;border-radius:10px;border:none;background:#425AEF;color:#fff;font-weight:700;cursor:pointer;font-size:14px}
.xz-result{background:linear-gradient(135deg,#f7f9fe,#eef1fd);border-radius:14px;padding:18px;text-align:center}
.xz-score{font-size:44px;font-weight:800;color:#425AEF}
.xz-profile{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.xz-profile .pf{background:#f7f9fe;border-radius:12px;padding:12px 14px;font-size:13px;line-height:1.7}
.xz-profile .pf b{color:#425AEF}
.xz-note{text-align:center;color:#aaa;font-size:12px;margin-top:26px;line-height:1.8}
@media(max-width:640px){.xz-grid{grid-template-columns:repeat(4,1fr)}.xz-profile{grid-template-columns:1fr}}
</style>

<div class="xz-wrap">
  <div class="xz-hero">
    <h1>🔮 马老师星座分析</h1>
    <p>12 星座运势 · 幸运物 · 配对查询 · 星座档案</p>
    <p style="font-size:12px;color:#bbb;">传统民俗文化，仅供娱乐参考</p>
  </div>

  <div class="xz-grid" id="xz-grid"></div>

  <div class="xz-tabs" id="xz-tabs">
    <button class="xz-tab active" data-r="day">今日运势<br><small id="xz-d-day"></small></button>
    <button class="xz-tab" data-r="tomorrow">明日运势<br><small id="xz-d-tomorrow"></small></button>
    <button class="xz-tab" data-r="week">本周运势<br><small id="xz-d-week"></small></button>
    <button class="xz-tab" data-r="month">本月运势<br><small id="xz-d-month"></small></button>
  </div>
  <div style="text-align:center;color:#999;font-size:13px;margin:-8px 0 12px;" id="xz-today-line"></div>

  <div class="xz-card" id="xz-fortune"></div>

  <div class="xz-sec-title">💘 星座配对查询</div>
  <div class="xz-card">
    <div class="xz-pair">
      <select id="xz-p1"></select><span>×</span><select id="xz-p2"></select>
      <button onclick="xzPair()">测配对</button>
    </div>
    <div class="xz-result" id="xz-pair-result" style="display:none"></div>
  </div>

  <div class="xz-sec-title">📋 星座档案</div>
  <div class="xz-card"><div class="xz-profile" id="xz-profile"></div></div>

  <div class="xz-note">运势按日期自动演算，每日更新 · 内容为民俗娱乐，不构成任何决策建议<br>💬 联系马老师：<a href="https://t.me/sisumasanBot" target="_blank">✈️ Telegram @sisumasanBot</a> · <a href="mailto:ma@8818618.xyz">📧 ma@8818618.xyz</a></div>
</div>

<script>
const SIGNS=[
 {n:'白羊座',s:'♈',d:'3.21-4.19',star:'火星',el:'火象',trait:'热情冲动，想到就做，行动力拉满',good:'勇敢、真诚、充满活力',bad:'冲动急躁、没耐心、容易上头'},
 {n:'金牛座',s:'♉',d:'4.20-5.20',star:'金星',el:'土象',trait:'稳重务实，重视安全感，享受生活',good:'踏实可靠、忠诚、有耐心',bad:'固执保守、占有欲强、贪吃'},
 {n:'双子座',s:'♊',d:'5.21-6.21',star:'水星',el:'风象',trait:'机智多变，好奇心旺盛，信息达人',good:'聪明幽默、适应力强、能言善辩',bad:'浮躁善变、难专注、三分钟热度'},
 {n:'巨蟹座',s:'♋',d:'6.22-7.22',star:'月亮',el:'水象',trait:'温柔顾家，情感细腻，家庭至上',good:'体贴专一、同理心强、有责任感',bad:'敏感多疑、情绪化、容易受伤'},
 {n:'狮子座',s:'♌',d:'7.23-8.22',star:'太阳',el:'火象',trait:'自信耀眼，天生的主角，爱面子',good:'大方讲义气、有领导力、热情',bad:'好面子、专断、听不进批评'},
 {n:'处女座',s:'♍',d:'8.23-9.22',star:'水星',el:'土象',trait:'细致完美，服务精神，细节控',good:'认真靠谱、分析能力强、守时',bad:'挑剔焦虑、想太多、完美主义'},
 {n:'天秤座',s:'♎',d:'9.23-10.23',star:'金星',el:'风象',trait:'优雅随和，社交高手，颜值即正义',good:'公正有品味、好相处、审美在线',bad:'纠结、讨好型人格、缺主见'},
 {n:'天蝎座',s:'♏',d:'10.24-11.22',star:'冥王星',el:'水象',trait:'深沉专一，洞察人心，爱恨分明',good:'专注深情、意志坚定、守秘密',bad:'极端、记仇、控制欲强'},
 {n:'射手座',s:'♐',d:'11.23-12.21',star:'木星',el:'火象',trait:'自由乐观，爱冒险，向往远方',good:'豁达真诚、有远见、幽默',bad:'粗心大意、爱许诺、不靠谱'},
 {n:'摩羯座',s:'♑',d:'12.22-1.19',star:'土星',el:'土象',trait:'务实隐忍，目标明确，长期主义',good:'自律负责、能吃苦、值得信赖',bad:'压抑、功利、不懂变通'},
 {n:'水瓶座',s:'♒',d:'1.20-2.18',star:'天王星',el:'风象',trait:'独立创新，特立独行，未来感十足',good:'聪明博爱、有创意、不随波逐流',bad:'疏离、叛逆、不接地气'},
 {n:'双鱼座',s:'♓',d:'2.19-3.20',star:'海王星',el:'水象',trait:'浪漫梦幻，共情力强，艺术家气质',good:'温柔善良、有艺术感、善解人意',bad:'逃避现实、多愁善感、易受骗'}
];
const COLORS=['樱桃红','天空蓝','薄荷绿','香槟金','曜石黑','珍珠白','薰衣草紫','蜜橙色','墨绿色','樱花粉','藏青色','柠檬黄'];
const DIMS=[['综合','zh'],['爱情','aq'],['事业','sy'],['财运','cy'],['健康','jk']];
let xzSign=0, xzRange='day';

function hashStr(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mulberry(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function dateKey(){
  const d=new Date();
  if(xzRange==='day')return d.toISOString().slice(0,10);
  if(xzRange==='tomorrow'){const t=new Date(d.getTime()+864e5);return t.toISOString().slice(0,10)}
  if(xzRange==='week'){const w=new Date(d);w.setDate(d.getDate()-((d.getDay()+6)%7));return 'W'+w.toISOString().slice(0,10)}
  return d.toISOString().slice(0,7);
}
function xzFortune(){
  const rnd=mulberry(hashStr(SIGNS[xzSign].n+dateKey()));
  const v={};DIMS.forEach(([k])=>{v[k]=2+Math.floor(rnd()*4)}); // 2-5
  if(rnd()<0.25)v['综合']=5; if(rnd()<0.12)v['综合']=1;
  return {v, color:COLORS[Math.floor(rnd()*COLORS.length)], num:1+Math.floor(rnd()*9),
    match:SIGNS[Math.floor(rnd()*12)].n};
}
const SUM5=['今日气场全开，宜主动出击，好运会眷顾勇敢的人。','整体顺遂，节奏在你手里，按计划推进即可。','平稳中藏着小确幸，别忽略身边的善意。'];
const SUM4=['运势在线，稍作努力就能超出预期。','状态不错，适合处理之前拖着的事。','顺风顺水的一天，记得给自己鼓掌。'];
const SUM3=['平平淡淡才是真，稳住节奏就是赢。','有小波折但无大碍，保持耐心。','宜守不宜攻，把基础打牢。'];
const SUM2=['水逆既视感，重要决定先放一放。','容易心烦，少说话多喝水，低调度过。','别硬刚，退一步海阔天空。'];
const SUM1=['诸事不宜躺平？不，今日宜躺平充电。','运势低谷期，适合复盘和休息，不宜折腾。','先照顾好自己，明天会更好。'];
function pick(a,rnd){return a[Math.floor(rnd()*a.length)]}
function xzSummary(f){
  const rnd=mulberry(hashStr('sum'+SIGNS[xzSign].n+dateKey()));
  const z=f.v['综合'];
  let s=pick(z>=5?SUM5:z===4?SUM4:z===3?SUM3:z===2?SUM2:SUM1,rnd);
  const best=DIMS.reduce((a,b)=>f.v[a[0]]>f.v[b[0]]?a:b)[0];
  const worst=DIMS.reduce((a,b)=>f.v[a[0]]<f.v[b[0]]?a:b)[0];
  const dimTxt={爱情:'桃花/感情运',事业:'工作学业运',财运:'偏财正财运',健康:'身体状态'};
  if(f.v[best]>=4&&best!=='综合')s+=''+dimTxt[best]+'亮眼，可重点把握。';
  if(f.v[worst]<=2&&worst!=='综合')s+=''+dimTxt[worst]+'稍弱，多留一份心。';
  return s;
}
function stars(v){return '★'.repeat(v)+'☆'.repeat(5-v)}
function xzRender(){
  document.querySelectorAll('.xz-sign').forEach((el,i)=>el.classList.toggle('active',i===xzSign));
  document.querySelectorAll('.xz-tab').forEach(el=>el.classList.toggle('active',el.dataset.r===xzRange));
  const sg=SIGNS[xzSign], f=xzFortune();
  const rname={day:'今日',tomorrow:'明日',week:'本周',month:'本月'}[xzRange];
  document.getElementById('xz-fortune').innerHTML=`
    <h2>${sg.s} ${sg.n}</h2><div class="sub">${rname}运势 · ${sg.d} · ${sg.el}星座 · 守护星${sg.star}</div>
    ${DIMS.map(([k])=>`<div class="xz-dim"><div class="row"><span>${k}运势</span><span style="color:#ff7a45;font-weight:700;">${stars(f.v[k])}</span></div><div class="xz-bar"><i style="width:${f.v[k]*20}%"></i></div></div>`).join('')}
    <div class="xz-lucky">
      <div class="lk"><div class="k">🍀 幸运颜色</div><div class="v">${f.color}</div></div>
      <div class="lk"><div class="k">🔢 幸运数字</div><div class="v">${f.num}</div></div>
      <div class="lk"><div class="k">💘 速配星座</div><div class="v">${f.match}</div></div>
    </div>
    <div class="xz-summary">📝 <b>运势简述：</b>${xzSummary(f)}</div>`;
  const p=SIGNS[xzSign];
  document.getElementById('xz-profile').innerHTML=`
    <div class="pf"><b>📅 出生日期</b><br>${p.d}</div>
    <div class="pf"><b>🪐 守护星 / 属性</b><br>${p.star} · ${p.el}星座</div>
    <div class="pf"><b>✨ 性格速写</b><br>${p.trait}</div>
    <div class="pf"><b>👍 优点</b><br>${p.good}</div>
    <div class="pf"><b>👎 短板</b><br>${p.bad}</div>
    <div class="pf"><b>💡 马老师建议</b><br>把「${p.good.split('、')[0]}」用在正事上，把「${p.bad.split('、')[0]}」留给镜子里的自己慢慢改。</div>`;
}
function xzPair(){
  const a=+document.getElementById('xz-p1').value, b=+document.getElementById('xz-p2').value;
  const A=SIGNS[a], B=SIGNS[b];
  const rnd=mulberry(hashStr('pair'+A.n+B.n));
  let score=40+Math.floor(rnd()*45);
  const elR=(A.el===B.el)?'同象星座，默契天成':((A.el[0]==='火'&&B.el[0]==='风')||(A.el[0]==='风'&&B.el[0]==='火')||(A.el[0]==='土'&&B.el[0]==='水')||(A.el[0]==='水'&&B.el[0]==='土'))?'相生组合，互补加分':'需要多磨合，差异也是火花';
  if(A.el===B.el)score+=10; else if(elR.includes('相生'))score+=8;
  score=Math.min(99,score);
  const c=score>=90?'天作之合':score>=75?'非常合拍':score>=60?'磨合上佳':'挑战与成长并存';
  const txt=score>=90?'你们是人群中一眼万年的组合，节奏天然同步。':score>=75?'三观契合、相处舒服，是让人羡慕的一对。':score>=60?'有火花也有摩擦，多沟通就能越过越好。':'差异很大，但差异恰恰是互相照见、共同成长的镜子。';
  document.getElementById('xz-pair-result').style.display='block';
  document.getElementById('xz-pair-result').innerHTML=`<div style="font-size:15px;font-weight:700;">${A.s}${A.n} × ${B.s}${B.n}</div><div class="xz-score">${score}<span style="font-size:18px;">分</span></div><div style="font-weight:700;color:#ff7a45;margin:6px 0;">${c} · ${elR}</div><div style="font-size:14px;color:#666;line-height:1.8;">${txt}</div>`;
}
(function init(){
  // 每天自动更新的日期（tab 标签 + 今日行）
  const WD=['日','一','二','三','四','五','六'];
  const d=new Date(), md=m=>`${m.getMonth()+1}.${m.getDate()}`;
  const tmr=new Date(d.getTime()+864e5);
  const wkS=new Date(d); wkS.setDate(d.getDate()-((d.getDay()+6)%7));
  const wkE=new Date(wkS); wkE.setDate(wkS.getDate()+6);
  document.getElementById('xz-d-day').textContent=md(d)+' 周'+WD[d.getDay()];
  document.getElementById('xz-d-tomorrow').textContent=md(tmr)+' 周'+WD[tmr.getDay()];
  document.getElementById('xz-d-week').textContent=md(wkS)+'-'+md(wkE);
  document.getElementById('xz-d-month').textContent=(d.getMonth()+1)+'月';
  document.getElementById('xz-today-line').textContent=`📅 今天是 ${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 星期${WD[d.getDay()]}，运势每日零点更新`;
  document.getElementById('xz-grid').innerHTML=SIGNS.map((s,i)=>`<div class="xz-sign" onclick="xzSign=${i};xzRender()"><div class="s">${s.s}</div><div class="n">${s.n}</div><div class="d">${s.d}</div></div>`).join('');
  document.querySelectorAll('.xz-tab').forEach(el=>el.onclick=()=>{xzRange=el.dataset.r;xzRender()});
  const opts=SIGNS.map((s,i)=>`<option value="${i}">${s.s} ${s.n}</option>`).join('');
  document.getElementById('xz-p1').innerHTML=opts;document.getElementById('xz-p2').innerHTML=opts;
  document.getElementById('xz-p2').value='1';
  xzRender();
})();
</script>
