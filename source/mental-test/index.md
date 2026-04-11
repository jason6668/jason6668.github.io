---
title: 心理健康自测 (PHQ-9 & GAD-7)
date: 2026-04-12
type: "page"
aside: false
top_img: false
copyright: false
reward: false
---

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
  color: var(--anzhiyu-theme);
  margin-bottom: 0.5rem;
}

.test-card {
  background: var(--anzhiyu-card-bg);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--anzhiyu-shadow-light);
  margin-bottom: 2rem;
}

.question-block {
  margin-bottom: 1.5rem;
  border-bottom: 1px dashed var(--anzhiyu-card-border);
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
  border: 1px solid transparent;
}

.option-label:hover {
  background: var(--anzhiyu-main);
  color: white;
}

.option-label input[type="radio"] {
  margin-right: 10px;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background: var(--anzhiyu-theme);
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
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
  border: 1px solid var(--anzhiyu-theme);
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
    <h1>心理压力自测工具</h1>
    <p>包含简易版 PHQ-9 (抑郁) 及 GAD-7 (焦虑) 综合筛查</p>
  </div>

  <div class="test-card" id="test-container">
    <p style="margin-bottom: 2rem; color: var(--anzhiyu-secondtext);">请根据<strong>过去两周内</strong>的实际感受，回答以下问题：</p>
    
    <form id="mentalTestForm">
      <!-- Q1 -->
      <div class="question-block">
        <div class="question-title">1. 做事时提不起劲或没有兴趣</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="q1" value="0" required> 完全没有</label>
          <label class="option-label"><input type="radio" name="q1" value="1"> 有几天</label>
          <label class="option-label"><input type="radio" name="q1" value="2"> 一半以上的天数</label>
          <label class="option-label"><input type="radio" name="q1" value="3"> 几乎每天</label>
        </div>
      </div>
      
      <!-- Q2 -->
      <div class="question-block">
        <div class="question-title">2. 感到情绪低落、沮丧或绝望</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="q2" value="0" required> 完全没有</label>
          <label class="option-label"><input type="radio" name="q2" value="1"> 有几天</label>
          <label class="option-label"><input type="radio" name="q2" value="2"> 一半以上的天数</label>
          <label class="option-label"><input type="radio" name="q2" value="3"> 几乎每天</label>
        </div>
      </div>

      <!-- Q3 -->
      <div class="question-block">
        <div class="question-title">3. 感觉紧张，焦虑或急躁</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="q3" value="0" required> 完全没有</label>
          <label class="option-label"><input type="radio" name="q3" value="1"> 有几天</label>
          <label class="option-label"><input type="radio" name="q3" value="2"> 一半以上的天数</label>
          <label class="option-label"><input type="radio" name="q3" value="3"> 几乎每天</label>
        </div>
      </div>

      <!-- Q4 -->
      <div class="question-block">
        <div class="question-title">4. 不能停止或无法控制担忧</div>
        <div class="options-group">
          <label class="option-label"><input type="radio" name="q4" value="0" required> 完全没有</label>
          <label class="option-label"><input type="radio" name="q4" value="1"> 有几天</label>
          <label class="option-label"><input type="radio" name="q4" value="2"> 一半以上的天数</label>
          <label class="option-label"><input type="radio" name="q4" value="3"> 几乎每天</label>
        </div>
      </div>

      <button type="button" class="submit-btn" onclick="calculateMentalScore()">生成评估报告</button>
    </form>

    <div id="result-box">
      <h2 style="margin-bottom: 1rem;">📝 您的评估结果</h2>
      <div id="score-text" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--anzhiyu-theme);"></div>
      <p id="analysis-text"></p>
      <button class="submit-btn" style="margin-top: 1rem; background: #888;" onclick="resetTest()">重新测试</button>
    </div>
    
    <div class="disclaimer">
      <strong>⚠️ 郑重声明：</strong>本测试仅为初步的健康自评筛查，不能替代专业的心理诊断。如您有严重的负面情绪，请务必寻求专业医疗帮助。
    </div>
  </div>
</div>

<script>
function calculateMentalScore() {
  const form = document.getElementById('mentalTestForm');
  const formData = new FormData(form);
  let totalScore = 0;
  let qCount = 0;
  
  for (let [key, value] of formData.entries()) {
    totalScore += parseInt(value);
    qCount++;
  }
  
  if (qCount < 4) {
    alert("请回答完所有问题哦！");
    return;
  }
  
  form.style.display = 'none';
  const resultBox = document.getElementById('result-box');
  const scoreText = document.getElementById('score-text');
  const analysisText = document.getElementById('analysis-text');
  
  resultBox.style.display = 'block';
  
  scoreText.innerText = "症状指数: " + totalScore + " 分";
  
  if (totalScore <= 3) {
    analysisText.innerText = "🌟 您的状态良好！心理有一定的韧性，继续保持哦。";
  } else if (totalScore <= 6) {
    analysisText.innerText = "🧩 存在轻微的压力反应。这可能是近期生活节奏变化或者工作压力导致，建议偶尔停下来，做一次深呼吸，看看自己真正需要什么。";
  } else if (totalScore <= 9) {
    analysisText.innerText = "🌧️ 存在中度的情绪困扰。如果可以的话，给自己放个短假，暂时推开必须完成的任务，允许自己什么都不做。";
  } else {
    analysisText.innerText = "⚡ 您可能正在经历较沉重的情绪负荷。一个人扛着可能会很累，建议您向信任的亲友倾诉，或者寻求专业的心理咨询干预。求助，是勇敢的第一步。";
  }
}

function resetTest() {
  document.getElementById('mentalTestForm').reset();
  document.getElementById('mentalTestForm').style.display = 'block';
  document.getElementById('result-box').style.display = 'none';
}
</script>
