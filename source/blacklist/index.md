---
title: 职场避雷专区 - 记录真实，避开深坑
date: 2026-04-11
type: "about"
aside: false
---

<style>
  .blacklist-container {
    padding: 2rem;
    background: var(--anzhiyu-card-bg);
    border-radius: 12px;
    box-shadow: var(--anzhiyu-shadow-light);
    margin-bottom: 2rem;
    text-align: center;
  }
  .search-box {
    display: flex;
    max-width: 600px;
    margin: 1.5rem auto;
    gap: 10px;
  }
  .search-input {
    flex: 1;
    padding: 12px 16px;
    border-radius: 8px;
    border: 2px solid var(--anzhiyu-theme);
    background: var(--anzhiyu-background);
    color: var(--anzhiyu-fontcolor);
    outline: none;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 1rem;
  }
  .search-btn {
    padding: 10px 20px;
    border-radius: 8px;
    background: var(--anzhiyu-theme);
    color: white !important;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    border: none;
    text-decoration: none !important;
  }
  .search-btn:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
  .xhs-btn { background: #ff2442; } /* 小红书红 */
  .maimai-btn { background: #0076ff; } /* 脉脉蓝 */
  .qcc-btn { background: #1b85cf; } /* 企查查 */
  
  .notice {
    font-size: 0.9rem;
    color: var(--anzhiyu-secondtext);
    margin-top: 1rem;
  }
</style>

<div class="blacklist-container">
  <h2>🔍 快速全网检索</h2>
  <p>输入公司名称，一键检索各大平台真实评价</p>
  
  <div class="search-box">
    <input type="text" id="companyInput" class="search-input" placeholder="请输入公司全称或关键词...">
  </div>
  
  <div class="btn-group">
    <button onclick="searchPlatform('xhs')" class="search-btn xhs-btn">小红书检索</button>
    <button onclick="searchPlatform('maimai')" class="search-btn maimai-btn">脉脉检索</button>
    <button onclick="searchPlatform('qcc')" class="search-btn qcc-btn">企查查背调</button>
    <button onclick="searchPlatform('google')" class="search-btn">谷歌深度搜索</button>
  </div>
  
  <p class="notice">💡 提示：点击按钮将前往第三方平台。欢迎在下方评论区留言您遭遇的实录，为后来者避坑。</p>
</div>

<script>
  function searchPlatform(type) {
    const input = document.getElementById('companyInput').value.trim();
    if (!input) {
      alert('请输入公司名称后再检索');
      return;
    }
    
    let url = '';
    switch(type) {
      case 'xhs':
        url = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(input + ' 避雷')}`;
        break;
      case 'maimai':
        url = `https://maimai.cn/search/contacts?query=${encodeURIComponent(input + ' 坑')}`;
        break;
      case 'qcc':
        url = `https://www.qcc.com/web/search?key=${encodeURIComponent(input)}`;
        break;
      case 'google':
        url = `https://www.google.com/search?q=${encodeURIComponent(input + ' 避雷 评价 面经')}`;
        break;
    }
    window.open(url, '_blank');
  }
</script>

---

## 📢 避雷实录
请在下方提交您的真实遭遇（建议脱敏）。您的每一条留言都可能挽救一个职场人的职业生涯。
