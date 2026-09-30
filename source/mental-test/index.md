---
title: 心理健康自测 (PHQ-9 & GAD-7)
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

.mt-wrapper { max-width: 820px; margin: 0 auto; padding: 2rem 1rem; }
.mt-hero { text-align: center; margin-bottom: 2rem; }
.mt-hero h1 { font-size: 2.2rem; color: #425AEF; margin-bottom: .5rem; }
.mt-hero p { color: #666; }
.mt-tabs { display: flex; gap: 10px; justify-content: center; margin-bottom: 1.5rem; }
.mt-tab {
  padding: 12px 28px; border-radius: 30px; border: 2px solid #425AEF;
  background: #fff; color: #425AEF; font-weight: 700; cursor: pointer; font-size: 1rem;
}
.mt-tab.active { background: #425AEF; color: #fff; }
.mt-card {
  background: var(--anzhiyu-card-bg); border-radius: 16px; padding: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); margin-bottom: 2rem;
}
.mt-scale-info {
  background: rgba(66,90,239,.07); border-radius: 10px; padding: 1rem 1.2rem;
  font-size: .9rem; line-height: 1.8; margin-bottom: 1.5rem; color: #555;
}
.mt-q { margin-bottom: 1.4rem; border-bottom: 1px dashed #ddd; padding-bottom: 1.4rem; }
.mt-q-title { font-weight: 700; font-size: 1.05rem; margin-bottom: .9rem; }
.mt-opts { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; }
.mt-opt {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 10px; background: var(--anzhiyu-background); border-radius: 8px;
  cursor: pointer; border: 1px solid #eee; font-size: .9rem; transition: all .15s; text-align: center;
}
.mt-opt:hover { border-color: #425AEF; }
.mt-opt input { accent-color: #425AEF; }
.mt-submit {
  display: block; width: 100%; padding: 15px; background: #425AEF; color: #fff;
  font-size: 1.15rem; font-weight: 700; border-radius: 10px; border: none; cursor: pointer; margin-top: 1rem;
}
.mt-submit:hover { opacity: .92; }
.mt-progress { height: 6px; background: #eee; border-radius: 3px; margin-bottom: 1.5rem; overflow: hidden; }
.mt-progress i { display: block; height: 100%; background: #425AEF; width: 0; transition: width .3s; border-radius: 3px; }
#mt-result { display: none; margin-top: 1.5rem; }
.mt-score-ring {
  width: 130px; height: 130px; border-radius: 50%; margin: 0 auto 1rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border: 8px solid #eee; font-weight: 800;
}
.mt-level { text-align: center; font-size: 1.4rem; font-weight: 800; margin-bottom: .8rem; }
.mt-advice {
  background: #fff; border-radius: 10px; padding: 1.2rem 1.4rem;
  line-height: 1.9; font-size: .95rem; color: #444; text-align: left;
}
.mt-advice b { color: #425AEF; }
.mt-severity { display: flex; border-radius: 10px; overflow: hidden; margin: 1rem 0; font-size: .8rem; text-align: center; }
.mt-severity div { flex: 1; padding: 8px 4px; color: #fff; font-weight: 700; }
.mt-disclaimer {
  margin-top: 1.5rem; padding: 1rem 1.2rem; font-size: .85rem; color: #888;
  background: rgba(229,72,77,.06); border-left: 4px solid #e5484d; border-radius: 0 8px 8px 0; line-height: 1.8;
}
@media (max-width: 640px) { .mt-card { padding: 1.2rem; } .mt-hero h1 { font-size: 1.7rem; } }

.mt-crisis { display:none; background:#b3261e; color:#fff; border-radius:12px; padding:1.2rem 1.4rem; margin-bottom:1.2rem; line-height:1.8; }
.mt-crisis b { font-size:1.1rem; }
.mt-crisis a { color:#fff; text-decoration:underline; font-weight:700; }
.mt-items { width:100%; border-collapse:collapse; margin:1rem 0; font-size:.88rem; }
.mt-items th, .mt-items td { border:1px solid var(--anzhiyu-card-border); padding:.55rem .7rem; text-align:left; }
.mt-items th { background:var(--anzhiyu-background); }
.mt-items td:last-child { text-align:center; font-weight:700; }
.mt-hist { margin-top:1.5rem; }
.mt-hist h3 { font-size:1rem; margin-bottom:.6rem; }
.mt-hist-row { display:flex; justify-content:space-between; font-size:.85rem; padding:.5rem .8rem; background:var(--anzhiyu-background); border-radius:8px; margin-bottom:.4rem; }
.mt-report-meta { display:flex; gap:1rem; flex-wrap:wrap; font-size:.85rem; color:#888; margin-bottom:.8rem; }
.mt-report-meta span { background:var(--anzhiyu-background); padding:.35rem .8rem; border-radius:20px; }
</style>

<div class="mt-wrapper">
  <div class="mt-hero">
    <h1>🧠 心理健康自测</h1>
    <p>国际通用的标准化筛查量表 · 2 分钟初步了解自己的情绪状态</p>
  </div>

  <div class="mt-tabs">
    <button class="mt-tab active" onclick="mtSwitch('phq9')">😔 PHQ-9 抑郁筛查</button>
    <button class="mt-tab" onclick="mtSwitch('gad7')">😰 GAD-7 焦虑筛查</button>
  </div>

  <div class="mt-card">
    <div class="mt-scale-info" id="mt-info"></div>
    <div class="mt-progress"><i id="mt-bar"></i></div>
    <form id="mt-form"><div id="mt-qs"></div></form>
    <button class="mt-submit" onclick="mtCalc()">生成评估报告</button>

    <div id="mt-result">
      <div class="mt-crisis" id="mt-crisis">🚨 <b>请注意：</b>你在"伤害自己的念头"这一题上选择了大于 0 分。<br>
      这是一个需要认真对待的信号。请立即联系你信任的人陪伴你，或拨打全国心理援助热线 <b>12356</b>（24小时免费），也可以直接到附近医院精神科/心理科就诊。<br>
      你不是一个人在扛，求助是勇敢的第一步。</div>
      <div class="mt-report-meta" id="mt-meta"></div>
      <div class="mt-score-ring" id="mt-ring"><span style="font-size:2rem" id="mt-num"></span><span style="font-size:.8rem;font-weight:400">总分</span></div>
      <div class="mt-level" id="mt-level"></div>
      <div class="mt-severity" id="mt-sev"></div>
      <div class="mt-advice" id="mt-advice"></div>
      <h3 style="margin-top:1.5rem;font-size:1rem;">📋 各条目得分回顾</h3>
      <table class="mt-items"><thead><tr><th>题目</th><th>选项</th><th>得分</th></tr></thead><tbody id="mt-items-body"></tbody></table>
      <div class="mt-hist" id="mt-hist"></div>
      <button class="mt-submit" style="background:#888" onclick="mtReset()">重新测试</button>
    </div>

    <div class="mt-disclaimer">
      <b>⚠️ 郑重声明：</b>本测试为初步自评筛查工具，结果仅供参考，不能替代专业心理诊断。
      若你长期情绪低落、焦虑失眠或出现自伤念头，请务必寻求精神科医生或心理咨询师的帮助。
      全国心理援助热线：<b>12356</b>（24小时）。
    </div>
  </div>
</div>

<script>
const MT_SCALES = {
  phq9: {
    name: 'PHQ-9 抑郁筛查量表',
    info: '由 Spitzer 等开发，国际最常用的抑郁症初筛工具（Cronbach\u03b1≈0.89）。请回想<b>过去两周</b>内，你有多少时候被以下问题困扰。临界值：≥10 分建议进一步评估。',
    qs: [
      '做事时提不起劲或没有兴趣',
      '感到心情低落、沮丧或绝望',
      '入睡困难、睡不安稳或睡眠过多',
      '感觉疲倦或没有活力',
      '食欲不振或吃得太多',
      '觉得自己很糟、是个失败者，或让家人失望',
      '对事物专注有困难（如阅读或看电视时）',
      '动作或说话缓慢到别人能察觉，或相反地烦躁不安、坐立难安',
      '有不如死掉或用某种方式伤害自己的念头'
    ],
    sev: [
      { max: 4,  label: '无抑郁', color: '#33a474', advice: '🌟 <b>状态良好。</b>你的情绪韧性不错。请继续保持规律作息、适度运动和社交连接，这是最好的"心理维生素"。' },
      { max: 9,  label: '轻度', color: '#e4b622', advice: '🧩 <b>轻度情绪困扰。</b>可能与近期压力、作息紊乱有关。建议：每天留 30 分钟给自己（散步/听歌/发呆都算），减少睡前刷手机，观察 2 周。' },
      { max: 14, label: '中度', color: '#ef8f2e', advice: '🌧️ <b>中度抑郁症状。</b>情绪已经明显影响生活。建议认真考虑预约一次心理咨询（很多城市有公益低价咨询），同时告诉一位信任的人你最近的状态。' },
      { max: 19, label: '中重度', color: '#e5484d', advice: '🌩️ <b>中重度抑郁症状。</b>你正在承受较大的精神痛苦，<b>强烈建议尽快到精神科或心理科就诊</b>，专业干预非常有效，不要独自硬扛。' },
      { max: 27, label: '重度', color: '#b3261e', advice: '⚡ <b>重度抑郁症状。</b>请把求助放在第一位：立即联系家人朋友陪伴，并前往精神科就诊；如有自伤念头请拨打 <b>12356</b>。求助是勇敢，不是软弱。' }
    ]
  },
  gad7: {
    name: 'GAD-7 焦虑筛查量表',
    info: '由 Spitzer 等开发的广泛性焦虑障碍初筛工具（Cronbach\u03b1≈0.92）。请回想<b>过去两周</b>内，你有多少时候被以下问题困扰。临界值：≥10 分建议进一步评估。',
    qs: [
      '感到紧张、焦虑或烦躁',
      '无法停止或控制担忧',
      '对各种各样的事情担忧过多',
      '很难放松下来',
      '坐立不安，难以静坐',
      '容易烦恼或易怒',
      '感到好像有什么可怕的事情会发生'
    ],
    sev: [
      { max: 4,  label: '无焦虑', color: '#33a474', advice: '🌟 <b>状态良好。</b>你的焦虑水平在健康范围内。保持当下的节奏，定期给自己"充电"即可。' },
      { max: 9,  label: '轻度', color: '#e4b622', advice: '🧩 <b>轻度焦虑。</b>试试"4-7-8 呼吸法"（吸气 4 秒、屏息 7 秒、呼气 8 秒），每天 5 分钟；把担忧写下来，逐条问"最坏能坏到哪"。' },
      { max: 14, label: '中度', color: '#ef8f2e', advice: '🌧️ <b>中度焦虑。</b>焦虑已开始干扰工作和睡眠。建议学习正念/放松训练，或预约一次心理咨询聊聊压力源。' },
      { max: 21, label: '重度', color: '#e5484d', advice: '🌩️ <b>重度焦虑。</b>长期高度焦虑会透支身体，<b>建议尽快寻求精神科或心理咨询师的专业帮助</b>，药物 + 心理治疗对焦虑障碍效果明确。' }
    ]
  }
};
const MT_OPTS = ['完全没有', '有几天', '一半以上', '几乎每天'];
let mtCur = 'phq9';

function mtSwitch(k) {
  mtCur = k;
  document.querySelectorAll('.mt-tab').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  mtRender();
}
function mtRender() {
  const s = MT_SCALES[mtCur];
  document.getElementById('mt-info').innerHTML = `<b>${s.name}</b><br>${s.info}`;
  const box = document.getElementById('mt-qs');
  box.innerHTML = '';
  s.qs.forEach((q, i) => {
    box.innerHTML += `<div class="mt-q"><div class="mt-q-title">${i+1}. ${q}</div><div class="mt-opts">` +
      MT_OPTS.map((o, v) => `<label class="mt-opt"><input type="radio" name="q${i}" value="${v}" onchange="mtProg()"> ${o}</label>`).join('') +
      `</div></div>`;
  });
  document.getElementById('mt-form').style.display = 'block';
  document.getElementById('mt-result').style.display = 'none';
  mtProg();
}
function mtProg() {
  const s = MT_SCALES[mtCur];
  let n = 0;
  s.qs.forEach((_, i) => { if (document.querySelector(`input[name=q${i}]:checked`)) n++; });
  document.getElementById('mt-bar').style.width = Math.round(n / s.qs.length * 100) + '%';
}
function mtCalc() {
  const s = MT_SCALES[mtCur];
  let total = 0, n = 0;
  s.qs.forEach((_, i) => {
    const c = document.querySelector(`input[name=q${i}]:checked`);
    if (c) { total += +c.value; n++; }
  });
  if (n < s.qs.length) { alert('还有题目没答完哦'); return; }
  const lv = s.sev.find(x => total <= x.max);
  document.getElementById('mt-form').style.display = 'none';
  document.getElementById('mt-num').innerText = total;
  document.getElementById('mt-ring').style.borderColor = lv.color;
  document.getElementById('mt-level').innerHTML = `<span style="color:${lv.color}">${lv.label}（${total} 分）</span>`;
  document.getElementById('mt-sev').innerHTML = s.sev.map(x =>
    `<div style="background:${x.color};opacity:${x===lv?1:.35}">${x.label}<br>${x.max}分内</div>`).join('');
  document.getElementById('mt-advice').innerHTML = lv.advice +
    `<br><br>💡 <b>马老师会员</b>提供一对一心理咨询与长期陪伴，详见 <a href="https://vip.8818618.xyz/" target="_blank">vip.8818618.xyz</a>。`;
  // PHQ-9 第9题危机预警
  const crisis = (mtCur === 'phq9' && (+document.querySelector('input[name=q8]:checked').value) > 0);
  document.getElementById('mt-crisis').style.display = crisis ? 'block' : 'none';
  // 报告元信息
  const now = new Date();
  document.getElementById('mt-meta').innerHTML =
    `<span>📊 ${s.name}</span><span>🕐 ${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}</span><span>📝 共 ${s.qs.length} 题</span>`;
  // 条目回顾表
  document.getElementById('mt-items-body').innerHTML = s.qs.map((q, i) => {
    const v = +document.querySelector(`input[name=q${i}]:checked`).value;
    return `<tr><td>${i+1}. ${q}</td><td>${MT_OPTS[v]}</td><td style="color:${v>=2?'#e5484d':'inherit'}">${v}</td></tr>`;
  }).join('');
  // 历史记录（本地保存，不上传）
  try {
    const key = 'mt_hist_' + mtCur;
    const hist = JSON.parse(localStorage.getItem(key) || '[]');
    hist.push({ d: now.toISOString().slice(0,10), s: total, l: lv.label });
    localStorage.setItem(key, JSON.stringify(hist.slice(-10)));
    if (hist.length > 1) {
      const prev = hist[hist.length-2];
      const diff = total - prev.s;
      const trend = diff === 0 ? '持平' : (diff > 0 ? `上升 ${diff} 分` : `下降 ${Math.abs(diff)} 分`);
      document.getElementById('mt-hist').innerHTML =
        `<h3>📈 历史趋势（仅保存在本机）</h3>` +
        hist.slice(-5).reverse().map(h => `<div class="mt-hist-row"><span>${h.d}</span><span>${h.s} 分 · ${h.l}</span></div>`).join('') +
        `<p style="font-size:.85rem;color:#888;">距上次（${prev.d}，${prev.s}分）：<b>${trend}</b>${diff>0?'，建议关注状态变化':''}</p>`;
    } else { document.getElementById('mt-hist').innerHTML = ''; }
  } catch(e) {}
  document.getElementById('mt-result').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function mtReset() { mtRender(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
window.addEventListener('load', mtRender);
</script>
{% endraw %}
