---
title: 防窥膜效果演示器 - 侧面看不到，正面才看得到
date: 2026-04-11
top_img: false
aside: false
---

<style>
.mk-privacy{--pk-blue:#0ea5e9;--pk-gold:#b98a1e;max-width:760px;margin:2rem auto 0;padding:0 4px}
.mk-privacy .pk-title{text-align:center;font-size:1.6rem;font-weight:800;margin-bottom:.2rem}
.mk-privacy .pk-sub{text-align:center;color:#8a8f98;font-size:.9rem;margin-bottom:1.4rem}
.mk-privacy .pk-stage{background:linear-gradient(180deg,#f4f6fb,#e9edf5);border:1px solid rgba(0,0,0,.05);border-radius:20px;padding:44px 16px;perspective:1400px;overflow:hidden;position:relative}
.mk-privacy .pk-phone{width:270px;margin:0 auto;background:#0b0e14;border-radius:34px;padding:12px;box-shadow:0 24px 60px rgba(2,20,60,.28);transform-style:preserve-3d;transition:transform .18s ease-out;position:relative}
.mk-privacy .pk-screen{position:relative;border-radius:24px;overflow:hidden;background:#f6f8fc;height:480px}
.mk-privacy .pk-status{display:flex;justify-content:space-between;padding:10px 16px 4px;font-size:.68rem;color:#1f2937;font-weight:700}
.mk-privacy .pk-chat{padding:8px 12px;display:flex;flex-direction:column;gap:8px}
.mk-privacy .pk-bubble{max-width:82%;padding:8px 12px;border-radius:14px;font-size:.78rem;line-height:1.45}
.mk-privacy .pk-bubble.left{background:#fff;color:#1f2937;border:1px solid #e5e9f2;align-self:flex-start;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.05)}
.mk-privacy .pk-bubble.right{background:var(--pk-blue);color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.mk-privacy .pk-balance{margin:6px 12px;background:linear-gradient(135deg,#1e3a8a,#0ea5e9);border-radius:16px;padding:14px;color:#fff}
.mk-privacy .pk-balance .t{font-size:.68rem;opacity:.8}
.mk-privacy .pk-balance .n{font-size:1.5rem;font-weight:800;font-family:Consolas,Menlo,monospace;margin-top:2px}
.mk-privacy .pk-film{position:absolute;inset:0;pointer-events:none;opacity:0;background:
  repeating-linear-gradient(115deg,rgba(10,10,14,.9) 0 3px,rgba(60,45,10,.55) 3px 6px);
  mix-blend-mode:multiply}
.mk-privacy .pk-dim{position:absolute;inset:0;pointer-events:none;opacity:0;background:#0b0e14}
.mk-privacy .pk-eye{position:absolute;top:50%;font-size:2rem;transform:translateY(-50%);transition:left .18s ease-out;filter:grayscale(.2)}
.mk-privacy .pk-panel{background:var(--anzhiyu-card-bg,#fff);border:1px solid rgba(0,0,0,.05);border-radius:20px;padding:20px;margin-top:16px;box-shadow:0 8px 24px rgba(2,60,120,.07)}
.mk-privacy .pk-row{display:flex;align-items:center;justify-content:center;gap:12px;margin:12px 0;flex-wrap:wrap}
.mk-privacy .pk-label{font-size:.85rem;color:#8a8f98;min-width:3.4em;text-align:right}
.mk-privacy input[type=range]{-webkit-appearance:none;width:min(320px,60vw);height:8px;border-radius:6px;background:linear-gradient(90deg,var(--pk-blue),var(--pk-gold));outline:none}
.mk-privacy input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:#fff;border:3px solid var(--pk-blue);box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer}
.mk-privacy .pk-angle{font-family:Consolas,Menlo,monospace;font-size:1.3rem;font-weight:800;min-width:3.2em;text-align:center;color:#0f172a}
.mk-privacy .pk-btn{border:none;cursor:pointer;border-radius:999px;font-weight:700;padding:9px 18px;font-size:.85rem;background:#f1f5f9;color:#64748b;transition:transform .12s,box-shadow .12s}
.mk-privacy .pk-btn:active{transform:scale(.94)}
.mk-privacy .pk-btn.sel{background:#0f172a;color:#fff}
.mk-privacy .pk-btn.go{background:var(--pk-blue);color:#fff;box-shadow:0 4px 12px rgba(14,165,233,.4)}
.mk-privacy .pk-meter{height:12px;border-radius:8px;background:#eef1f6;overflow:hidden;max-width:420px;margin:6px auto 0}
.mk-privacy .pk-meter i{display:block;height:100%;width:100%;border-radius:8px;background:linear-gradient(90deg,#22c55e,#eab308,#ef4444);transition:width .18s}
.mk-privacy .pk-vis{text-align:center;font-size:.9rem;margin-top:8px;color:#475569}
.mk-privacy .pk-vis b{font-family:Consolas,Menlo,monospace;font-size:1.1rem}
.mk-privacy .pk-note{background:var(--anzhiyu-card-bg,#fff);border:1px solid rgba(0,0,0,.05);border-radius:20px;padding:20px 22px;margin-top:16px;font-size:.88rem;line-height:1.8;color:#475569}
.mk-privacy .pk-note h3{margin:.2em 0 .4em;font-size:1rem;color:#0f172a}
.mk-privacy .pk-foot{text-align:center;color:#b6bcc7;font-size:.75rem;margin:1.6rem 0 .4rem}
[data-theme="dark"] .mk-privacy .pk-stage{background:linear-gradient(180deg,#1c2333,#141a28)}
[data-theme="dark"] .mk-privacy .pk-angle{color:#f1f5f9}
[data-theme="dark"] .mk-privacy .pk-vis{color:#cbd5e1}
[data-theme="dark"] .mk-privacy .pk-note{color:#cbd5e1}
[data-theme="dark"] .mk-privacy .pk-note h3{color:#f1f5f9}
[data-theme="dark"] .mk-privacy .pk-meter{background:#2a3348}
</style>

<div class="mk-privacy" id="mk-privacy">
  <div class="pk-title">🕶️ 防窥膜效果演示器</div>
  <div class="pk-sub">拖动滑杆，把"眼睛"从正面挪到侧面，看屏幕内容如何消失</div>
  <div class="pk-stage" id="pk-stage">
    <div class="pk-eye" id="pk-eye" style="left:8%">👁️</div>
    <div class="pk-phone" id="pk-phone">
      <div class="pk-screen" id="pk-screen">
        <div class="pk-status"><span>9:41</span><span>5G 📶 🔋</span></div>
        <div class="pk-chat">
          <div class="pk-bubble left">马老师，这个月工资到账了吗？</div>
          <div class="pk-bubble right">HR 说在走流程了，别问，问就是快了</div>
          <div class="pk-bubble left">那年终奖呢？</div>
          <div class="pk-bubble right">年终奖和爱情一样，听说过，没见过</div>
        </div>
        <div class="pk-balance">
          <div class="t">💰 工资卡余额（旁人勿看）</div>
          <div class="n">¥ 12,480.00</div>
        </div>
        <div class="pk-chat">
          <div class="pk-bubble left">老板在你后面！快切屏！</div>
        </div>
        <div class="pk-film" id="pk-film"></div>
        <div class="pk-dim" id="pk-dim"></div>
      </div>
    </div>
  </div>
  <div class="pk-panel">
    <div class="pk-row">
      <span class="pk-label">视角</span>
      <input type="range" id="pk-range" min="0" max="75" value="0" step="1">
      <span class="pk-angle"><span id="pk-deg">0</span>°</span>
    </div>
    <div class="pk-row">
      <button class="pk-btn" data-view="0">正面</button>
      <button class="pk-btn" data-view="30">30°</button>
      <button class="pk-btn" data-view="55">55°</button>
      <button class="pk-btn" data-view="75">侧面</button>
      <button class="pk-btn go" id="pk-auto">▶ 自动环绕</button>
    </div>
    <div class="pk-row">
      <span class="pk-label">防窥膜</span>
      <button class="pk-btn sel" id="pk-film-on">已贴膜</button>
      <button class="pk-btn" id="pk-film-off">无膜裸奔</button>
    </div>
    <div class="pk-meter"><i id="pk-bar"></i></div>
    <div class="pk-vis">👁️ 当前可见度 <b id="pk-vis">100%</b> <span id="pk-tip"></span></div>
  </div>
  <div class="pk-note">
    <h3>🔬 原理：一句话说清</h3>
    真防窥膜里有百叶窗式的微结构，只放行正面 ±30° 左右的光线，斜射的光线会被"百叶"挡掉——所以侧面看一片黑。从侧面看还常带点金色，那是偏振层反光的颜色。<br>
    <h3>⚠️ 诚实声明</h3>
    软件改不了显示器的物理可视角度，本页是"光学模拟演示"：用透视变换模拟转头看屏幕，用条纹遮罩+压暗模拟贴膜挡光的效果。真想防同事，请去买一张物理防窥膜（记得按屏幕尺寸买，别买成手机的贴显示器上）。
  </div>
  <div class="pk-foot">© M-Teacher Privacy Lab · 工资保密，人人有责</div>
</div>

<script>
(function(){
  var root=document.getElementById('mk-privacy');
  if(!root||root.dataset.init)return; root.dataset.init='1';
  var $=function(id){return document.getElementById(id);};
  var S={angle:0,film:true,auto:false,raf:0};
  var phone=$('pk-phone'),film=$('pk-film'),dim=$('pk-dim'),eye=$('pk-eye');
  function vis(){
    var a=S.angle;
    if(S.film){return Math.max(0,Math.round(100-Math.pow(a/32,2.2)*100));}
    return Math.max(0,Math.round(100-a*0.6));
  }
  function render(){
    var a=S.angle;
    phone.style.transform='rotateY('+a+'deg)';
    $('pk-deg').textContent=a;
    $('pk-range').value=a;
    eye.style.left=(8+a/75*78)+'%';
    eye.textContent=a<25?'👁️':(a<55?'🧐':'😑');
    if(S.film){
      var o=Math.min(0.94,Math.pow(a/45,1.8)*0.94);
      film.style.opacity=o;
      film.style.backdropFilter='blur('+((a/75)*5).toFixed(1)+'px) brightness('+(1-(a/75)*0.55).toFixed(2)+')';
      film.style.webkitBackdropFilter=film.style.backdropFilter;
      dim.style.opacity=0;
    }else{
      film.style.opacity=0;
      dim.style.opacity=(a/75*0.28).toFixed(2);
    }
    var v=vis();
    $('pk-vis').textContent=v+'%';
    $('pk-bar').style.width=v+'%';
    $('pk-tip').textContent=v>70?'（看得一清二楚）':(v>25?'（勉强能瞄）':'（一片黑，防窥成功 🎉）');
    root.querySelectorAll('[data-view]').forEach(function(b){b.classList.toggle('sel',+b.dataset.view===a);});
  }
  function stopAuto(){$('pk-auto').textContent='▶ 自动环绕';S.auto=false;cancelAnimationFrame(S.raf);}
  $('pk-range').addEventListener('input',function(){stopAuto();S.angle=+this.value;render();});
  root.querySelectorAll('[data-view]').forEach(function(b){b.addEventListener('click',function(){stopAuto();S.angle=+b.dataset.view;render();});});
  $('pk-film-on').onclick=function(){S.film=true;this.classList.add('sel');$('pk-film-off').classList.remove('sel');render();};
  $('pk-film-off').onclick=function(){S.film=false;this.classList.add('sel');$('pk-film-on').classList.remove('sel');render();};
  $('pk-auto').onclick=function(){
    if(S.auto){stopAuto();return;}
    S.auto=true;this.textContent='⏸ 停止';
    var dir=1,t0=null;
    function step(ts){
      if(!S.auto)return;
      if(!t0)t0=ts;
      var dt=(ts-t0)/1000;t0=ts;
      S.angle+=dir*dt*26;
      if(S.angle>=75){S.angle=75;dir=-1;}
      if(S.angle<=0){S.angle=0;dir=1;}
      render();
      S.raf=requestAnimationFrame(step);
    }
    S.raf=requestAnimationFrame(step);
  };
  render();
  document.addEventListener('pjax:complete',function(){delete root.dataset.init;});
})();
</script>
