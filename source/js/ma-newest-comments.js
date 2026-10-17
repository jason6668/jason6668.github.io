/* 马老师博客 - 最新留言卡片兜底（3 条静态排布）
 * 逻辑：主题自带加载器（Twikoo）优先，最多等它 5 秒；
 * 若仍无留言，留言板 /comments/ 留言优先展示，其次全站最新评论，
 * 都没有则渲染示例留言（各 5 秒超时，6.5 秒必出内容）。
 * 展示：一次排 3 条（聊天列表式），静态不轮播。
 * 有真实留言时示例留言永远不会出现；主题后加载出真实评论会覆盖兜底。
 */
(function () {
  'use strict';
  var CARD_SEL = '#card-newest-comments .aside-list';
  var TWIKOO_API = 'https://comment.8818618.xyz';

  function boxes() {
    // 主题在 console 卡片组和侧边栏各放了一个同 id 的卡片，都要处理
    var nodes = document.querySelectorAll('[id="card-newest-comments"] .aside-list');
    return Array.prototype.slice.call(nodes);
  }

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
  function stripHtml(s) { return String(s || '').replace(/<[^>]+>/g, '').slice(0, 60); }
  function fmtDate(t) {
    var d = new Date(+t);
    if (!t || isNaN(d.getTime())) return '';
    return (d.getMonth() + 1) + '/' + d.getDate() + '日';
  }
  function daysAgo(n) {
    var d = new Date(); d.setDate(d.getDate() - n);
    return (d.getMonth() + 1) + '/' + d.getDate() + '日';
  }
  // 两行式：第一行 头像 + 昵称（粗体）+ 日期（右对齐），第二行 内容摘要单行省略
  // 关键排版用内联样式写死，主题 CSS 覆盖不掉
  function itemHTML(nick, text, url, date, noBorder) {
    var first = esc(nick).charAt(0) || '友';
    var u = esc(url || '/comments/');
    var avStyle = 'background:' + colorFor(nick) + ';width:42px;height:42px;border-radius:10px;' +
      'display:inline-flex;align-items:center;justify-content:center;color:#fff;' +
      'font-size:16px;font-weight:700;flex:none;';
    var boxStyle = 'display:block;padding:10px 2px;' + (noBorder ? '' : 'border-top:1px solid rgba(120,120,120,.12);');
    return '<div class="aside-list-item ma-msg" data-ma="1" style="' + boxStyle + '">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
      '<a href="' + u + '" style="flex:none;text-decoration:none;line-height:0;">' +
      '<span class="ma-comment-avatar" style="' + avStyle + '">' + first + '</span></a>' +
      '<span style="font-weight:700;font-size:14px;color:var(--anzhiyu-fontcolor);' +
      'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + esc(nick) + '</span>' +
      (date ? '<span style="margin-left:auto;flex:none;font-size:12px;color:var(--anzhiyu-secondtext);">' + esc(date) + '</span>' : '') +
      '</div>' +
      '<a href="' + u + '" title="' + esc(text) + '" style="display:block;margin-top:6px;' +
      'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;' +
      'font-size:13px;line-height:1.6;color:var(--anzhiyu-secondtext);text-decoration:none;">' + esc(text) + '</a>' +
      '</div>';
  }
  // 主题自己渲染的条目（没有 data-ma 标记）
  function boxHasThemeItems(b) { return b.querySelector('.aside-list-item:not([data-ma="1"])') !== null; }
  // 还没有任何条目的卡片才需要兜底
  function boxNeeds(b) { return b.querySelector('.aside-list-item') === null; }
  // 静态排 3 条；主题后填入真实评论则撤下兜底
  function showThree(b, list) {
    var html = '';
    list.slice(0, 3).forEach(function (m, idx) {
      html += itemHTML(m.nick, m.text, m.url, m.date, idx === 0);
    });
    b.innerHTML = html;
    // 观察 30 秒：主题若填入真实条目，撤下兜底条目
    var n = 0;
    var watcher = setInterval(function () {
      n++;
      if (boxHasThemeItems(b)) {
        var ours = b.querySelectorAll('[data-ma="1"]');
        for (var i = 0; i < ours.length; i++) ours[i].remove();
        clearInterval(watcher);
      } else if (n >= 15) { clearInterval(watcher); }
    }, 2000);
  }
  // 只给 targets 里这些卡片渲染；主题已填的卡片跳过
  function render(list, targets) {
    (targets || boxes()).forEach(function (b) {
      if (boxHasThemeItems(b)) return;
      showThree(b, list);
    });
  }

  function twikooEvent(payload, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var ctrl, timer;
      try { ctrl = new AbortController(); } catch (e) { reject(e); return; }
      timer = setTimeout(function () { try { ctrl.abort(); } catch (e) {} reject(new Error('timeout')); }, timeoutMs || 5000);
      fetch(TWIKOO_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal
      }).then(function (r) { clearTimeout(timer); return r.json(); })
        .then(resolve, function (e) { clearTimeout(timer); reject(e); });
    });
  }
  // 每个卡片独立兜底：只给仍然空着的卡片填内容
  function fallback(targets) {
    targets = (targets || []).filter(boxNeeds);
    if (!targets.length) return; // 每个卡片都已有内容就不管
    var settled = false;
    function finish(list) {
      if (settled) return;
      settled = true;
      render(list && list.length ? list.slice(0, 6) : SAMPLE, targets);
    }
    // 留言板优先：两个请求并行发出，但渲染时留言板结果优先
    var pBoard = twikooEvent({ event: 'COMMENT_GET', url: '/comments/', page: 1, pageSize: 6 }, 5000)
      .then(function (d) {
        var arr = (d && d.data && d.data.data) || [];
        return arr.map(function (c) {
          return { nick: c.nick || '访客', text: stripHtml(c.commentText || c.comment), url: '/comments/', date: fmtDate(c.created) };
        }).filter(function (c) { return c.text; });
      }).catch(function () { return []; });
    var pRecent = twikooEvent({ event: 'GET_RECENT_COMMENTS', pageSize: 6, includeReply: true }, 5000)
      .then(function (d) {
        var arr = (d && d.data) || [];
        return arr.map(function (c) {
          return { nick: c.nick || '访客', text: stripHtml(c.commentText), url: c.url || '/comments/', date: fmtDate(c.created || c.createdAt) };
        }).filter(function (c) { return c.text; });
      }).catch(function () { return []; });
    // 留言板先返回且有数据 → 立即用留言板
    pBoard.then(function (bl) {
      if (settled) return;
      if (bl.length) { settled = true; render(bl, targets); }
      else pRecent.then(function (rl) { finish(rl); }); // 留言板为空才用最新评论
    });
    // 6.5 秒强制兜底：优先留言板，其次最新评论，最后示例
    setTimeout(function () {
      if (settled) return;
      settled = true;
      Promise.all([pBoard, pRecent]).then(function (rs) {
        var pick = rs[0].length ? rs[0] : rs[1];
        render(pick.length ? pick.slice(0, 6) : SAMPLE, targets);
      });
    }, 6500);
  }

  // 示例留言：仅在没有任何真实留言时展示（马老师读者口吻）
  var SAMPLE = [
    { nick: '老陈', text: '马老师这篇把失业的事说透了，转到我们车间群了，好几个工友看完半天没说话。', url: '/comments/', date: daysAgo(0) },
    { nick: '阿珍', text: '关注三年了，每次心里堵得慌就来翻马老师的旧文，比那些心灵鸡汤管用多了。', url: '/comments/', date: daysAgo(1) },
    { nick: '大刘', text: '房价这篇看了三遍，已经转给家里人了。说得实在，不整虚的。', url: '/comments/', date: daysAgo(2) },
    { nick: '小雨', text: '马老师，能多写写普通人怎么攒钱吗？蹲一个更新！', url: '/comments/', date: daysAgo(3) },
    { nick: '悟空', text: '哈哈，骂得好，笑着笑着就沉默了。', url: '/comments/', date: daysAgo(4) }
  ];

  // 每 500ms 检查一次：只给仍然空着的卡片兜底，最多等主题 5 秒
  var waited = 0;
  var timer = setInterval(function () {
    waited += 500;
    var need = boxes().filter(boxNeeds);
    if (!need.length) { clearInterval(timer); return; }
    if (waited >= 5000) { clearInterval(timer); fallback(need); }
  }, 500);
})();
