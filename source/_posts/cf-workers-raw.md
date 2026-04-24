---
abbrlink: ''
categories:
- 科学上网
cover: https://tc.688650.xyz/file/1777042414004_image.png
date: '2026-04-12'
sticky: ''
tags:
- Cloudflare
- Workers
- GitHub
- 私库访问
title: CF-Workers-Raw：轻松安全访问 GitHub 私有仓库原始文件
updated: '2026-04-24T22:48:38.465+08:00'
---
# CF-Workers-Raw：轻松安全访问 GitHub 私有仓库

这个项目允许你通过 Cloudflare Workers 安全地访问 GitHub 私有仓库中的原始文件，无需直接暴露你的 GitHub 令牌。非常适合那些需要通过网络分发私有配置文件的场景。

## 为什么需要这个工具？

- 你有一些存储在 GitHub 私有仓库中的重要文件（如配置文件、订阅节点、节点规则等）。
- 你想直接通过 URL 访问这些文件的原始内容。
- 但是，你绝对不想在 URL 中直接暴露你的 GitHub Personal Access Token，因为这可能会被他人滥用导致严重的代码泄露。

**解决方案**：使用 Cloudflare Workers 作为中间层代理，替你安全地处理身份验证，让你可以安全无忧地访问私有文件。

---

## 🛠️ 准备工作：创建你的 GitHub 个人访问令牌

1. 登录 GitHub，进入 `Settings` > `Developer settings` > `Personal access tokens` > `Tokens(classic)` > `Generate new token (classic)`
2. 填写信息：
   - **Note**: 随意填写一个便于识别的名字
   - **Expiration**: 建议设置为 `No expiration` （永不过期）
   - **Select scopes**: 勾选 ✅ `repo`
3. 然后点击 **Generate token** 生成 token，之后请务必将生成的 token 妥善保存。注意：这个 token 创建后只会完整显示一次！

---

## 📦 部署方式

1. 打开项目 [CF-Workers-Raw](https://github.com/cmliu/CF-Workers-Raw) (原作者 CMLiussss)。
2. 在 Cloudflare 中使用 Workers 或者 Pages 都可以一键部署。
3. 推荐在环境变量中使用变量来保存您的 GitHub 令牌 (Token)，避免代码泄露。

---

## 🔧 变量说明

- `GH_TOKEN`: 你的 GitHub 令牌。
- `TOKEN`: 用于作为你自定义的访问验证密钥。
- `GH_NAME`: 你的 GitHub 用户名。
- `GH_REPO`: 你的仓库名称。

---

## 🚀 如何使用？

假设你的 Cloudflare Workers 项目部署在 `raw.090227.xyz`，而你要访问的私有文件是 `https://raw.githubusercontent.com/cmliu/CF-Workers-Raw/main/_worker.js`。

### 方法1：未设置变量参数的临时用法

通过 URL 参数传递令牌：

```text
https://raw.090227.xyz/cmliu/CF-Workers-Raw/main/_worker.js?token=你的GitHub令牌
```

或者完整版：

```text
https://raw.090227.xyz/https://raw.githubusercontent.com/cmliu/CF-Workers-Raw/main/_worker.js?token=你的GitHub令牌
```

### 方法2：只设置 `GH_TOKEN` 变量（适合固定访问）

如果你经常访问同一个私有仓库，可以在 Workers 设置中添加一个名为 `GH_TOKEN` 的环境变量。这样，你就可以直接访问，无需把 Token 拼在 URL 里：

```text
https://raw.090227.xyz/cmliu/CF-Workers-Raw/main/_worker.js
```

### 方法3：添加额外的访问控制（推荐⭐最安全）

为了更高的安全性，你可以同时设置两个变量：

- `GH_TOKEN`：真实的 GitHub 令牌
- `TOKEN`：一个自定义的访问密码（比如 `sd123123`）

然后，你的安全 URL 会是这样的：

```text
https://raw.090227.xyz/cmliu/CF-Workers-Raw/main/_worker.js?token=sd123123
```

这种方法提供了双重安全：即使有人猜到了你的自定义密钥 `sd123123`，他们仍然无法直接拿到你的 GitHub Token！

### 方法4：添加 GH_NAME、GH_REPO 隐藏你的库信息

为了更高的隐私性，你可以把你的仓库信息也藏在环境变量里：

- `GH_NAME`：例如设置 `cmliu`。此时 URL 为 `https://raw.090227.xyz/CF-Workers-Raw/main/_worker.js?token=sd123123`
- `GH_REPO`：例如设置 `CF-Workers-Raw`。此时 URL 简化为 `https://raw.090227.xyz/main/_worker.js?token=sd123123`
- `GH_BRANCH`：例如设置 `main`。URL 终极简化版为 `https://raw.090227.xyz/_worker.js?token=sd123123`

（注意：如果您使用完整的带 `githubusercontent.com` 原始 URL，缩短变量将不会生效！）
