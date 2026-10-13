# 马老师博客 — 推送规范与故障说明（给 muse.ai）

> 2026-10-13 更新。本次「博客推不上去」已定位并彻底修复。

---

## 一、结论先说：这次不是「推不上去」，是「推上去了但没部署」

| 环节 | 状态 | 说明 |
|---|---|---|
| 文章 commit 到 `master` | ✅ 成功 | 9 篇心理学 + 之前安妮·卡森 8 篇都进了仓库 |
| GitHub Actions 自动部署 | ❌ 失败 | 死在 `Set up job`，runner 根本没启动 |
| 线上站点更新 | ❌ 无变化 / 404 | 产物分支 `main` 从未被更新 |

**失败原文（关键证据）：**

```
##[error]This request has been automatically failed because it uses a deprecated
version of `actions/cache: v2`. Please update your workflow to use v3/v4 of
actions/cache to avoid interruptions.
```

**根因 1 —— 部署 workflow 用了被 GitHub 下线的老 action。**
GitHub 从 2024-12 起彻底停用 `actions/cache` v1/v2。仓库里那份远古模板同时用了
`actions/checkout@v2`、`actions/setup-node@v1`、`actions/cache@v2`、
`peaceiris/actions-gh-pages@v3`，还依赖一个并不存在的 `PERSONAL_TOKEN`。
GitHub 在「准备 action」阶段就直接判失败，所以**每一次推送，博客都不会更新**。

**根因 2 —— Pages 发布源指错了分支。**
仓库 Pages 的 Source 被设成 `master`，而 `master` 是 Hexo **源码**（根目录没有 `index.html`），
所以 GitHub 自带的 `pages build and deployment` 在 master 上也一路失败 → 全站 404。

**已修复：**
- `main.yml` 重写：全部 action 升到 `@v4`、改用内置 `GITHUB_TOKEN`、发布到 `main` 分支。
- 仓库 Pages 源：`master` → `main`（root）。
- 验证结果：9 篇文章 + 9 张封面线上全部 200。

---

## 二、下次怎么推 —— 照做即可

### 1. 目标
- 仓库：`jason6668/jason6668.github.io`
- **推源码到 `master` 分支**（默认分支）
- ⚠️ **绝对不要推 `main`**：`main` 是 CI 生成的静态产物分支，人工推送会覆盖产物

### 2. 文章放哪
```
source/_posts/YYYY-英文slug.md
```
例：`source/_posts/2026-freud-dream-interpretation.md`

### 3. Front matter 模板（照抄）
```yaml
---
title: 完整中文标题
categories:
  - 心理学大师
tags:
  - 弗洛伊德
  - 精神分析
description: 一句话摘要，出现在列表页和搜索结果里
cover: /images/psy-cover-xxx.jpg
abbrlink: psy-xxx
date: 2026-10-13 11:00:00
---
```

要点：
- **`abbrlink` 必须手写**，它决定文章 URL：`https://blog.8818618.xyz/p/<abbrlink>/`。
  全站唯一，只用小写字母 / 数字 / 短横线。不写的话 `hexo-abbrlink` 会按 crc32 生成
  一串十六进制，URL 难看且不可控。
- `date` 格式 `YYYY-MM-DD HH:mm:ss`，北京时间。配置里 `future: true`，写未来时间也能发布。
- `cover` 路径以 `/images/` 开头（**不带** `source` 前缀）。
- 文件编码 **UTF-8 无 BOM**；换行符跟仓库保持一致，用 **CRLF**（`\r\n`）。

### 4. 封面图
放 `source/images/`，文件名与 front matter 的 `cover` 一致。建议 1280×853、150–250KB 的 jpg。
**不要用同名文件覆盖别人的图**（上次生成时同秒同名撞车互相覆盖过）。

### 5. 推送方式
1. 首选 `git push origin master`。
2. 如果报 `502` / `SSL_ERROR_SYSCALL` / `Recv failure`（代理抖动），**不要死磕重试**，
   改用 GitHub Contents API 或 `gh api` 提交，一样能进仓库。

### 6. 🔴 不要碰的东西
- **不要用旧模板覆盖 `.github/workflows/main.yml`** —— 它就是这次事故的根源，现在是 v4 版本。
  任何 workflow 里的 action 一律 `@v4`（或更新），**永远不要出现 `@v2`**。
- **不要改仓库的 Pages 设置** —— 发布源必须是 `main` 分支 / `(root)`。

### 7. 推完必须自检（三步，约 2 分钟）
```bash
# ① 部署是否成功
gh run list --repo jason6668/jason6668.github.io --limit 3

# ② 若失败，先看是不是死在 Set up job（= action 版本被 GitHub 弃用）
gh run view <run-id> --repo jason6668/jason6668.github.io --log-failed | head -40

# ③ 等 1–2 分钟，验证文章真能打开
curl.exe -s -o /dev/null -w "%{http_code}\n" "https://blog.8818618.xyz/p/<abbrlink>/"
# 必须返回 200
```

### 8. 附带的「同步新文章到论坛」workflow
`blog-sync-forum.yml` 在推送 `source/_posts/**` 时会自动触发，最长要等 15 分钟
（它要轮询等博客更新完成）。**它失败不影响博客发布**，不用管。

---

## 三、给 muse.ai 的一句话版（可直接粘贴）

> 往 `jason6668/jason6668.github.io` 的 **master** 分支推 `source/_posts/*.md`
> （UTF-8 无 BOM、CRLF，front matter 必须含**唯一**的 `abbrlink` 和 `cover`）。
> **别动 `main` 分支，别动 `.github/workflows/` 里的任何文件。**
> 推完用 `gh run list` 确认 "Deploy Hexo to GitHub Pages" 是 `success`，
> 再 `curl` 一下 `https://blog.8818618.xyz/p/<abbrlink>/` 拿到 200，才算完成。
> 如果部署失败，第一件事是看是不是 **`Set up job`** 挂了 ——
> 那说明 workflow 里混进了被 GitHub 弃用的 action 老版本（v1/v2），必须升到 v4。
