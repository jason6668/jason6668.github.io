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

/* 量表选择卡片（对标 toolxq 量表商城） */
.mt-scale-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 2rem; }
.mt-scale-card {
  background: var(--anzhiyu-card-bg); border-radius: 16px; padding: 1.8rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); border: 2px solid transparent;
  cursor: pointer; transition: all .2s;
}
.mt-scale-card:hover { border-color: #425AEF; transform: translateY(-3px); }
.mt-scale-card .emoji { font-size: 2.5rem; }
.mt-scale-card h2 { font-size: 1.25rem; margin: .6rem 0 .4rem; }
.mt-scale-card .desc { font-size: .9rem; color: #666; line-height: 1.7; margin-bottom: 1rem; }
.mt-badges { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1rem; }
.mt-badge { font-size: .78rem; background: rgba(66,90,239,.08); color: #425AEF; padding: .3rem .7rem; border-radius: 20px; font-weight: 600; }
.mt-theory { font-size: .8rem; color: #999; line-height: 1.7; margin-bottom: 1.2rem; }
.mt-start-btn {
  width: 100%; padding: 13px; background: #425AEF; color: #fff; border: none;
  border-radius: 10px; font-size: 1.05rem; font-weight: 700; cursor: pointer;
}
.mt-start-btn:hover { opacity: .92; }

/* 一题一屏答题（对标 16P） */
#mt-quiz { display: none; }
.mt-qprog { display: flex; justify-content: space-between; align-items: center; margin-bottom: .6rem; font-size: .9rem; color: #888; font-weight: 600; }
.mt-progress { height: 8px; background: #eee; border-radius: 4px; margin-bottom: 2rem; overflow: hidden; }
.mt-progress i { display: block; height: 100%; background: linear-gradient(90deg,#425AEF,#7b8cff); width: 0; transition: width .35s; border-radius: 4px; }
.mt-qcard {
  background: var(--anzhiyu-card-bg); border-radius: 16px; padding: 2.5rem 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); text-align: center; margin-bottom: 1.5rem;
  animation: mtFade .3s ease;
}
@keyframes mtFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.mt-qnum { font-size: .85rem; color: #999; margin-bottom: .8rem; font-weight: 600; }
.mt-qtext { font-size: 1.35rem; font-weight: 700; color: #333; line-height: 1.6; margin-bottom: 2rem; }
.mt-ans { display: grid; gap: .8rem; }
.mt-ans button {
  padding: 15px 20px; border: 2px solid #e8ecf5; border-radius: 12px; background: #fff;
  font-size: 1rem; cursor: pointer; transition: all .15s; color: #333; font-weight: 600;
}
.mt-ans button:hover { border-color: #425AEF; background: rgba(66,90,239,.05); }
.mt-ans button.sel { border-color: #425AEF; background: rgba(66,90,239,.1); color: #425AEF; }
.mt-nav { display: flex; justify-content: space-between; margin-top: .5rem; }
.mt-nav button {
  padding: 12px 28px; border-radius: 30px; border: 2px solid #425AEF; background: #fff;
  color: #425AEF; font-weight: 700; cursor: pointer; font-size: .95rem;
}
.mt-nav button:disabled { opacity: .3; cursor: not-allowed; }
.mt-nav button.primary { background: #425AEF; color: #fff; border: none; }
.mt-quit { display: block; margin: 1.5rem auto 0; background: none; border: none; color: #aaa; cursor: pointer; font-size: .85rem; }

/* 报告 */
#mt-result { display: none; }
.mt-crisis { display:none; background:#b3261e; color:#fff; border-radius:12px; padding:1.2rem 1.4rem; margin-bottom:1.2rem; line-height:1.8; }
.mt-crisis b { font-size:1.1rem; }
.mt-crisis a { color:#fff; text-decoration:underline; font-weight:700; }
.mt-card {
  background: var(--anzhiyu-card-bg); border-radius: 16px; padding: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); margin-bottom: 1.5rem;
}
.mt-report-meta { display:flex; gap:.8rem; flex-wrap:wrap; font-size:.85rem; color:#888; margin-bottom:1rem; }
.mt-report-meta span { background:var(--anzhiyu-background); padding:.35rem .8rem; border-radius:20px; }
.mt-score-ring {
  width: 130px; height: 130px; border-radius: 50%; margin: 0 auto 1rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border: 8px solid #eee; font-weight: 800;
}
.mt-level { text-align: center; font-size: 1.4rem; font-weight: 800; margin-bottom: .8rem; }
.mt-severity { display: flex; border-radius: 10px; overflow: hidden; margin: 1rem 0; font-size: .8rem; text-align: center; }
.mt-severity div { flex: 1; padding: 8px 4px; color: #fff; font-weight: 700; }
.mt-advice { background: #fff; border-radius: 10px; padding: 1.2rem 1.4rem; line-height: 1.9; font-size: .95rem; color: #444; }
.mt-advice b { color: #425AEF; }
.mt-action { margin-top: 1.2rem; }
.mt-action h3 { font-size: 1rem; margin-bottom: .8rem; }
.mt-action li { font-size: .92rem; line-height: 1.8; color: #555; margin-bottom: .4rem; list-style: none; padding-left: 0; }
.mt-action ul { padding-left: 0; }
.mt-items { width:100%; border-collapse:collapse; margin:1rem 0; font-size:.88rem; }
.mt-items th, .mt-items td { border:1px solid var(--anzhiyu-card-border); padding:.55rem .7rem; text-align:left; }
.mt-items th { background:var(--anzhiyu-background); }
.mt-items td:last-child { text-align:center; font-weight:700; }
.mt-hist { margin-top:1.5rem; }
.mt-hist h3 { font-size:1rem; margin-bottom:.6rem; }
.mt-hist-row { display:flex; justify-content:space-between; font-size:.85rem; padding:.5rem .8rem; background:var(--anzhiyu-background); border-radius:8px; margin-bottom:.4rem; }
.mt-faq { margin-top: 0; }
.mt-faq details { background: var(--anzhiyu-card-bg); border-radius: 10px; padding: 1rem 1.2rem; margin-bottom: .8rem; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
.mt-faq summary { font-weight: 700; cursor: pointer; font-size: .95rem; }
.mt-faq details p { font-size: .9rem; color: #666; line-height: 1.8; margin: .6rem 0 0; }
.mt-disclaimer {
  margin-top: 1.5rem; padding: 1rem 1.2rem; font-size: .85rem; color: #888;
  background: rgba(229,72,77,.06); border-left: 4px solid #e5484d; border-radius: 0 8px 8px 0; line-height: 1.8;
}
.mt-submit {
  display: block; width: 100%; padding: 15px; background: #425AEF; color: #fff;
  font-size: 1.15rem; font-weight: 700; border-radius: 10px; border: none; cursor: pointer; margin-top: 1rem;
}
.mt-submit:hover { opacity: .92; }
@media (max-width: 640px) {
  .mt-scale-grid { grid-template-columns: 1fr; }
  .mt-card { padding: 1.2rem; }
  .mt-hero h1 { font-size: 1.7rem; }
  .mt-qcard { padding: 1.8rem 1.2rem; }
  .mt-qtext { font-size: 1.15rem; }
}
</style>

<div class="mt-wrapper">
  <div class="mt-hero">
    <h1>🧠 心理健康自测</h1>
    <p>国际通用的标准化筛查量表 · 2 分钟初步了解自己的情绪状态</p>
  </div>

  <!-- 量表选择（对标 toolxq 量表卡片） -->
  <div id="mt-picker">
    <div class="mt-scale-grid">
      <div class="mt-scale-card" onclick="mtStart('phq9')">
        <div class="emoji">😔</div>
        <h2>PHQ-9 抑郁筛查</h2>
        <div class="desc">9 道题，快速筛查过去两周的抑郁症状严重程度，临床最常用的抑郁初筛工具。</div>
        <div class="mt-badges">
          <span class="mt-badge">9 题</span>
          <span class="mt-badge">约 3 分钟</span>
          <span class="mt-badge">信度 α≈0.89</span>
        </div>
        <div class="mt-theory">📚 理论来源：基于 DSM-IV 抑郁诊断标准（Spitzer 等开发），国际通用。</div>
        <button class="mt-start-btn">开始测试 →</button>
      </div>
      <div class="mt-scale-card" onclick="mtStart('gad7')">
        <div class="emoji">😰</div>
        <h2>GAD-7 焦虑筛查</h2>
        <div class="desc">7 道题，快速评估过去两周的焦虑症状，与 PHQ-9 配套使用效果更佳。</div>
        <div class="mt-badges">
          <span class="mt-badge">7 题</span>
          <span class="mt-badge">约 2 分钟</span>
          <span class="mt-badge">信度 α≈0.92</span>
        </div>
        <div class="mt-theory">📚 理论来源：广泛性焦虑障碍初筛工具（Spitzer 等开发），医院常用。</div>
        <button class="mt-start-btn">开始测试 →</button>
      </div>
    </div>
    <div class="mt-disclaimer">
      <b>⚠️ 郑重声明：</b>本测试为初步自评筛查工具，结果仅供参考，不能替代专业心理诊断。
      若你长期情绪低落、焦虑失眠或出现自伤念头，请务必寻求精神科医生或心理咨询师的帮助。
      全国心理援助热线：<b>12356</b>（24小时）。
    </div>
  </div>

  <!-- 一题一屏答题（对标 16P） -->
  <div id="mt-quiz">
    <div class="mt-qprog"><span id="mt-qtitle">PHQ-9</span><span id="mt-qpct">0%</span></div>
    <div class="mt-progress"><i id="mt-bar"></i></div>
    <div class="mt-qcard" id="mt-qcard">
      <div class="mt-qnum" id="mt-qnum"></div>
      <div class="mt-qtext" id="mt-qtext"></div>
      <div class="mt-ans" id="mt-ans"></div>
    </div>
    <div class="mt-nav">
      <button id="mt-prev" onclick="mtNav(-1)">← 上一题</button>
      <button id="mt-next" class="primary" onclick="mtNav(1)">下一题 →</button>
    </div>
    <button class="mt-quit" onclick="mtQuit()">✕ 退出测试</button>
  </div>

  <!-- 专业报告 -->
  <div id="mt-result">
    <div class="mt-crisis" id="mt-crisis">🚨 <b>请注意：</b>你在"伤害自己的念头"这一题上选择了大于 0 分。<br>
    这是一个需要认真对待的信号。请立即联系你信任的人陪伴你，或拨打全国心理援助热线 <b>12356</b>（24小时免费），也可以直接到附近医院精神科/心理科就诊。<br>
    你不是一个人在扛，求助是勇敢的第一步。</div>

    <div class="mt-card">
      <div class="mt-report-meta" id="mt-meta"></div>
      <div class="mt-score-ring" id="mt-ring"><span style="font-size:2rem" id="mt-num"></span><span style="font-size:.8rem;font-weight:400">总分</span></div>
      <div class="mt-level" id="mt-level"></div>
      <div class="mt-severity" id="mt-sev"></div>
      <div class="mt-advice" id="mt-advice"></div>
      <div class="mt-action" id="mt-action"></div>
    </div>

    <div class="mt-card">
      <h3 style="margin-top:0;font-size:1rem;">📋 各条目得分回顾</h3>
      <table class="mt-items"><thead><tr><th>题目</th><th>选项</th><th>得分</th></tr></thead><tbody id="mt-items-body"></tbody></table>
      <div class="mt-hist" id="mt-hist"></div>
      <div style="display:flex;gap:10px;margin-top:1rem;">
        <button class="mt-submit" style="background:#888" onclick="mtQuit()">← 返回量表</button>
        <button class="mt-submit" onclick="mtRetest()">🔄 重新测试</button>
      </div>
    </div>

    <div class="mt-card mt-faq">
      <h3 style="margin-top:0;">❓ 常见问题</h3>
      <details><summary>这个测试的结果准确吗？</summary>
        <p>PHQ-9 / GAD-7 是国际公认的标准化筛查量表，信度系数均在 0.89 以上，具有良好的科学性。但它们是"筛查"而非"诊断"工具——分数高提示你需要关注，不等于确诊抑郁症/焦虑症。最终诊断需要精神科医生面诊。</p></details>
      <details><summary>多少分需要去看医生？</summary>
        <p>一般以 10 分为临界值：≥10 分建议预约精神科或心理科做进一步评估；≥15 分建议尽快就诊。无论分数如何，只要第 9 题（自伤念头）大于 0 分，或症状已明显影响工作生活，都建议立即求助。</p></details>
      <details><summary>我的测试记录会被保存吗？</summary>
        <p>不会上传。历史趋势仅保存在你当前设备的浏览器本地（localStorage），我们服务器不存储任何答题数据。清除浏览器数据即删除。</p></details>
      <details><summary>多久测一次合适？</summary>
        <p>建议每 2–4 周测一次，观察分数变化趋势。治疗/咨询期间可按医生建议的频率复测，用分数变化辅助评估干预效果。</p></details>
    </div>
  </div>
</div>

<script>
const MT_SCALES = {
  phq9: {
    name: 'PHQ-9 抑郁筛查量表', short: 'PHQ-9',
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
      { max: 4,  label: '无抑郁', color: '#33a474',
        advice: '🌟 <b>状态良好。</b>你的情绪韧性不错。请继续保持规律作息、适度运动和社交连接，这是最好的"心理维生素"。',
        actions: ['保持每天 30 分钟以上的户外活动或运动', '维持规律作息，避免长期熬夜', '定期和信任的朋友保持联系'] },
      { max: 9,  label: '轻度', color: '#e4b622',
        advice: '🧩 <b>轻度情绪困扰。</b>可能与近期压力、作息紊乱有关，先别给自己贴标签，观察调整 2 周看看。',
        actions: ['每天留 30 分钟给自己（散步/听歌/发呆都算）', '减少睡前 1 小时刷手机，试试纸质书', '把困扰写下来，区分"能解决的"和"只能接纳的"', '2 周后复测一次，对比分数变化'] },
      { max: 14, label: '中度', color: '#ef8f2e',
        advice: '🌧️ <b>中度抑郁症状。</b>情绪已经明显影响生活，值得认真对待——这不是"想开点"就能解决的。',
        actions: ['认真考虑预约一次心理咨询（很多城市有公益低价咨询）', '告诉一位信任的人你最近的真实状态', '记录每天的情绪分数，找出触发低谷的规律', '如果持续 2 周无改善，直接去精神科/心理科'] },
      { max: 19, label: '中重度', color: '#e5484d',
        advice: '🌩️ <b>中重度抑郁症状。</b>你正在承受较大的精神痛苦，<b>强烈建议尽快到精神科或心理科就诊</b>，专业干预非常有效，不要独自硬扛。',
        actions: ['本周内预约精神科或心理科门诊', '让家人/朋友知道你的状况，不要独自扛', '避免做重大人生决定（辞职/分手等），等状态稳定再说', '如有自伤念头，立即拨打 12356'] },
      { max: 27, label: '重度', color: '#b3261e',
        advice: '⚡ <b>重度抑郁症状。</b>请把求助放在第一位——这不是意志力问题，是需要治疗的疾病。',
        actions: ['立即联系家人朋友陪伴，不要独处', '尽快前往精神科就诊，药物+心理治疗效果明确', '如有自伤念头请拨打 <b>12356</b>（24小时）', '求助是勇敢，不是软弱'] }
    ]
  },
  gad7: {
    name: 'GAD-7 焦虑筛查量表', short: 'GAD-7',
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
      { max: 4,  label: '无焦虑', color: '#33a474',
        advice: '🌟 <b>状态良好。</b>你的焦虑水平在健康范围内。保持当下的节奏，定期给自己"充电"即可。',
        actions: ['保持规律运动，焦虑最怕"动起来"', '维持稳定的睡眠节律', '定期做让自己放松的事'] },
      { max: 9,  label: '轻度', color: '#e4b622',
        advice: '🧩 <b>轻度焦虑。</b>身体在提醒你压力有点大了，学几个放松技巧就能缓解不少。',
        actions: ['试试"4-7-8 呼吸法"：吸气4秒、屏息7秒、呼气8秒，每天5分钟', '把担忧写下来，逐条问"最坏能坏到哪"', '减少咖啡因和睡前刷手机', '2 周后复测对比'] },
      { max: 14, label: '中度', color: '#ef8f2e',
        advice: '🌧️ <b>中度焦虑。</b>焦虑已开始干扰工作和睡眠，值得系统性地处理。',
        actions: ['学习正念/放松训练（如正念呼吸 APP）', '预约一次心理咨询，聊聊压力源', '规律有氧运动，每周 3 次以上', '若影响睡眠，考虑去心理科评估'] },
      { max: 21, label: '重度', color: '#e5484d',
        advice: '🌩️ <b>重度焦虑。</b>长期高度焦虑会透支身体，<b>建议尽快寻求精神科或心理咨询师的专业帮助</b>，药物 + 心理治疗对焦虑障碍效果明确。',
        actions: ['尽快预约精神科/心理科', '告诉身边人你的状况，获得支持', '避免用酒精"助眠"，会加重焦虑', '如伴随惊恐发作，立即就诊'] }
    ]
  }
};
const MT_OPTS = ['完全没有', '有几天', '一半以上的时间', '几乎每天'];
let mtCur = 'phq9', mtIdx = 0, mtAns = [];

function mtStart(k) {
  mtCur = k; mtIdx = 0;
  mtAns = new Array(MT_SCALES[k].qs.length).fill(null);
  document.getElementById('mt-picker').style.display = 'none';
  document.getElementById('mt-result').style.display = 'none';
  document.getElementById('mt-quiz').style.display = 'block';
  document.getElementById('mt-qtitle').innerText = MT_SCALES[k].short;
  mtRenderQ();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function mtQuit() {
  document.getElementById('mt-quiz').style.display = 'none';
  document.getElementById('mt-result').style.display = 'none';
  document.getElementById('mt-picker').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function mtRetest() { mtStart(mtCur); }
function mtRenderQ() {
  const s = MT_SCALES[mtCur];
  const n = s.qs.length;
  document.getElementById('mt-qnum').innerText = `第 ${mtIdx + 1} / ${n} 题`;
  document.getElementById('mt-qtext').innerText = '过去两周，你有多少时候被以下问题困扰：\n「' + s.qs[mtIdx] + '」';
  document.getElementById('mt-qpct').innerText = Math.round(mtIdx / n * 100) + '%';
  document.getElementById('mt-bar').style.width = (mtIdx / n * 100) + '%';
  const box = document.getElementById('mt-ans');
  box.innerHTML = '';
  MT_OPTS.forEach((o, v) => {
    const b = document.createElement('button');
    b.innerText = o;
    if (mtAns[mtIdx] === v) b.classList.add('sel');
    b.onclick = () => { mtAns[mtIdx] = v; mtRenderQ(); setTimeout(() => mtNav(1, true), 180); };
    box.appendChild(b);
  });
  // 重新触发动画
  const card = document.getElementById('mt-qcard');
  card.style.animation = 'none'; card.offsetHeight; card.style.animation = '';
  document.getElementById('mt-prev').disabled = (mtIdx === 0);
  document.getElementById('mt-next').innerText = (mtIdx === n - 1) ? '生成评估报告 →' : '下一题 →';
}
function mtNav(d, auto) {
  const s = MT_SCALES[mtCur];
  const n = s.qs.length;
  if (d > 0) {
    if (mtAns[mtIdx] === null && !auto) { alert('请先选择一个选项'); return; }
    if (mtIdx === n - 1) { mtCalc(); return; }
    mtIdx++;
  } else {
    if (mtIdx === 0) return;
    mtIdx--;
  }
  mtRenderQ();
}
function mtCalc() {
  const s = MT_SCALES[mtCur];
  if (mtAns.some(a => a === null)) { alert('还有题目没答完哦'); return; }
  const total = mtAns.reduce((a, b) => a + b, 0);
  const lv = s.sev.find(x => total <= x.max);
  document.getElementById('mt-quiz').style.display = 'none';
  document.getElementById('mt-num').innerText = total;
  document.getElementById('mt-ring').style.borderColor = lv.color;
  document.getElementById('mt-level').innerHTML = `<span style="color:${lv.color}">${lv.label}（${total} 分）</span>`;
  document.getElementById('mt-sev').innerHTML = s.sev.map(x =>
    `<div style="background:${x.color};opacity:${x===lv?1:.35}">${x.label}<br>≤${x.max}分</div>`).join('');
  document.getElementById('mt-advice').innerHTML = lv.advice +
    `<br><br>💡 <b>马老师会员</b>提供一对一心理咨询与长期陪伴，详见 <a href="https://vip.8818618.xyz/" target="_blank">vip.8818618.xyz</a>。`;
  document.getElementById('mt-action').innerHTML =
    `<h3>✅ 接下来可以这样做</h3><ul>` + lv.actions.map(a => `<li>▫️ ${a}</li>`).join('') + `</ul>`;
  // PHQ-9 第9题危机预警
  const crisis = (mtCur === 'phq9' && mtAns[8] > 0);
  document.getElementById('mt-crisis').style.display = crisis ? 'block' : 'none';
  const now = new Date();
  const ds = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  document.getElementById('mt-meta').innerHTML =
    `<span>📊 ${s.name}</span><span>🕐 ${ds}</span><span>📝 共 ${s.qs.length} 题</span><span>⚖️ 临界值 ≥10 分</span>`;
  document.getElementById('mt-items-body').innerHTML = s.qs.map((q, i) => {
    const v = mtAns[i];
    return `<tr><td>${i+1}. ${q}</td><td>${MT_OPTS[v]}</td><td style="color:${v>=2?'#e5484d':'inherit'}">${v}</td></tr>`;
  }).join('');
  try {
    const key = 'mt_hist_' + mtCur;
    const hist = JSON.parse(localStorage.getItem(key) || '[]');
    hist.push({ d: ds, s: total, l: lv.label });
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
</script>
{% endraw %}
