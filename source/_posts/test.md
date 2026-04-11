---
abbrlink: ''
categories: []
date: '2026-04-11T00:03:31.729763+08:00'
tags:
- vps
title: title
updated: '2026-04-11T11:26:52.485+08:00'
---
# 3 年 6 刀 - 超低价优质 NAT VPS 推荐

偶然发现了这么一家超低价的 nat vps，3 年 6 刀，虽然配置不高，但用来做富强节点再合适不过了

## 注册账号

先 [点击此处](https://web.c-servers.co.uk/zh/r/71) 注册一个账号，然后点击找到 `AMD Ryzen质量VPS`

[![image.png](https://b2qq.24811213.xyz/2025-12/1764558373-image.webp)](https://b2qq.24811213.xyz/2025-12/1764558373-image.webp)

## 选择套餐

推荐两个套餐，这家的特点就是硬件配置都相当不错

* ​**NanoVPS-II 320 US Special**​：这就是那个 `3年6刀` 的，配置如下：
  * *1 vCore* AMD Ryzen 9 7950X3D @ 4.2 GHz (40% Fair Share)
  * *320 MB RAM* DDR4 ECC
  * *15GB NVMe* High Speed Disk
  * *1 IPv6/64* + *1 IPv4 NAT* (10 Ports TCP + 5 Ports UDP)
  * *2 TB* @ *2 Gbps* ，超出后限速 60 Mbps
  * Location: New Jersey, *New York*
* **Black Friday 2025 Web Special** ：这个 `2年14刀` 的也不错，配置如下：
  * *1 vCore* AMD Ryzen 9 7950X3D @ 4.2 GHz
  * *1GB DDR5* ECC 内存
  * *75GB NVMe* Gen4 RAM-Cached 高速硬盘
  * *1 IPv6/64* + *1 IPv4 NAT* (10 个 TCP 端口 + 5 个 UDP 端口)
  * ​*4TB @ 10 Gbps*​，超出后限速 1 Gbps，**相当于无限流量**
  * Location: New Jersey, *New York*

购买后会发送邮件到你邮箱，告知服务器的基本信息以及 SSH 登录信息

## 几个需要注意的地方

### 官方推荐的 IPv6 Ssh 登录方式

* 首先连接以下 ssh
  * 地址：`remote.cfld.uk`
  * 端口：`22`
  * 用户名：`csrv001` 至 `csrv100` 之间，任选其一
  * 密码：与 `用户名` 相同
* 登录后，运行以下命令

| `ssh root@你的ipv6地址` |
| -------------------------- |

* 根据提示输入 `yes`，再输入 `密码` 即可

### 其他登录方式

* SSH 登录默认只能使用 `IPV6 地址`，默认用户名 `root`，端口 `22`
* 新手不建议修改 SSH 端口来实现 IPV4 登录
* 如果没有本地 IPV6 环境，可以使用我的 [在线 SSH](https://ssh.yuzong.nyc.mn/) 实现 IPV6 登录
* 首次登录如果连接不上，进入网页的服务器管理，点击 `Reset Root Password` 重置密码，会给你发送一封新密码的邮件
* 如何获取 IPV4 地址及限定的 TCP 和 UDP 端口范围？
  * 先 [点击此处](http://calc.c-servers.co.uk/)
  * 填入你的 IPV6 地址，点击 `Calculate（计算）` 按钮
  * 保存获得的 IPV4 地址、TCP 和 UDP 端口范围

## 搭建节点

### 使用默认的 IPv6 搭建

我的一键五协议脚本无交互安装脚本（修改自老王的一键四协议）：`vless+reality | vmess+argo | hy2 | tuic | socks5`

| `bash <(curl -Ls https://raw.githubusercontent.com/yutian81/Keepalive/main/vps_sb5in1.sh)` |
| --------------------------------------------------------------------------------------------- |

若需修改参数，连接 SSH 输入 `sb`，即可进入管理菜单，按需修改
*注：代码默认的 ARGO 端口为 8001*

### 使用 IPv4 搭建

推荐使用 F 佬的 ArgoX 脚本，按脚本提示输入相关参数即可

| `bash <(wget -qO- https://raw.githubusercontent.com/fscarmen/argox/main/argox.sh)` |
| ------------------------------------------------------------------------------------- |

搭建完成后将节点的 IPV6 手动改成 IPV4 地址即可
*注：代码默认的 ARGO 端口为 8080*

## 速度表现

就不截图了，HY2 协议速度最快，油管跑分大概 5-6 万
argo cdn 节点取决于你的优选域名或优选 IP，我本地测试大约 3-5 万
作为一款如此便宜的 VPS，这个速度还算可以，油管 4K 完全足够

