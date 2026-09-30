---
title: 关于我
date: 2026-04-10
type: "about"
layout: "about"
comments: true
aside: false
---

## 👨‍💻 关于我：马老师 (Jason)

### 🪞 一个“修 Bug”的人
在代码世界里，我处理的是 `SyntaxError` 和 `Connection Timeout`；
在咨询室里，我面对的是情绪的“死循环”与认知的“逻辑漏洞”。
对我而言，无论是代码还是人心，底层逻辑都是关于**构建、断裂与重连**。

* **B 面：** 心理咨询师 | 擅长倾听那些在深夜里无法被编译的情绪。
* **A 面：** 独立开发者 | 沉迷于 Python 自动化、加密通讯和折腾各种“无用”的网页。
* **热爱：** LeBron James 的长青、篮球场的汗水、以及那种“万物皆可调优”的成就感。

---

## 🎙️ 正在进行的实验：失业联盟

这是我目前投入最多心力的项目。起于重庆，发于真实。
**“在这个人人都急着自我实现的时代，我想记录那些被按下的暂停键。”**

我通过深度访谈，记录普通人在职业中断期的真实切片。这里不卖焦虑，不喂鸡汤，只提供一个带温度的“树洞”，让这些声音被看见。
> *“好巧啊，你也失业了呀～”* —— 这不是嘲讽，是某种同频的握手。

---

## 🪐 我的理性浪漫

* **理性：** 是用逻辑去拆解复杂的世界，用代码去自动化繁琐的日常。
* **浪漫：** 是在效率至上的时代，愿意花时间去写诗、去录音、去关注一个具体的灵魂。

这里是我的“灵感现场”，也是一间有点乱的小书房。
希望你在这里，不仅能找到硬核的**教程笔记**，也能偶遇一段能引起共鸣的**闲言碎语**。

---

<script>
(function () {
  var API = 'https://rewards.8818618.xyz/api/rewards';
  var CACHE_KEY = 'mtreward_wall';
  var CACHE_TIME_KEY = 'mtreward_wall_time';
  var TTL = 30 * 60 * 1000; // 30分钟

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtDate(iso) {
    try { return new Date(iso).toISOString().slice(0, 10); }
    catch (e) { return ''; }
  }

  function render(rewards) {
    var box = document.querySelector('#about-reward .reward-list-all');
    if (!box || !Array.isArray(rewards) || rewards.length === 0) return;
    // 与主题原生一致：按金额降序展示
    var sorted = rewards.slice().sort(function (a, b) { return (b.money || 0) - (a.money || 0); });
    box.innerHTML = sorted.map(function (item) {
      var moneyHtml = item.money >= 50
        ? '<div class="reward-list-item-money" style="background:var(--anzhiyu-yellow)">¥' + esc(Number(item.money).toFixed(2)) + '</div>'
        : '<div class="reward-list-item-money">¥' + esc(Number(item.money).toFixed(2)) + '</div>';
      return '<div class="reward-list-item">' +
        '<div class="reward-list-item-name">' + esc(item.name) + '</div>' +
        '<div class="reward-list-bottom-group">' + moneyHtml +
        '<div class="datatime reward-list-item-time">' + esc(fmtDate(item.date)) + '</div>' +
        '</div></div>';
    }).join('');
    // 更新"最后更新"时间
    var latest = rewards.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); })[0];
    var t = document.querySelector('.reward-list-updateDate-time');
    if (t && latest) {
      try { t.setAttribute('datatime', new Date(latest.date).toISOString()); } catch (e) {}
      t.textContent = fmtDate(latest.date);
    }
    // 完整赞赏墙入口
    var sec = document.getElementById('about-reward');
    if (sec && !document.getElementById('reward-wall-more')) {
      var a = document.createElement('a');
      a.id = 'reward-wall-more';
      a.href = 'https://rewards.8818618.xyz/';
      a.target = '_blank';
      a.style.cssText = 'display:block;text-align:center;margin-top:1rem;color:var(--anzhiyu-main);font-weight:600;';
      a.textContent = '查看完整赞赏墙 →';
      sec.appendChild(a);
    }
  }

  function load() {
    try {
      var ts = localStorage.getItem(CACHE_TIME_KEY);
      if (ts && Date.now() - Number(ts) < TTL) {
        var cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (Array.isArray(cached)) { render(cached); return; }
      }
    } catch (e) {}
    fetch(API).then(function (res) {
      if (!res.ok) throw new Error('net');
      return res.json();
    }).then(function (json) {
      var rewards = json.data || [];
      render(rewards);
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(rewards));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
      } catch (e) {}
    }).catch(function (err) {
      console.warn('赞赏墙加载失败，使用静态数据', err);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
</script>
