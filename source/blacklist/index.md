---
title: 职场避雷全网检索
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

.blacklist-wrapper {
max-width: 900px;
margin: 0 auto;
padding: 2rem 1rem;
}

.tool-header {
text-align: center;
margin-bottom: 2rem;
}

.tool-header h1 {
font-size: 2.2rem;
color: var(--anzhiyu-theme);
margin-bottom: 0.5rem;
}

.blacklist-card {
background: var(--anzhiyu-card-bg);
border: 1px solid var(--anzhiyu-card-border);
border-radius: 15px;
padding: 2rem;
box-shadow: var(--anzhiyu-shadow-light);
}

.input-group {
display: flex;
gap: 10px;
margin-bottom: 20px;
}

.search-input {
flex: 1;
padding: 15px 20px;
border-radius: 10px;
border: 1px solid #ddd;
background: var(--anzhiyu-background);
color: var(--anzhiyu-fontcolor);
font-size: 1.1rem;
}

.primary-btn {
padding: 15px 30px;
border-radius: 10px;
background: var(--anzhiyu-theme);
color: white !important;
font-weight: bold;
border: none;
cursor: pointer;
white-space: nowrap;
}

.engine-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
gap: 12px;
margin-top: 15px;
}

.engine-btn {
padding: 12px;
border-radius: 8px;
color: white !important;
font-weight: 500;
cursor: pointer;
border: none;
text-align: center;
font-size: 0.9rem;
}

.xhs { background: #ff2442; }
.maimai { background: #0076ff; }
.qcc { background: #1b85cf; }
.google { background: #4285f4; }
</style>

<div class="blacklist-wrapper">
<div class="tool-header">
<h1>职场避雷全网检索</h1>
<p>聚合小红书、脉脉等多平台真实评价</p>
</div>

<div class="blacklist-card">
<div class="input-group">
<input type="text" id="target" class="search-input" placeholder="输入公司全称，开启自动化检索...">
<button onclick="allOpen()" class="primary-btn">一键全网深搜</button>
</div>

<p style="font-size: 0.85rem; color: #888;">或者手动选择以下平台：</p>

<div class="engine-grid">
<button onclick="go('xhs')" class="engine-btn xhs">小红书检索</button>
<button onclick="go('maimai')" class="engine-btn maimai">脉脉职言</button>
<button onclick="go('qcc')" class="engine-btn qcc">企查查风险</button>
<button onclick="go('google')" class="engine-btn google">谷歌深度搜</button>
</div>
</div>

<div style="margin-top: 3rem; text-align: center; border-top: 2px dashed #eee; padding-top: 2rem;">
<h2>📢 匿名投稿 / 避雷墙</h2>
<p>记录真实，让求职更透明。</p>
</div>
</div>

<script>
function go(type) {
    const val = document.getElementById('target').value.trim();
    if (!val) {
        alert('请先输入公司名称');
        return;
    }
    let url = '';
    const encoded = encodeURIComponent(val);
    switch(type) {
        case 'xhs': url = `https://www.xiaohongshu.com/search_result?keyword=${encoded}%20%E9%81%BF%E9%9B%B7`; break;
        case 'maimai': url = `https://maimai.cn/search/contacts?query=${encoded}%20%E5%9D%91`; break;
        case 'qcc': url = `https://www.qcc.com/web/search?key=${encoded}`; break;
        case 'google': url = `https://www.google.com/search?q=${encoded}%20%E9%81%BF%E9%9B%B7%20%E5%9D%91%20%E9%9D%A2%E7%BB%8F`; break;
    }
    window.open(url, '_blank');
}

function allOpen() {
    const val = document.getElementById('target').value.trim();
    if (!val) {
        alert('请先输入公司名称');
        return;
    }
    // 自动触发多平台并行搜索，最大程度节省时间
    go('xhs');
    setTimeout(() => go('maimai'), 200);
    setTimeout(() => go('qcc'), 400);
}
</script>
