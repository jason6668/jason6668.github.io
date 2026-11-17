/* 马老师博客 todayCard 特效视频 (2026-11-17)
 * 首页「好巧啊，你也失业了呀～」横幅卡片：把静态封面图换成循环播放的
 * 金色声波特效视频（/images/shiye-banner.mp4），照高盛首页 Hero 视频的做法：
 * 静音自动循环播放，右上角带暂停/播放按钮。
 * - 文字（tips/title）与「更多推荐」按钮都是主题原有 DOM，不动。
 * - 视频加载失败时自动回退到原静态封面图。
 * - 卡片滚出视野时暂停、滚回继续；点「更多推荐」收起卡片时也暂停。
 * - 尊重 prefers-reduced-motion：不自动播放，留静态图。
 * - 主题用 pjax 换页：init 幂等，定时复查补上 pjax 后新渲染的卡片。
 */
(function () {
  'use strict';

  var VIDEO_SRC = '/images/shiye-banner.mp4?v=20261117c';
  var POSTER = '/images/shiye-banner-new.jpg?v=20261012';

  var style = document.createElement('style');
  style.textContent = [
    '.todayCard-video-toggle{',
    '  position:absolute; top:.7rem; right:.7rem; z-index:3;',
    '  width:30px; height:30px; border-radius:50%; border:0; cursor:pointer;',
    '  background:rgba(0,0,0,.45); color:#fff; font-size:12px; line-height:30px;',
    '  text-align:center; padding:0; backdrop-filter:blur(2px);',
    '}',
    '.todayCard-video-toggle:hover{ background:rgba(0,0,0,.65); }',
    'video.todayCard-cover{ width:100%; height:100%; object-fit:cover; }'
  ].join('\n');
  document.head.appendChild(style);

  function init() {
    var card = document.getElementById('todayCard');
    if (!card) return;
    if (card.querySelector('video.todayCard-cover')) return;
    var img = card.querySelector('img.todayCard-cover');
    if (!img) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var video = document.createElement('video');
    video.className = 'todayCard-cover';
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('preload', 'auto');
    video.setAttribute('poster', POSTER);
    video.setAttribute('aria-hidden', 'true');
    video.muted = true;
    var src = document.createElement('source');
    src.src = VIDEO_SRC;
    src.type = 'video/mp4';
    video.appendChild(src);

    var restored = false;
    function restore() {
      if (restored) return;
      restored = true;
      if (video.parentNode) video.parentNode.removeChild(video);
      if (toggle.parentNode) toggle.parentNode.removeChild(toggle);
      img.style.display = '';
    }
    video.addEventListener('error', restore, true);
    src.addEventListener('error', restore);

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'todayCard-video-toggle';
    toggle.setAttribute('aria-label', '暂停视频');
    toggle.textContent = '\u275A\u275A';
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (video.paused) {
        video.play();
        toggle.textContent = '\u275A\u275A';
        toggle.setAttribute('aria-label', '暂停视频');
      } else {
        video.pause();
        toggle.textContent = '\u25B6';
        toggle.setAttribute('aria-label', '播放视频');
      }
    });

    img.style.display = 'none';
    img.parentNode.insertBefore(video, img);
    card.appendChild(toggle);

    // 卡片滚出视野暂停、滚回继续（省电）
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (restored) { io.disconnect(); return; }
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            if (toggle.textContent !== '\u25B6') video.play().catch(function () {});
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.1 });
      io.observe(card);
    }

    // 点「更多推荐」收起卡片时暂停
    var moreBtn = card.querySelector('.banner-button-group');
    if (moreBtn) moreBtn.addEventListener('click', function () { video.pause(); });

    var p = video.play();
    if (p && p.catch) p.catch(function () { /* 自动播放被拦就留首帧海报 */ });
    // 数据就绪后再补一次播放（慢网下首 call 可能发生在可播之前）
    video.addEventListener('canplay', function () {
      if (!restored && video.paused && toggle.textContent !== '\u25B6') {
        video.play().catch(function () {});
      }
    });
  }

  init();
  document.addEventListener('pjax:complete', function () { setTimeout(init, 300); });
  // pjax 后主题重渲染卡片可能晚于事件，定时复查补上（init 幂等，开销极小）
  setInterval(init, 2000);
})();
