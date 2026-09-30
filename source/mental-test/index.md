---
title: 心理量表商城 · 免费心理测试大全
date: 2026-04-12
type: "page"
aside: false
top_img: false
copyright: false
reward: false
---

{% raw %}
<style>
#page-header { display: none !important; }
#post-info { display: none !important; }
body { background-color: #f3f4f6; }
.mt-app { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; font-family: "Nunito Sans", "Helvetica Neue", -apple-system, BlinkMacSystemFont, Arial, sans-serif; }
.mt-hero { text-align: center; margin-bottom: 1.6rem; }
.mt-hero h1 { font-size: 2rem; color: #425AEF; margin-bottom: .4rem; }
.mt-hero p { color: #666; font-size: .95rem; }
.mt-search { width: 100%; max-width: 520px; margin: 0 auto 1.2rem; display: block; padding: 13px 20px; border-radius: 30px; border: 2px solid #e3e8f7; font-size: 1rem; outline: none; background: #fff; }
.mt-search:focus { border-color: #425AEF; }
.mt-cats { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 1.6rem; }
.mt-cat { padding: 9px 22px; border-radius: 25px; border: 2px solid #e3e8f7; background: #fff; color: #666; font-weight: 700; cursor: pointer; font-size: .92rem; }
.mt-cat.active { background: #425AEF; border-color: #425AEF; color: #fff; }
.mt-count { text-align: center; color: #999; font-size: .85rem; margin-bottom: 1.2rem; }
.mt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.mt-card { background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,.06); border: 2px solid transparent; cursor: pointer; transition: all .2s; display: flex; flex-direction: column; }
.mt-card:hover { border-color: #425AEF; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(66,90,239,.12); }
.mt-card .emoji { font-size: 2.2rem; }
.mt-card h2 { font-size: 1.08rem; margin: .5rem 0 .35rem; color: #333; }
.mt-card .desc { font-size: .86rem; color: #777; line-height: 1.7; margin-bottom: .8rem; flex: 1; }
.mt-badges { display: flex; gap: .45rem; flex-wrap: wrap; margin-bottom: .9rem; }
.mt-badge { font-size: .75rem; background: rgba(66,90,239,.08); color: #425AEF; padding: .28rem .65rem; border-radius: 20px; font-weight: 600; }
.mt-theory { font-size: .76rem; color: #aaa; margin-bottom: .9rem; }
.mt-start { width: 100%; padding: 12px; background: #425AEF; color: #fff; border: none; border-radius: 10px; font-size: 1rem; font-weight: 700; cursor: pointer; }
.mt-start:hover { opacity: .92; }
@media (max-width: 640px) { .mt-grid { grid-template-columns: 1fr; } }

/* 答题 */
#mt-quiz { display: none; }
.mt-progress-wrap { position: sticky; top: 60px; background: rgba(243,244,246,.95); padding: 15px 0; z-index: 100; border-bottom: 1px solid rgba(0,0,0,.05); }
.mt-progress-head { display: flex; justify-content: space-between; font-weight: 600; color: #a1a1a1; font-size: .9rem; margin-bottom: 8px; }
.mt-progress { width: 100%; height: 6px; background: #e2e2e2; border-radius: 3px; overflow: hidden; }
.mt-progress-bar { height: 100%; background: #33a474; width: 0%; transition: width .4s ease; }
.mt-qbox { padding: 2rem 1.5rem; background: #fff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,.05); margin-top: 1.5rem; animation: fadeIn .3s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
.mt-qtext { font-size: 1.3rem; color: #333; margin-bottom: 1.6rem; font-weight: 600; line-height: 1.6; text-align: center; }
.mt-opts { display: flex; flex-direction: column; gap: .7rem; max-width: 520px; margin: 0 auto; }
.mt-opt { padding: 14px 18px; border: 2px solid #e8ecf5; border-radius: 12px; background: #fff; font-size: 1rem; cursor: pointer; text-align: left; transition: all .15s; color: #444; }
.mt-opt:hover { border-color: #425AEF; background: #f5f7ff; }
.mt-opt.sel { border-color: #425AEF; background: #eef1ff; font-weight: 700; color: #425AEF; }
.mt-qnav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; }
.mt-qnav button { padding: 12px 28px; border-radius: 30px; border: 2px solid #425AEF; background: #fff; color: #425AEF; font-weight: 700; cursor: pointer; }
.mt-qnav button:disabled { opacity: .3; cursor: not-allowed; }
.mt-quit { background: none !important; border: none !important; color: #aaa !important; font-size: .85rem; }

/* 结果 */
#mt-result { display: none; background: #fff; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,.08); padding: 2.5rem 2rem; animation: fadeIn .4s ease; }
.mt-crisis { background: #fff1f1; border: 2px solid #e5484d; border-radius: 12px; padding: 1.2rem 1.4rem; margin-bottom: 1.6rem; color: #a02020; line-height: 1.9; font-size: .95rem; }
.mt-res-head { text-align: center; margin-bottom: 1.8rem; }
.mt-ring { width: 150px; height: 150px; margin: 0 auto 1rem; position: relative; }
.mt-ring svg { transform: rotate(-90deg); }
.mt-ring .num { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.mt-ring .num b { font-size: 2rem; }
.mt-ring .num span { font-size: .78rem; color: #999; }
.mt-band { display: inline-block; font-size: 1.15rem; font-weight: 800; padding: .45rem 1.4rem; border-radius: 25px; color: #fff; margin-bottom: .6rem; }
.mt-band-desc { color: #555; line-height: 1.9; max-width: 560px; margin: 0 auto; }
.mt-sec { margin: 1.8rem 0; }
.mt-sec h3 { font-size: 1.05rem; margin-bottom: .8rem; color: #333; }
.mt-actions { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .6rem; }
.mt-actions li { background: #f5f7ff; border-left: 4px solid #425AEF; border-radius: 0 10px 10px 0; padding: .85rem 1rem; font-size: .93rem; line-height: 1.75; color: #444; }
.mt-items { font-size: .88rem; color: #666; line-height: 2; background: #f8f9fa; border-radius: 10px; padding: 1rem 1.2rem; }
.mt-items b { color: #425AEF; }
.mt-dim { margin-bottom: 1.1rem; }
.mt-dim-top { display: flex; justify-content: space-between; font-size: .92rem; font-weight: 700; margin-bottom: 6px; color: #444; }
.mt-dim-bar { height: 10px; background: #eef1f7; border-radius: 5px; overflow: hidden; }
.mt-dim-fill { height: 100%; border-radius: 5px; transition: width .6s ease; }
.mt-dim-txt { font-size: .88rem; color: #666; line-height: 1.8; margin-top: 6px; }
.mt-dom { background: linear-gradient(135deg, #425AEF, #6a5af9); color: #fff; border-radius: 12px; padding: 1.3rem 1.5rem; margin-bottom: 1.4rem; line-height: 1.9; }
.mt-dom b { font-size: 1.1rem; }
.mt-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin: 1.6rem 0 .5rem; }
.mt-btn { background: #425AEF; color: #fff; border: none; padding: 13px 34px; font-size: 1rem; font-weight: 700; border-radius: 30px; cursor: pointer; }
.mt-btn.ghost { background: #fff; color: #425AEF; border: 2px solid #425AEF; }
.mt-faq { margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1.5rem; }
.mt-faq details { margin-bottom: .7rem; background: #f8f9fa; border-radius: 10px; padding: .9rem 1.1rem; font-size: .9rem; }
.mt-faq summary { font-weight: 700; cursor: pointer; color: #333; }
.mt-faq p { color: #666; line-height: 1.9; margin: .6rem 0 0; }
.mt-disclaimer { margin-top: 1.5rem; font-size: .8rem; color: #aaa; line-height: 1.8; text-align: center; }
.mt-hotline { text-align: center; margin-top: 1rem; font-size: .85rem; color: #999; }
.mt-hotline b { color: #e5484d; font-size: 1rem; }
</style>

<div class="mt-app">
  <!-- 商城首页 -->
  <div id="mt-mall">
    <div class="mt-hero">
      <h1>🧠 心理量表商城</h1>
      <p>26 个专业量表 · 297 道题 · 全部免费 · 测完即出报告</p>
    </div>
    <input class="mt-search" id="mt-search" placeholder="🔍 搜索量表：比如 焦虑、睡眠、霍兰德…" oninput="mtRenderMall()">
    <div class="mt-cats" id="mt-cats"></div>
    <div class="mt-count" id="mt-count"></div>
    <div class="mt-grid" id="mt-grid"></div>
    <div class="mt-faq">
      <div class="mt-sec"><h3>❓ 常见问题</h3></div>
      <details><summary>这些测试准确吗？</summary><p>标注了理论来源的量表（如 PHQ-9、GAD-7、SAS）是心理学界广泛使用的筛查工具，信效度经过验证；标注"本站原创"的量表为自我探索工具。所有结果仅供参考，不能替代专业诊断。</p></details>
      <details><summary>多少分需要去看医生？</summary><p>一般以各量表"中度"为临界值：达到中度建议预约精神科或心理科做进一步评估。无论分数如何，只要出现自伤念头，或症状已明显影响工作生活，都建议立即求助。</p></details>
      <details><summary>我的答题数据会被上传吗？</summary><p>不会。所有答题和历史记录只保存在你这台设备的浏览器 localStorage 里，不上传任何服务器。清空浏览器数据即删除。</p></details>
      <details><summary>多久测一次合适？</summary><p>建议每 2–4 周测一次，观察分数变化趋势。治疗/咨询期间可按医生建议的频率复测。</p></details>
    </div>
    <p class="mt-hotline">需要帮助？全国心理援助热线 <b>12356</b>（24小时）</p>
    <p class="mt-disclaimer">本站量表为自我探索与科普用途，不构成医疗诊断。如有需要，请前往正规医院精神科/心理科就诊。</p>
  </div>

  <!-- 答题 -->
  <div id="mt-quiz">
    <div class="mt-progress-wrap">
      <div class="mt-progress-head"><span id="mt-pct">0%</span><span id="mt-counter"></span></div>
      <div class="mt-progress"><div class="mt-progress-bar" id="mt-bar"></div></div>
    </div>
    <div class="mt-qbox" id="mt-qbox">
      <div class="mt-qtext" id="mt-qtext"></div>
      <div class="mt-opts" id="mt-opts"></div>
    </div>
    <div class="mt-qnav">
      <button id="mt-prev" onclick="mtNav(-1)">← 上一题</button>
      <button class="mt-quit" onclick="mtQuit()">✕ 返回商城</button>
      <button id="mt-next" onclick="mtNav(1)" style="visibility:hidden">下一题 →</button>
    </div>
  </div>

  <!-- 结果 -->
  <div id="mt-result">
    <div class="mt-crisis" id="mt-crisis" style="display:none"></div>
    <div class="mt-res-head">
      <div style="font-size:2.4rem" id="mt-res-emoji"></div>
      <h2 id="mt-res-title" style="margin:.4rem 0"></h2>
      <div id="mt-res-body"></div>
    </div>
    <div id="mt-res-extra"></div>
    <div class="mt-btns">
      <button class="mt-btn" onclick="mtCopy()">📋 复制报告</button>
      <button class="mt-btn ghost" onclick="mtRestart()">↺ 再测一次</button>
      <button class="mt-btn ghost" onclick="mtQuit()">🏪 返回商城</button>
    </div>
    <div class="mt-sec" id="mt-hist-sec" style="display:none"><h3>📈 历史趋势（仅本机）</h3><div id="mt-hist"></div></div>
    <p class="mt-hotline">需要帮助？全国心理援助热线 <b>12356</b>（24小时）</p>
  </div>
</div>

<script src="./scales.js"></script>
<script>
let mtCur = null, mtIdx = 0, mtAns = [];
const mtCats = ['全部','情绪健康','人格特质','职业发展','亲密关系','自我成长'];
let mtCat = '全部';

function mtRenderMall() {
  const q = (document.getElementById('mt-search').value || '').trim();
  const box = document.getElementById('mt-cats');
  box.innerHTML = mtCats.map(c => `<button class="mt-cat${c===mtCat?' active':''}" onclick="mtSetCat('${c}')">${c}</button>`).join('');
  const list = SCALES.filter(s => (mtCat==='全部'||s.cat===mtCat) && (!q || s.title.includes(q) || s.desc.includes(q)));
  document.getElementById('mt-count').innerText = `共 ${list.length} 个量表`;
  document.getElementById('mt-grid').innerHTML = list.map(s => `
    <div class="mt-card" onclick="mtStart('${s.id}')">
      <div class="emoji">${s.emoji}</div><h2>${s.title}</h2>
      <div class="desc">${s.desc}</div>
      <div class="mt-badges"><span class="mt-badge">${s.items.length} 题</span><span class="mt-badge">${s.time}</span>${s.alpha!=='—'?`<span class="mt-badge">信度 ${s.alpha}</span>`:''}</div>
      <div class="mt-theory">📚 ${s.theory}</div>
      <button class="mt-start" onclick="event.stopPropagation();mtStart('${s.id}')">开始测试 →</button>
    </div>`).join('') || '<p style="text-align:center;color:#999;grid-column:1/-1;">没有找到相关量表，换个关键词试试</p>';
}
function mtSetCat(c){ mtCat = c; mtRenderMall(); }

function mtStart(id) {
  mtCur = SCALES.find(s => s.id === id);
  mtIdx = 0; mtAns = new Array(mtCur.items.length).fill(null);
  document.getElementById('mt-mall').style.display = 'none';
  document.getElementById('mt-result').style.display = 'none';
  document.getElementById('mt-quiz').style.display = 'block';
  mtRenderQ(); window.scrollTo({top:0});
}
function mtQuit() {
  document.getElementById('mt-quiz').style.display = 'none';
  document.getElementById('mt-result').style.display = 'none';
  document.getElementById('mt-mall').style.display = 'block';
  mtRenderMall(); window.scrollTo({top:0});
}
function mtRestart(){ mtStart(mtCur.id); }
function mtRenderQ() {
  const n = mtCur.items.length;
  const it = mtCur.items[mtIdx];
  const text = (typeof it === 'string') ? it : it.t;
  document.getElementById('mt-qtext').innerText = text;
  document.getElementById('mt-counter').innerText = (mtIdx+1) + ' / ' + n;
  const done = mtAns.filter(a => a !== null).length;
  const pct = Math.round(done / n * 100);
  document.getElementById('mt-bar').style.width = pct + '%';
  document.getElementById('mt-pct').innerText = pct + '%';
  const box = document.getElementById('mt-opts');
  box.innerHTML = '';
  const letters = ['A','B','C','D','E','F'];
  mtCur.opts.forEach((op, i) => {
    const b = document.createElement('button');
    b.className = 'mt-opt' + (mtAns[mtIdx] === i ? ' sel' : '');
    b.innerHTML = `<b style="margin-right:10px;color:#425AEF">${letters[i]}</b>${op}`;
    b.onclick = () => {
      mtAns[mtIdx] = i;
      box.querySelectorAll('.mt-opt').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel');
      setTimeout(() => mtNav(1), 200);
    };
    box.appendChild(b);
  });
  const qb = document.getElementById('mt-qbox');
  qb.style.animation = 'none'; qb.offsetHeight; qb.style.animation = '';
  document.getElementById('mt-prev').disabled = (mtIdx === 0);
  document.getElementById('mt-next').style.visibility = (mtIdx === n-1) ? 'visible' : 'hidden';
}
function mtNav(d) {
  const n = mtCur.items.length;
  if (d > 0) {
    if (mtIdx === n-1) { mtSubmit(); return; }
    mtIdx++;
  } else { if (mtIdx === 0) return; mtIdx--; }
  mtRenderQ(); window.scrollTo({top:0, behavior:'smooth'});
}
function mtVal(i) {
  const s = mtCur, it = s.items[i], ans = mtAns[i];
  let v = ans + s.base;
  const isRev = (typeof it !== 'string' && it.r) || (s.reverse && s.reverse.includes(i));
  if (isRev) v = (2 * s.base + s.opts.length - 1) - v;
  return v;
}
function mtSubmit() {
  if (mtAns.some(a => a === null)) { alert('还有题目没答完，请返回补答'); return; }
  const s = mtCur;
  document.getElementById('mt-quiz').style.display = 'none';
  document.getElementById('mt-result').style.display = 'block';
  setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 80);
  document.getElementById('mt-res-emoji').innerText = s.emoji;
  document.getElementById('mt-res-title').innerText = s.title + ' · 测试报告';
  window._mtReport = { title: s.title, lines: [] };
  const crisisEl = document.getElementById('mt-crisis');
  crisisEl.style.display = 'none';
  if (s.crisis && mtAns[s.crisis.item] > 0) {
    crisisEl.innerHTML = '🚨 <b>重要提醒</b><br>' + s.crisis.text;
    crisisEl.style.display = 'block';
  }
  if (s.type === 'score') mtRenderScore(s); else mtRenderDims(s);
  mtSaveHist(s);
}
function mtRenderScore(s) {
  let total = 0;
  for (let i = 0; i < s.items.length; i++) total += mtVal(i);
  if (s.std125) total = Math.round(total * 1.25);
  const band = s.bands.find(b => total <= b.max) || s.bands[s.bands.length-1];
  const maxScore = s.bands[s.bands.length-1].max;
  const ringPct = Math.min(100, Math.round(total / maxScore * 100));
  const circ = 2 * Math.PI * 62;
  window._mtReport.lines.push(`总分：${total} 分`, `结果：${band.label}`, band.desc);
  document.getElementById('mt-res-body').innerHTML = `
    <div class="mt-ring">
      <svg width="150" height="150"><circle cx="75" cy="75" r="62" fill="none" stroke="#eef1f7" stroke-width="12"/>
      <circle cx="75" cy="75" r="62" fill="none" stroke="${band.color}" stroke-width="12" stroke-linecap="round"
        stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - ringPct/100)}"/></svg>
      <div class="num"><b>${total}</b><span>总分 / ${maxScore}</span></div>
    </div>
    <div><span class="mt-band" style="background:${band.color}">${band.label}</span></div>
    <p class="mt-band-desc">${band.desc}</p>`;
  const itemsHtml = s.items.map((it, i) => {
    const t = (typeof it === 'string') ? it : it.t;
    return `<div>▫️ ${t} —— <b>${s.opts[mtAns[i]]}</b></div>`;
  }).join('');
  document.getElementById('mt-res-extra').innerHTML = `
    <div class="mt-sec"><h3>✅ 接下来可以这样做</h3>
      <ul class="mt-actions">${band.actions.map(a => `<li>${a}</li>`).join('')}</ul></div>
    <div class="mt-sec"><h3>📋 各条目回顾</h3><div class="mt-items">${itemsHtml}</div></div>
    <div class="mt-sec"><h3>📚 理论来源</h3><p style="font-size:.88rem;color:#888;line-height:1.9;">${s.theory}。本报告为筛查/自我探索用途，不构成医疗诊断。</p></div>`;
}
function mtRenderDims(s) {
  const dimScores = s.dims.map(() => ({sum:0, n:0}));
  s.items.forEach((it, i) => { dimScores[it.d].sum += mtVal(i); dimScores[it.d].n++; });
  const means = dimScores.map(d => d.sum / d.n);
  const maxMean = s.base + s.opts.length - 1, minMean = s.base;
  const colors = ['#425AEF','#33a474','#e4b622','#88619a','#4298b4','#f08c00'];
  let domHtml = '', domText = '';
  if (s.attach4) {
    const anx = means[0] > 3, avo = means[1] > 3;
    const t = !anx && !avo ? '安全型' : anx && !avo ? '焦虑型' : !anx && avo ? '回避型' : '恐惧型（矛盾型）';
    const d4 = {
      '安全型':'你在亲密关系中既亲近又独立，能信任伴侣、也能表达需求，这是最健康的依恋模式。继续保持，并把这份安全感传递给伴侣。',
      '焦虑型':'你对关系中的风吹草动高度敏感，渴望亲近又害怕失去。练习：把"他是不是不爱我"换成"直接问+观察行动"；培养关系之外的生活重心。',
      '回避型':'你习惯用距离保护自己，亲密让你想逃。练习：每天一次微小的袒露（分享感受而非事务）；允许自己"麻烦"别人一次。',
      '恐惧型（矛盾型）':'你既渴望亲密又害怕受伤，常常自我矛盾。这多与早期经历有关，心理咨询（尤其是依恋取向）对你帮助会很大。'
    };
    domHtml = `<div class="mt-dom"><b>💞 你的依恋类型：${t}</b><br>${d4[t]}</div>`;
    domText = `依恋类型：${t}`;
  } else {
    let top = 0;
    means.forEach((m, i) => { if (m > means[top]) top = i; });
    const d = s.dims[top];
    if (d.hi) { domHtml = `<div class="mt-dom"><b>⭐ 你的主导特质：${d.name}</b><br>${d.hi}</div>`; domText = `主导：${d.name}`; }
  }
  const barsHtml = s.dims.map((d, i) => {
    const pct = Math.round((means[i] - minMean) / (maxMean - minMean) * 100);
    const interp = s.attach4 ? '' : (means[i] >= (minMean+maxMean)/2 ? (d.hi||'') : (d.lo||''));
    return `<div class="mt-dim"><div class="mt-dim-top"><span>${d.letter ? d.letter+' · ' : ''}${d.name}</span><span>${means[i].toFixed(1)} / ${maxMean}</span></div>
      <div class="mt-dim-bar"><div class="mt-dim-fill" style="width:${pct}%;background:${colors[i%colors.length]}"></div></div>
      ${interp ? `<div class="mt-dim-txt">${interp}</div>` : ''}</div>`;
  }).join('');
  window._mtReport.lines.push(domText);
  document.getElementById('mt-res-body').innerHTML = domHtml;
  const hollandJobs = s.id === 'holland' ? `<div class="mt-sec"><h3>💼 你的职业兴趣代码</h3><p style="font-size:.92rem;color:#555;line-height:1.9;">${mtHollandCode(means, s)}</p></div>` : '';
  document.getElementById('mt-res-extra').innerHTML = `
    <div class="mt-sec"><h3>📊 各维度得分</h3>${barsHtml}</div>${hollandJobs}
    <div class="mt-sec"><h3>📚 理论来源</h3><p style="font-size:.88rem;color:#888;line-height:1.9;">${s.theory}。本报告为自我探索用途，不构成专业评估。</p></div>`;
}
function mtHollandCode(means, s) {
  const idx = means.map((m,i) => i).sort((a,b) => means[b]-means[a]).slice(0,2);
  const code = idx.map(i => s.dims[i].letter).join('');
  const jobs = {R:'工程师、技术员、军人、运动员',I:'科研人员、医生、程序员、数据分析师',A:'设计师、作家、自媒体、艺术家',S:'教师、咨询师、护士、HR',E:'销售、企业家、管理者、律师',C:'会计、行政、审计、档案管理'};
  const names = idx.map(i => s.dims[i].name).join(' + ');
  return `你的主导代码是 <b style="font-size:1.3rem;color:#425AEF">${code}</b>（${names}）。<br>匹配职业方向：${idx.map(i => jobs[s.dims[i].letter] || '相关领域').join('；')}。`;
}
function mtSaveHist(s) {
  try {
    const key = 'mt_hist_' + s.id;
    const hist = JSON.parse(localStorage.getItem(key) || '[]');
    const now = new Date();
    const ds = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
    const summary = window._mtReport.lines.slice(0,2).join('，');
    hist.push({d: ds, s: summary});
    localStorage.setItem(key, JSON.stringify(hist.slice(-10)));
    if (hist.length > 1) {
      const prev = hist[hist.length-2];
      document.getElementById('mt-hist-sec').style.display = 'block';
      document.getElementById('mt-hist').innerHTML =
        hist.slice(-5).reverse().map(h => `<div class="mt-items" style="margin-bottom:.4rem">📅 ${h.d} —— ${h.s}</div>`).join('') +
        `<p style="font-size:.85rem;color:#888;">距上次（${prev.d}）：${prev.s}</p>`;
    }
  } catch(e) {}
}
function mtCopy() {
  const r = window._mtReport;
  if (!r) return;
  const txt = `我的${r.title}测试报告\n${r.lines.join('\n')}\n—— 来自马老师博客心理量表商城 https://blog.8818618.xyz/mental-test/`;
  navigator.clipboard.writeText(txt).then(() => alert('报告已复制！'));
}
mtRenderMall();
</script>
{% endraw %}
