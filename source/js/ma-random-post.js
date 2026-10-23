/* 马老师朋友圈 · 随机钓鱼：从自建朋友圈 API 随机取一篇订阅文章展示。
   数据接口：https://fcircle.8818618.xyz/randompost */
(function () {
  var API = 'https://fcircle.8818618.xyz/randompost';
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function render(a) {
    var box = document.getElementById('random-post');
    if (!box) return;
    if (!a || !a.link) {
      box.innerHTML = '<div style="padding:16px 18px;opacity:.65">今天池塘没鱼，稍后再来 🎣</div>';
      return;
    }
    box.innerHTML =
      '<a href="' + esc(a.link) + '" target="_blank" rel="noopener" style="display:flex;gap:14px;align-items:center;padding:14px 16px;background:var(--anzhiyu-card-bg,#fff);border-radius:14px;border:1px solid rgba(0,0,0,.06);text-decoration:none;color:inherit">'
      + '<img src="' + esc(a.avatar || '') + '" alt="" style="width:52px;height:52px;border-radius:50%;object-fit:cover;flex:none" onerror="this.style.display=\'none\'">'
      + '<span style="min-width:0"><span style="display:block;font-weight:700;font-size:1.02rem;line-height:1.45">' + esc(a.title) + '</span>'
      + '<span style="display:block;margin-top:4px;font-size:.82rem;opacity:.7">来自「' + esc(a.author) + '」 · ' + esc(a.created) + ' · 点开看看 →</span></span></a>';
  }
  window.fetchRandomPost = function () {
    var box = document.getElementById('random-post');
    if (!box) return;
    box.innerHTML = '<div style="padding:16px 18px;opacity:.65">正在为您钓鱼中… 🎣</div>';
    fetch(API, { method: 'GET' })
      .then(function (r) { return r.json(); })
      .then(render)
      .catch(function () {
        var b = document.getElementById('random-post');
        if (b) b.innerHTML = '<div style="padding:16px 18px;opacity:.65">钓鱼失败，网络开小差了，点右上角刷新再试</div>';
      });
  };
  function auto() {
    if (document.getElementById('random-post')) window.fetchRandomPost();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', auto);
  } else {
    auto();
  }
})();
