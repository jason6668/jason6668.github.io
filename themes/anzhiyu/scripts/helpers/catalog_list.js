hexo.extend.helper.register("catalog_list", function (type) {
  let html = ``;
  hexo.locals.get(type).map(function (item) {
    if (type === "categories" && item.name === "科学") {
      html += `
    <div class="catalog-list-item" id="/tags/马老师工具分享/">
      <a href="/tags/马老师工具分享/">
        马老师工具分享
      </a>
    </div>
  `;
      return;
    }
    html += `
    <div class="catalog-list-item" id="/${item.path}">
      <a href="/${item.path}">
        ${item.name}
      </a>
    </div>
  `;
  });
  return html;
});
