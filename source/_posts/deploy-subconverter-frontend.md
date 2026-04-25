---
abbrlink: ''
categories:
- 科学上网
cover: https://tc.688650.xyz/file/1777079850553_image.png
date: '2026-04-12'
sticky: ''
tags:
- 订阅转换
- SUBWEB
- 隐私保护
title: 部署订阅转换：WEB前端 - 多种主流方案详解
updated: '2026-04-25T09:19:01.533+08:00'
---
# 🔄 部署订阅转换：WEB前端 💎 多种主流方案详解

当您成功部署了自己的订阅转换后端之后，下一步就是选择合适的 WEB 前端界面来提升用户体验。本文将为您介绍四种不同特色的订阅转换前端方案，从简单实用到功能丰富，总有一款适合您的需求。

## 🎯 如何选择合适的方案

### 新手小白推荐

- **常规前端**：[sub-web-modify](https://github.com/cmliu/sub-web-modify) - 扎实可靠
- **简单轻量**：[cf-worker-mihomo](https://github.com/Kwisma/cf-worker-mihomo) - 高效简洁

### 进阶高端玩家

- **优选订阅**：[WorkerVless2sub](https://github.com/cmliu/WorkerVless2sub) - 批量生成优选订阅，快速提升体验
- **链式代理**：[Socks2Vlesssub](https://github.com/cmliu/Socks2Vlesssub) - 协议转换，扩展兼容

## 🛠️ 事前准备

1. 一个 [GitHub](https://github.com/) 账号（用于Fork项目，方便后续部署）。
2. 一个 [CloudFlare](https://dash.cloudflare.com/) 账号（用于部署Pages项目）。
3. 一个个人域名（可选，用于绑定自定义域名，便于记忆和访问）。

---

## 1. 📦 基础订阅转换 - sub-web-modify

**项目简介**：这是一个经过优化的订阅转换前端，专注于提供稳定可靠的基础转换功能。

- 🔗 **项目地址**：[sub-web-modify](https://github.com/cmliu/sub-web-modify)

**操作步骤**：

1. Fork `sub-web-modify` 项目到自己的 GitHub 账号。
2. 编辑修改 `.env` 与 `src\views\Subconverter.vue` 文件，配置为您自己的订阅转换后端地址。
   - `.env` 文件示例：
     ```env
     VUE_APP_SUBCONVERTER_DEFAULT_BACKEND = "https://你的后端地址"
     ```
   - `src\views\Subconverter.vue` 文件示例，添加进后端下方的列表中：
     ```js
     customBackend: {    
         "马老师专属后端": "https://你的后端地址",
         // ...
     }
     ```
3. 进入 Cloudflare 的 Workers 和 Pages 控制台，创建 Pages 项目。
4. 选择导入现有 Git 存储库，选择 `sub-web-modify`。
5. 开始设置**构建和部署**参数：
   - 框架预设：`Vue`
   - 构建命令：`npm run build`
   - 构建输出目录：`/dist`
6. 保存并部署。完成后，可以根据需要绑定自定义域名。

---

## 2. ⚡ 轻量化高效转换 - cf-worker-mihomo

**项目简介**：SingBox订阅兼容性极佳，对订阅转换后的内容进行二次优化，例如防止 DNS/WebRTC 泄漏等。

- 🔗 **项目地址**：[cf-worker-mihomo](https://github.com/Kwisma/cf-worker-mihomo)

**技术亮点**：该方案不仅仅提供转换服务，还会自动修复后端转换中的常见问题。
**操作步骤**：

1. Fork `cf-worker-mihomo` 项目到自己的 GitHub 账号。
2. 在 Cloudflare 中 创建项目 → 导入现有 Git 存储库 → 选择仓库 → 开始设置。
3. 点击 **保存并部署**（首次部署因缺失环境变量失败是正常现象）。
4. 在项目的 设置 > 运行时 > 兼容性标志 中，设置为 `nodejs_compat`。
5. 添加环境变量：变量名填写 `SUB`，值填写您的订阅转换后端地址。
6. 重试部署。

---

## 3. 🎯 优选订阅生成器 - WorkerVless2sub

**项目简介**：专为追求最佳连接质量用户设计的智能优选订阅生成器。自动将优选 IP 和域名一键生成优化后的订阅链接，完美兼容 VMess、VLESS、Trojan。

- 🔗 **项目地址**：[WorkerVless2sub](https://github.com/cmliu/WorkerVless2sub)

**操作步骤**：

1. Fork `WorkerVless2sub` 项目到自己的 GitHub 账号。
2. 点击 创建项目 → 导入现有 Git 存储库 → 选择仓库 → 开始设置。
3. 保存并部署。
4. 添加环境变量：
   - 变量名为 `SUBAPI`，值为您的订阅转换后端地址。
   - 变量名为 `ADD`，值为您的优选 IP、优选域名、优选 API URL（多个元素使用换行作间隔）。
5. 重试部署。

---

## 4. 🔄 Socks2VLESS订阅生成器 - Socks2Vlesssub

**项目简介**：将 Socks5 / HTTP 代理转换为 VLESS / Trojan 订阅链接，通过 CF 形成链式代理，支持多种协议转换。

- 🔗 **项目地址**：[Socks2Vlesssub](https://github.com/cmliu/Socks2Vlesssub)

**操作步骤**：

1. Fork `Socks2Vlesssub` 项目。
2. 在 CF 点击 创建项目 → 导入现有 Git 存储库。
3. 保存并部署后，添加环境变量 `SUBAPI`，值为您的基础订阅转换后端地址。
4. 重试部署并绑定域名。
