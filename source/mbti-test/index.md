---
title: 16型人格 (MBTI) 免费性格测试
date: 2026-04-12
type: "page"
aside: false
top_img: false
copyright: false
reward: false
---

{% raw %}
<style>
#page-header { display: none !important; }
#post-info { display: none !important; }
body { background-color: #f3f4f6; }

.mbti-app { max-width: 800px; margin: 0 auto; padding: 2rem 1rem; font-family: "Nunito Sans", "Helvetica Neue", -apple-system, BlinkMacSystemFont, Arial, sans-serif; }

/* 开始页 */
#start-screen { text-align: center; }
.start-hero { background: #fff; border-radius: 16px; padding: 3rem 2rem; box-shadow: 0 4px 20px rgba(0,0,0,.06); margin-bottom: 1.5rem; }
.start-hero h1 { font-size: 2.4rem; color: #333; margin-bottom: .6rem; }
.start-hero .sub { color: #6a6a6a; font-size: 1.05rem; margin-bottom: 1.5rem; }
.start-badges { display: flex; gap: .6rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.8rem; }
.start-badges span { background: #f0f4ff; color: #425AED; font-weight: 700; font-size: .85rem; padding: .4rem .9rem; border-radius: 20px; }
.start-theory { text-align: left; background: #f8f9fa; border-radius: 12px; padding: 1.2rem 1.4rem; font-size: .9rem; color: #666; line-height: 1.9; margin-bottom: 1.8rem; }
.start-theory b { color: #333; }
.dim-preview { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; margin-bottom: 1.8rem; text-align: left; }
.dim-preview .dp { background: #fff; border-radius: 10px; padding: 1rem 1.2rem; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
.dim-preview .dp b { display: block; margin-bottom: .3rem; }
.dim-preview .dp p { font-size: .85rem; color: #777; margin: 0; line-height: 1.7; }
.big-start {
  background: #425AED; color: #fff; border: none; padding: 16px 60px; font-size: 1.25rem;
  font-weight: 700; border-radius: 40px; cursor: pointer; box-shadow: 0 6px 20px rgba(66,90,237,.35); transition: all .2s;
}
.big-start:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(66,90,237,.45); }
.start-tip { margin-top: 1rem; font-size: .85rem; color: #999; }

/* 答题页（一题一屏，对标 16P） */
#quiz-screen { display: none; }
.progress-sticky-wrapper { position: sticky; top: 60px; background: rgba(243,244,246,.95); padding: 15px 0; z-index: 100; border-bottom: 1px solid rgba(0,0,0,.05); }
.progress-header { display: flex; justify-content: space-between; align-items: center; font-weight: 600; color: #a1a1a1; font-size: .9rem; margin-bottom: 8px; }
.progress-container { width: 100%; height: 6px; background: #e2e2e2; border-radius: 3px; overflow: hidden; }
.progress-bar { height: 100%; background: #33a474; width: 0%; transition: width .4s ease; }
.question-row { padding: 2.5rem 1.5rem; text-align: center; background: #fff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,.05); margin-top: 1.5rem; animation: fadeIn .35s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
.statement { font-size: 1.45rem; color: #424242; margin-bottom: 2.2rem; font-weight: 600; line-height: 1.5; }
.likert-labels { display: flex; justify-content: center; align-items: center; margin-bottom: 1rem; }
.label-agree { color: #33a474; font-weight: 700; font-size: 1rem; margin-right: 15px; }
.label-disagree { color: #88619a; font-weight: 700; font-size: 1rem; margin-left: 15px; }
.likert-scale { display: flex; justify-content: center; align-items: center; gap: 15px; }
.circle-btn { border-radius: 50%; border: 2px solid transparent; cursor: pointer; background: white; transition: all .2s cubic-bezier(.25,.8,.25,1); }
.size-3 { width: 55px; height: 55px; } .size-2 { width: 45px; height: 45px; }
.size-1 { width: 35px; height: 35px; } .size-0 { width: 30px; height: 30px; border-color: #94A0B4; }
.circle-btn.agree { border-color: #33a474; } .circle-btn.agree:hover { background-color: rgba(51,164,116,.2); }
.circle-btn.agree.selected { background-color: #33a474; transform: scale(1.05); }
.circle-btn.disagree { border-color: #88619a; } .circle-btn.disagree:hover { background-color: rgba(136,97,154,.2); }
.circle-btn.disagree.selected { background-color: #88619a; transform: scale(1.05); }
.circle-btn.neutral:hover { background-color: rgba(148,160,180,.2); }
.circle-btn.neutral.selected { background-color: #94A0B4; transform: scale(1.05); }
.quiz-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; }
.quiz-nav button { padding: 12px 30px; border-radius: 30px; border: 2px solid #425AED; background: #fff; color: #425AED; font-weight: 700; cursor: pointer; }
.quiz-nav button:disabled { opacity: .3; cursor: not-allowed; }
.quiz-quit { background: none !important; border: none !important; color: #aaa !important; font-size: .85rem; padding: 12px !important; }
@media (max-width: 600px) {
  .likert-scale { gap: 8px; } .statement { font-size: 1.2rem; }
  .label-agree, .label-disagree { font-size: .85rem; }
  .size-3 { width: 44px; height: 44px; } .size-2 { width: 36px; height: 36px; }
  .size-1 { width: 28px; height: 28px; } .size-0 { width: 24px; height: 24px; }
  .dim-preview { grid-template-columns: 1fr; }
}

/* 结果页 */
#result-wrapper { display: none; background: #fff; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,.08); padding: 3rem 2rem; text-align: center; animation: fadeIn .5s ease; }
.res-role { display: inline-block; font-size: .95rem; font-weight: 800; letter-spacing: 1px; padding: .45rem 1.2rem; border-radius: 20px; margin-bottom: 1rem; color: #fff; }
.res-role-label { font-size: 1.05rem; color: #88619a; font-weight: 700; letter-spacing: 2px; margin-bottom: 10px; }
.type-title { font-size: 4.5rem; font-weight: 800; color: #33a474; margin: 0; line-height: 1; }
.type-name { font-size: 1.9rem; color: #424242; margin: 5px 0 2rem; font-weight: 600; }
.dimension-row { display: flex; flex-direction: column; align-items: center; margin-bottom: 1.6rem; }
.dim-title { font-size: 1.05rem; font-weight: 700; color: #333; margin-bottom: 10px; }
.dim-bar-wrapper { display: flex; align-items: center; width: 100%; max-width: 500px; justify-content: space-between; }
.dim-label { font-size: .92rem; font-weight: 700; width: 120px; }
.dim-label.left { text-align: right; margin-right: 15px; } .dim-label.right { text-align: left; margin-left: 15px; }
.dim-line { flex: 1; height: 8px; background: #e2e2e2; border-radius: 4px; position: relative; overflow: hidden; }
.dim-fill { height: 100%; position: absolute; top: 0; border-radius: 4px; }
.res-section { text-align: left; margin-bottom: 2rem; }
.res-section h3 { font-size: 1.15rem; margin-bottom: .8rem; color: #333; }
.res-desc { color: #555; line-height: 1.9; font-size: 1.02rem; }
.res-cards { display: grid; gap: .8rem; margin-top: 1rem; }
.res-cards .rc { border-radius: 0 8px 8px 0; padding: .9rem 1rem; font-size: .95rem; line-height: 1.8; color: #444; }
.celeb-row { display: flex; gap: .8rem; flex-wrap: wrap; }
.celeb { background: #f8f9fa; border-radius: 10px; padding: .7rem 1.1rem; font-size: .9rem; font-weight: 600; color: #555; }
.type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: .6rem; }
.type-cell { border: 2px solid #eee; border-radius: 10px; padding: .7rem .3rem; cursor: pointer; transition: all .15s; background: #fff; }
.type-cell:hover { border-color: #425AED; }
.type-cell.cur { border-color: #33a474; background: #f0faf5; }
.type-cell b { display: block; font-size: .95rem; }
.type-cell span { font-size: .75rem; color: #888; }
.hist-row { display: flex; justify-content: space-between; font-size: .88rem; padding: .55rem .9rem; background: #f8f9fa; border-radius: 8px; margin-bottom: .4rem; }
.action-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin: 1.5rem 0; }
.next-btn { background: #425AED; color: #fff; border: none; padding: 14px 40px; font-size: 1.05rem; font-weight: 700; border-radius: 30px; cursor: pointer; box-shadow: 0 4px 15px rgba(66,90,237,.3); transition: all .3s; }
.next-btn:hover { transform: translateY(-2px); }
.next-btn.gray { background: #888; box-shadow: none; }
.dim-edu { margin-top: 2.5rem; text-align: left; background: #f8f9fa; border-radius: 12px; padding: 1.5rem 1.8rem; }
.dim-edu h3 { margin-top: 0; }
.dim-edu p { font-size: .9rem; line-height: 1.9; color: #555; margin: .6rem 0; }
.dim-edu .note { font-size: .82rem; color: #999; }
@media (max-width: 600px) { .type-grid { gap: .4rem; } .type-cell b { font-size: .8rem; } }
</style>

<div class="mbti-app">

  <!-- 开始页 -->
  <div id="start-screen">
    <div class="start-hero">
      <h1>🧬 免费性格测试</h1>
      <p class="sub">60 道题 · 约 8 分钟 · 发现你的 16 型人格</p>
      <div class="start-badges">
        <span>60 题</span><span>约 8 分钟</span><span>5 个维度</span><span>16 种类型</span>
      </div>
      <div class="start-theory">
        📚 <b>理论来源：</b>基于荣格心理类型理论（Jung, 1921）与 Myers-Briggs 类型指标框架。
        测试从五个维度评估你的偏好倾向：<b>精神</b>（能量来源）、<b>能量</b>（信息接收）、<b>本性</b>（决策方式）、<b>战术</b>（生活方式）、<b>身份</b>（自我认同）。
      </div>
      <div class="dim-preview">
        <div class="dp"><b>🧠 精神 E / I</b><p>外向从社交中充电，内向从独处中回血</p></div>
        <div class="dp"><b>🔭 能量 N / S</b><p>直觉关注可能性，实感关注事实细节</p></div>
        <div class="dp"><b>⚖️ 本性 T / F</b><p>逻辑重公平效率，感受重和谐人心</p></div>
        <div class="dp"><b>🗺️ 战术 J / P</b><p>计划喜欢确定性，探索喜欢灵活性</p></div>
      </div>
      <button class="big-start" onclick="mbtiBegin()">开始测试 →</button>
      <p class="start-tip">请凭第一直觉作答，没有对错之分 · 可随时退出</p>
    </div>
  </div>

  <!-- 答题页（一题一屏） -->
  <div id="quiz-screen">
    <div class="progress-sticky-wrapper">
      <div class="progress-header"><span id="pct-text">0%</span><span id="q-counter"></span></div>
      <div class="progress-container"><div class="progress-bar" id="progress-bar"></div></div>
    </div>
    <div class="question-row" id="q-row">
      <div class="statement" id="q-text"></div>
      <div class="likert-labels">
        <span class="label-agree">同意</span>
        <div class="likert-scale" id="q-scale"></div>
        <span class="label-disagree">反对</span>
      </div>
    </div>
    <div class="quiz-nav">
      <button id="q-prev" onclick="mbtiNav(-1)">← 上一题</button>
      <button class="quiz-quit" onclick="mbtiQuit()">✕ 退出</button>
      <button id="q-next" onclick="mbtiNav(1)" style="visibility:hidden">下一题 →</button>
    </div>
  </div>

  <!-- 结果页 -->
  <div id="result-wrapper">
    <div class="res-role" id="res-role"></div>
    <div class="res-role-label">你的性格类型是</div>
    <div class="type-title" id="res-code">—</div>
    <div class="type-name" id="res-name">—</div>

    <div class="res-section">
      <h3>📊 性格特质图谱</h3>
      <div id="traits-container"></div>
    </div>

    <div class="res-section">
      <h3>📝 类型解读</h3>
      <div class="res-desc" id="res-desc"></div>
      <div class="res-cards" id="res-cards"></div>
    </div>

    <div class="res-section">
      <h3>⭐ 同类型名人堂</h3>
      <p style="font-size:.85rem;color:#999;margin-bottom:.8rem;">和你同一人格类型的知名人物（仅供趣味参考）</p>
      <div class="celeb-row" id="res-celeb"></div>
    </div>

    <div class="res-section">
      <h3>💞 人际关系建议</h3>
      <div class="res-desc" id="res-love" style="font-size:.95rem;"></div>
    </div>

    <div class="action-btns">
      <button class="next-btn" onclick="mbtiCopy()">📋 复制结果</button>
      <button class="next-btn gray" onclick="location.reload()">再测一次</button>
    </div>

    <div class="res-section">
      <h3>🗺️ 16 型速查</h3>
      <p style="font-size:.85rem;color:#999;margin-bottom:.8rem;">点击任意类型查看简介</p>
      <div class="type-grid" id="type-grid"></div>
      <div class="res-desc" id="grid-desc" style="margin-top:1rem;font-size:.92rem;"></div>
    </div>

    <div class="res-section" id="hist-section" style="display:none;">
      <h3>🕐 我的测试历史（仅本机）</h3>
      <div id="hist-list"></div>
    </div>

    <div class="dim-edu">
      <h3>📖 五个维度是什么意思</h3>
      <p><b>精神（E/I）：</b>你的能量来源。外向者从社交中充电，内向者从独处中回血——没有好坏，只是"插座"不同。</p>
      <p><b>能量（N/S）：</b>你接收信息的方式。直觉型关注可能性与大局，实感型关注事实与细节。</p>
      <p><b>本性（T/F）：</b>你的决策依据。逻辑型重公平与效率，感受型重和谐与人心。</p>
      <p><b>战术（J/P）：</b>你的生活方式。计划型喜欢确定性与收尾，探索型喜欢灵活性与开放。</p>
      <p><b>身份（A/T）：</b>你的自我认同。坚决型自信稳定，动荡型敏感进取、自我要求更高。</p>
      <p class="note">本测试为兴趣向自我探索工具，题目改编自公开的 MBTI 理论框架，非临床诊断量表，不应作为招聘、升学等决策的唯一依据。</p>
    </div>
  </div>
</div>

<script>
// 60 题专业题库（5维度 × 12题）
const allQuestions = [
  { axis: 'E', prompt: '你经常在社交聚会上结交新朋友。' },
  { axis: 'I', prompt: '你通常避免主动与陌生人搭话。' },
  { axis: 'E', prompt: '你觉得自己在繁忙热闹的环境中能恢复精力。' },
  { axis: 'I', prompt: '在一个充满很多人的房间里，你倾向于靠近墙壁避开人群。' },
  { axis: 'E', prompt: '你喜欢参与需要快速反应的集体团队活动。' },
  { axis: 'I', prompt: '周末你更倾向于一个人安静地度过，而不是出门社交。' },
  { axis: 'N', prompt: '你经常沉浸于对未来无限可能性的幻想中。' },
  { axis: 'S', prompt: '相比讨论抽象的哲学理论，你更喜欢研究立竿见影的实事。' },
  { axis: 'N', prompt: '你喜欢探讨事物隐藏的意义，而不是仅凭表面现象做判断。' },
  { axis: 'S', prompt: '你做事极其依赖过去的经验，而不是直觉。' },
  { axis: 'N', prompt: '你常常被奇思妙想所吸引，即便它们暂时看似毫无用处。' },
  { axis: 'S', prompt: '你注重事实和细节，很少让想象力脱缰。' },
  { axis: 'T', prompt: '在做决策时，逻辑和事实对你来说比他人的感受更重要。' },
  { axis: 'F', prompt: '你极度共情，很容易体会到他人的悲伤。' },
  { axis: 'T', prompt: '如果在工作中发现错误，即使会伤害对方感情，你也会直言不讳。' },
  { axis: 'F', prompt: '当你朋友遇到困难时，你更倾向于提供情感安慰，而不是解决问题的方案。' },
  { axis: 'T', prompt: '你倾向于把效率置于"让每个人都开心"之上。' },
  { axis: 'F', prompt: '你极度不忍心看到别人受到伤害。' },
  { axis: 'J', prompt: '你喜欢在开始一天前，先把所有事情规划得井井有条。' },
  { axis: 'P', prompt: '你经常直到最后一刻才决定周末的具体安排。' },
  { axis: 'J', prompt: '你的工作空间通常保持整洁有序。' },
  { axis: 'P', prompt: '比起严格遵守日程表，你更喜欢随遇而安。' },
  { axis: 'J', prompt: '你很难忍受一件事悬而未决。' },
  { axis: 'P', prompt: '你总是在最后一刻迸发出灵感和动力来完成任务。' },
  { axis: 'T_A', prompt: '你很容易因为别人的批评而怀疑自己的能力。' },
  { axis: 'A', prompt: '即使遇到挫折，你通常也能保持自信和冷静。' },
  { axis: 'T_A', prompt: '你经常会在做出决定后反复懊恼，担心选错了。' },
  { axis: 'A', prompt: '你很少会为了已经在过去发生的事情感到后悔。' },
  { axis: 'T_A', prompt: '在感受到别人对你有一点点不满时，你会异常焦虑。' },
  { axis: 'A', prompt: '你觉得自己通常能很好地掌控自己的情绪。' },
  { axis: 'E', prompt: '在聚会中，你通常是主动开启话题的那个。' },
  { axis: 'I', prompt: '社交之后你需要独处来「充电」，否则会感到疲惫。' },
  { axis: 'E', prompt: '你习惯先说出来再思考，而不是想好了再说。' },
  { axis: 'I', prompt: '比起热闹的群体聚会，你更享受深度的一对一交流。' },
  { axis: 'E', prompt: '你经常是朋友圈子里组织活动、张罗聚会的人。' },
  { axis: 'I', prompt: '被很多人包围时，你会下意识寻找安静的角落。' },
  { axis: 'N', prompt: '你相信「第六感」，常凭直觉做重要决定。' },
  { axis: 'S', prompt: '你更信任亲眼所见的证据，而不是理论推测。' },
  { axis: 'N', prompt: '你喜欢思考「如果……会怎样」这类假设性问题。' },
  { axis: 'S', prompt: '你做事喜欢有明确的步骤和说明书。' },
  { axis: 'N', prompt: '你容易注意到事物之间隐藏的联系。' },
  { axis: 'S', prompt: '你觉得空想是浪费时间，行动才有价值。' },
  { axis: 'T', prompt: '你认为「对事不对人」是最高效的处事原则。' },
  { axis: 'F', prompt: '做决定时，你会优先考虑它对相关人的影响。' },
  { axis: 'T', prompt: '被批评时，你更在意对方逻辑是否成立，而非语气。' },
  { axis: 'F', prompt: '你很容易因为电影或故事而落泪。' },
  { axis: 'T', prompt: '你觉得规则面前应该人人平等，不讲情面。' },
  { axis: 'F', prompt: '你宁愿自己吃亏，也不愿看到身边人难过。' },
  { axis: 'J', prompt: '出门旅行前，你一定会做好详细攻略。' },
  { axis: 'P', prompt: '你喜欢保留各种可能性，不到最后一刻不拍板。' },
  { axis: 'J', prompt: '未完成事项会让你如鲠在喉，必须列清单逐一消灭。' },
  { axis: 'P', prompt: '你觉得计划赶不上变化，随机应变才是王道。' },
  { axis: 'J', prompt: '你的手机 App 一定是分类整理好的。' },
  { axis: 'P', prompt: '截止日期反而能激发你的创造力和效率。' },
  { axis: 'T_A', prompt: '你会在深夜反复回想白天说错的那句话。' },
  { axis: 'A', prompt: '即使被否定，你也能很快调整心态继续前进。' },
  { axis: 'T_A', prompt: '你对自己的要求近乎苛刻，很少感到「已经够好了」。' },
  { axis: 'A', prompt: '你很少把别人的负面评价放在心上。' },
  { axis: 'T_A', prompt: '重要场合前，你会紧张到失眠或反复演练。' },
  { axis: 'A', prompt: '你相信「船到桥头自然直」，很少为未来过度焦虑。' }
];

// 16 型完整档案：角色 / 名人堂 / 关系建议
const ROLES = {
  NT: { name: '分析师', color: '#88619a', desc: '理性、独立、追求真理的战略家' },
  NF: { name: '外交家', color: '#33a474', desc: '理想、共情、鼓舞人心的治愈者' },
  SJ: { name: '守护者', color: '#4298b4', desc: '务实、可靠、守护秩序的基石' },
  SP: { name: '探险家', color: '#e4b622', desc: '灵活、勇敢、活在当下的行动派' }
};
const mbtiProfiles = {
  "INTJ": { name: "建筑师", role: "NT",
    desc: "富有想象力和战略性的思想家，一切皆在计划之中。",
    strength: "战略眼光极强，独立自主，逻辑严密，擅长把复杂系统化繁为简。",
    blind: "容易显得冷漠固执，对低效的社交缺乏耐心，可能忽视他人情绪。",
    career: "战略咨询、科研、架构设计、投资分析",
    celebs: ["埃隆·马斯克", "艾萨克·牛顿", "马克·扎克伯格", "刘慈欣"],
    love: "你用规划表达爱，但伴侣更需要情感回应。试着把「我为你想好了未来」翻译成「我在乎你的感受」，每周留一次不谈正事的约会。" },
  "INTP": { name: "逻辑学家", role: "NT",
    desc: "具有创造力的发明家，对知识有着止不住的渴望。",
    strength: "抽象思维顶尖，好奇心驱动，擅长发现模式与第一性原理。",
    blind: "容易陷入过度分析而迟迟不行动，对琐碎执行缺乏兴趣。",
    career: "学术研究、算法工程、产品设计",
    celebs: ["阿尔伯特·爱因斯坦", "艾伦·图灵", "比尔·盖茨", "韩寒"],
    love: "你活在思想世界里，容易忘记伴侣需要陪伴而非辩论。关系里少一点纠正，多一点我在听，会让对方更有安全感。" },
  "ENTJ": { name: "指挥官", role: "NT",
    desc: "大胆、富有想象力且意志强大的领导者，总能找到解决办法。",
    strength: "天生的组织者，目标感极强，决策果断，擅长带领团队攻坚。",
    blind: "可能显得强势压迫，对慢和情绪化容忍度低。",
    career: "企业管理、创业、投行、项目管理",
    celebs: ["史蒂夫·乔布斯", "撒切尔夫人", "拿破仑", "任正非"],
    love: "你习惯主导一切，但亲密关系不是项目。给伴侣留决策空间，学会说你觉得呢，你的强大才不会变成压迫。" },
  "ENTP": { name: "辩论家", role: "NT",
    desc: "聪明好奇的思想家，不会放过任何智力上的挑战。",
    strength: "思维敏捷，能言善辩，擅长头脑风暴与跨界连接。",
    blind: "容易喜新厌旧，对收尾和细节缺乏耐心，可能给人不靠谱感。",
    career: "市场营销、创业、律师、创意策划",
    celebs: ["托马斯·爱迪生", "马克·吐温", "苏格拉底", "罗永浩"],
    love: "你的魅力在于新鲜感，但长期关系需要无聊的坚持。把辩论欲收一收，对伴侣多一些肯定，少一些抬杠。" },
  "INFJ": { name: "提倡者", role: "NF",
    desc: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。",
    strength: "洞察人心，有坚定的价值观，能为信念长期投入。",
    blind: "容易过度内耗、完美主义，对辜负自己期望的人难以释怀。",
    career: "心理咨询、作家、公益、人力资源",
    celebs: ["马丁·路德·金", "柏拉图", "圣雄甘地", "柴静"],
    love: "你为所有人着想，唯独忘了自己。健康的亲密关系需要你先说出需求——我也需要被照顾不是自私，是诚实。" },
  "INFP": { name: "调停者", role: "NF",
    desc: "诗意、善良的利他主义者，总是热情地为正当理由提供帮助。",
    strength: "共情力强，价值观纯粹，创造力丰富，待人真诚。",
    blind: "容易情绪化、逃避冲突，在高压竞争环境中容易受伤。",
    career: "写作、艺术创作、心理咨询、教育",
    celebs: ["莎士比亚", "村上春树", "梵高", "周迅"],
    love: "你把伴侣理想化，又为落差而受伤。试着爱具体的人而非想象中的人，冲突时说出来而不是冷战，你的温柔值得被看见。" },
  "ENFJ": { name: "主人公", role: "NF",
    desc: "富有魅力、鼓舞人心的领导者，有使听众着迷的能力。",
    strength: "感染力极强，善于激发他人潜能，天生的 mentor。",
    blind: "容易过度承担他人情绪，忽视自己的需求，害怕让别人失望。",
    career: "培训、销售管理、公关、教育",
    celebs: ["奥普拉·温弗瑞", "曼德拉", "马拉拉", "马云"],
    love: "你是天生的照顾者，但别把伴侣当学生。放下「为你好」的改造欲，允许对方不完美，你的关系会轻松很多。" },
  "ENFP": { name: "竞选者", role: "NF",
    desc: "热情、有创造力、爱社交的自由精灵，总能找到理由微笑。",
    strength: "人缘极佳，点子多，适应力强，能把氛围带起来。",
    blind: "注意力易分散，讨厌重复性工作，情绪来得快去得也快。",
    career: "新媒体、活动策划、广告创意、自由职业",
    celebs: ["罗宾·威廉姆斯", "安妮·海瑟薇", "宫崎骏", "何炅"],
    love: "你的热度能点燃一切，包括争吵。承诺对你不是束缚而是选择——当你决定为一个人无聊下来，关系才真正开始。" },
  "ISTJ": { name: "物流师", role: "SJ",
    desc: "实际且注重事实的个人，可靠性不容怀疑。",
    strength: "极度可靠，做事有条理，承诺必达，是团队的定海神针。",
    blind: "可能显得刻板，不喜欢变化，对不按规矩容忍度低。",
    career: "财务、审计、法务、项目管理",
    celebs: ["沃伦·巴菲特", "默克尔", "乔治·华盛顿", "张小龙"],
    love: "你用行动表达爱，但伴侣可能更想要一句我爱你。计划之外留一点惊喜，偶尔的浪漫比准时的晚餐更打动人。" },
  "ISFJ": { name: "守卫者", role: "SJ",
    desc: "非常专注而温暖的守护者，时刻准备着保护爱着的人们。",
    strength: "细心体贴，记忆力好，默默把每件事做到位。",
    blind: "不擅长拒绝，容易被老好人标签拖累，压抑自己的需求。",
    career: "护理、行政、客服、教育",
    celebs: ["特蕾莎修女", "碧昂丝", "刘诗诗", "蒂姆·邓肯"],
    love: "你总把对方放在第一位，但长期压抑会变成委屈。学会说「不」，你的付出才会被珍惜而不是被习惯。" },
  "ESTJ": { name: "总经理", role: "SJ",
    desc: "出色的管理者，在管理事物或人方面无与伦比。",
    strength: "执行力拉满，讲规则重效率，能把混乱理出秩序。",
    blind: "可能显得专断，对感受型同事缺乏耐心。",
    career: "运营管理、供应链、公务员、制造业管理",
    celebs: ["洛克菲勒", "董明珠", "法官朱迪", "文斯·隆巴迪"],
    love: "你把家里也当公司管，KPI 式关心让人窒息。试着放下标准答案，多问一句你今天开心吗，效率让位给温度。" },
  "ESFJ": { name: "执政官", role: "SJ",
    desc: "极度关心他人、爱社交且受欢迎的人，总是热心提供帮助。",
    strength: "情商高，善于营造和谐氛围，是团队粘合剂。",
    blind: "过度在意他人评价，害怕冲突，难以做恶人决策。",
    career: "客户成功、医护、教师、社区运营",
    celebs: ["休·杰克曼", "詹妮弗·洛佩兹", "比尔·克林顿", "谢娜"],
    love: "你为关系付出一切，却最怕被否定。记住：你的价值不需要用被需要来证明，敢于表达不满的关系才走得远。" },
  "ISTP": { name: "鉴赏家", role: "SP",
    desc: "大胆而实际的实验家，擅长使用任何形式的工具。",
    strength: "动手能力极强，危机时刻冷静，擅长拆解和修复一切。",
    blind: "讨厌被管束和繁文缛节，情感表达比较钝。",
    career: "工程师、飞行员、外科医生、手艺人",
    celebs: ["贝尔·格里尔斯", "李小龙", "汤姆·克鲁斯", "高晓松"],
    love: "你不说爱，但会默默修好一切。伴侣需要的有时只是一个拥抱而非解决方案——先共情，再动手，你的温柔才会被读懂。" },
  "ISFP": { name: "探险家", role: "SP",
    desc: "灵活有魅力的艺术家，时刻准备着探索和体验新鲜事物。",
    strength: "审美在线，活在当下，待人温和不评判。",
    blind: "讨厌长期规划，容易随性而为，竞争意识弱。",
    career: "设计、摄影、音乐、手工艺",
    celebs: ["周杰伦", "迈克尔·杰克逊", "奥黛丽·赫本", "王菲"],
    love: "你用体验代替语言，但重大决定需要坐下来谈。别用「都行」逃避选择，你的意见对伴侣很重要。" },
  "ESTP": { name: "企业家", role: "SP",
    desc: "聪明、精力充沛且善于感知的人，真正享受在边缘试探。",
    strength: "反应极快，实战派，危机处理能力一流，人脉广。",
    blind: "容易冲动，厌恶理论说教，长期主义不足。",
    career: "销售、创业、急救/消防、体育竞技",
    celebs: ["丘吉尔", "麦当娜", "成龙", "王思聪"],
    love: "你的世界永远热闹，但伴侣需要专属时间。冲动前先数三秒，承诺的事说到做到，你的魅力才不会变成不靠谱。" },
  "ESFP": { name: "表演者", role: "SP",
    desc: "自发、精力充沛而热情，身边永远不缺欢笑。",
    strength: "舞台感强，共情即时，能把任何场合变成派对。",
    blind: "讨厌孤独和枯燥，对未来规划缺乏兴趣。",
    career: "演艺、主持、旅游、儿童教育",
    celebs: ["玛丽莲·梦露", "贾斯汀·比伯", "彭于晏", "杨超越"],
    love: "你是气氛担当，但深夜的脆弱也值得被看见。允许伴侣看到你不笑的样子，亲密才能从热闹走向深刻。" }
};

let mbtiQIdx = 0;
const mbtiAns = new Array(allQuestions.length).fill(null);

function mbtiBegin() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  mbtiQIdx = 0;
  mbtiRenderQ();
  window.scrollTo({ top: 0 });
}
function mbtiQuit() {
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-wrapper').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
  window.scrollTo({ top: 0 });
}
function mbtiRenderQ() {
  const n = allQuestions.length;
  document.getElementById('q-text').innerText = allQuestions[mbtiQIdx].prompt;
  document.getElementById('q-counter').innerText = (mbtiQIdx + 1) + ' / ' + n;
  const answered = mbtiAns.filter(a => a !== null).length;
  const pct = Math.round(answered / n * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('pct-text').innerText = pct + '%';
  const scale = document.getElementById('q-scale');
  scale.innerHTML = '';
  const defs = [
    { v: 3, cls: 'agree size-3' }, { v: 2, cls: 'agree size-2' }, { v: 1, cls: 'agree size-1' },
    { v: 0, cls: 'neutral size-0' },
    { v: -1, cls: 'disagree size-1' }, { v: -2, cls: 'disagree size-2' }, { v: -3, cls: 'disagree size-3' }
  ];
  defs.forEach(d => {
    const c = document.createElement('div');
    c.className = 'circle-btn ' + d.cls + (mbtiAns[mbtiQIdx] === d.v ? ' selected' : '');
    c.onclick = () => {
      mbtiAns[mbtiQIdx] = d.v;
      scale.querySelectorAll('.circle-btn').forEach(x => x.classList.remove('selected'));
      c.classList.add('selected');
      setTimeout(() => mbtiNav(1), 220);
    };
    scale.appendChild(c);
  });
  const row = document.getElementById('q-row');
  row.style.animation = 'none'; row.offsetHeight; row.style.animation = '';
  document.getElementById('q-prev').disabled = (mbtiQIdx === 0);
  document.getElementById('q-next').style.visibility = (mbtiQIdx === n - 1) ? 'visible' : 'hidden';
}
function mbtiNav(d) {
  const n = allQuestions.length;
  if (d > 0) {
    if (mbtiQIdx === n - 1) { mbtiSubmit(); return; }
    mbtiQIdx++;
  } else {
    if (mbtiQIdx === 0) return;
    mbtiQIdx--;
  }
  mbtiRenderQ();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mbtiSubmit() {
  if (mbtiAns.some(a => a === null)) { alert('还有题目没答完，请返回补答'); return; }
  const scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0, A:0, T_A:0 };
  allQuestions.forEach((q, idx) => {
    const val = mbtiAns[idx], axis = q.axis;
    let opp = '';
    if (axis==='E') opp='I'; else if (axis==='I') opp='E';
    else if (axis==='S') opp='N'; else if (axis==='N') opp='S';
    else if (axis==='T') opp='F'; else if (axis==='F') opp='T';
    else if (axis==='J') opp='P'; else if (axis==='P') opp='J';
    else if (axis==='A') opp='T_A'; else if (axis==='T_A') opp='A';
    if (val > 0) scores[axis] += val;
    else if (val < 0) scores[opp] += Math.abs(val);
  });
  const E_pct = Math.round(scores.E / (scores.E + scores.I || 1) * 100);
  const N_pct = Math.round(scores.N / (scores.S + scores.N || 1) * 100);
  const T_pct = Math.round(scores.T / (scores.T + scores.F || 1) * 100);
  const J_pct = Math.round(scores.J / (scores.J + scores.P || 1) * 100);
  const A_pct = Math.round(scores.A / (scores.A + scores.T_A || 1) * 100);
  let type = '';
  type += E_pct >= 50 ? 'E' : 'I';
  type += N_pct >= 50 ? 'N' : 'S';
  type += T_pct >= 50 ? 'T' : 'F';
  type += J_pct >= 50 ? 'J' : 'P';
  const identity = A_pct >= 50 ? 'A' : 'T';

  document.getElementById('quiz-screen').style.display = 'none';
  const resWrap = document.getElementById('result-wrapper');
  resWrap.style.display = 'block';
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);

  const pf = mbtiProfiles[type];
  const role = ROLES[pf.role];
  const roleEl = document.getElementById('res-role');
  roleEl.innerText = '⬢ ' + role.name;
  roleEl.style.background = role.color;

  window._mbtiRes = { type: type + '-' + identity, name: pf.name,
    dims: [['精神', E_pct, '外向', '内向'], ['能量', N_pct, '直觉', '现实'], ['本性', T_pct, '逻辑', '感受'], ['战术', J_pct, '计划', '探索'], ['身份', A_pct, '坚决', '动荡']] };
  document.getElementById('res-code').innerText = type + '-' + identity;
  document.getElementById('res-code').style.color = role.color;
  document.getElementById('res-name').innerText = pf.name;

  document.getElementById('res-desc').innerHTML =
    '<p style="font-size:1.1rem;margin-bottom:.8rem;">' + pf.desc + '</p>' +
    '<p>你属于 <b>' + role.name + '</b>（' + role.desc + '），身份倾向为 <b>' +
    (identity === 'A' ? '坚决型 (Assertive)' : '动荡型 (Turbulent)') + '</b>：' +
    (identity === 'A' ? '自信稳定，抗压能力强' : '敏感进取，自我要求高、情绪体验更深刻') + '。</p>';
  document.getElementById('res-cards').innerHTML =
    '<div class="rc" style="background:#f0faf5;border-left:4px solid #33a474;"><b>✨ 核心优势</b><br>' + pf.strength + '</div>' +
    '<div class="rc" style="background:#fdf6ec;border-left:4px solid #e4b622;"><b>🔍 成长盲点</b><br>' + pf.blind + '</div>' +
    '<div class="rc" style="background:#f0f4ff;border-left:4px solid #425AED;"><b>💼 适配方向</b><br>' + pf.career + '</div>';
  document.getElementById('res-celeb').innerHTML = pf.celebs.map(c => '<span class="celeb">🌟 ' + c + '</span>').join('');
  document.getElementById('res-love').innerText = pf.love;

  const tc = document.getElementById('traits-container');
  tc.innerHTML = '';
  renderTraitBar('精神', '外向 (Extraverted)', E_pct, '内向 (Introverted)', 100 - E_pct, '#1bbf89');
  renderTraitBar('能量', '直觉 (Intuitive)', N_pct, '现实 (Observant)', 100 - N_pct, '#e4b622');
  renderTraitBar('本性', '逻辑 (Thinking)', T_pct, '感受 (Feeling)', 100 - T_pct, '#4298b4');
  renderTraitBar('战术', '计划 (Judging)', J_pct, '探索 (Prospecting)', 100 - J_pct, '#88619a');
  renderTraitBar('身份', '坚决 (Assertive)', A_pct, '动荡 (Turbulent)', 100 - A_pct, '#f25e62');

  const grid = document.getElementById('type-grid');
  grid.innerHTML = '';
  Object.keys(mbtiProfiles).forEach(t => {
    const cell = document.createElement('div');
    cell.className = 'type-cell' + (t === type ? ' cur' : '');
    cell.innerHTML = '<b>' + t + '</b><span>' + mbtiProfiles[t].name + '</span>';
    cell.onclick = () => {
      const p = mbtiProfiles[t];
      document.getElementById('grid-desc').innerHTML = '<b>' + t + '「' + p.name + '」</b>（' + ROLES[p.role].name + '）：' + p.desc +
        '<br><span style="color:#888;font-size:.85rem;">适配方向：' + p.career + '</span>';
      grid.querySelectorAll('.type-cell').forEach(x => x.classList.remove('cur'));
      cell.classList.add('cur');
    };
    grid.appendChild(cell);
  });
  document.getElementById('grid-desc').innerHTML = '';

  try {
    const hist = JSON.parse(localStorage.getItem('mbti_hist') || '[]');
    const now = new Date();
    const ds = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
    hist.push({ d: ds, t: type + '-' + identity, n: pf.name });
    localStorage.setItem('mbti_hist', JSON.stringify(hist.slice(-10)));
    if (hist.length > 0) {
      document.getElementById('hist-section').style.display = 'block';
      document.getElementById('hist-list').innerHTML = hist.slice(-5).reverse()
        .map(h => '<div class="hist-row"><span>' + h.d + '</span><span><b>' + h.t + '</b>「' + h.n + '」</span></div>').join('');
    }
  } catch(e) {}
}

function renderTraitBar(dimName, leftName, leftPct, rightName, rightPct, color) {
  const container = document.getElementById('traits-container');
  const leftColor = leftPct >= rightPct ? color : '#bbb';
  const rightColor = rightPct > leftPct ? color : '#bbb';
  const fillHtml = leftPct >= rightPct
    ? '<div class="dim-fill" style="background:' + color + ';left:0;width:' + leftPct + '%;"></div>'
    : '<div class="dim-fill" style="background:' + color + ';right:0;width:' + rightPct + '%;"></div>';
  container.innerHTML +=
    '<div class="dimension-row">' +
      '<div class="dim-title">' + dimName + '特质</div>' +
      '<div class="dim-bar-wrapper">' +
        '<div class="dim-label left" style="color:' + leftColor + '">' + leftPct + '%<br><span style="font-size:.85rem">' + leftName + '</span></div>' +
        '<div class="dim-line">' + fillHtml + '</div>' +
        '<div class="dim-label right" style="color:' + rightColor + '">' + rightPct + '%<br><span style="font-size:.85rem">' + rightName + '</span></div>' +
      '</div>' +
    '</div>';
}

function mbtiCopy() {
  const r = window._mbtiRes;
  if (!r) return;
  const txt = '我的 MBTI 测试结果：' + r.type + '「' + r.name + '」\n' +
    r.dims.map(d => d[0] + '：' + d[2] + ' ' + d[1] + '% / ' + d[3] + ' ' + (100-d[1]) + '%').join('\n') +
    '\n—— 来自马老师博客 MBTI 测评 https://blog.8818618.xyz/mbti-test/';
  navigator.clipboard.writeText(txt).then(() => alert('结果已复制，快去分享给朋友吧！'));
}
</script>
{% endraw %}
