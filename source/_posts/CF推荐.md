---
abbrlink: CF部署
categories:
- - 科学上网
cover: https://tc.8818618.xyz/file/1784009889465_image.png
date: '2026-07-14T14:09:59.159560+08:00'
sticky: ''
tags:
- 科学上网
- CF
- Edgetunnel 部署
title: Edgetunnel 部署与 VLESS 订阅转换指南
updated: '2026-07-14T14:10:07.403+08:00'
---
# 边缘计算的进阶玩法：Edgetunnel 部署与 VLESS 订阅转换指南


折腾服务器和网络节点，往往是一个将复杂逻辑不断封装、简化的过程。在自建网络环境的路上，我们总希望以最低的维护成本，获得最稳定、最无感的体验。

今天来聊聊 Cloudflare Worker 上的一个优秀项目：**Edgetunnel**。准确地说，这次我们要部署的是 GitHub 开发者 `jason6668` 的一个修改分支版本。

相比于原版，这个版本解决了一个极其痛点的需求：**在原版的基础上，增加了直接将 VLESS 配置信息在线转换为订阅内容的功能。** 这意味着，你部署完之后，只需要在原地址后面加个简单的后缀，就能直接生成适配 Clash 或 Singbox 的订阅链接，省去了再找第三方订阅转换服务的麻烦。

以下是完整的纯代码手搓部署教程。

## 准备工作

在这个 Serverless 架构中，我们不需要传统的 Linux 虚拟机（无论你是 AMD64 还是 ARM 架构在这里都不受限），一切都在 Cloudflare 的全球边缘节点上运行。你需要准备：

1. 一个 Cloudflare 账号。
2. 一个由你托管在 CF 上的域名（比如类似我常用的 `.xyz` 域名）。
3. 生成一个属于你自己的 UUID（作为安全验证的凭证）。

## 核心部署步骤

### 第一步：创建 Worker 并注入灵魂

1. 登录 Cloudflare 控制台，在左侧菜单找到 **Workers & Pages**，点击 **Create Application** -> **Create Worker**。
2. 随便给你的 Worker 起个名字，点击 Deploy。
3. 部署成功后，点击 **Edit Code** 进入在线代码编辑器。
4. 打开项目源码地址：`https://github.com/jason6668/edgetunnel/blob/main/_worker.js`。将里面的全部代码复制，覆盖掉 CF 编辑器里的默认代码。

### 第二步：配置专属 UUID

代码贴进去后，不要急着点保存。我们需要将代码中的默认凭证替换为你自己的。

* 在代码的大约第 4 行，找到 `userID` 变量。
* 将它修改为你提前准备好的 UUID（例如：`90cd4a77-141a-43c9-991b-xxxxxxxxx`）。

修改完毕后，点击右上角的 **Save and Deploy**（保存并部署）。

### 第三步：绑定自定义域名（关键）

自带的 `workers.dev` 域名在很多地区的网络环境下是被阻断的，所以绑定自己的域名是必修课。

1. 返回你的 Worker 管理页面。
2. 找到 **Triggers** (触发器) 选项卡。
3. 点击 **Add Custom Domain** (添加自定义域)。
4. 填入你已经托管在 CF 上的二级域名（例如 `sub.yourdomain.com`），添加并等待证书自动下发完成。

## 享受成果：一键订阅转换

这个修改版最迷人的地方就在于此。当你的自定义域名生效后，你已经拥有了一个强大的多合一订阅分发中心。

假设你的域名是 `sub.yourdomain.com`，你的 UUID 是 `90cd4a77...`，你可以在任何浏览器或客户端中这样使用：

* **获取通用自适应订阅：** 直接访问 `https://sub.yourdomain.com/你的UUID`
* **获取 Base64 订阅（适用 PassWall, SSR+ 等）：** 访问 `https://sub.yourdomain.com/你的UUID?sub`
* **获取 Clash 专属订阅（适用 OpenClash, Clash Verge 等）：** 访问 `https://sub.yourdomain.com/你的UUID?clash`
* **获取 Singbox 专属订阅：** 访问 `https://sub.yourdomain.com/你的UUID?sb`

## 后记：代码里的理性与浪漫

把一台虚拟主机的沉重负担，卸载到分布于全球各地的 CDN 边缘节点上；把一行行枯燥的协议代码，变成一个干净优雅的订阅链接。

在这个过程中，我们不需要关心底层的 Docker 容器是否崩溃，不需要关心 Nginx 反向代理的配置是否冲突。我们只需要设定好规则，互联网的边缘算力就会为我们日夜奔流。对于热爱折腾的人来说，这种用技术掌控数据的确定感，或许就是一种不务正业的理性浪漫。
