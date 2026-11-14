/* 马老师博客防搬运 (2026-10-23)
 * 只作用于文章正文区 (#article-container):
 * 1) 禁右键菜单 (挡随手复制/图片另存)
 * 2) 禁图片拖拽拖出、移动端长按保存菜单
 * 复制文本时的版权尾巴由主题自带 copy.copyright 追加, 本脚本不重复处理。
 * 事件走 document 委托, 兼容主题 pjax 换页。
 */
(function () {
  'use strict';
  function inArticle(node) {
    return !!(node && node.closest && node.closest('#article-container'));
  }
  document.addEventListener('contextmenu', function (e) {
    if (inArticle(e.target)) e.preventDefault();
  });
  document.addEventListener('dragstart', function (e) {
    if (inArticle(e.target) && e.target.tagName === 'IMG') e.preventDefault();
  });
  var style = document.createElement('style');
  style.textContent = '#article-container img { -webkit-touch-callout: none; }';
  document.head.appendChild(style);
})();
