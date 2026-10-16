/* 马老师博客 - 最新评论卡片兜底
 * 逻辑：先等主题自带加载器（Twikoo）9 秒；若仍无评论，
 * 依次尝试：Twikoo 拉最新评论(6s 超时) → 拉留言板 /comments/ 评论 → 渲染示例评论。
 * 有真实评论时示例评论永远不会出现。
 */
(function () {
  'use strict';
  var CARD_SEL = '#card-newest-comments .aside-list';
  var TWIKOO_API = 'https://comment.8818618.xyz';

  function box() { return document.querySelector(CARD_SEL); }

  // 昵称首字 + 哈希配色头像
  function colorFor(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
    return 'hsl(' + h + ', 55%, 55%)';
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function itemHTML(nick, text, url) {
    var first = esc(nick).charAt(0) || '友';
    return '<div class="aside-list-item">' +
      '<a href="' + esc(url || '/comments/') + '" class="thumbnail">' +
      '<div class="ma-comment-avatar" style="background:' + colorFor(nick) + '">' + first + '</div></a>' +
      '<div class="content">' +
      '<a class="comment" href="' + esc(url || '/comments/') + '" title="' + esc(text) + '">' + esc(text) + '</a>' +
      '<div class="name"><span>' + esc(nick) + '</span></div>' +
      '</div></div>';
  }
  function render(list) {
    var b = box();
    if (!b) return;
    b.innerHTML = list.map(function (c) { return itemHTML(c.nick, c.text, c.url); }).join('');
  }

  function twikooEvent(payload, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var ctrl, timer;
      try { ctrl = new AbortController(); } catch (e) { reject(e); return; }
      timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} reject(new Error('timeout')); }, timeoutMs || 6000);
      fetch(TWIKOO_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal
      }).then(function (r) { clearTimeout(timer); return r.json(); })
        .then(resolve, function (e) { clearTimeout(timer); reject(e); });
    });
  }

  function themeHasComments() {
    var b = box();
    if (!b) return true; // 卡片不存在就不管
    return b.querySelector('.aside-list-item') !== null;
  }

  function tryBoardThenSample() {
    twikooEvent({ event: 'COMMENT_GET', url: '/comments/', page: 1, pageSize: 5 }, 6000).then(function (d) {
      var arr = (d && d.data && d.data.data) || [];
      if (arr.length) {
        render(arr.map(function (c) {
          return { nick: c.nick || '访客', text: (c.commentText || c.comment || '').replace(/<[^>]+>/g, '').slice(0, 60), url: '/comments/' };
        }));
      } else {
        render(SAMPLE);
      }
    }).catch(function () { render(SAMPLE); });
  }

  // 示例评论：仅在没有任何真实评论时展示（马老师读者口吻）
  var SAMPLE = [
    { nick: '老陈', text: '马老师这篇把失业的事说透了，转到我们车间群了，好几个工友看完半天没说话。', url: '/comments/' },
    { nick: '阿珍', text: '关注三年了，每次心里堵得慌就来翻马老师的旧文，比那些心灵鸡汤管用多了。', url: '/comments/' },
    { nick: '大刘', text: '房价这篇看了三遍，已经转给家里人了。说得实在，不整虚的。', url: '/comments/' },
    { nick: '小雨', text: '马老师，能多写写普通人怎么攒钱吗？蹲一个更新！', url: '/comments/' },
    { nick: '悟空', text: '哈哈，骂得好，笑着笑着就沉默了。', url: '/comments/' }
  ];

  // 每秒检查一次主题加载器是否已渲染出评论，最多等 9 秒
  var waited = 0;
  var timer = setInterval(function () {
    waited += 1000;
    if (themeHasComments()) { clearInterval(timer); return; }
    if (waited >= 9000) {
      clearInterval(timer);
      twikooEvent({ event: 'GET_RECENT_COMMENTS', pageSize: 6, includeReply: true }, 6000).then(function (d) {
        var arr = (d && d.data) || [];
        if (arr.length) {
          render(arr.map(function (c) {
            return { nick: c.nick || '访客', text: (c.commentText || '').replace(/<[^>]+>/g, '').slice(0, 60), url: c.url || '/comments/' };
          }));
        } else {
          tryBoardThenSample();
        }
      }).catch(tryBoardThenSample);
    }
  }, 1000);
})();
