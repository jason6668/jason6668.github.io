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
/* 隐藏博客主题自带杂项，打造全屏应用沉浸感 */
#page-header { display: none !important; }
#post-info { display: none !important; }

body {
  background-color: #f3f4f6;
}

.mbti-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Nunito Sans", "Helvetica Neue", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
}

/* 顶部信息区域 */
.app-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.app-header h1 {
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.app-header p {
  color: #6a6a6a;
  font-size: 1.1rem;
}

/* 头部进度条区块，悬浮固定 */
.progress-sticky-wrapper {
  position: sticky;
  top: 60px; /* 根据博客顶部导航栏微调 */
  background: rgba(243, 244, 246, 0.95);
  padding: 15px 0;
  z-index: 100;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #a1a1a1;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.progress-container {
  width: 100%;
  height: 6px;
  background: #e2e2e2;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #33a474;
  width: 0%;
  transition: width 0.4s ease;
}

/* 问题区块 */
.page-group {
  display: none;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 3rem 0;
  margin-top: 2rem;
  animation: fadeIn 0.4s ease forwards;
}

.page-group.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.question-row {
  padding: 2.5rem 2rem;
  border-bottom: 1px solid #f1f1f1;
  text-align: center;
}
.question-row:last-child {
  border-bottom: none;
}

.statement {
  font-size: 1.4rem;
  color: #424242;
  margin-bottom: 2.5rem;
  font-weight: 600;
  line-height: 1.4;
}

/* 同意反对标签 */
.likert-labels {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.label-agree { color: #33a474; font-weight: 700; font-size: 1rem; margin-right: 15px;}
.label-disagree { color: #88619a; font-weight: 700; font-size: 1rem; margin-left: 15px;}

/* 16P圆盘量表 */
.likert-scale {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px; /* PC端间距 */
}

@media (max-width: 600px) {
  .likert-scale { gap: 8px; }
  .statement { font-size: 1.2rem; }
  .label-agree, .label-disagree { font-size: 0.85rem; }
}

.circle-btn {
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  background: white;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* 圆形大小 */
.size-3 { width: 55px; height: 55px; }
.size-2 { width: 45px; height: 45px; }
.size-1 { width: 35px; height: 35px; }
.size-0 { width: 30px; height: 30px; border-color: #94A0B4; }

@media (max-width: 600px) {
  .size-3 { width: 44px; height: 44px; }
  .size-2 { width: 36px; height: 36px; }
  .size-1 { width: 28px; height: 28px; }
  .size-0 { width: 24px; height: 24px; }
}

/* 颜色交互 */
.circle-btn.agree { border-color: #33a474; }
.circle-btn.agree:hover { background-color: rgba(51, 164, 116, 0.2); }
.circle-btn.agree.selected { background-color: #33a474; transform: scale(1.05); }

.circle-btn.disagree { border-color: #88619a; }
.circle-btn.disagree:hover { background-color: rgba(136, 97, 154, 0.2); }
.circle-btn.disagree.selected { background-color: #88619a; transform: scale(1.05); }

.circle-btn.neutral:hover { background-color: rgba(148, 160, 180, 0.2); }
.circle-btn.neutral.selected { background-color: #94A0B4; transform: scale(1.05); }

/* 下一页按钮区域 */
.nav-buttons {
  text-align: center;
  padding: 3rem 0;
}

.next-btn {
  background: #425AED;
  color: #fff;
  border: none;
  padding: 16px 50px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(66, 90, 237, 0.3);
  transition: all 0.3s;
}

.next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 90, 237, 0.4);
}

.next-btn:disabled {
  background: #ccc;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

.error-text {
  color: #ee5b5b;
  margin-top: 15px;
  display: none;
  font-weight: bold;
}

/* 结果区块 */
#result-wrapper {
  display: none;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  padding: 4rem 2rem;
  text-align: center;
  animation: fadeIn 0.5s ease forwards;
}

.res-role-label {
  font-size: 1.2rem;
  color: #88619a;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.type-title {
  font-size: 5rem;
  font-weight: 800;
  color: #33a474;
  margin: 0;
  line-height: 1;
}

.type-name {
  font-size: 2rem;
  color: #424242;
  margin-top: 5px;
  margin-bottom: 3rem;
  font-weight: 600;
}

.dimension-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.dim-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.dim-bar-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
}

.dim-label {
  font-size: 0.95rem;
  font-weight: 700;
  width: 120px;
}
.dim-label.left { text-align: right; margin-right: 15px; }
.dim-label.right { text-align: left; margin-left: 15px; }

.dim-line {
  flex: 1;
  height: 8px;
  background: #e2e2e2;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.dim-fill {
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 4px;
}
</style>

<div class="mbti-app">
  <div class="app-header" id="test-header">
    <h1>免费性格测试</h1>
    <p>仅需不足10分钟即可完成。回答务必诚实，即使你并不喜欢答案。</p>
  </div>

  <div class="progress-sticky-wrapper" id="progress-wrapper">
    <div class="progress-header">
      <span id="pct-text">0%</span>
    </div>
    <div class="progress-container">
      <div class="progress-bar" id="progress-bar"></div>
    </div>
  </div>

  <div id="pages-container">
    <!-- JS 将在这里注入分页和试题 -->
  </div>

  <div id="result-wrapper">
    <div class="res-role-label">你的真实性格类型是</div>
    <div class="type-title" id="res-code">INFP-T</div>
    <div class="type-name" id="res-name">调停者</div>
    
    <div style="background: #f8f9fa; padding: 2rem; border-radius: 12px; margin-bottom: 3rem;">
      <h3 style="margin-top: 0; color:#333; margin-bottom: 2rem;">性格特质图谱</h3>
      <div id="traits-container"></div>
    </div>
    
    <div id="res-desc" style="text-align: left; color: #555; line-height: 1.8; font-size: 1.1rem; padding: 0 1rem; margin-bottom: 3rem;"></div>

    <button class="next-btn" onclick="location.reload()" style="background:#555;">再测一次</button>
  </div>
</div>

<script>
// 完整且专业的 60 道题库结构，对标 16P 标准（划分为5个核心维度：E/I, S/N, T/F, J/P, A/T）
// 这里以精简的 30 题（每维 6 题）呈现，兼顾快速与专业，分页展示每页 5 题。
const allQuestions = [
  // E vs I (内向 vs 外向)
  { axis: 'E', prompt: '你经常在社交聚会上结交新朋友。' },
  { axis: 'I', prompt: '你通常避免主动与陌生人搭话。' },
  { axis: 'E', prompt: '你觉得自己在繁忙热闹的环境中能恢复精力。' },
  { axis: 'I', prompt: '在一个充满很多人的房间里，你倾向于靠近墙壁避开人群。' },
  { axis: 'E', prompt: '你喜欢参与需要快速反应的集体团队活动。' },
  { axis: 'I', prompt: '周末你更倾向于一个人安静地度过，而不是出门社交。' },

  // S vs N (实感 vs 直觉)
  { axis: 'N', prompt: '你经常沉浸于对未来无限可能性的幻想中。' },
  { axis: 'S', prompt: '相比讨论抽象的哲学理论，你更喜欢研究立竿见影的实事。' },
  { axis: 'N', prompt: '你喜欢探讨事物隐藏的意义，而不是仅凭表面现象做判断。' },
  { axis: 'S', prompt: '你做事极其依赖过去的经验，而不是直觉。' },
  { axis: 'N', prompt: '你常常被奇思妙想所吸引，即便它们暂时看似毫无用处。' },
  { axis: 'S', prompt: '你注重事实和细节，很少让想象力脱缰。' },

  // T vs F (理智 vs 情感)
  { axis: 'T', prompt: '在做决策时，逻辑和事实对你来说比他人的感受更重要。' },
  { axis: 'F', prompt: '你极度共情，很容易体会到他人的悲伤。' },
  { axis: 'T', prompt: '如果在工作中发现错误，即使会伤害对方感情，你也会直言不讳。' },
  { axis: 'F', prompt: '当你朋友遇到困难时，你更倾向于提供情感安慰，而不是解决问题的方案。' },
  { axis: 'T', prompt: '你倾向于把效率置于“让每个人都开心”之上。' },
  { axis: 'F', prompt: '你极度不忍心看到别人受到伤害。' },

  // J vs P (评判 vs 探索)
  { axis: 'J', prompt: '你喜欢在开始一天前，先把所有事情规划得井井有条。' },
  { axis: 'P', prompt: '你经常直到最后一刻才决定周末的具体安排。' },
  { axis: 'J', prompt: '你的工作空间通常保持整洁有序。' },
  { axis: 'P', prompt: '比起严格遵守日程表，你更喜欢随遇而安。' },
  { axis: 'J', prompt: '你很难忍受一件事悬而未决。' },
  { axis: 'P', prompt: '你总是在最后一刻迸发出灵感和动力来完成任务。' },

  // A vs T (坚决 vs 动荡)
  { axis: 'T_A', prompt: '你很容易因为别人的批评而怀疑自己的能力。' }, // 动荡(T)
  { axis: 'A', prompt: '即使遇到挫折，你通常也能保持自信和冷静。' }, // 坚决(A)
  { axis: 'T_A', prompt: '你经常会在做出决定后反复懊恼，担心选错了。' },
  { axis: 'A', prompt: '你很少会为了已经在过去发生的事情感到后悔。' },
  { axis: 'T_A', prompt: '在感受到别人对你有一点点不满时，你会异常焦虑。' },
  { axis: 'A', prompt: '你觉得自己通常能很好地掌控自己的情绪。' }
];

const QUESTIONS_PER_PAGE = 5;
const totalPages = Math.ceil(allQuestions.length / QUESTIONS_PER_PAGE);

let currentPage = 0;
const userAnswers = new Array(allQuestions.length).fill(null); 

const mbtiProfiles = {
  "INTJ": { name: "建筑师", desc: "富有想象力和战略性的思想家，一切皆在计划之中。" },
  "INTP": { name: "逻辑学家", desc: "具有创造力的发明家，对知识有着止不住的渴望。" },
  "ENTJ": { name: "指挥官", desc: "大胆、富有想象力且意志强大的领导者，总能找到或创造解决办法。" },
  "ENTP": { name: "辩论家", desc: "聪明好奇的思想者，不会放弃任何智力上的挑战。" },
  "INFJ": { name: "提倡者", desc: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。" },
  "INFP": { name: "调停者", desc: "诗意、善良的利他主义者，总是热情地为正当理由提供帮助。" },
  "ENFJ": { name: "主人公", desc: "富有魅力、鼓舞人心的领导者，有使听众着迷的能力。" },
  "ENFP": { name: "竞选者", desc: "热情、有创造力、爱社交的自由精灵，总能找到理由微笑。" },
  "ISTJ": { name: "物流师", desc: "实际且注重事实的个人，可靠性不容怀疑。" },
  "ISFJ": { name: "守卫者", desc: "非常专注而温暖的守护者，时刻准备着保护爱着的人们。" },
  "ESTJ": { name: "总经理", desc: "出色的管理者，在管理事物或人的方面无与伦比。" },
  "ESFJ": { name: "执政官", desc: "极度关心他人、爱社交且受欢迎的人，总是热心提供帮助。" },
  "ISTP": { name: "鉴赏家", desc: "大胆而实际的实验家，擅长使用任何形式的工具。" },
  "ISFP": { name: "探险家", desc: "灵活有魅力的艺术家，时刻准备着探索和体验新鲜事物。" },
  "ESTP": { name: "企业家", desc: "聪明、精力充沛且十分善于感知的人，真正地享受在边缘生活。" },
  "ESFP": { name: "表演者", desc: "自发、精力充沛而热情——生活在他们周围永不无聊。" }
};

function initApp() {
  const container = document.getElementById('pages-container');
  
  for(let p = 0; p < totalPages; p++) {
    const pageDiv = document.createElement('div');
    pageDiv.className = `page-group ${p === 0 ? 'active' : ''}`;
    pageDiv.id = `page-${p}`;
    
    // 生成题目
    const startIdx = p * QUESTIONS_PER_PAGE;
    const endIdx = Math.min(startIdx + QUESTIONS_PER_PAGE, allQuestions.length);
    
    for(let i = startIdx; i < endIdx; i++) {
        pageDiv.innerHTML += `
        <div class="question-row" id="row-${i}">
          <div class="statement">${allQuestions[i].prompt}</div>
          <div class="likert-labels">
            <span class="label-agree">同意</span>
            <div class="likert-scale">
                <div class="circle-btn size-3 agree" onclick="selectAnswer(${i}, 3)"></div>
                <div class="circle-btn size-2 agree" onclick="selectAnswer(${i}, 2)"></div>
                <div class="circle-btn size-1 agree" onclick="selectAnswer(${i}, 1)"></div>
                <div class="circle-btn size-0 neutral" onclick="selectAnswer(${i}, 0)"></div>
                <div class="circle-btn size-1 disagree" onclick="selectAnswer(${i}, -1)"></div>
                <div class="circle-btn size-2 disagree" onclick="selectAnswer(${i}, -2)"></div>
                <div class="circle-btn size-3 disagree" onclick="selectAnswer(${i}, -3)"></div>
            </div>
            <span class="label-disagree">反对</span>
          </div>
        </div>
      `;
    }
    
    // 生成控制按钮
    const isLast = (p === totalPages - 1);
    pageDiv.innerHTML += `
      <div class="nav-buttons">
        <button class="next-btn" id="next-btn-${p}" onclick="${isLast ? 'submitTest()' : `nextPage(${p})`}">
          ${isLast ? '查看测评结果' : '下一页 ➔'}
        </button>
        <div class="error-text" id="err-${p}">请先必须回答页面上的所有问题，才能继续。</div>
      </div>
    `;
    container.appendChild(pageDiv);
  }
}

function selectAnswer(qIdx, val) {
  // DOM 视觉反馈
  const row = document.getElementById(`row-${qIdx}`);
  const circles = row.querySelectorAll('.circle-btn');
  circles.forEach(c => c.classList.remove('selected'));
  
  const mapIdx = { "3": 0, "2": 1, "1": 2, "0": 3, "-1": 4, "-2": 5, "-3": 6 };
  circles[mapIdx[val]].classList.add('selected');
  
  // 数据记录
  userAnswers[qIdx] = val;
  updateGlobalProgress();
  
  // 清除错误提示
  const pIdx = Math.floor(qIdx / QUESTIONS_PER_PAGE);
  document.getElementById(`err-${pIdx}`).style.display = 'none';
}

function updateGlobalProgress() {
  const answered = userAnswers.filter(a => a !== null).length;
  const pct = Math.round((answered / allQuestions.length) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('pct-text').innerText = pct + '%';
}

function validatePage(pIdx) {
  const startIdx = pIdx * QUESTIONS_PER_PAGE;
  const endIdx = Math.min(startIdx + QUESTIONS_PER_PAGE, allQuestions.length);
  for(let i=startIdx; i<endIdx; i++) {
    if(userAnswers[i] === null) return false;
  }
  return true;
}

function nextPage(pIdx) {
  if(!validatePage(pIdx)) {
    document.getElementById(`err-${pIdx}`).style.display = 'block';
    // 自动滚动到第一个未答题
    const startIdx = pIdx * QUESTIONS_PER_PAGE;
    const endIdx = Math.min(startIdx + QUESTIONS_PER_PAGE, allQuestions.length);
    for(let i=startIdx; i<endIdx; i++) {
        if(userAnswers[i] === null) {
            document.getElementById(`row-${i}`).scrollIntoView({behavior: 'smooth', block: 'center'});
            break;
        }
    }
    return;
  }
  
  window.scrollTo({top: 0});
  document.getElementById(`page-${pIdx}`).classList.remove('active');
  document.getElementById(`page-${pIdx+1}`).classList.add('active');
  currentPage++;
}

function submitTest() {
  if(!validatePage(totalPages - 1)) {
    document.getElementById(`err-${totalPages - 1}`).style.display = 'block';
    return;
  }
  
  // 开始计分
  const scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0, A:0, T_A:0 };
  
  allQuestions.forEach((q, idx) => {
    const val = userAnswers[idx];
    const axis = q.axis;
    let opp = '';
    if(axis==='E') opp='I'; else if(axis==='I') opp='E';
    else if(axis==='S') opp='N'; else if(axis==='N') opp='S';
    else if(axis==='T') opp='F'; else if(axis==='F') opp='T';
    else if(axis==='J') opp='P'; else if(axis==='P') opp='J';
    else if(axis==='A') opp='T_A'; else if(axis==='T_A') opp='A';

    if(val > 0) scores[axis] += val;
    else if(val < 0) scores[opp] += Math.abs(val);
  });

  // 判断性格代码
  const E_pct = Math.round((scores.E / (scores.E + scores.I || 1)) * 100);
  const N_pct = Math.round((scores.N / (scores.S + scores.N || 1)) * 100);
  const T_pct = Math.round((scores.T / (scores.T + scores.F || 1)) * 100);
  const J_pct = Math.round((scores.J / (scores.J + scores.P || 1)) * 100);
  const A_pct = Math.round((scores.A / (scores.A + scores.T_A || 1)) * 100);

  let type = "";
  type += E_pct >= 50 ? "E" : "I";
  type += N_pct >= 50 ? "N" : "S";
  type += T_pct >= 50 ? "T" : "F";
  type += J_pct >= 50 ? "J" : "P";
  const identity = A_pct >= 50 ? "A" : "T";

  document.getElementById('test-header').style.display = 'none';
  document.getElementById('progress-wrapper').style.display = 'none';
  document.getElementById('pages-container').style.display = 'none';

  const resWrap = document.getElementById('result-wrapper');
  resWrap.style.display = 'block';
  setTimeout(()=> window.scrollTo({top: 0, behavior: 'smooth'}), 100);

  document.getElementById('res-code').innerText = `${type}-${identity}`;
  document.getElementById('res-name').innerText = mbtiProfiles[type].name;
  
  let descHtml = `您的性格类型极其独特：<strong>${mbtiProfiles[type].desc}</strong> <br><br>
  您属于 <strong>${type}</strong> 类型，后缀 <strong>${identity === 'A' ? '坚决 (Assertive)' : '动荡 (Turbulent)'}</strong> 代表您在压力下的自我认同模式。<br><br>`;
  document.getElementById('res-desc').innerHTML = descHtml;

  // 渲染五维雷达条图
  renderTraitBar('精神', '外向 (Extraverted)', E_pct, '内向 (Introverted)', 100-E_pct, '#1bbf89');
  renderTraitBar('能量', '直觉 (Intuitive)', N_pct, '现实 (Observant)', 100-N_pct, '#e4b622');
  renderTraitBar('本性', '逻辑 (Thinking)', T_pct, '感受 (Feeling)', 100-T_pct, '#4298b4');
  renderTraitBar('战术', '计划 (Judging)', J_pct, '探索 (Prospecting)', 100-J_pct, '#88619a');
  renderTraitBar('身份', '坚决 (Assertive)', A_pct, '动荡 (Turbulent)', 100-A_pct, '#f25e62');
}

function renderTraitBar(dimName, leftName, leftPct, rightName, rightPct, color) {
  const container = document.getElementById('traits-container');
  let leftColor = leftPct >= rightPct ? color : '#e2e2e2';
  let rightColor = rightPct > leftPct ? color : '#e2e2e2';
  let fillHtml = ``;
  if (leftPct >= rightPct) {
      fillHtml = `<div class="dim-fill" style="background:${color}; left:0; width:${leftPct}%;"></div>`;
  } else {
      fillHtml = `<div class="dim-fill" style="background:${color}; right:0; width:${rightPct}%;"></div>`;
  }

  container.innerHTML += `
    <div class="dimension-row">
      <div class="dim-title">${dimName}特质</div>
      <div class="dim-bar-wrapper">
        <div class="dim-label left" style="color:${leftColor}">${leftPct}%<br><span style="font-size:0.85rem">${leftName}</span></div>
        <div class="dim-line">
            ${fillHtml}
        </div>
        <div class="dim-label right" style="color:${rightColor}">${rightPct}%<br><span style="font-size:0.85rem">${rightName}</span></div>
      </div>
    </div>
  `;
}

window.onload = initApp;
</script>
{% endraw %}
