---
title: MBTI 快速性格画像测评
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

.mbti-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.mbti-header {
  text-align: center;
  margin-bottom: 2rem;
}

.mbti-header h1 {
  font-size: 2.2rem;
  background: linear-gradient(120deg, #A7B1FF, #425AEF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.mbti-card {
  background: var(--anzhiyu-card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.question-block {
  margin-bottom: 1.5rem;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 1.5rem;
}

.question-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.options-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-label {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: var(--anzhiyu-background);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #eee;
}

.option-label:hover {
  background: #A7B1FF;
  color: white;
}

.option-label input[type="radio"] {
  margin-right: 10px;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background: #425AEF;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
}

.submit-btn:hover {
  opacity: 0.9;
}

#result-box {
  display: none;
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(167, 177, 255, 0.1);
  border-radius: 15px;
  border: 1px solid #A7B1FF;
  text-align: center;
}

.type-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #425AEF;
  margin: 1rem 0;
  letter-spacing: 2px;
}
</style>

<div class="mbti-wrapper">
  <div class="mbti-header">
    <h1>16型人格 (MBTI) 快速判定器</h1>
    <p>通过4道核心二分法问题，快速探寻你的心理偏好原型</p>
  </div>

  <div class="mbti-card" id="mbti-container">
    <form id="mbtiForm">
      
      <div class="question-block">
        <div class="question-title">1. 在经过了一周高强度的工作后，周末你更倾向于如何恢复精力？</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="IE" value="E" required> 约朋友出去玩，在人群和互动中获取能量 (E)</label>
          <label class="option-label"><input type="radio" name="IE" value="I"> 一个人待在家里，看看书打打游戏，享受独处 (I)</label>
        </div>
      </div>
      
      <div class="question-block">
        <div class="question-title">2. 当面对一个新任务时，你更关注：</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="SN" value="S" required> 具体的操作步骤、事实细节和过去的经验 (S)</label>
          <label class="option-label"><input type="radio" name="SN" value="N"> 整体的意义、未来的可能性和隐藏的模式 (N)</label>
        </div>
      </div>

      <div class="question-block">
        <div class="question-title">3. 当需要做出一个重要决定时，你往往：</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="TF" value="T" required> 依靠逻辑推理，追求客观和公平 (T)</label>
          <label class="option-label"><input type="radio" name="TF" value="F"> 依靠个人价值观，考虑这会如何影响到他人或自己 (F)</label>
        </div>
      </div>

      <div class="question-block">
        <div class="question-title">4. 对于生活和计划的态度，你更像哪一种？</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="JP" value="J" required> 喜欢井井有条，事情定下来才有安全感，倾向于提前计划 (J)</label>
          <label class="option-label"><input type="radio" name="JP" value="P"> 喜欢随性而为，享受灵活和突发奇想，觉得过早决定是一种限制 (P)</label>
        </div>
      </div>

      <button type="button" class="submit-btn" onclick="calculateMBTI()">获取我的性格画像</button>
    </form>

    <div id="result-box">
      <h2>🎉 你的性格画像可能是</h2>
      <div class="type-title" id="mbti-result"></div>
      <p id="mbti-desc" style="margin-bottom: 2rem;"></p>
      
      <button class="submit-btn" style="background: #888; width: auto; display: inline-block; padding: 10px 20px;" onclick="resetTest()">再测一次</button>
    </div>
  </div>
</div>

<script>
const mbtiDesc = {
  "INTJ": "建筑师 - 富有想象力和战略性的思想家，一切皆在计划之中。",
  "INTP": "逻辑学家 - 具有创造力的发明家，对知识有着止不住的渴望。",
  "ENTJ": "指挥官 - 大胆，富有想象力且意志强大的领导者，总能找到或创造解决办法。",
  "ENTP": "辩论家 - 聪明好奇的思想者，不会放弃任何智力上的挑战。",
  "INFJ": "提倡者 - 安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。",
  "INFP": "调停者 - 诗意，善良的利他主义者，总是热情地为正当理由提供帮助。",
  "ENFJ": "主人公 - 富有魅力鼓舞人心的领导者，有使听众着迷的能力。",
  "ENFP": "竞选者 - 热情，有创造力爱社交的自由精灵，总能找到理由微笑。",
  "ISTJ": "物流师 - 实际且注重事实的个人，可靠性不容怀疑。",
  "ISFJ": "守卫者 - 非常专注而温暖的守护者，时刻准备着保护爱着的人们。",
  "ESTJ": "总经理 - 出色的管理者，在管理事物或人的方面无与伦比。",
  "ESFJ": "执政官 - 极度关心他人，爱社交且受欢迎的人，总是热心提供帮助。",
  "ISTP": "鉴赏家 - 大胆而实际的实验家，擅长使用任何形式的工具。",
  "ISFP": "探险家 - 灵活有魅力的艺术家，时刻准备着探索和体验新鲜事物。",
  "ESTP": "企业家 - 聪明，精力充沛且非常善于感知的人，真正地享受在边缘生活。",
  "ESFP": "表演者 - 自发的，精力充沛而热情的表演者-生活在他们周围永不无聊。"
};

function calculateMBTI() {
  const form = document.getElementById('mbtiForm');
  const formData = new FormData(form);
  let resultType = "";
  let qCount = 0;
  
  if (formData.get('IE')) { resultType += formData.get('IE'); qCount++; }
  if (formData.get('SN')) { resultType += formData.get('SN'); qCount++; }
  if (formData.get('TF')) { resultType += formData.get('TF'); qCount++; }
  if (formData.get('JP')) { resultType += formData.get('JP'); qCount++; }
  
  if (qCount < 4) {
    alert("请回答完所有问题哦！");
    return;
  }
  
  form.style.display = 'none';
  const resultBox = document.getElementById('result-box');
  
  document.getElementById('mbti-result').innerText = resultType;
  document.getElementById('mbti-desc').innerText = mbtiDesc[resultType] || "独特的灵魂组合";
  
  resultBox.style.display = 'block';
}

function resetTest() {
  document.getElementById('mbtiForm').reset();
  document.getElementById('mbtiForm').style.display = 'block';
  document.getElementById('result-box').style.display = 'none';
}
</script>
{% endraw %}
