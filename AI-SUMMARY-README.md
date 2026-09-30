# AI 摘要使用说明

文章页标题下方的"✨ AI 摘要"卡片（打字机效果，深浅色自动适配），灵感来自 blog.811520.xyz 的 Typecho AI 摘要教程。

## 原理

- `gen-ai-summary.js`：调用 OpenAI 兼容接口（默认 Kimi 免费）为文章生成摘要，写入 `source/_data/ai_summary.json`
- `ai-summary.js`：Hexo 构建插件，`after_render:html` 时只在文章页（`page.__post`）标题后注入摘要卡片，首页/归档不显示

## 首次使用

1. 去 ChatAnywhere 免费申请 API Key
2. 生成全部文章摘要（已有摘要的会自动跳过；约 2-3 分钟跑完，脚本逐篇落盘、中断可续跑）：
   ```
   AI_API_KEY=你的key node scripts/gen-ai-summary.js
   ```
3. push 到 GitHub，Cloudflare Pages 自动重建即生效

## 发新文章后

发完新文章，跑一遍上面的命令即可（只给新文章生成，老文章跳过），然后 push。

## 本地构建看不到卡片？

Hexo 用 `db.json` 缓存渲染结果，老文章不会重新走 filter。删掉 `db.json` 再 `hexo generate` 即可。
（Cloudflare Pages 每次都是全新构建，不受影响。）

## 换别的 AI 接口

环境变量覆盖即可（任何 OpenAI 兼容接口）：
```
AI_API_URL=https://api.openai.com/v1 AI_MODEL=gpt-4o-mini AI_API_KEY=xxx node scripts/gen-ai-summary.js
```

## 踩过的坑

- Kimi 的 `moonshot-v1-auto` 已下线、免费 key 限流 3 RPM 太慢；OpenRouter 免费模型每天只有 50 次额度——最终切到 ChatAnywhere；
- ChatAnywhere 有两个 host：`api.chatanywhere.tech`（国内）和 `api.chatanywhere.org`（国外），**key 和 host 是绑定的**，用错 host 会报 401 ApiKey 错误；
- OpenRouter 建议带 `HTTP-Referer` / `X-Title` 头，脚本保留了（ChatAnywhere 无所谓）。
