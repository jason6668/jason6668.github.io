/* 马老师博客 - 鼠标特效：粉色圆环跟随 + 彩色涂鸦拖尾 + 点击爆发 */
(function () {
  'use strict';

  // 移动端不启用
  if ('ontouchstart' in window && !window.matchMedia('(pointer:fine)').matches) return;

  var COLORS = ['#ff6b9d', '#ff8e53', '#ffd93d', '#6bcb77', '#4d96ff', '#9b5de5', '#f15bb5'];

  function randColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  // ---------- 粉色圆环光标 ----------
  var ring = document.createElement('div');
  ring.id = 'ma-cursor-ring';
  ring.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'width:36px', 'height:36px',
    'margin:-18px 0 0 -18px', 'border:2px solid #ff6b9d', 'border-radius:50%',
    'pointer-events:none', 'z-index:999999',
    'transition:width .18s ease,height .18s ease,margin .18s ease,background .18s ease,opacity .3s ease',
    'opacity:.9'
  ].join(';');
  document.body.appendChild(ring);

  var rx = -100, ry = -100, tx = -100, ty = -100, hovering = false;

  function ringLoop() {
    rx += (tx - rx) * 0.35;
    ry += (ty - ry) * 0.35;
    ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
    requestAnimationFrame(ringLoop);
  }
  requestAnimationFrame(ringLoop);

  function setHover(on) {
    hovering = on;
    if (on) {
      ring.style.width = '56px'; ring.style.height = '56px';
      ring.style.margin = '-28px 0 0 -28px';
      ring.style.background = 'rgba(255,107,157,.12)';
    } else {
      ring.style.width = '36px'; ring.style.height = '36px';
      ring.style.margin = '-18px 0 0 -18px';
      ring.style.background = 'transparent';
    }
  }

  // ---------- 全屏画布：涂鸦拖尾 ----------
  var cv = document.createElement('canvas');
  cv.id = 'ma-cursor-trail';
  cv.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999998;';
  document.body.appendChild(cv);
  var ctx = cv.getContext('2d');

  function resize() {
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var lastX = null, lastY = null, lastT = 0;
  var strokes = []; // {x1,y1,x2,y2,color,life}

  function addStroke(x1, y1, x2, y2) {
    // 两点之间画一段彩色短划线，带一点随机抖动，形如蜡笔涂鸦
    var dx = x2 - x1, dy = y2 - y1;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 2 || dist > 120) return;
    var jx = (Math.random() - 0.5) * 6, jy = (Math.random() - 0.5) * 6;
    strokes.push({
      x1: x1 + jx, y1: y1 + jy,
      x2: x2 - jx, y2: y2 - jy,
      color: randColor(), life: 1
    });
    if (strokes.length > 400) strokes.shift();
  }

  function burst(x, y) {
    // 点击爆发：一小簇向四周放射的彩色短划线
    for (var i = 0; i < 14; i++) {
      var a = Math.random() * Math.PI * 2;
      var r1 = 6 + Math.random() * 8, r2 = r1 + 12 + Math.random() * 22;
      strokes.push({
        x1: x + Math.cos(a) * r1, y1: y + Math.sin(a) * r1,
        x2: x + Math.cos(a) * r2, y2: y + Math.sin(a) * r2,
        color: randColor(), life: 1
      });
    }
    if (strokes.length > 400) strokes.splice(0, strokes.length - 400);
  }

  function drawLoop() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.lineCap = 'round';
    for (var i = strokes.length - 1; i >= 0; i--) {
      var s = strokes[i];
      s.life -= 0.02;
      if (s.life <= 0) { strokes.splice(i, 1); continue; }
      ctx.globalAlpha = Math.min(1, s.life * 1.5);
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawLoop);
  }
  requestAnimationFrame(drawLoop);

  document.addEventListener('mousemove', function (e) {
    tx = e.clientX; ty = e.clientY;
    var now = Date.now();
    if (lastX !== null && now - lastT < 50) {
      addStroke(lastX, lastY, e.clientX, e.clientY);
    }
    lastX = e.clientX; lastY = e.clientY; lastT = now;

    // 悬停在可交互元素上时圆环放大
    var t = e.target;
    var hot = t && t.closest && t.closest('a,button,.card,.recent-post-item,input,textarea,select,[role="button"]');
    if (!!hot !== hovering) setHover(!!hot);
  }, { passive: true });

  document.addEventListener('click', function (e) {
    burst(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener('mouseleave', function () {
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function () {
    ring.style.opacity = '.9';
  });
})();
