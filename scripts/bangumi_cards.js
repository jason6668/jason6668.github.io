'use strict';
/* 追番页卡片渲染：读取 source/_data/bangumi.yml（site.data.bangumi），
   在文章里用 {% bangumi_cards %} 插入。后台改 yml 即可增删改。 */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

hexo.extend.tag.register('bangumi_cards', function () {
  const data = (hexo.locals.get('data') || {}).bangumi || [];
  if (!Array.isArray(data) || !data.length) return '';
  const badge = { '在看': '#3b82f6', '已看': '#22a06b', '想看': '#9a8c6d' };
  const cards = data.map(function (b) {
    const color = badge[b.status] || '#888';
    const score = b.score
      ? '<span style="color:#f59e0b;font-weight:700">★ ' + esc(b.score) + '</span>' : '';
    return '<div style="background:var(--anzhiyu-card-bg,#fff);border:1px solid rgba(0,0,0,.06);border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.05)">'
      + '<div style="aspect-ratio:16/10;overflow:hidden"><img src="' + esc(b.cover) + '" alt="' + esc(b.name) + '" style="width:100%;height:100%;object-fit:cover" loading="lazy"></div>'
      + '<div style="padding:12px 14px">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px">'
      + '<span style="font-weight:700;font-size:1.02rem">' + esc(b.name) + '</span>' + score + '</div>'
      + '<div style="margin:8px 0;display:flex;gap:8px;align-items:center">'
      + '<span style="background:' + color + ';color:#fff;font-size:.72rem;padding:2px 8px;border-radius:99px">' + esc(b.status) + '</span>'
      + '<span style="font-size:.8rem;opacity:.75">' + esc(b.progress || '') + '</span></div>'
      + '<p style="margin:0;font-size:.88rem;line-height:1.55;opacity:.85">' + esc(b.comment || '') + '</p>'
      + '</div></div>';
  }).join('');
  return '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:16px;margin:18px 0">'
    + cards + '</div>';
});
