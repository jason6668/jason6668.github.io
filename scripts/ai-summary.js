'use strict';
/**
 * AI 摘要卡片：构建时把 source/_data/ai_summary.json 的摘要注入到文章正文顶部。
 * 摘要由 scripts/gen-ai-summary.js 调用 AI 接口生成；本脚本只负责渲染。
 * 用 after_post_render（按文章处理，首页/归档只显示摘要不走全文，不会误注入）。
 */
const fs = require('fs');
const path = require('path');

let SUMMARY_MAP = null;
function loadMap() {
  if (SUMMARY_MAP) return SUMMARY_MAP;
  SUMMARY_MAP = {};
  try {
    const f = path.join(hexo.source_dir, '_data', 'ai_summary.json');
    if (fs.existsSync(f)) SUMMARY_MAP = JSON.parse(fs.readFileSync(f, 'utf8'));
  } catch (e) { hexo.log.warn('[ai-summary] 读取 ai_summary.json 失败:', e.message); }
  return SUMMARY_MAP;
}

hexo.extend.filter.register('after_post_render', function (data) {
  if (!data || data.layout !== 'post') return data;
  const summary = loadMap()[data.slug];
  if (!summary || !String(summary).trim()) return data;

  const card = `
<div class="ai-summary-card" id="ai-summary-card">
  <div class="ai-summary-head"><span class="ai-summary-icon">✨</span><span class="ai-summary-title">AI 摘要</span></div>
  <div class="ai-summary-body"><span id="ai-summary-type"></span><span class="ai-summary-caret" id="ai-summary-caret">|</span></div>
</div>
<style>
.ai-summary-card{margin:0 0 18px;padding:14px 18px;border-radius:12px;background:linear-gradient(135deg,#eef2ff,#f6f0ff);border:1px solid #dfe6ff;font-size:14px;line-height:1.8;color:#333;box-shadow:0 2px 10px rgba(90,110,255,.08)}
.ai-summary-head{display:flex;align-items:center;gap:6px;font-weight:700;color:#425AEF;margin-bottom:6px;font-size:15px}
.ai-summary-caret{display:inline-block;animation:ai-blink 1s steps(1) infinite;color:#425AEF;font-weight:700}
@keyframes ai-blink{50%{opacity:0}}
[data-theme="dark"] .ai-summary-card{background:linear-gradient(135deg,#1b2340,#241b3d);border-color:#2c3a6e;color:#dbe2ff;box-shadow:none}
[data-theme="dark"] .ai-summary-head{color:#8ea2ff}
[data-theme="dark"] .ai-summary-caret{color:#8ea2ff}
@media (prefers-color-scheme:dark){.ai-summary-card{background:linear-gradient(135deg,#1b2340,#241b3d);border-color:#2c3a6e;color:#dbe2ff;box-shadow:none}.ai-summary-head{color:#8ea2ff}.ai-summary-caret{color:#8ea2ff}}
</style>
<script>
(function(){
  var el=document.getElementById('ai-summary-type'), caret=document.getElementById('ai-summary-caret');
  var text=${JSON.stringify(summary)};
  var i=0, timer=setInterval(function(){
    el.textContent=text.slice(0,++i);
    if(i>=text.length){clearInterval(timer); if(caret) caret.style.display='none';}
  }, 28);
})();
<\/script>`;

  data.content = card + data.content;
  return data;
});
