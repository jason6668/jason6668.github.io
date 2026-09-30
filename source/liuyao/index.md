---
title: 六爻占卜
date: 2026-09-30
---

<style>
.ly-wrap{max-width:960px;margin:0 auto;padding:10px 14px 40px;font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#333}
.ly-hero{text-align:center;padding:30px 10px 14px}
.ly-hero h1{font-size:30px;margin:0 0 8px}
.ly-hero p{color:#888;margin:4px 0;font-size:14px}
.ly-card{background:#fff;border-radius:18px;padding:22px;box-shadow:0 6px 24px rgba(0,0,0,.06);margin-bottom:16px}
.ly-step{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.ly-step.no{width:28px;height:28px;border-radius:50%;background:#1a1a2e;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;flex-shrink:0}
.ly-step.t{font-size:18px;font-weight:800}
.ly-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.ly-input,.ly-select{padding:10px 14px;border:2px solid #eef0f7;border-radius:10px;font-size:14px;font-family:inherit}
.ly-area{width:100%;min-height:70px;padding:12px 14px;border:2px solid #eef0f7;border-radius:12px;font-size:14px;font-family:inherit;resize:vertical;box-sizing:border-box}
.ly-cat{padding:9px 18px;border-radius:20px;border:2px solid #eef0f7;background:#fff;cursor:pointer;font-size:14px;font-weight:600}
.ly-cat.active{background:#1a1a2e;color:#fff;border-color:#1a1a2e}
.ly-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 16px}
.ly-tab{padding:9px 20px;border-radius:12px;border:2px solid #eef0f7;background:#f7f9fe;cursor:pointer;font-size:14px;font-weight:600}
.ly-tab.active{background:#b8860b;border-color:#b8860b;color:#fff}
.ly-btn{padding:11px 26px;border-radius:12px;border:none;background:linear-gradient(135deg,#b8860b,#8b6508);color:#fff;font-weight:700;cursor:pointer;font-size:15px}
.ly-btn.ghost{background:#f0f2f8;color:#333}
.ly-btn:disabled{opacity:.5;cursor:not-allowed}
.ly-yao{display:flex;align-items:center;gap:12px;padding:10px 6px;border-bottom:1px dashed #eee;font-size:15px}
.ly-yao.pos{width:44px;color:#999;font-size:13px;flex-shrink:0}
.ly-yao.coins{font-size:26px;letter-spacing:4px;min-width:110px}
.ly-yao.res{font-weight:800;font-size:16px}
.ly-yao.res.move{color:#c0392b}
table.ly-pan{width:100%;border-collapse:collapse;font-size:14px;margin:12px 0}
table.ly-pan th{background:#1a1a2e;color:#d4af37;padding:10px 6px;font-size:13px}
table.ly-pan td{border-bottom:1px solid #f0f0f0;padding:9px 6px;text-align:center}
table.ly-pan tr.dong td{background:#fff8f0}
.ly-shi{color:#c0392b;font-weight:800}
.ly-ying{color:#2980b9;font-weight:800}
.ly-gua-name{font-size:22px;font-weight:800;text-align:center;margin:6px 0}
.ly-gua-sub{text-align:center;color:#888;font-size:13px;margin-bottom:8px}
.ly-ci{background:#faf8f0;border:1px solid #e8dfc8;border-radius:12px;padding:14px 16px;font-size:14px;line-height:1.9;margin:10px 0}
.ly-duan{background:#f7f9fe;border-left:4px solid #b8860b;border-radius:0 12px 12px 0;padding:12px 16px;margin:10px 0;font-size:14px;line-height:1.9}
.ly-duan b{color:#8b6508}
.ly-verdict{text-align:center;padding:18px;border-radius:14px;margin:14px 0;font-size:16px;font-weight:800}
.ly-hist{font-size:13px;color:#666;line-height:2}
.ly-note{text-align:center;color:#aaa;font-size:12px;margin-top:24px;line-height:1.8}
@media(max-width:640px){table.ly-pan{font-size:12px}.ly-yao.coins{min-width:90px}}
</style>

<div class="ly-wrap">
<div class="ly-hero">
<h1>☯️ 六爻占卜</h1>
<p>铜钱摇卦 · 自动排盘 · 断卦参考</p>
<p style="font-size:12px;color:#bbb;">源自《周易》的传统民俗数术，仅供文化学习与娱乐，不构成决策建议</p>
</div>

<div class="ly-card">
<div class="ly-step"><div class="no">1</div><div class="t">诚心问事</div></div>
<textarea class="ly-area" id="ly-q" placeholder="默念你想问的事，写下来更灵：比如“今年跳槽去新公司好不好？”"></textarea>
<div class="ly-row" style="margin-top:12px;gap:8px;">
<span style="font-size:14px;color:#888;">所问类别：</span>
<button class="ly-cat active" data-c="综合">综合</button>
<button class="ly-cat" data-c="事业">事业</button>
<button class="ly-cat" data-c="财运">财运</button>
<button class="ly-cat" data-c="感情">感情</button>
<button class="ly-cat" data-c="学业">学业</button>
</div>
</div>

<div class="ly-card">
<div class="ly-step"><div class="no">2</div><div class="t">起卦</div></div>
<div class="ly-tabs">
<button class="ly-tab active" data-m="coin">🪙 铜钱手摇</button>
<button class="ly-tab" data-m="num">🔢 数字起卦</button>
<button class="ly-tab" data-m="time">⏰ 时间起卦</button>
<button class="ly-tab" data-m="pick">🎯 自选装卦</button>
</div>
<div id="ly-m-coin">
<p style="font-size:13px;color:#888;">三枚铜钱摇六次，从初爻（最下）摇到上爻（最上）。三字为交（老阴×），三背为重（老阳○）。</p>
<div id="ly-yaos"></div>
<div class="ly-row" style="margin-top:12px;">
<button class="ly-btn" id="ly-shake">摇一爻</button>
<button class="ly-btn ghost" onclick="lyAuto()">一键自动摇完</button>
<button class="ly-btn ghost" onclick="lyReset()">重摇</button>
</div>
</div>
<div id="ly-m-num" style="display:none">
<p style="font-size:13px;color:#888;">心里默念所问之事，随意报三个三位数（或任意数字）。</p>
<div class="ly-row">
<input class="ly-input" id="ly-n1" type="number" placeholder="数字一" style="width:110px">
<input class="ly-input" id="ly-n2" type="number" placeholder="数字二" style="width:110px">
<input class="ly-input" id="ly-n3" type="number" placeholder="数字三" style="width:110px">
<button class="ly-btn" onclick="lyNumGo()">起卦</button>
</div>
</div>
<div id="ly-m-time" style="display:none">
<p style="font-size:13px;color:#888;">以起卦时的年、月、日、时数字起卦（梅花易数法）。</p>
<div class="ly-row">
<input class="ly-input" id="ly-t1" type="number" placeholder="年 如2026" style="width:120px">
<input class="ly-input" id="ly-t2" type="number" placeholder="月" style="width:90px">
<input class="ly-input" id="ly-t3" type="number" placeholder="日" style="width:90px">
<input class="ly-input" id="ly-t4" type="number" placeholder="时(0-23)" style="width:110px">
<button class="ly-btn" onclick="lyTimeGo()">起卦</button>
<button class="ly-btn ghost" onclick="lyTimeNow()">用现在时间</button>
</div>
</div>
<div id="ly-m-pick" style="display:none">
<p style="font-size:13px;color:#888;">直接指定上下卦与动爻（供学习核对装卦用）。</p>
<div class="ly-row">
<select class="ly-select" id="ly-pu"></select>
<span>上</span><select class="ly-select" id="ly-pl"></select><span>下</span>
<span style="font-size:13px;color:#888;">动爻：</span>
<label><input type="checkbox" class="ly-pd" value="1">初</label>
<label><input type="checkbox" class="ly-pd" value="2">二</label>
<label><input type="checkbox" class="ly-pd" value="3">三</label>
<label><input type="checkbox" class="ly-pd" value="4">四</label>
<label><input type="checkbox" class="ly-pd" value="5">五</label>
<label><input type="checkbox" class="ly-pd" value="6">上</label>
<button class="ly-btn" onclick="lyPickGo()">装卦</button>
</div>
</div>
</div>

<div class="ly-card" id="ly-result-card" style="display:none">
<div class="ly-step"><div class="no">3</div><div class="t">排盘</div></div>
<div class="ly-row" style="margin-bottom:10px;font-size:14px;">
<span>📅 起卦日：<input type="date" class="ly-input" id="ly-date" style="padding:6px 10px;" onchange="lyRepan()"></span>
<span>日辰：<b id="ly-rich"></b></span>
<span>月建：<select class="ly-select" id="ly-yue" style="padding:6px 10px;" onchange="lyRepan()"></select><span style="color:#999;font-size:12px;">（按农历月，默认本月）</span></span>
</div>
<div id="ly-pan"></div>
</div>

<div class="ly-card" id="ly-duan-card" style="display:none">
<div class="ly-step"><div class="no">4</div><div class="t">断卦参考</div></div>
<div id="ly-duan"></div>
</div>

<div class="ly-card">
<div class="ly-step"><div class="no">📜</div><div class="t">占卜记录</div></div>
<div class="ly-hist" id="ly-hist">暂无记录</div>
<button class="ly-btn ghost" style="margin-top:8px;font-size:13px;padding:8px 18px;" onclick="lyClearHist()">清空记录</button>
</div>

<div class="ly-note">六爻纳甲、世应、旬空、六兽皆按传统规则自动推演<br>💬 联系马老师：<a href="https://t.me/sisumasanBot" target="_blank">✈️ Telegram @sisumasanBot</a> · <a href="mailto:ma@8818618.xyz">📧 ma@8818618.xyz</a></div>
</div>

<script>
/* ===== 基础表 ===== */
const G=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const Z=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const Z5={子:'水',丑:'土',寅:'木',卯:'木',辰:'土',巳:'火',午:'火',未:'土',申:'金',酉:'金',戌:'土',亥:'水'};
const TN=['乾','兑','离','震','巽','坎','艮','坤'];
const TB=[[1,1,1],[1,1,0],[1,0,1],[1,0,0],[0,1,1],[0,1,0],[0,0,1],[0,0,0]]; // 初,二,三
const TW=['金','金','火','木','木','水','土','土']; // 宫五行
const NJ_IN=[['甲子','甲寅','甲辰'],['丁巳','丁卯','丁丑'],['己卯','己丑','己亥'],['庚子','庚寅','庚辰'],['辛丑','辛亥','辛酉'],['戊寅','戊辰','戊午'],['丙辰','丙午','丙申'],['乙未','乙巳','乙卯']];
const NJ_OUT=[['壬午','壬申','壬戌'],['丁亥','丁酉','丁未'],['己酉','己未','己巳'],['庚午','庚申','庚戌'],['辛未','辛巳','辛卯'],['戊申','戊戌','戊子'],['丙戌','丙子','丙寅'],['癸丑','癸亥','癸酉']];
const GNAME=[
['乾为天','天泽履','天火同人','天雷无妄','天风姤','天水讼','天山遁','天地否'],
['泽天夬','兑为泽','泽火革','泽雷随','泽风大过','泽水困','泽山咸','泽地萃'],
['火天大有','火泽睽','离为火','火雷噬嗑','火风鼎','火水未济','火山旅','火地晋'],
['雷天大壮','雷泽归妹','雷火丰','震为雷','雷风恒','雷水解','雷山小过','雷地豫'],
['风天小畜','风泽中孚','风火家人','风雷益','巽为风','风水涣','风山渐','风地观'],
['水天需','水泽节','水火既济','水雷屯','水风井','坎为水','水山蹇','水地比'],
['山天大畜','山泽损','山火贲','山雷颐','山风蛊','山水蒙','艮为山','山地剥'],
['地天泰','地泽临','地火明夷','地雷复','地风升','地水师','地山谦','坤为地']];
const GCI=[
 '元亨，利贞。',
 '履虎尾，不咥人，亨。',
 '同人于野，亨。利涉大川，利君子贞。',
 '元亨，利贞。其匪正有眚，不利有攸往。',
 '女壮，勿用取女。',
 '有孚，窒惕，中吉，终凶。利见大人，不利涉大川。',
 '亨，小利贞。',
 '否之匪人，不利君子贞，大往小来。',
 '扬于王庭，孚号有厉。告自邑，不利即戎，利有攸往。',
 '亨，利贞。',
 '巳日乃孚，元亨，利贞，悔亡。',
 '元亨，利贞，无咎。',
 '栋桡，利有攸往，亨。',
 '亨，贞，大人吉，无咎。有言不信。',
 '亨，利贞，取女吉。',
 '亨。王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。',
 '元亨。',
 '小事吉。',
 '利贞，亨。畜牝牛，吉。',
 '亨，利用狱。',
 '元吉，亨。',
 '亨。小狐汔济，濡其尾，无攸利。',
 '小亨，旅贞吉。',
 '康侯用锡马蕃庶，昼日三接。',
 '利贞。',
 '征凶，无攸利。',
 '亨。王假之，勿忧，宜日中。',
 '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
 '亨，无咎，利贞，利有攸往。',
 '利西南。无所往，其来复吉。有攸往，夙吉。',
 '亨，利贞。可小事，不可大事。',
 '利建侯，行师。',
 '亨。密云不雨，自我西郊。',
 '豚鱼吉，利涉大川，利贞。',
 '利女贞。',
 '利有攸往，利涉大川。',
 '小亨，利有攸往，利见大人。',
 '亨。王假有庙，利涉大川，利贞。',
 '女归吉，利贞。',
 '盥而不荐，有孚颙若。',
 '有孚，光亨，贞吉，利涉大川。',
 '亨。苦节，不可贞。',
 '亨，小利贞。初吉终乱。',
 '元亨，利贞。勿用有攸往，利建侯。',
 '改邑不改井，无丧无得。往来井井。',
 '习坎，有孚，维心亨，行有尚。',
 '利西南，不利东北。利见大人，贞吉。',
 '吉。原筮，元永贞，无咎。',
 '利贞。不家食，吉。利涉大川。',
 '有孚，元吉，无咎，可贞，利有攸往。',
 '亨，小利有攸往。',
 '贞吉。观颐，自求口实。',
 '元亨，利涉大川。先甲三日，后甲三日。',
 '亨。匪我求童蒙，童蒙求我。',
 '艮其背，不获其身。行其庭，不见其人，无咎。',
 '不利有攸往。',
 '小往大来，吉，亨。',
 '元亨，利贞。至于八月有凶。',
 '利艰贞。',
 '亨。出入无疾，朋来无咎。',
 '元亨。用见大人，勿恤。南征吉。',
 '贞，丈人吉，无咎。',
 '亨，君子有终。',
 '元亨，利牝马之贞。',
];
const SHENG={木:'火',火:'土',土:'金',金:'水',水:'木'};
const KE={木:'土',土:'水',水:'火',火:'金',金:'木'};
const BEAST=['青龙','朱雀','勾陈','螣蛇','白虎','玄武'];
const YAO_POS=['初爻','二爻','三爻','四爻','五爻','上爹'.replace('爹','爻')];
let lyCat='综合', lyYao=[null,null,null,null,null,null], lyPan=null;

/* ===== 干支 ===== */
function ganzhi(dateStr){
const d=new Date(dateStr+'T12:00:00');
const anchor=Date.UTC(2026,8,30); // 2026-09-30 丁未
const diff=Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-anchor)/864e5);
const idx=((43+diff)%60+60)%60;
return {gz:G[idx%10]+Z[idx%12], gan:G[idx%10], zhi:Z[idx%12], idx};
}
function xunkong(idx){
const xs=idx-(idx%10);
return Z[(xs+10)%12]+Z[(xs+11)%12];
}
function beastStart(gan){
if('甲乙'.includes(gan))return 0; if('丙丁'.includes(gan))return 1;
if(gan==='戊')return 2; if(gan==='己')return 3;
if('庚辛'.includes(gan))return 4; return 5;
}
function qin(gong,b5){
if(gong===b5)return '兄弟';
if(SHENG[gong]===b5)return '子孙';
if(SHENG[b5]===gong)return '父母';
if(KE[gong]===b5)return '妻财';
return '官鬼';
}
function rel(a,b){ // a对b
if(a===b)return '比和';
if(SHENG[a]===b)return '生'+b;
if(SHENG[b]===a)return '被'+b+'生';
if(KE[a]===b)return '克'+b;
return '被'+b+'克';
}

/* ===== 装卦 ===== */
function paipan(bits, moving){
// bits: [b1..b6] 1=阳
const L=triOf(bits.slice(0,3)), U=triOf(bits.slice(3,6));
let palace=-1, shi=0, kind='';
for(let P=0;P<8;P++){
const pure=TB[P].concat(TB[P]);
const ch=[]; for(let i=0;i<6;i++) if(bits[i]!==pure[i]) ch.push(i+1);
const key=ch.join(',');
const map={'':[6,'八纯'],'1':[1,'一世'],'1,2':[2,'二世'],'1,2,3':[3,'三世'],'1,2,3,4':[4,'四世'],'1,2,3,4,5':[5,'五世'],'1,2,3,5':[4,'游魂'],'5':[3,'归魂']};
if(map[key]){palace=P; shi=map[key][0]; kind=map[key][1]; break;}
}
const ying=shi>3?shi-3:shi+3;
const gong5=TW[palace];
const yaos=[];
for(let i=0;i<6;i++){
const gz=(i<3?NJ_IN[L][i]:NJ_OUT[U][i-3]);
const b5=Z5[gz[1]];
yaos.push({pos:i+1, yin:bits[i]===0, move:!!moving[i], gz, q:qin(gong5,b5), b5,
isShi:i+1===shi, isYing:i+1===ying});
}
// 变卦
let bian=null;
if(moving.some(Boolean)){
const b2=bits.map((b,i)=>moving[i]?(b?0:1):b);
const L2=triOf(b2.slice(0,3)), U2=triOf(b2.slice(3,6));
const byaos=[];
for(let i=0;i<6;i++){
if(!moving[i]){byaos.push(null);continue}
const gz=(i<3?NJ_IN[L2][i]:NJ_OUT[U2][i-3]);
const b5=Z5[gz[1]];
byaos.push({gz, q:qin(gong5,b5), b5});
}
bian={name:GNAME[U2][L2], ci:GCI[U2*8+L2], yaos:byaos, U:U2, L:L2};
}
return {L,U,name:GNAME[U][L],ci:GCI[U*8+L],palace:TN[palace],palace5:gong5,shi,ying,kind,yaos,bian,movingIdx:moving.map((m,i)=>m?i+1:0).filter(Boolean)};
}
function triOf(b){
for(let i=0;i<8;i++) if(TB[i][0]===b[0]&&TB[i][1]===b[1]&&TB[i][2]===b[2]) return i;
return 0;
}

/* ===== 渲染 ===== */
function lyDoPan(bits, moving){
const dateStr=document.getElementById('ly-date').value;
const gz=ganzhi(dateStr);
const yue=document.getElementById('ly-yue').value;
lyPan={pan:paipan(bits,moving), gz, yue,
q:document.getElementById('ly-q').value.trim(), cat:lyCat, date:dateStr};
renderPan(); renderDuan(); saveHist();
document.getElementById('ly-result-card').style.display='block';
document.getElementById('ly-duan-card').style.display='block';
document.getElementById('ly-result-card').scrollIntoView({behavior:'smooth'});
}
function lyRepan(){
if(!lyPan)return;
const bits=lyPan.pan.yaos.map(y=>y.yin?0:1);
const moving=lyPan.pan.yaos.map(y=>y.move);
lyDoPan(bits,moving);
}
function renderPan(){
const {pan,gz,yue}=lyPan;
document.getElementById('ly-rich').textContent=gz.gz+'日';
const bs=beastStart(gz.gan), xk=xunkong(gz.idx);
const yue5=Z5[yue];
let html=`<div class="ly-gua-name">${pan.name} <span style="font-size:14px;color:#888;">${TN[pan.palace]}宫 · ${pan.kind}</span></div>
<div class="ly-gua-sub">${gz.gz}日 · 月建${yue} · 旬空${xk} · 问${lyPan.cat} · ${lyPan.q?('问：'+lyPan.q):'未写问事'}</div>
<table class="ly-pan"><tr><th>六兽</th><th>干支 · 六亲</th><th>世应</th><th>爻象</th><th>变爻</th></tr>`;
for(let i=5;i>=0;i--){
const y=pan.yaos[i];
const mark=y.isShi?'<span class="ly-shi">世</span>':(y.isYing?'<span class="ly-ying">应</span>':'');
const yaoTxt=(y.yin?'⚋':'⚊')+(y.move?(y.yin?' ×':' ○'):'');
const b=pan.bian&&pan.bian.yaos[i];
html+=`<tr class="${y.move?'dong':''}"><td>${BEAST[(bs+i)%6]}</td><td>${y.gz}${y.q}<span style="color:#999;font-size:12px;">(${y.b5})</span></td><td>${mark}</td><td style="font-size:18px;">${yaoTxt}</td><td>${b?b.gz+b.q+'<span style="color:#999;font-size:12px;">('+b.b5+')</span>':''}</td></tr>`;
}
html+='</table>';
html+=`<div class="ly-ci">📖 <b>本卦卦辞 · ${pan.name}：</b>${pan.ci}</div>`;
if(pan.bian) html+=`<div class="ly-gua-name" style="font-size:19px;">${pan.bian.name}</div><div class="ly-ci">📖 <b>变卦卦辞 · ${pan.bian.name}：</b>${pan.bian.ci}</div>`;
else html+='<div class="ly-gua-sub">六爻安静，无动爻，为静卦，以本卦卦辞与世爻断。</div>';
document.getElementById('ly-pan').innerHTML=html;
}
function yongShen(){
const map={综合:null,事业:'官鬼',财运:'妻财',感情:'妻财',学业:'父母'};
return map[lyPan.cat];
}
function renderDuan(){
const {pan,gz,yue}=lyPan;
const yue5=Z5[yue], ri5=Z5[gz.zhi];
const ysNeed=yongShen();
let ys, ysName;
if(!ysNeed){ ys=pan.yaos[pan.shi-1]; ysName='世爻（'+ys.gz+ys.q+'）';}
else{
const cands=pan.yaos.filter(y=>y.q===ysNeed);
ys=cands.find(y=>y.move)||cands[0];
if(ys) ysName=ysNeed+'（'+ys.gz+'，'+YAO_POS[ys.pos-1]+'）';
else { ys=pan.yaos[pan.shi-1]; ysName='卦中无'+ysNeed+'，以世爻（'+ys.gz+ys.q+'）为参考';}
}
// 旺衰打分
let score=0; const logs=[];
const r1=rel(yue5,ys.b5), r2=rel(ri5,ys.b5);
if(r1.includes('生')&&!r1.includes('被')){score+=2;logs.push('得月建'+yue+'（'+yue5+'）生扶')}
else if(r1==='比和'){score+=2;logs.push('得月建'+yue+'比和')}
else if(r1.includes('克')){score-=2;logs.push('受月建'+yue+'（'+yue5+'）克制')}
if(r2.includes('生')&&!r2.includes('被')){score+=2;logs.push('得日辰'+gz.zhi+'（'+ri5+'）生扶')}
else if(r2==='比和'){score+=2;logs.push('得日辰'+gz.zhi+'比和')}
else if(r2.includes('克')){score-=2;logs.push('受日辰'+gz.zhi+'（'+ri5+'）克制')}
pan.yaos.forEach(y=>{
if(!y.move||y.pos===ys.pos)return;
const r=rel(y.b5,ys.b5);
if(r[0]==='生'){score+=1;logs.push(YAO_POS[y.pos-1]+'动而生用神')}
else if(r[0]==='克'){score-=1;logs.push(YAO_POS[y.pos-1]+'动而克用神')}
});
if(ys.move&&pan.bian){
const b=pan.bian.yaos[ys.pos-1];
const r=rel(ys.b5,b.b5);
if(r==='比和'||r[0]==='生'){score+=2;logs.push('用神发动化'+(r==='比和'?'比和':r)+'，得变爻之助')}
else if(r[0]==='克'){score-=2;logs.push('用神发动化回头克（'+ys.gz+'→'+b.gz+'），先吉后凶之象')}
}
const xk=xunkong(gz.idx);
const isKong=xk.includes(gz.zhi)||xk.includes(ys.gz[1]);
const wang=score>=3?'旺相':score<=-3?'休囚':'平和';
let html=`<div class="ly-duan"><b>🎯 用神：</b>${ysName}。${lyPan.cat==='综合'?'问事综合，以世爻为用神，看世爻旺衰与动变。':'问'+lyPan.cat+'以'+ysNeed+'为用神。'}</div>`;
html+=`<div class="ly-duan"><b>⚖️ 旺衰：</b>用神${wang}（${logs.join('；')||'日月无明显生克'}）。${
wang==='旺相'?'日月生扶，根基扎实，所问之事易成。':wang==='休囚'?'日月克泄交加，阻力不小，宜缓图、宜守不宜攻。':'得失参半，成败多在人为，努力可转机。'}</div>`;
if(pan.movingIdx.length){
html+=`<div class="ly-duan"><b>⚡ 动爻：</b>${pan.movingIdx.map(i=>{
const y=pan.yaos[i-1], b=pan.bian.yaos[i-1];
const r=rel(y.b5,b.b5);
const ht=r==='比和'?'化比和':r[0]==='生'?'化回头生，大吉之象':r[0]==='克'?'化回头克，吉中藏凶':'化泄';
return YAO_POS[i-1]+y.gz+y.q+'发动，变'+b.gz+b.q+'（'+ht+'）';
}).join('；')}。动爻为事之端倪，所动之爻多应事情的关键环节。</div>`;
} else html+='<div class="ly-duan"><b>⚡ 动爻：</b>六爻安静，事情按部就班，短期少有突变，看世爻旺衰与卦辞大意即可。</div>';
const shiY=pan.yaos[pan.shi-1], yingY=pan.yaos[pan.ying-1];
const sr=rel(shiY.b5,yingY.b5);
html+=`<div class="ly-duan"><b>🤝 世应：</b>世为己（${shiY.gz}${shiY.q}），应为彼（${yingY.gz}${yingY.q}），世应${sr}。${
sr[0]==='生'?'世生应，多主我方主动付出；':sr.includes('被')&&sr.includes('生')?'应生世，对方/环境对我有利；':sr[0]==='克'?'世克应，我方占主动，可谋事；':sr.includes('被')?'应克世，外部压力大，宜守；':'世应比和，关系平稳。'}</div>`;
if(isKong) html+='<div class="ly-duan"><b>🈳 旬空：</b>用神临旬空（'+xk+'），时机未到或所测之事暂不实在，待出空（逢'+xk+'之日）再看。</div>';
const verdict=wang==='旺相'&&score>=4?['所测之事大吉，易成','background:#e8f7ee;color:#1e7e34']:wang==='休囚'?['阻力较大，宜缓图慎行','background:#fdecea;color:#c0392b']:['吉凶参半，谋事在人','background:#fff8e6;color:#b8860b'];
html+=`<div class="ly-verdict" style="${verdict[1]}">总断：${verdict[0]}</div>`;
html+='<div style="font-size:12px;color:#999;">以上为传统六爻规则的程序化推演，供学习娱乐；人生大事请结合现实理性判断。</div>';
document.getElementById('ly-duan').innerHTML=html;
}

/* ===== 起卦方式 ===== */
let lyMethod='coin';
document.querySelectorAll('.ly-tab').forEach(el=>el.onclick=()=>{
lyMethod=el.dataset.m;
document.querySelectorAll('.ly-tab').forEach(e=>e.classList.toggle('active',e===el));
['coin','num','time','pick'].forEach(m=>document.getElementById('ly-m-'+m).style.display=m===lyMethod?'block':'none');
});
document.querySelectorAll('.ly-cat').forEach(el=>el.onclick=()=>{
lyCat=el.dataset.c;
document.querySelectorAll('.ly-cat').forEach(e=>e.classList.toggle('active',e===el));
});
function renderYaos(){
const names=['初爻','二爻','三爻','四爻','五爻','上爻'];
document.getElementById('ly-yaos').innerHTML=lyYao.map((y,i)=>{
const idx=5-i;
const r=y?(y.yin?(y.move?'老阴 ××':'少阴 ⚋'):(y.move?'老阳 ○':'少阳 ⚊')):'待摇';
return `<div class="ly-yao"><div class="pos">${names[idx]}</div><div class="coins" id="ly-c${idx}">${y?'🪙🪙🪙':'···'}</div><div class="res${y&&y.move?' move':''}">${r}</div></div>`;
}).join('');
const done=lyYao.every(Boolean);
document.getElementById('ly-shake').disabled=done;
document.getElementById('ly-shake').textContent=done?'已摇完':('摇'+names[lyYao.findIndex(x=>!x)]||'');
}
function doShake(i, cb){
const el=document.getElementById('ly-c'+i);
let n=0; const faces=['🪙','🪙','⭕'];
const t=setInterval(()=>{
el.textContent=[0,1,2].map(()=>faces[Math.floor(Math.random()*3)]).join('');
if(++n>6){clearInterval(t);
const heads=[0,1,2].map(()=>Math.random()<0.5?1:0).reduce((a,b)=>a+b,0);
// heads = 正面数：3老阴 2少阳 1少阴 0老阳
const y=heads===3?{yin:1,move:1}:heads===2?{yin:0,move:0}:heads===1?{yin:1,move:0}:{yin:0,move:1};
lyYao[i]=y; renderYaos();
if(lyYao.every(Boolean)) finishCoin();
cb&&cb();
}
},110);
}
function finishCoin(){
const bits=lyYao.map(y=>y.yin?0:1);
const moving=lyYao.map(y=>!!y.move);
setTimeout(()=>lyDoPan(bits,moving),400);
}
document.getElementById('ly-shake').onclick=()=>{
const i=lyYao.findIndex(x=>!x);
if(i<0)return;
document.getElementById('ly-shake').disabled=true;
doShake(i,()=>{document.getElementById('ly-shake').disabled=false;renderYaos();});
};
function lyAuto(){ const i=lyYao.findIndex(x=>!x); if(i<0)return; doShake(i,lyAuto);}
function lyReset(){ lyYao=[null,null,null,null,null,null]; renderYaos();}
function lyNumGo(){
const a=+document.getElementById('ly-n1').value||0, b=+document.getElementById('ly-n2').value||0, c=+document.getElementById('ly-n3').value||0;
if(!a&&!b&&!c){alert('请先输入三个数字');return}
const U=((a+b)%8)||8, L=((b+c)%8)||8, dy=((a+b+c)%6)||6;
const bits=TB[L-1].concat(TB[U-1]);
const moving=[false,false,false,false,false,false]; moving[dy-1]=true;
lyDoPan(bits,moving);
}
function lyTimeNow(){
const d=new Date();
document.getElementById('ly-t1').value=d.getFullYear();
document.getElementById('ly-t2').value=d.getMonth()+1;
document.getElementById('ly-t3').value=d.getDate();
document.getElementById('ly-t4').value=d.getHours();
}
function lyTimeGo(){
const a=+document.getElementById('ly-t1').value||0, b=+document.getElementById('ly-t2').value||0, c=+document.getElementById('ly-t3').value||0, t=+document.getElementById('ly-t4').value||0;
if(!a||!b||!c){alert('请填写年、月、日');return}
const U=(((a+b+c)%8)||8), L=(((a+b+c+t)%8)||8), dy=(((a+b+c+t)%6)||6);
const bits=TB[L-1].concat(TB[U-1]);
const moving=[false,false,false,false,false,false]; moving[dy-1]=true;
lyDoPan(bits,moving);
}
function lyPickGo(){
const U=+document.getElementById('ly-pu').value, L=+document.getElementById('ly-pl').value;
const moving=[false,false,false,false,false,false];
document.querySelectorAll('.ly-pd:checked').forEach(el=>moving[+el.value-1]=true);
lyDoPan(TB[L].concat(TB[U]),moving);
}
/* ===== 记录 ===== */
function saveHist(){
try{
const h=JSON.parse(localStorage.getItem('ly_hist')||'[]');
h.unshift({t:lyPan.date, q:lyPan.q||('问'+lyPan.cat), ben:lyPan.pan.name, bian:lyPan.pan.bian?lyPan.pan.bian.name:'静卦', dong:lyPan.pan.movingIdx.map(i=>YAO_POS[i-1]).join('、')||'无'});
localStorage.setItem('ly_hist',JSON.stringify(h.slice(0,30)));
renderHist();
}catch(e){}
}
function renderHist(){
try{
const h=JSON.parse(localStorage.getItem('ly_hist')||'[]');
document.getElementById('ly-hist').innerHTML=h.length?h.map(x=>`${x.t} · ${x.q} → <b>${x.ben}</b>${x.bian!=='静卦'?' → '+x.bian:''}（动：${x.dong}）`).join('<br>'):'暂无记录';
}catch(e){}
}
function lyClearHist(){localStorage.removeItem('ly_hist');renderHist()}
/* ===== 初始化 ===== */
(function(){
renderYaos();
const triOpts=TN.map((n,i)=>`<option value="${i}">${n}</option>`).join('');
document.getElementById('ly-pu').innerHTML=triOpts;
document.getElementById('ly-pl').innerHTML=triOpts;
document.getElementById('ly-yue').innerHTML=Z.map(z=>`<option${z==='酉'?' selected':''}>${z}</option>`).join('');
const d=new Date();
document.getElementById('ly-date').value=d.toISOString().slice(0,10);
lyTimeNow();
renderHist();
// 自检：大有应为乾宫归魂世三爻
const t=paipan([1,1,1,1,0,1],[false,false,false,false,false,false]);
console.log('[liuyao] 自检:', t.name, t.palace+'宫', t.kind, '世'+t.shi+'爻');
})();
</script>
