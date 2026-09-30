---
title: 职场避雷中心
date: 2026-04-11
type: "page"
aside: false
top_img: false
copyright: false
reward: false
---

<style>
#page-header { display: none !important; }
#post-info { display: none !important; }
.post-copyright { display: none !important; }
.post-reward { display: none !important; }
#pagination { display: none !important; }

.bl-wrapper { max-width: 960px; margin: 0 auto; padding: 2rem 1rem; }
.bl-hero { text-align: center; margin-bottom: 2.5rem; }
.bl-hero h1 { font-size: 2.2rem; color: var(--anzhiyu-theme); margin-bottom: .5rem; }
.bl-hero p { color: var(--anzhiyu-fontcolor); opacity: .75; }
.bl-card {
  background: var(--anzhiyu-card-bg);
  border: 1px solid var(--anzhiyu-card-border);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--anzhiyu-shadow-light);
  margin-bottom: 1.5rem;
}
.bl-card h2 { font-size: 1.3rem; margin-bottom: 1rem; display: flex; align-items: center; gap: .5rem; }
.bl-input-group { display: flex; gap: 10px; margin-bottom: 1rem; flex-wrap: wrap; }
.bl-input {
  flex: 1; min-width: 200px; padding: 14px 18px; border-radius: 10px;
  border: 1px solid var(--anzhiyu-card-border);
  background: var(--anzhiyu-background); color: var(--anzhiyu-fontcolor); font-size: 1rem;
}
.bl-btn {
  padding: 14px 28px; border-radius: 10px; background: var(--anzhiyu-theme);
  color: #fff !important; font-weight: 700; border: none; cursor: pointer; white-space: nowrap;
}
.bl-btn:hover { opacity: .9; }
.bl-engines { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin-top: 1rem; }
.bl-engine {
  padding: 12px 8px; border-radius: 10px; color: #fff !important; font-weight: 600;
  cursor: pointer; border: none; text-align: center; font-size: .9rem; transition: transform .15s;
}
.bl-engine:hover { transform: translateY(-2px); }
.bl-engine small { display: block; font-weight: 400; opacity: .85; font-size: .75rem; margin-top: 2px; }
.e-xhs { background: linear-gradient(135deg, #ff2442, #ff6b81); }
.e-maimai { background: linear-gradient(135deg, #0076ff, #3d9bff); }
.e-qcc { background: linear-gradient(135deg, #1b85cf, #4aa8e0); }
.e-tyc { background: linear-gradient(135deg, #6a5ae0, #9a8cff); }
.e-zhihu { background: linear-gradient(135deg, #0066ff, #3d8bff); }
.e-boss { background: linear-gradient(135deg, #00b38a, #33d1a8); }
.e-google { background: linear-gradient(135deg, #4285f4, #7baaf7); }
.e-baidu { background: linear-gradient(135deg, #2932e1, #5a63f0); }
.bl-checklist { list-style: none; padding: 0; margin: 0; display: grid; gap: .8rem; }
.bl-checklist li {
  display: flex; gap: .8rem; align-items: flex-start;
  background: var(--anzhiyu-background); border-radius: 10px; padding: 1rem 1.2rem;
}
.bl-checklist .num {
  flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
  background: var(--anzhiyu-theme); color: #fff;
  display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: .85rem;
}
.bl-checklist b { display: block; margin-bottom: .2rem; }
.bl-checklist p { margin: 0; font-size: .9rem; opacity: .8; }
.bl-scam-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.bl-scam {
  border: 1px solid var(--anzhiyu-card-border); border-radius: 12px; padding: 1.2rem;
  background: var(--anzhiyu-background);
}
.bl-scam h3 { font-size: 1rem; margin: 0 0 .5rem; color: #e5484d; }
.bl-scam p { font-size: .85rem; margin: 0; opacity: .8; line-height: 1.7; }
.bl-note {
  border-left: 4px solid #e5484d; background: rgba(229,72,77,.07);
  border-radius: 0 10px 10px 0; padding: 1rem 1.2rem; font-size: .9rem; line-height: 1.8;
}

.bl-wt-tabs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:1rem; }
.bl-wt-tab { padding:10px 18px; border-radius:20px; border:2px solid var(--anzhiyu-card-border); background:var(--anzhiyu-background); cursor:pointer; font-weight:600; font-size:.9rem; color:var(--anzhiyu-fontcolor); }
.bl-wt-tab.active { border-color:var(--anzhiyu-theme); color:var(--anzhiyu-theme); background:rgba(66,90,239,.07); }
.bl-wt-body iframe { width:100%; height:640px; border:1px solid var(--anzhiyu-card-border); border-radius:12px; background:#fff; }
.bl-wt-tip { font-size:.85rem; color:#888; margin-bottom:.8rem; }
.bl-wt-tip b { color:var(--anzhiyu-theme); }
.bl-ext { margin-top:1.5rem; border-top:1px dashed var(--anzhiyu-card-border); padding-top:1.2rem; }
.bl-ext h3 { font-size:1.05rem; margin-bottom:.8rem; }
.bl-ext-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:10px; }
.bl-ext-card { border:1px solid var(--anzhiyu-card-border); border-radius:10px; padding:1rem; background:var(--anzhiyu-background); }
.bl-ext-card b { display:block; margin-bottom:.3rem; }
.bl-ext-card p { font-size:.8rem; color:#888; margin:0 0 .7rem; line-height:1.6; }
.bl-ext-card a { display:inline-block; padding:8px 16px; border-radius:8px; background:var(--anzhiyu-theme); color:#fff !important; font-size:.85rem; font-weight:600; }
@media (max-width:640px){ .bl-wt-body iframe{ height:480px; } }
</style>

<div class="bl-wrapper">
  <div class="bl-hero">
    <h1>🛡️ 职场避雷中心</h1>
    <p>入职前必查 · 一键全网检索公司口碑 / 风险 / 真实评价</p>
  </div>

  <div class="bl-card">
    <h2>🔍 公司背景一键深搜</h2>
    <div class="bl-input-group">
      <input type="text" id="bl-target" class="bl-input" placeholder="输入公司全称，如：某某科技有限公司" onkeydown="if(event.key==='Enter')blSearch()">
      <button onclick="blSearch()" class="bl-btn">开始检索</button>
    </div>
    <p style="font-size:.85rem;color:#888;margin:.5rem 0 0;">下方 4 个平台结果直接在页内展示，另 4 个平台因禁止嵌入请点击跳转查看。</p>
  </div>

  <div class="bl-card" id="bl-workbench" style="display:none;">
    <h2>🖥️ 检索工作台 <span id="bl-kw" style="font-size:.9rem;color:#888;font-weight:400;"></span></h2>
    <div class="bl-wt-tabs" id="bl-tabs"></div>
    <div class="bl-wt-body" id="bl-body"></div>
    <div class="bl-ext">
      <h3>🔗 需跳转查看的平台 <span style="font-weight:400;font-size:.8rem;color:#888;">（对方禁止页内嵌入）</span></h3>
      <div class="bl-ext-grid" id="bl-ext"></div>
    </div>
  </div>

  <div class="bl-card">
    <h2>✅ 入职前必查清单</h2>
    <ul class="bl-checklist">
      <li><span class="num">1</span><div><b>查工商司法</b><p>企查查 / 天眼查看成立年限、参保人数、被执行人、行政处罚。参保人数远小于宣传规模要警惕。</p></div></li>
      <li><span class="num">2</span><div><b>查员工口碑</b><p>小红书、脉脉搜"公司名 + 避雷 / 坑 / 加班 / 欠薪"，重点看 3 个月内的帖子。</p></div></li>
      <li><span class="num">3</span><div><b>查薪资真实性</b><p>Offer 写进合同的是税前还是税后？试用期打几折？年终奖是"最高"还是"固定"？</p></div></li>
      <li><span class="num">4</span><div><b>查社保公积金</b><p>按实际工资还是最低基数缴纳？入职当月还是次月起缴？直接问 HR，不用不好意思。</p></div></li>
      <li><span class="num">5</span><div><b>查离职率</b><p>面试时问"这个岗位为什么空出来""团队去年走了几个人"，支吾其词的基本有坑。</p></div></li>
      <li><span class="num">6</span><div><b>查合同主体</b><p>签约公司和面试公司是否为同一家？外包、劳务派遣必须在入职前明确告知。</p></div></li>
    </ul>
  </div>

  <div class="bl-card">
    <h2>⚠️ 常见求职骗局图鉴</h2>
    <div class="bl-scam-grid">
      <div class="bl-scam"><h3>💸 收费培训贷</h3><p>以"岗前培训"为名让你贷款交培训费，号称"入职后报销"。正规公司培训一律免费。</p></div>
      <div class="bl-scam"><h3>📦 刷单返利</h3><p>"动动手指日入 500"，先小额返利引你加大投入后拉黑。所有刷单都是诈骗。</p></div>
      <div class="bl-scam"><h3>🪪 证件扣押</h3><p>扣身份证、毕业证"统一保管"。这是违法的，任何理由都不能扣留证件原件。</p></div>
      <div class="bl-scam"><h3>📝 阴阳合同</h3><p>口头承诺 15k，合同只写 8k + "绩效"。一切以纸质合同为准，口头承诺录音留证。</p></div>
      <div class="bl-scam"><h3>🔄 试用期陷阱</h3><p>超长试用期、试用期无社保、试用期结束前找理由辞退。试用期最长 6 个月且必须缴社保。</p></div>
      <div class="bl-scam"><h3>🌍 海外高薪</h3><p>东南亚"客服""文员"月薪 3 万包机票。本质是电诈园区，去了就回不来。</p></div>
    </div>
  </div>


  <div class="bl-note">
    <b>📢 免责与投稿：</b>本站仅提供检索入口与科普，不构成法律建议。检索结果来自第三方平台，请自行甄别。
    如你有真实避雷经历想分享，欢迎到<a href="/comments/">留言板</a>匿名投稿，帮助更多人避坑。
  </div>
</div>

<script>
const BL_EMBED = [
  { id:'xhs', name:'📕 小红书', tip:'看什么：<b>员工真实爆料</b>。重点看 3 个月内的"避雷/劝退/加班"帖，注意水军（全是好评+无干货的号）。',
    url: q => `https://www.xiaohongshu.com/search_result?keyword=${q}%20%E9%81%BF%E9%9B%B7` },
  { id:'zhihu', name:'📘 知乎', tip:'看什么：<b>深度讨论</b>。"这家公司怎么样"类问题下高赞回答的信息密度最高，记得看评论区补充。',
    url: q => `https://www.zhihu.com/search?type=content&q=${q}%E5%85%AC%E5%8F%B8%E6%80%8E%E4%B9%88%E6%A0%B7` },
  { id:'tyc', name:'🏢 天眼查', tip:'看什么：<b>司法与经营风险</b>。重点看：被执行人、行政处罚、经营异常、参保人数是否与宣传规模相符。',
    url: q => `https://www.tianyancha.com/search?key=${q}` },
  { id:'baidu', name:'🔎 百度', tip:'看什么：<b>舆情新闻</b>。搜"公司名 + 欠薪/裁员/劳动仲裁"，注意区分官方通稿和真实爆料。',
    url: q => `https://www.baidu.com/s?wd=${q}%E9%81%BF%E9%9B%B7%20%E5%9D%91` }
];
const BL_EXT = [
  { name:'💬 脉脉职言', desc:'前员工匿名评价，看"公司点评"区的真实打分。',
    url: q => `https://maimai.cn/search/contacts?query=${q}%20%E5%9D%91` },
  { name:'💼 BOSS直聘', desc:'看在招岗位的薪资范围 + 面试评价，判断薪资真实性。',
    url: q => `https://www.zhipin.com/web/geek/job?query=${q}` },
  { name:'📊 企查查', desc:'工商信息、股东背景、融资历史，成立不满 2 年的公司多留心。',
    url: q => `https://www.qcc.com/web/search?key=${q}` },
  { name:'🌐 谷歌', desc:'英文信源 + 外媒报道，适合查有海外业务的公司。',
    url: q => `https://www.google.com/search?q=${q}%20%E9%81%BF%E9%9B%B7%20%E5%9D%91` }
];
let blKw = '';
function blSearch() {
  const v = document.getElementById('bl-target').value.trim();
  if (!v) { alert('请先输入公司名称'); return; }
  blKw = encodeURIComponent(v);
  document.getElementById('bl-kw').innerText = '— 关键词：' + v;
  document.getElementById('bl-workbench').style.display = 'block';
  const tabs = document.getElementById('bl-tabs');
  tabs.innerHTML = BL_EMBED.map((p,i) =>
    `<button class="bl-wt-tab${i===0?' active':''}" onclick="blTab(${i})">${p.name}</button>`).join('');
  const ext = document.getElementById('bl-ext');
  ext.innerHTML = BL_EXT.map(p =>
    `<div class="bl-ext-card"><b>${p.name}</b><p>${p.desc}</p><a href="${p.url(blKw)}" target="_blank" rel="noopener">前往查看 →</a></div>`).join('');
  blTab(0);
  document.getElementById('bl-workbench').scrollIntoView({behavior:'smooth'});
}
function blTab(i) {
  document.querySelectorAll('.bl-wt-tab').forEach((t,j)=>t.classList.toggle('active', j===i));
  const p = BL_EMBED[i];
  document.getElementById('bl-body').innerHTML =
    `<div class="bl-wt-tip">${p.tip}</div><iframe src="${p.url(blKw)}" loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" title="${p.name}检索结果"></iframe>`;
}
</script>
