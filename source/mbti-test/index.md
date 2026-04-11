---
title: MBTI 性格测试 - 深入探索真我
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

/* 整体版式设计模拟 16Personalities */
.mbti-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.mbti-header {
  text-align: center;
  margin-bottom: 3rem;
}

.mbti-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
}
.mbti-header p {
  color: #666;
  font-size: 1.1rem;
}

/* 进度条 */
.progress-container {
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  margin-bottom: 3rem;
  position: sticky;
  top: 60px;
  z-index: 10;
}
.progress-bar {
  height: 100%;
  background: #33a474;
  width: 0%;
  border-radius: 3px;
  transition: width 0.3s ease;
}

/* 每道题目区块 */
.question-block {
  text-align: center;
  margin-bottom: 5rem;
  opacity: 1;
  transition: opacity 0.5s;
}

.statement {
  font-size: 1.5rem;
  color: #424242;
  margin-bottom: 2rem;
  font-weight: 600;
}

/* Likert 量表容器 */
.likert-scale {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;
}

@media (max-width: 600px) {
  .likert-scale { gap: 8px; }
  .statement { font-size: 1.2rem; }
}

.likert-label {
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.likert-label.agree { color: #33a474; margin-right: 15px; }
.likert-label.disagree { color: #88619a; margin-left: 15px; }

/* 圆形按钮 */
.circle-btn {
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: white;
  display: inline-block;
}

/* 大小分级 */
.circle-btn.size-3 { width: 55px; height: 55px; }
.circle-btn.size-2 { width: 45px; height: 45px; }
.circle-btn.size-1 { width: 35px; height: 35px; }
.circle-btn.size-0 { width: 28px; height: 28px; border-color: #94A0B4; }

@media (max-width: 600px) {
  .circle-btn.size-3 { width: 40px; height: 40px; }
  .circle-btn.size-2 { width: 34px; height: 34px; }
  .circle-btn.size-1 { width: 28px; height: 28px; }
  .circle-btn.size-0 { width: 24px; height: 24px; }
  .likert-label.agree { margin-right: 5px; font-size: 0.8rem; }
  .likert-label.disagree { margin-left: 5px; font-size: 0.8rem;}
}

/* 同意系颜色 (绿色) */
.circle-btn.agree { border-color: #33a474; }
.circle-btn.agree:hover { background-color: rgba(51, 164, 116, 0.2); }
.circle-btn.agree.selected { background-color: #33a474; transform: scale(1.1); box-shadow: 0 4px 10px rgba(51,164,116,0.3); }

/* 反对系颜色 (紫色) */
.circle-btn.disagree { border-color: #88619a; }
.circle-btn.disagree:hover { background-color: rgba(136, 97, 154, 0.2); }
.circle-btn.disagree.selected { background-color: #88619a; transform: scale(1.1); box-shadow: 0 4px 10px rgba(136,97,154,0.3); }

/* 中立颜色 (灰色) */
.circle-btn.neutral:hover { background-color: rgba(148, 160, 180, 0.2); }
.circle-btn.neutral.selected { background-color: #94A0B4; transform: scale(1.1); }


/* 原生表单隐藏 */
.radio-holder { display: none; }

.submit-btn {
  display: block;
  margin: 0 auto;
  padding: 15px 40px;
  background: #33a474;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
  box-shadow: 0 4px 15px rgba(51,164,116,0.3);
}

.submit-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  box-shadow: none;
  transform: translateY(0);
}

/* 结果弹层 */
#result-wrapper {
  display: none;
  text-align: center;
  padding: 3rem;
  background: #fdfdfd;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  margin-top: 2rem;
}

.type-title {
  font-size: 4rem;
  font-weight: 800;
  color: #33a474;
  margin: 1rem 0;
  letter-spacing: 2px;
}
.type-name {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

</style>

<div class="mbti-wrapper">
  
  <div class="mbti-header" id="test-header">
    <h1>深入了解你真实的自我</h1>
    <p>完成本次快速测评，揭示在社交、决策和生活方式上驱动你的核心偏好。（共 8 题）</p>
  </div>

  <div class="progress-container" id="progress-container">
    <div class="progress-bar" id="progress-bar"></div>
  </div>

  <form id="mbtiForm">
    <!-- 题目将由 JS 动态生成在这个容器里 -->
    <div id="questions-container"></div>
    
    <div style="text-align: center; margin-top: 3rem; margin-bottom: 5rem;">
      <button type="button" class="submit-btn" id="finish-btn" disabled onclick="calculateResult()">查看测评结果</button>
      <p id="error-text" style="color:red; display:none; margin-top:1rem;">请完成所有题目才能查看结果哦</p>
    </div>
  </form>

  <!-- 结果区块 -->
  <div id="result-wrapper">
    <h2 style="font-size: 1.5rem; color: #88619a;">你的性格类型是：</h2>
    <div class="type-title" id="res-code">INFP</div>
    <div class="type-name" id="res-name">调停者</div>
    <p id="res-desc" style="color: #555; line-height: 1.8; margin-bottom: 3rem; text-align: left; background: #f5f7fa; padding: 1.5rem; border-radius: 10px;"></p>
    <button class="submit-btn" style="background: #94A0B4; padding: 12px 30px;" onclick="location.reload()">重新测试</button>
  </div>

</div>

<script>
// 精选8道具有代表性的题目，还原 16P 风格的语境
const questions = [
  { id: 'IE_1', axis: 'E', prompt: '你经常结交新朋友。' },
  { id: 'IE_2', axis: 'I', prompt: '你更喜欢在安静的角落独处，而不是成为众人瞩目的焦点。' },
  { id: 'SN_1', axis: 'N', prompt: '你经常陷入深深的沉思之中，以至于忽略或忘记了周围发生的事情。' },
  { id: 'SN_2', axis: 'S', prompt: '你认为依靠已被证明有效的经验比尝试新奇但不确定的方法更靠谱。' },
  { id: 'TF_1', axis: 'F', prompt: '当朋友悲伤时，你更倾向于提供情感支持，而不是提供解决问题的方法。' },
  { id: 'TF_2', axis: 'T', prompt: '在辩论中，赢得辩论比确保对方不感到沮丧更重要。' },
  { id: 'JP_1', axis: 'J', prompt: '你尽可能提前做好旅行计划，不喜欢到了目的地再凭感觉走。' },
  { id: 'JP_2', axis: 'P', prompt: '与其每天严格遵守日程表，你更喜欢顺其自然，即兴安排时间。' }
];

// 大数据量表解析档案
const mbtiProfiles = {
  "INTJ": { name: "建筑师", desc: "富有想象力和战略性的思想家，一切皆在计划之中。你不仅能看到事物原本的样子，还能看到它们可能成为的样子。" },
  "INTP": { name: "逻辑学家", desc: "具有创造力的发明家，对知识有着止不住的渴望。你热爱理论，并愿意花费大把时间去验证和打磨自己的想法。" },
  "ENTJ": { name: "指挥官", desc: "大胆、富有想象力且意志强大的领导者，总能找到或创造解决办法。在追求目标的道路上，你冷静而果断。" },
  "ENTP": { name: "辩论家", desc: "聪明好奇的思想者，不会放弃任何智力上的挑战。你享受解构和重建观点，在思维的碰撞中寻找火花。" },
  "INFJ": { name: "提倡者", desc: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。你拥有深刻的直觉，致力于让世界变得更好。" },
  "INFP": { name: "调停者", desc: "诗意、善良的利他主义者，总是热情地为正当理由提供帮助。你的内心世界丰富且充实，富有深刻的同理心。" },
  "ENFJ": { name: "主人公", desc: "富有魅力、鼓舞人心的领导者，有使听众着迷的能力。天生的教育家，乐于看见身边的人成长与蜕变。" },
  "ENFP": { name: "竞选者", desc: "热情、有创造力、爱社交的自由精灵，总能找到理由微笑。你能够洞察言辞背后的情感与动机。" },
  "ISTJ": { name: "物流师", desc: "实际且注重事实的个人，可靠性不容怀疑。你尊重传统与秩序，一板一眼地履行着自己的职责。" },
  "ISFJ": { name: "守卫者", desc: "非常专注而温暖的守护者，时刻准备着保护爱着的人们。你有极强的责任感，对细节有着异乎寻常的掌控力。" },
  "ESTJ": { name: "总经理", desc: "出色的管理者，在管理事物或人的方面无与伦比。你坚信法律和规则的价值，是团队中稳健的支柱。" },
  "ESFJ": { name: "执政官", desc: "极度关心他人、爱社交且受欢迎的人，总是热心提供帮助。极有责任心，希望为所有人营造和谐的氛围。" },
  "ISTP": { name: "鉴赏家", desc: "大胆而实际的实验家，擅长探索任何形式的工具。你是安静的观察者，却能在危机来临迅速反应。" },
  "ISFP": { name: "探险家", desc: "灵活、有魅力的艺术家，时刻准备着探索和体验新鲜事物。你讨厌被束缚，通过美学与行为探索生活。" },
  "ESTP": { name: "企业家", desc: "聪明、精力充沛且十分善于感知的人，真正地享受在边缘生活。热爱冒险，善于在危机中寻找机遇。" },
  "ESFP": { name: "表演者", desc: "自发、精力充沛而热情的表演者——生活在他们周围永不无聊。你是天生的活跃分子，享受聚光灯下的每一秒。" }
};

const scores = {}; // 记录每题的得分
let answeredCount = 0;

function renderQuestions() {
  const container = document.getElementById('questions-container');
  questions.forEach((q, index) => {
    container.innerHTML += `
      <div class="question-block" id="qb-${index}">
        <div class="statement">${q.prompt}</div>
        <div class="likert-scale">
          <span class="likert-label agree">同意</span>
          <div class="circle-btn size-3 agree" onclick="selectOpt(${index}, '${q.axis}', 3)"></div>
          <div class="circle-btn size-2 agree" onclick="selectOpt(${index}, '${q.axis}', 2)"></div>
          <div class="circle-btn size-1 agree" onclick="selectOpt(${index}, '${q.axis}', 1)"></div>
          <div class="circle-btn size-0 neutral" onclick="selectOpt(${index}, 'Neutral', 0)"></div>
          <div class="circle-btn size-1 disagree" onclick="selectOpt(${index}, '${q.axis}', -1)"></div>
          <div class="circle-btn size-2 disagree" onclick="selectOpt(${index}, '${q.axis}', -2)"></div>
          <div class="circle-btn size-3 disagree" onclick="selectOpt(${index}, '${q.axis}', -3)"></div>
          <span class="likert-label disagree">反对</span>
        </div>
      </div>
    `;
  });
}

function selectOpt(qIndex, axis, value) {
  // 视觉反馈
  const block = document.getElementById(`qb-${qIndex}`);
  const circles = block.querySelectorAll('.circle-btn');
  circles.forEach(c => c.classList.remove('selected'));
  // 找出对应的圆
  // 索引映射: 3->0, 2->1, 1->2, 0->3, -1->4, -2->5, -3->6
  const mapIndex = { "3": 0, "2": 1, "1": 2, "0": 3, "-1": 4, "-2": 5, "-3": 6 };
  circles[mapIndex[value]].classList.add('selected');
  
  // 记录进度和答案
  if (scores[qIndex] === undefined) {
    answeredCount++;
  }
  
  // 对于反对（负分），如果是测 E，那么实际上更偏向 I。
  // 我们最终得分逻辑：E vs I：+ 表示 E， - 表示 I （基于问题的正向指向）
  scores[qIndex] = { axis: axis, val: value };
  
  updateProgress();
}

function updateProgress() {
  const pct = (answeredCount / questions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  if (answeredCount === questions.length) {
    const btn = document.getElementById('finish-btn');
    btn.disabled = false;
    btn.style.boxShadow = "0 6px 15px rgba(51,164,116,0.5)";
    btn.style.transform = "scale(1.05)";
    document.getElementById('error-text').style.display = 'none';
  }
}

function calculateResult() {
  if (answeredCount < questions.length) {
    document.getElementById('error-text').style.display = 'block';
    return;
  }
  
  // 核心维度的分数累积
  const sums = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  for(let i=0; i<questions.length; i++) {
    const ans = scores[i];
    // 此处简化：如果此题 axis 为 E，选同意(正值)，那么E得分，否则如果是反向（反对则是负值），则为其对立面I得分
    const baseAxis = questions[i].axis; // 题目的主要倾向
    let opposite = "";
    if(baseAxis === 'E') opposite = 'I'; if(baseAxis === 'I') opposite = 'E';
    if(baseAxis === 'S') opposite = 'N'; if(baseAxis === 'N') opposite = 'S';
    if(baseAxis === 'T') opposite = 'F'; if(baseAxis === 'F') opposite = 'T';
    if(baseAxis === 'J') opposite = 'P'; if(baseAxis === 'P') opposite = 'J';
    
    if (ans.val > 0) {
      sums[baseAxis] += ans.val;
    } else if (ans.val < 0) {
      sums[opposite] += Math.abs(ans.val);
    }
    // 中立0分双方不加分
  }

  // 计算四个维度的结果
  let type = "";
  type += (sums['E'] >= sums['I']) ? "E" : "I";
  type += (sums['N'] >= sums['S']) ? "N" : "S";
  type += (sums['F'] >= sums['T']) ? "F" : "T";
  type += (sums['J'] >= sums['P']) ? "J" : "P";
  
  // 针对存在平票或者微弱倾向的兜底（此处采用了直观比大小）
  
  // 隐藏表单，显示结果
  document.getElementById('mbtiForm').style.display = 'none';
  document.getElementById('test-header').style.display = 'none';
  document.getElementById('progress-container').style.display = 'none';
  
  const resBox = document.getElementById('result-wrapper');
  resBox.style.display = 'block';
  setTimeout(() => { resBox.style.opacity = 1; }, 50);
  
  document.getElementById('res-code').innerText = type;
  document.getElementById('res-name').innerText = mbtiProfiles[type].name;
  document.getElementById('res-desc').innerText = mbtiProfiles[type].desc;
}

// 初始化渲染
window.onload = () => {
  renderQuestions();
};
</script>
{% endraw %}
