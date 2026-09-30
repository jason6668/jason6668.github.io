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
@media (max-width: 640px) { .bl-card { padding: 1.2rem; } .bl-hero h1 { font-size: 1.7rem; } }
</style>

<div class="bl-wrapper">
  <div class="bl-hero">
    <h1>🛡️ 职场避雷中心</h1>
    <p>入职前必查 · 一键全网检索公司口碑 / 风险 / 真实评价</p>
  </div>

  <div class="bl-card">
    <h2>🔍 公司背景一键深搜</h2>
    <div class="bl-input-group">
      <input type="text" id="bl-target" class="bl-input" placeholder="输入公司全称，如：某某科技有限公司">
      <button onclick="blAll()" class="bl-btn">一键全网深搜</button>
    </div>
    <div class="bl-engines">
      <button onclick="blGo('xhs')" class="bl-engine e-xhs">小红书<small>员工真实爆料</small></button>
      <button onclick="blGo('maimai')" class="bl-engine e-maimai">脉脉职言<small>前员工评价</small></button>
      <button onclick="blGo('boss')" class="bl-engine e-boss">BOSS直聘<small>面试评价</small></button>
      <button onclick="blGo('zhihu')" class="bl-engine e-zhihu">知乎<small>深度讨论</small></button>
      <button onclick="blGo('qcc')" class="bl-engine e-qcc">企查查<small>工商风险</small></button>
      <button onclick="blGo('tyc')" class="bl-engine e-tyc">天眼查<small>司法诉讼</small></button>
      <button onclick="blGo('baidu')" class="bl-engine e-baidu">百度<small>舆情新闻</small></button>
      <button onclick="blGo('google')" class="bl-engine e-google">谷歌<small>英文信源</small></button>
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
function blGo(type) {
  const val = document.getElementById('bl-target').value.trim();
  if (!val) { alert('请先输入公司名称'); return; }
  const e = encodeURIComponent(val);
  const urls = {
    xhs: `https://www.xiaohongshu.com/search_result?keyword=${e}%20%E9%81%BF%E9%9B%B7`,
    maimai: `https://maimai.cn/search/contacts?query=${e}%20%E5%9D%91`,
    boss: `https://www.zhipin.com/web/geek/job?query=${e}`,
    zhihu: `https://www.zhihu.com/search?type=content&q=${e}%E5%85%AC%E5%8F%B8%E6%80%8E%E4%B9%88%E6%A0%B7`,
    qcc: `https://www.qcc.com/web/search?key=${e}`,
    tyc: `https://www.tianyancha.com/search?key=${e}`,
    baidu: `https://www.baidu.com/s?wd=${e}%E9%81%BF%E9%9B%B7%20%E5%9D%91`,
    google: `https://www.google.com/search?q=${e}%20%E9%81%BF%E9%9B%B7%20%E5%9D%91%20%E9%9D%A2%E7%BB%8F`
  };
  window.open(urls[type], '_blank');
}
function blAll() {
  const val = document.getElementById('bl-target').value.trim();
  if (!val) { alert('请先输入公司名称'); return; }
  ['xhs','maimai','qcc'].forEach((t, i) => setTimeout(() => blGo(t), i * 300));
}
</script>
