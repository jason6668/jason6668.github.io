---
title: 心理健康自测 (PHQ-9 & GAD-7)
date: 2026-04-12
type: "page"
aside: false
top_img: false
copyright: false
reward: false
---

{% raw %}
<style>
/* 极简界面 */
#page-header { display: none !important; }
#post-info { display: none !important; }

.test-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.test-header {
  text-align: center;
  margin-bottom: 2rem;
}

.test-header h1 {
  font-size: 2.2rem;
  color: #425AEF;
  margin-bottom: 0.5rem;
}

.test-card {
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
  background: #425AEF;
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
  background: rgba(66, 90, 239, 0.1);
  border-radius: 15px;
  border: 1px solid #425AEF;
  text-align: center;
}

.disclaimer {
  font-size: 0.85rem;
  color: #888;
  margin-top: 1rem;
}
</style>

<div class="test-wrapper">
  <div class="test-header">
    <h1>PHQ-9 抑郁筛查量表</h1>
    <p>这是一个广泛使用的标准化自评工具，帮助您初步了解近期情绪状态。</p>
  </div>

  <div class="test-card" id="test-container">
    <p style="margin-bottom: 2rem; color: #666; text-align: center;">请根据您<strong>过去两周内</strong>的实际感受，回答以下 9 个问题：</p>
    
    <form id="mentalTestForm">
      <div id="phq-questions"></div>
      <button type="button" class="submit-btn" onclick="calculateMentalScore()">生成评估报告</button>
    </form>

    <div id="result-box">
      <h2 style="margin-bottom: 1rem;">📝 您的评估结果</h2>
      <div id="score-text" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: #425AEF;"></div>
      <p id="analysis-text" style="color: #555; line-height: 1.8; text-align: left; padding: 1rem; background: #fff; border-radius: 8px;"></p>
      <button class="submit-btn" style="margin-top: 1rem; background: #888;" onclick="resetTest()">重新测试</button>
    </div>
    
    <div class="disclaimer">
      <strong>⚠️ 郑重声明：</strong>本测试仅为初步的健康自评筛查，不能替代专业的心理诊断。如您有严重的负面情绪，请务必寻求专业医疗帮助。
    </div>
  </div>
</div>

<script>
const phqQuestions = [
  "做事时提不起劲或没有兴趣",
  "感到心情低落、沮丧或绝望",
  "入睡困难、睡不踏实或睡眠过多",
  "感觉疲倦或没有活力",
  "食欲不振或吃得太多",
  "觉得自己很糟，或觉得自己是个失败者，让家人失望",
  "对事物专注有困难，例如阅读报纸或看电视时",
  "动作或说话速度缓慢到别人已经察觉，或者正好相反，烦躁不安、走来走去",
  "有不如死掉或用某种方式伤害自己的念头"
];

function renderPhq() {
  const container = document.getElementById('phq-questions');
  phqQuestions.forEach((q, index) => {
    container.innerHTML += `
      <div class="question-block">
        <div class="question-title">${index + 1}. ${q}</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="q${index}" value="0" required> 完全没有 (0分)</label>
          <label class="option-label"><input type="radio" name="q${index}" value="1"> 有几天 (1分)</label>
          <label class="option-label"><input type="radio" name="q${index}" value="2"> 一半以上的天数 (2分)</label>
          <label class="option-label"><input type="radio" name="q${index}" value="3"> 几乎每天 (3分)</label>
        </div>
      </div>
    `;
  });
}

// 初始化题目
window.onload = renderPhq;

function calculateMentalScore() {
  const form = document.getElementById('mentalTestForm');
  const formData = new FormData(form);
  let totalScore = 0;
  let qCount = 0;
  
  for (let [key, value] of formData.entries()) {
    totalScore += parseInt(value);
    qCount++;
  }
  
  if (qCount < phqQuestions.length) {
    alert("请回答完所有问题哦！");
    return;
  }
  
  form.style.display = 'none';
  const resultBox = document.getElementById('result-box');
  const scoreText = document.getElementById('score-text');
  const analysisText = document.getElementById('analysis-text');
  
  resultBox.style.display = 'block';
  
  scoreText.innerText = "症状评级: " + totalScore + " 分";
  
  if (totalScore <= 4) {
    analysisText.innerText = "🌟 没有抑郁症状 (0-4分)：您的情绪状态良好！心理有一定的韧性，继续保持哦。";
  } else if (totalScore <= 9) {
    analysisText.innerText = "🧩 轻度抑郁症状 (5-9分)：存在轻微的压力反应。这可能是近期生活节奏变化或者工作压力导致，建议偶尔停下来，做一次深呼吸，看看自己真正需要什么。";
  } else if (totalScore <= 14) {
    analysisText.innerText = "🌧️ 中度抑郁症状 (10-14分)：存在明显的情绪困扰。如果可以的话，给自己放个短假，暂时推开必须完成的任务，并考虑寻求专业的心理咨询协助。";
  } else if (totalScore <= 19) {
    analysisText.innerText = "🌩️ 中重度抑郁症状 (15-19分)：您正承受着较大的精神痛苦。一个人扛着会很累，强烈建议您尽快寻求心理医生或精神科医生的专业诊断与帮助。";
  } else {
    analysisText.innerText = "⚡ 重度抑郁症状 (20-27分)：您目前处于非常危险的情绪漩涡中。请立刻终止手头压力源，求助于家人、朋友并在专业医疗机构进行干预干预。求助，是勇敢的第一步。";
  }
}

function resetTest() {
  document.getElementById('mentalTestForm').reset();
  document.getElementById('mentalTestForm').style.display = 'block';
  document.getElementById('result-box').style.display = 'none';
}
</script>
{% endraw %}
