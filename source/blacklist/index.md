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
  /* 隐藏默认的文章标题和元信息，打造纯净工具流 */
  #page-header { display: none !important; }
  #post-info { display: none !important; }
  .post-copyright { display: none !important; }
  .post-reward { display: none !important; }
  #pagination { display: none !important; }
  
  .blacklist-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1rem;
    font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  }
  
  .tool-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .tool-header h1 {
    font-size: 2.5rem;
    background: linear-gradient(120deg, var(--anzhiyu-theme), #ff2442);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }
  
  .tool-header p {
    color: var(--anzhiyu-secondtext);
    font-size: 1.1rem;
  }

  .blacklist-card {
    background: var(--anzhiyu-card-bg);
    border: 1px solid var(--anzhiyu-card-border);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 8px 30px rgba(0,0,0,0.05);
    backdrop-filter: blur(10px);
  }

  .search-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .search-input-wrapper {
    width: 100%;
    max-width: 700px;
    position: relative;
  }

  .search-input {
    width: 100%;
    padding: 18px 25px;
    border-radius: 50px;
    border: 2px solid #eee;
    font-size: 1.2rem;
    background: var(--anzhiyu-background);
    color: var(--anzhiyu-fontcolor);
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
  }

  .search-input:focus {
    border-color: var(--anzhiyu-theme);
    box-shadow: 0 0 15px rgba(66, 90, 239, 0.2);
    outline: none;
  }

  .engine-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
    width: 100%;
    max-width: 700px;
    margin-top: 10px;
  }

  .engine-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 15px;
    border-radius: 12px;
    color: white !important;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-size: 0.95rem;
  }

  .engine-btn:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  .xhs { background: linear-gradient(135deg, #ff2442, #ff5277); }
  .maimai { background: linear-gradient(135deg, #0076ff, #00b0ff); }
  .qcc { background: linear-gradient(135deg, #1b85cf, #27aae1); }
  .google { background: linear-gradient(135deg, #4285f4, #34a853); }

  .disclaimer {
    margin-top: 2rem;
    padding: 1rem;
    background: rgba(255, 36, 66, 0.05);
    border-left: 4px solid #ff2442;
    border-radius: 4px;
    font-size: 0.85rem;
    color: #666;
    text-align: left;
  }
</style>

<div class="blacklist-wrapper">
  <div class="tool-header">
    <h1>职场避雷全网检索</h1>
    <p>⚡️ 一键聚合各大职场社交平台真实评价</p>
  </div>

  <div class="blacklist-card">
    <div class="search-container">
      <div class="search-input-wrapper">
        <input type="text" id="target" class="search-input" placeholder="输入公司全称，如：XXX科技有限公司">
      </div>
      
      <div class="engine-grid">
        <button onclick="go('xhs')" class="engine-btn xhs">
          <i class="anzhiyufont anzhiyu-icon-redbook"></i> 小红书避雷
        </button>
        <button onclick="go('maimai')" class="engine-btn maimai">
          <i class="anzhiyufont anzhiyu-icon-linkedin"></i> 脉脉职言
        </button>
        <button onclick="go('qcc')" class="engine-btn qcc">
          <i class="anzhiyufont anzhiyu-icon-shield"></i> 企查查风险
        </button>
        <button onclick="go('google')" class="engine-btn google">
          <i class="anzhiyufont anzhiyu-icon-google"></i> 谷歌深度搜
        </button>
      </div>
    </div>

    <div class="disclaimer">
      <strong>⚠️ 避雷声明：</strong>本工具仅提供跳转检索服务，搜索结果均为第三方平台公开评价。请用户理性甄别信息真伪。
    </div>
  </div>

  <div style="margin-top: 4rem; text-align: center;">
    <h2 style="margin-bottom: 2rem;">📢 匿名投稿 / 避雷墙</h2>
    <p style="color: var(--anzhiyu-secondtext); margin-bottom: 2rem;">每一条真实记录，都在帮助未来的同事少踩一个坑。</p>
  </div>
</div>

<script>
  function go(type) {
    const val = document.getElementById('target').value.trim();
    if (!val) {
      alert('请先输入要检索的公司名称');
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
</script>
