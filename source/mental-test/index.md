---
title: 马老师自用心理测评系统
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
.mt-app { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; font-family: "Nunito Sans", "Helvetica Neue", -apple-system, BlinkMacSystemFont, Arial, sans-serif; }
.mt-hero { text-align: center; margin-bottom: 1.6rem; }
.mt-hero h1 { font-size: 2rem; color: #425AEF; margin-bottom: .4rem; }
.mt-hero p { color: #666; font-size: .95rem; }
.mt-search { width: 100%; max-width: 520px; margin: 0 auto 1.2rem; display: block; padding: 13px 20px; border-radius: 30px; border: 2px solid #e3e8f7; font-size: 1rem; outline: none; background: #fff; }
.mt-search:focus { border-color: #425AEF; }
.mt-cats { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 1.6rem; }
.mt-cat { padding: 9px 22px; border-radius: 25px; border: 2px solid #e3e8f7; background: #fff; color: #666; font-weight: 700; cursor: pointer; font-size: .92rem; }
.mt-cat.active { background: #425AEF; border-color: #425AEF; color: #fff; }
.mt-count { text-align: center; color: #999; font-size: .85rem; margin-bottom: 1.2rem; }
.mt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
.mt-card { background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,.06); border: 2px solid transparent; cursor: pointer; transition: all .2s; display: flex; flex-direction: column; }
.mt-card:hover { border-color: #425AEF; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(66,90,239,.12); }
.mt-card .emoji { font-size: 2.2rem; }
.mt-card h2 { font-size: 1.08rem; margin: .5rem 0 .35rem; color: #333; }
.mt-card .desc { font-size: .86rem; color: #777; line-height: 1.7; margin-bottom: .8rem; flex: 1; }
.mt-badges { display: flex; gap: .45rem; flex-wrap: wrap; margin-bottom: .9rem; }
.mt-badge { font-size: .75rem; background: rgba(66,90,239,.08); color: #425AEF; padding: .28rem .65rem; border-radius: 20px; font-weight: 600; }
.mt-theory { font-size: .76rem; color: #aaa; margin-bottom: .9rem; }
.mt-start { width: 100%; padding: 12px; background: #425AEF; color: #fff; border: none; border-radius: 10px; font-size: 1rem; font-weight: 700; cursor: pointer; }
.mt-start:hover { opacity: .92; }
@media (max-width: 640px) { .mt-grid { grid-template-columns: 1fr; } }

/* 答题 */
#mt-quiz { display: none; }
.mt-progress-wrap { position: sticky; top: 60px; background: rgba(243,244,246,.95); padding: 15px 0; z-index: 100; border-bottom: 1px solid rgba(0,0,0,.05); }
.mt-progress-head { display: flex; justify-content: space-between; font-weight: 600; color: #a1a1a1; font-size: .9rem; margin-bottom: 8px; }
.mt-progress { width: 100%; height: 6px; background: #e2e2e2; border-radius: 3px; overflow: hidden; }
.mt-progress-bar { height: 100%; background: #33a474; width: 0%; transition: width .4s ease; }
.mt-qbox { padding: 2rem 1.5rem; background: #fff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,.05); margin-top: 1.5rem; animation: fadeIn .3s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
.mt-qtext { font-size: 1.3rem; color: #333; margin-bottom: 1.6rem; font-weight: 600; line-height: 1.6; text-align: center; }
.mt-opts { display: flex; flex-direction: column; gap: .7rem; max-width: 520px; margin: 0 auto; }
.mt-opt { padding: 14px 18px; border: 2px solid #e8ecf5; border-radius: 12px; background: #fff; font-size: 1rem; cursor: pointer; text-align: left; transition: all .15s; color: #444; }
.mt-opt:hover { border-color: #425AEF; background: #f5f7ff; }
.mt-opt.sel { border-color: #425AEF; background: #eef1ff; font-weight: 700; color: #425AEF; }
.mt-qnav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; }
.mt-qnav button { padding: 12px 28px; border-radius: 30px; border: 2px solid #425AEF; background: #fff; color: #425AEF; font-weight: 700; cursor: pointer; }
.mt-qnav button:disabled { opacity: .3; cursor: not-allowed; }
.mt-quit { background: none !important; border: none !important; color: #aaa !important; font-size: .85rem; }

/* 结果 */
#mt-result { display: none; background: #fff; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,.08); padding: 2.5rem 2rem; animation: fadeIn .4s ease; }
.mt-crisis { background: #fff1f1; border: 2px solid #e5484d; border-radius: 12px; padding: 1.2rem 1.4rem; margin-bottom: 1.6rem; color: #a02020; line-height: 1.9; font-size: .95rem; }
.mt-res-head { text-align: center; margin-bottom: 1.8rem; }
.mt-ring { width: 150px; height: 150px; margin: 0 auto 1rem; position: relative; }
.mt-ring svg { transform: rotate(-90deg); }
.mt-ring .num { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.mt-ring .num b { font-size: 2rem; }
.mt-ring .num span { font-size: .78rem; color: #999; }
.mt-band { display: inline-block; font-size: 1.15rem; font-weight: 800; padding: .45rem 1.4rem; border-radius: 25px; color: #fff; margin-bottom: .6rem; }
.mt-band-desc { color: #555; line-height: 1.9; max-width: 560px; margin: 0 auto; }
.mt-sec { margin: 1.8rem 0; }
.mt-sec h3 { font-size: 1.05rem; margin-bottom: .8rem; color: #333; }
.mt-actions { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .6rem; }
.mt-actions li { background: #f5f7ff; border-left: 4px solid #425AEF; border-radius: 0 10px 10px 0; padding: .85rem 1rem; font-size: .93rem; line-height: 1.75; color: #444; }
.mt-items { font-size: .88rem; color: #666; line-height: 2; background: #f8f9fa; border-radius: 10px; padding: 1rem 1.2rem; }
.mt-items b { color: #425AEF; }
.mt-dim { margin-bottom: 1.1rem; }
.mt-dim-top { display: flex; justify-content: space-between; font-size: .92rem; font-weight: 700; margin-bottom: 6px; color: #444; }
.mt-dim-bar { height: 10px; background: #eef1f7; border-radius: 5px; overflow: hidden; }
.mt-dim-fill { height: 100%; border-radius: 5px; transition: width .6s ease; }
.mt-dim-txt { font-size: .88rem; color: #666; line-height: 1.8; margin-top: 6px; }
.mt-dom { background: linear-gradient(135deg, #425AEF, #6a5af9); color: #fff; border-radius: 12px; padding: 1.3rem 1.5rem; margin-bottom: 1.4rem; line-height: 1.9; }
.mt-dom b { font-size: 1.1rem; }
.mt-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin: 1.6rem 0 .5rem; }
.mt-btn { background: #425AEF; color: #fff; border: none; padding: 13px 34px; font-size: 1rem; font-weight: 700; border-radius: 30px; cursor: pointer; }
.mt-btn.ghost { background: #fff; color: #425AEF; border: 2px solid #425AEF; }
.mt-faq { margin-top: 2rem; border-top: 1px solid #eee; padding-top: 1.5rem; }
.mt-faq details { margin-bottom: .7rem; background: #f8f9fa; border-radius: 10px; padding: .9rem 1.1rem; font-size: .9rem; }
.mt-faq summary { font-weight: 700; cursor: pointer; color: #333; }
.mt-faq p { color: #666; line-height: 1.9; margin: .6rem 0 0; }
.mt-disclaimer { margin-top: 1.5rem; font-size: .8rem; color: #aaa; line-height: 1.8; text-align: center; }
.mt-hotline { text-align: center; margin-top: 1rem; font-size: .85rem; color: #999; }
.mt-hotline b { color: #e5484d; font-size: 1rem; }
</style>

<div class="mt-app">
  <!-- 商城首页 -->
  <div id="mt-mall">
    <div class="mt-hero">
      <h1>🧠 马老师自用心理测评系统</h1>
      <p>26 个专业量表 · 297 道题 · 星座六爻测算 · 全部免费</p>
    </div>
    <input class="mt-search" id="mt-search" placeholder="🔍 搜索量表：比如 焦虑、睡眠、霍兰德…" oninput="mtRenderMall()">
    <div class="mt-cats" id="mt-cats"></div>
    <div class="mt-count" id="mt-count"></div>
    <div class="mt-grid" id="mt-grid"></div>
    <div class="mt-faq">
      <div class="mt-sec"><h3>❓ 常见问题</h3></div>
      <details><summary>这些测试准确吗？</summary><p>标注了理论来源的量表（如 PHQ-9、GAD-7、SAS）是心理学界广泛使用的筛查工具，信效度经过验证；标注"本站原创"的量表为自我探索工具。所有结果仅供参考，不能替代专业诊断。</p></details>
      <details><summary>多少分需要去看医生？</summary><p>一般以各量表"中度"为临界值：达到中度建议预约精神科或心理科做进一步评估。无论分数如何，只要出现自伤念头，或症状已明显影响工作生活，都建议立即求助。</p></details>
      <details><summary>我的答题数据会被上传吗？</summary><p>不会。所有答题和历史记录只保存在你这台设备的浏览器 localStorage 里，不上传任何服务器。清空浏览器数据即删除。</p></details>
      <details><summary>多久测一次合适？</summary><p>建议每 2–4 周测一次，观察分数变化趋势。治疗/咨询期间可按医生建议的频率复测。</p></details>
    </div>
    <p class="mt-hotline">💬 联系马老师：<a href="https://t.me/sisumasanBot" target="_blank" style="color:#425AEF;font-weight:700;">✈️ Telegram @sisumasanBot</a> · <a href="mailto:ma@8818618.xyz" style="color:#425AEF;font-weight:700;">📧 ma@8818618.xyz</a></p>
    <p class="mt-disclaimer">本站量表为自我探索与科普用途，不构成医疗诊断。如有需要，请前往正规医院精神科/心理科就诊。</p>
  </div>

  <!-- 答题 -->
  <div id="mt-quiz">
    <div class="mt-progress-wrap">
      <div class="mt-progress-head"><span id="mt-pct">0%</span><span id="mt-counter"></span></div>
      <div class="mt-progress"><div class="mt-progress-bar" id="mt-bar"></div></div>
    </div>
    <div class="mt-qbox" id="mt-qbox">
      <div class="mt-qtext" id="mt-qtext"></div>
      <div class="mt-opts" id="mt-opts"></div>
    </div>
    <div class="mt-qnav">
      <button id="mt-prev" onclick="mtNav(-1)">← 上一题</button>
      <button class="mt-quit" onclick="mtQuit()">✕ 返回商城</button>
      <button id="mt-next" onclick="mtNav(1)" style="visibility:hidden">下一题 →</button>
    </div>
  </div>

  <!-- 结果 -->
  <div id="mt-result">
    <div class="mt-crisis" id="mt-crisis" style="display:none"></div>
    <div class="mt-res-head">
      <div style="font-size:2.4rem" id="mt-res-emoji"></div>
      <h2 id="mt-res-title" style="margin:.4rem 0"></h2>
      <div id="mt-res-body"></div>
    </div>
    <div id="mt-res-extra"></div>
    <div class="mt-btns">
      <button class="mt-btn" onclick="mtCopy()">📋 复制报告</button>
      <button class="mt-btn ghost" onclick="mtRestart()">↺ 再测一次</button>
      <button class="mt-btn ghost" onclick="mtQuit()">🏪 返回商城</button>
    </div>
    <div class="mt-sec" id="mt-hist-sec" style="display:none"><h3>📈 历史趋势（仅本机）</h3><div id="mt-hist"></div></div>
    <p class="mt-hotline">💬 联系马老师：<a href="https://t.me/sisumasanBot" target="_blank" style="color:#425AEF;font-weight:700;">✈️ Telegram @sisumasanBot</a> · <a href="mailto:ma@8818618.xyz" style="color:#425AEF;font-weight:700;">📧 ma@8818618.xyz</a></p>
  </div>
</div>

<script>
/* 内联量表数据库（原 scales.js），避免外部请求失败导致商城空白 */
/* 量表数据库：26 个量表 | 临床量表标注真实理论来源，改编/自编量表如实标注 */
const SCALES = [
/* ============ 情绪健康 ============ */
{
  id:'phq9', cat:'情绪健康', emoji:'😔', title:'PHQ-9 抑郁症筛查量表',
  desc:'国际通用的抑郁症状筛查金标准，9 道题了解近两周的情绪状态。',
  time:'约3分钟', alpha:'α=.89', theory:'Kroenke 等, 2001',
  opts:['从不','偶尔','经常','总是'], base:0, type:'score',
  items:['做事时提不起劲或没有乐趣','感到心情低落、沮丧或绝望','入睡困难、睡不安稳或睡眠过多','感到疲倦或没有活力','食欲不振或吃得太多','觉得自己很糟、很失败，或让自己/家人失望','对事物专注有困难，比如阅读或看电视时','动作迟缓或烦躁不安到别人能察觉','有不如死掉或用某种方式伤害自己的念头'],
  bands:[
    {max:4,label:'无抑郁症状',color:'#33a474',desc:'你的情绪状态整体健康，继续保持良好的生活节奏。',actions:['保持规律作息与运动，这是情绪最好的压舱石','每天留 15 分钟给自己，做一件纯粹喜欢的事','把这份好状态记录下来，低谷时回来看看']},
    {max:9,label:'轻度抑郁症状',color:'#e4b622',desc:'出现了一些抑郁信号，值得认真对待，但通常可通过自我调节改善。',actions:['每天晒 20 分钟太阳 + 快走 30 分钟，效果堪比轻度用药','把困扰写下来，区分"能改变的"和"要接纳的"','连续两周无改善，或影响工作生活，建议咨询心理科']},
    {max:14,label:'中度抑郁症状',color:'#f08c00',desc:'症状已比较明显，不建议独自硬扛，专业帮助非常有效。',actions:['尽快预约精神科或心理科做一次专业评估','告诉一位信任的人你最近的状态，不要独自承受','先保证睡眠和吃饭，身体是情绪的地基']},
    {max:27,label:'中重度以上抑郁症状',color:'#e5484d',desc:'你正在承受较大的精神痛苦，请务必寻求专业帮助，这不是软弱。',actions:['尽快到精神科就诊，药物+心理治疗对抑郁症效果明确','如有伤害自己的念头，立即拨打全国心理援助热线 12356','让家人或朋友陪伴你，不要一个人待着']}
  ],
  crisis:{item:8, text:'你在第 9 题（自伤念头）上选择了大于 0 的选项。请认真对待这个信号：立即拨打全国心理援助热线 <b>12356</b>（24小时），或尽快前往精神科急诊。你值得被帮助。'}
},
{
  id:'gad7', cat:'情绪健康', emoji:'😰', title:'GAD-7 焦虑症筛查量表',
  desc:'国际通用的焦虑症状筛查工具，7 道题测出你的焦虑水平。',
  time:'约2分钟', alpha:'α=.92', theory:'Spitzer 等, 2006',
  opts:['从不','偶尔','经常','总是'], base:0, type:'score',
  items:['感到紧张、焦虑或急切','不能停止或无法控制担忧','对各种各样的事情担忧过多','很难放松下来','坐立不安，难以安静地坐着','变得容易烦恼或易被激怒','感到似乎将有可怕的事情发生而害怕'],
  bands:[
    {max:4,label:'无焦虑症状',color:'#33a474',desc:'你的焦虑水平在健康范围内。',actions:['保持现在的节奏，焦虑偶尔探头是正常的','把"万一"思维换成"即使…我也能应对"','规律运动是天然的抗焦虑药']},
    {max:9,label:'轻度焦虑',color:'#e4b622',desc:'有些过度担忧的倾向，可以通过方法调节。',actions:['每天 10 分钟正念呼吸，把注意力拉回当下','把担忧写下来并标注"可控/不可控"，只处理可控的','睡前 1 小时远离手机，焦虑在深夜会被放大']},
    {max:14,label:'中度焦虑',color:'#f08c00',desc:'焦虑已影响到日常生活，建议寻求专业支持。',actions:['预约心理咨询，CBT 对焦虑障碍效果明确','减少咖啡因和酒精，它们会加重躯体性焦虑','建立固定的放松仪式：运动、冥想或散步']},
    {max:21,label:'重度焦虑',color:'#e5484d',desc:'长期高度焦虑会透支身体，请尽快寻求专业帮助。',actions:['尽快到精神科或心理科就诊，药物+心理治疗效果明确','如伴随惊恐发作（心悸、窒息感），可先去急诊排除躯体问题','全国心理援助热线 12356（24小时）']}
  ]
},
{
  id:'sas', cat:'情绪健康', emoji:'😟', title:'SAS 焦虑自评量表',
  desc:'Zung 编制的经典焦虑自评量表，20 题覆盖躯体与情绪双维度。',
  time:'约5分钟', alpha:'α=.82', theory:'Zung, 1971',
  opts:['没有或很少时间','有时','相当多时间','绝大部分时间'], base:1, type:'score', std125:true,
  items:['我觉得比平常容易紧张和着急','我无缘无故地感到害怕','我容易心里烦乱或觉得恐慌','我觉得我可能将要发疯','我觉得一切都很好，也不会发生什么不幸',
         '我手脚发抖打颤','我因为头痛、颈痛和背痛而苦恼','我感觉容易衰弱和疲乏','我觉得心平气和，并且容易安静坐着','我觉得心跳得很快',
         '我因为一阵阵头晕而苦恼','我有晕倒发作或觉得要晕倒似的','我呼气吸气都感到很容易','我手脚麻木和刺痛','我因为胃痛和消化不良而苦恼',
         '我常常要小便','我的手常常是干燥温暖的','我脸红发热','我容易入睡并且一夜睡得很好','我做恶梦'],
  reverse:[4,8,12,16,18],
  bands:[
    {max:49,label:'无焦虑',color:'#33a474',desc:'标准分 50 以下，焦虑水平正常。',actions:['继续保持，偶尔的紧张是健康的警觉','注意劳逸结合，别把弦绷太紧','把运动变成固定习惯']},
    {max:59,label:'轻度焦虑',color:'#e4b622',desc:'标准分 50-59，有轻度焦虑倾向。',actions:['排查压力源：是工作、人际还是健康担忧？','每天固定 20 分钟"担忧时间"，其他时间出现担忧先记下来','尝试腹式呼吸：吸气4秒-屏息4秒-呼气6秒']},
    {max:69,label:'中度焦虑',color:'#f08c00',desc:'标准分 60-69，建议寻求专业评估。',actions:['到心理科/精神科做一次系统评估','记录焦虑发作的诱因、躯体反应和持续时间，带给医生看','避免用酒精"助眠"或"解压"，会加重焦虑']},
    {max:100,label:'重度焦虑',color:'#e5484d',desc:'标准分 70 以上，请尽快就医。',actions:['尽快到精神科就诊','如焦虑伴随胸闷、心悸，先排除心脏问题','全国心理援助热线 12356（24小时）']}
  ]
},
{
  id:'pss10', cat:'情绪健康', emoji:'😮‍💨', title:'PSS-10 压力感知量表',
  desc:'测量你主观感受到的压力水平，10 道题看清压力真相。',
  time:'约3分钟', alpha:'α=.85', theory:'Cohen 等, 1983',
  opts:['从不','偶尔','有时','经常','总是'], base:0, type:'score',
  items:['因发生意外事件而感到心烦','感觉无法控制生活中的重要事情','感到紧张和压力','对处理个人问题的能力有信心','感觉事情进展顺心',
         '感觉无法应对所有必须做的事情','有能力控制生活中的烦恼','感觉一切尽在掌握','因无法控制的事情而生气','感觉困难堆积如山、难以克服'],
  reverse:[3,4,6,7],
  bands:[
    {max:13,label:'低压力',color:'#33a474',desc:'你对生活的掌控感不错，压力在可承受范围内。',actions:['把有效的应对方式固定下来，形成自己的"压力工具箱"','别等到高压才休息，预防比救火重要','可以把经验分享给身边高压的朋友']},
    {max:26,label:'中等压力',color:'#e4b622',desc:'压力已能被明显感知，需要主动管理。',actions:['列出当前 Top3 压力源，每个写下一件本周能做的事','每天保证 7 小时睡眠，缺觉会让压力翻倍','每周至少运动 3 次，出汗是最便宜的减压方式']},
    {max:40,label:'高压力',color:'#e5484d',desc:'你正承受高压，长期高压会拖垮身心。',actions:['立即给生活"减负"：推掉一件不重要的事','找信任的人倾诉，或预约一次心理咨询','如出现持续失眠、心悸、情绪崩溃，请就医评估']}
  ]
},
{
  id:'sleep', cat:'情绪健康', emoji:'😴', title:'睡眠质量自评（PSQI 核心版）',
  desc:'参考匹兹堡睡眠质量指数编制，10 道题诊断你的睡眠问题。',
  time:'约3分钟', alpha:'—', theory:'参考 Buysse 等, 1989（PSQI）改编',
  opts:['从不','偶尔','经常','总是'], base:0, type:'score',
  items:['入睡通常需要超过 30 分钟','夜间经常醒来，且难以再入睡','实际睡眠时间不足 6 小时','天没亮就醒来，无法再入睡','白天困倦到影响工作或学习',
         '睡觉打鼾或呼吸不畅（或被他人告知）','需要依赖药物才能入睡','醒来后感觉没有恢复精力','睡前忍不住刷手机或思虑难停','总体上对自己的睡眠质量不满意'],
  bands:[
    {max:7,label:'睡眠良好',color:'#33a474',desc:'你的睡眠质量不错，请继续保持。',actions:['固定起床时间（包括周末），比固定入睡时间更重要','睡前 1 小时调暗灯光，给大脑"天黑了"的信号','卧室只用来睡觉，别在床上刷手机']},
    {max:14,label:'轻度睡眠问题',color:'#e4b622',desc:'睡眠有些小毛病，现在干预完全来得及。',actions:['建立 20 分钟睡前仪式：洗澡、阅读、冥想','下午 3 点后不喝咖啡、浓茶','白天晒太阳 20 分钟，校准生物钟']},
    {max:21,label:'中度睡眠问题',color:'#f08c00',desc:'睡眠问题已影响白天状态，建议认真对待。',actions:['记录 2 周睡眠日记（入睡/醒来时间、夜醒次数）','尝试 CBT-I 中的"睡眠限制法"：困了才上床','如持续 1 个月无改善，到睡眠门诊评估']},
    {max:30,label:'重度睡眠问题',color:'#e5484d',desc:'长期睡不好会拖垮免疫和情绪，请就医。',actions:['到正规医院睡眠门诊或精神科就诊','不要自行长期服用安眠药，需医生指导','排查打鼾呼吸暂停：白天嗜睡+打鼾要做多导睡眠监测']}
  ]
},
{
  id:'burnout', cat:'情绪健康', emoji:'🪫', title:'职业倦怠测试（MBI 简版）',
  desc:'参考 Maslach 职业倦怠量表，12 道题测出你的"电量"还剩多少。',
  time:'约3分钟', alpha:'—', theory:'参考 Maslach & Jackson, 1981（MBI）改编',
  opts:['从不','很少','有时','经常','总是'], base:0, type:'score',
  items:['工作让我感到身心俱疲','一天工作下来，我感到精疲力竭','早晨一想到要上班就感到沉重','面对工作对象，我越来越冷漠','我担心这份工作让我变得冷酷',
         '下班后我脑子里还全是工作的事','我对工作的热情大不如前','我觉得自己的付出和回报不成正比','我能有效解决工作中出现的问题','工作让我有成就感',
         '我觉得自己对他人有积极影响','总体而言，我热爱我现在的工作'],
  reverse:[8,9,10,11],
  bands:[
    {max:12,label:'电量充足',color:'#33a474',desc:'你和工作的关系是健康的。',actions:['保持工作与生活的边界，电量要省着用','定期复盘成就感，它是倦怠的防火墙','把这份状态归因清楚：是什么在保护你？']},
    {max:24,label:'轻度倦怠',color:'#e4b622',desc:'电量开始告急，是调整的信号。',actions:['找出最耗电的那件事：是人、任务还是意义感？','每天留 30 分钟"非工作时间"，雷打不动','和上级/同事聊一次，看看有没有调整空间']},
    {max:36,label:'中度倦怠',color:'#f08c00',desc:'倦怠已实质影响你的状态和效率。',actions:['认真考虑休假，哪怕只是 3 天彻底断联','和信任的人深聊一次，或预约心理咨询','重新校准：这份工作和你的人生目标还一致吗？']},
    {max:48,label:'重度倦怠',color:'#e5484d',desc:'你快被掏空了，这不是靠"坚持"能解决的。',actions:['把"休息"提到最高优先级，身体在报警','如伴随持续情绪低落，建议到心理科评估','重大职业决策（辞职/转行）等状态恢复些再做']}
  ]
},
{
  id:'emotionreg', cat:'情绪健康', emoji:'🎛️', title:'情绪调节能力测试',
  desc:'本站原创编制。测测你管理情绪的水平：是情绪的主人，还是奴隶？',
  time:'约3分钟', alpha:'—', theory:'本站原创编制，仅供自我探索',
  opts:['从不','偶尔','有时','经常','总是'], base:0, type:'score',
  items:['情绪低落时，我能较快找到原因并疏导','生气时我说出的话，事后常常后悔','我能觉察到自己情绪的细微变化','焦虑时我会用深呼吸、运动等方式平复',
         '坏情绪会缠我一整天，挥之不去','我愿意向信任的人倾诉烦恼','压力大时我会暴饮暴食或报复性熬夜','我能区分"事实"和"情绪化的想法"',
         '遇到挫折，我通常先冷静再处理','我经常被情绪牵着走，难以自控'],
  reverse:[1,4,6,9],
  bands:[
    {max:13,label:'情绪调节较弱',color:'#e5484d',desc:'情绪常常牵着你走，这是可以练出来的能力。',actions:['先练"命名"：情绪上头时说出"我现在感到__"，命名本身就能降温','学一套急救动作：深呼吸 4-4-6，或用冷水洗脸','推荐读《情绪急救》，系统性补课']},
    {max:26,label:'情绪调节中等',color:'#e4b622',desc:'有时能管住情绪，有时会被带跑。',actions:['复盘最近一次失控：触发点是什么？下次可以怎么做？','建立"情绪工具箱"：运动、倾诉、写作，至少 3 样','正念冥想每天 10 分钟，8 周见效']},
    {max:40,label:'情绪调节较强',color:'#33a474',desc:'你是情绪的主人，这份稳定很难得。',actions:['把你的方法教给身边情绪化的人，教学相长','注意别压抑：能调节不等于不需要表达','在高压决策中，你的冷静是稀缺优势']}
  ]
}
];

/* ============ 人格特质 ============ */
SCALES.push(
{
  id:'bigfive', cat:'人格特质', emoji:'🧩', title:'大五人格测试（简版）',
  desc:'心理学界公认的人格"大五"模型，20 道题画出你的性格画像。',
  time:'约5分钟', alpha:'α=.80', theory:'参考 John & Srivastava, 1999（BFI）改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  items:[
    {t:'我喜欢尝试新鲜事物',d:0},{t:'我对艺术和美有敏锐的感受',d:0},{t:'我想象力丰富',d:0},{t:'我对抽象的思考不感兴趣',d:0,r:1},
    {t:'我做事有条理、有计划',d:1},{t:'我做事善始善终',d:1},{t:'我经常拖延、做事马虎',d:1,r:1},{t:'我很可靠，答应的事一定做到',d:1},
    {t:'在聚会中我充满活力',d:2},{t:'我喜欢成为众人关注的焦点',d:2},{t:'我话不多，更喜欢倾听',d:2,r:1},{t:'我容易和陌生人打成一片',d:2},
    {t:'我乐于助人，体贴他人',d:3},{t:'我相信人性本善',d:3},{t:'我有时对人冷漠挑剔',d:3,r:1},{t:'发生冲突时我愿意先让步',d:3},
    {t:'我容易感到紧张焦虑',d:4},{t:'我的情绪起伏比较大',d:4},{t:'压力下我依然沉着冷静',d:4,r:1},{t:'我经常为小事担忧',d:4}
  ],
  dims:[
    {name:'开放性',letter:'O',hi:'你好奇心强、想象力丰富，喜欢新想法和新体验，适合需要创造力的工作。',lo:'你更务实、专注当下，喜欢按部就班，靠谱且稳定。'},
    {name:'尽责性',letter:'C',hi:'你自律、有条理、靠谱，是团队里最让人放心的存在。',lo:'你随性灵活，不喜欢被计划束缚，适合变化快、需要应变的环境。'},
    {name:'外向性',letter:'E',hi:'你从社交中充电，健谈活跃，天生的气氛担当。',lo:'你从独处中回血，深思熟虑，是可靠的倾听者。'},
    {name:'宜人性',letter:'A',hi:'你体贴、信任他人，是团队的粘合剂。',lo:'你更看重效率和原则，不怕唱黑脸，适合做决策。'},
    {name:'神经质',letter:'N',hi:'你情绪体验深刻、敏感，对风险更警觉；注意别让担忧透支自己。',lo:'你情绪稳定、抗压，是风暴中的定海神针。'}
  ]
},
{
  id:'hsp', cat:'人格特质', emoji:'🌊', title:'高敏感人格测试（HSP）',
  desc:'参考 Aron 的高敏感人格量表，12 道题确认你是不是"高敏感人群"。',
  time:'约3分钟', alpha:'—', theory:'参考 Aron & Aron, 1997（HSPS）改编',
  opts:['从不','偶尔','经常','总是'], base:0, type:'score',
  items:['容易被强光、噪音、强烈气味刺激到','他人的情绪很容易影响我','忙碌一天后，我需要独处来恢复','我对环境或他人语气的细微变化很敏感',
         '人多嘈杂的环境让我很快疲惫','艺术、音乐容易深深打动我','别人的一句批评会在我心里回放很久','截止日期临近时我会格外焦虑',
         '我能察觉到别人没注意到的细节','做决定前我会反复权衡','疼痛、饥饿等身体信号我比常人感受更强烈','看感人的电影我很容易落泪'],
  bands:[
    {max:12,label:'低敏感',color:'#4298b4',desc:'你神经大条、抗干扰能力强，是天生的"钝感力"选手。',actions:['你的稳定是团队的压舱石，继续保持','试着多观察身边高敏感者的细腻，你会看到另一面','别把"想太多"挂嘴边，那是别人的天赋']},
    {max:24,label:'中度敏感',color:'#e4b622',desc:'你感知细腻，但还没到被淹没的程度。',actions:['把敏感用在刀刃上：共情、审美、洞察都是优势','给自己设"信息节食"时间，屏蔽噪音','过度刺激时，主动 retreat 到安静环境']},
    {max:36,label:'高敏感人群',color:'#88619a',desc:'你是约 20% 的高敏感人群：天赋与负担并存。',actions:['接纳它：高敏感是大脑特性，不是性格缺陷','建立"充电仪式"：独处、自然、艺术，缺一不可','推荐读《高敏感是种天赋》，学会与天赋相处']}
  ]
},
{
  id:'selfesteem', cat:'人格特质', emoji:'🪞', title:'自尊水平测试（Rosenberg）',
  desc:'心理学最经典的自尊量表，10 道题测出你有多接纳自己。',
  time:'约3分钟', alpha:'α=.85', theory:'Rosenberg, 1965（SES）',
  opts:['非常不同意','不同意','同意','非常同意'], base:1, type:'score',
  items:['总体上，我对自己是满意的','我觉得自己有很多优点','我和大多数人一样，有能力把事情做好','有时我觉得自己一无是处',
         '我觉得自己没什么值得骄傲的','我对自己持肯定的态度','总体而言，我觉得自己是个有价值的人','我希望自己能更看得起自己',
         '我时常觉得自己是个失败者','我觉得自己没有太多值得自豪的地方'],
  reverse:[3,4,7,8,9],
  bands:[
    {max:16,label:'低自尊',color:'#e5484d',desc:'你对自己的评价偏低，内心的批评家声音太大。',actions:['每天写下 3 件自己做得不错的小事，坚持 21 天','把"我不行"换成"我正在学"，语言会重塑自我','如长期自我否定，考虑做几次心理咨询']},
    {max:28,label:'中等自尊',color:'#e4b622',desc:'你的自我接纳时好时坏，容易被外界评价左右。',actions:['减少和他人比较，多和过去的自己比','建立"证据本"：收集别人肯定你的瞬间','犯错时练习自我同情：像安慰朋友一样安慰自己']},
    {max:40,label:'高自尊',color:'#33a474',desc:'你接纳自己，这是心理健康最重要的地基。',actions:['把这份稳定分享给身边自我怀疑的人','注意区分自信和自负，保持开放','用你的底气去尝试一件一直想做但不敢的事']}
  ]
},
{
  id:'darktriad', cat:'人格特质', emoji:'🌑', title:'黑暗三角人格测试（简版）',
  desc:'测量自恋、马基雅维利主义、精神病态三个"暗黑"特质，人人都有，程度不同。',
  time:'约3分钟', alpha:'—', theory:'参考 Paulhus & Williams, 2002 改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  items:[
    {t:'我喜欢成为众人瞩目的焦点',d:0},{t:'我觉得自己比大多数人更特别',d:0},{t:'我渴望得到他人的赞美和认可',d:0},{t:'我理应得到特殊的优待',d:0},
    {t:'为达目的，耍点手段是可以接受的',d:1},{t:'人性本自私，先下手为强',d:1},{t:'保守秘密、留一手是必要的',d:1},{t:'利用规则漏洞不算作弊',d:1},
    {t:'我很少为自己的行为感到内疚',d:2},{t:'报复能带来快感',d:2},{t:'我常冲动行事，少考虑后果',d:2},{t:'别人的痛苦很难触动我',d:2}
  ],
  dims:[
    {name:'自恋',letter:'N',hi:'你自我关注度高、渴望认可。适度的自恋是自信，过度则会变成人际灾难。',lo:'你低调务实，不太在意聚光灯。'},
    {name:'权术',letter:'M',hi:'你精于算计、讲究策略。商场上这是优势，但亲密关系里会伤人。',lo:'你待人真诚直接，不屑耍心机。'},
    {name:'冷酷',letter:'P',hi:'你共情偏弱、冲动性强。注意：长期的冷酷疏离值得做专业评估。',lo:'你共情正常，有基本的道德刹车。'}
  ]
},
{
  id:'optimism', cat:'人格特质', emoji:'🌤️', title:'乐观主义测试（LOT-R 简版）',
  desc:'参考 Scheier 的生活取向量表，8 道题看你是天生的乐天派还是悲观派。',
  time:'约2分钟', alpha:'—', theory:'参考 Scheier 等, 1994（LOT-R）改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:0, type:'score',
  items:['面对困难，我通常预期会有好结果','我很少指望好事发生在自己身上','总体上我对未来充满期待','事情很少按我希望的方式发展',
         '我相信"否极泰来"','做重要决定时，我常做最坏打算','即使处境艰难，我也相信会好转','我很少对未来抱有幻想'],
  reverse:[1,3,5,7],
  bands:[
    {max:10,label:'悲观倾向',color:'#88619a',desc:'你习惯做最坏打算，这是一种自我保护，但也可能错过机会。',actions:['练习"最好/最坏/最可能"三栏分析，别只盯着最坏','每天记录一件"比预想顺利"的事，矫正悲观滤镜','悲观+长期情绪低落，建议做 PHQ-9 筛查']},
    {max:21,label:'现实主义',color:'#e4b622',desc:'你既不盲目乐观也不过度悲观， balanced 得刚刚好。',actions:['保持这份清醒，它是稀缺的决策资产','在团队里，你适合做"风险官"角色','偶尔允许自己乐观一次，生活需要一点甜']},
    {max:32,label:'乐观主义',color:'#33a474',desc:'你是天生的乐天派，抗压能力和幸福感都更高。',actions:['把你的乐观传染给身边的人','注意别变成"有毒的正能量"：允许别人难过','乐观+行动=无敌，乐观+空想=空谈']}
  ]
},
{
  id:'resilience', cat:'人格特质', emoji:'🛡️', title:'心理韧性测试（简版）',
  desc:'参考 Connor-Davidson 心理韧性量表，测测你被生活"暴击"后的回血速度。',
  time:'约3分钟', alpha:'—', theory:'参考 Connor & Davidson, 2003（CD-RISC）改编',
  opts:['从不','很少','有时','经常','总是'], base:0, type:'score',
  items:['遇到挫折后，我能较快振作','压力下我依然能保持专注','我把困难看作成长的机会','过去的成功经验给我信心','我能适应变化',
         '面对不确定性，我不轻易慌乱','我有可以依靠的人','失败后我会总结经验而不是自责','我能控制自己的情绪反应','总体上我觉得自己足够坚强'],
  bands:[
    {max:13,label:'韧性较弱',color:'#e5484d',desc:'挫折容易把你击倒较久，好消息是韧性可以练。',actions:['从"小赢"开始：每天完成一件确定的小事，重建掌控感','建立支持系统：至少 2 个能深夜打电话的人','把"我失败了"改成"这次没成"，语言即心理']},
    {max:26,label:'韧性中等',color:'#e4b622',desc:'一般风浪扛得住，大暴击会晃。',actions:['复盘你挺过的难关：当时靠什么？把它变成方法','主动接触一点"可控的难"：运动、公开表达','保证睡眠，缺觉时人的韧性会打对折']},
    {max:40,label:'韧性较强',color:'#33a474',desc:'你是打不倒的小强，逆境反而让你更强。',actions:['把你的"复原故事"讲给正在低谷的人听','警惕"过度坚强"：允许自己偶尔脆弱','用这份韧性去挑战一件更大的事']}
  ]
},
{
  id:'perfectionism', cat:'人格特质', emoji:'🎯', title:'完美主义测试（简版）',
  desc:'参考 Frost 多维完美主义量表，测测你的"完美"是动力还是枷锁。',
  time:'约3分钟', alpha:'—', theory:'参考 Frost 等, 1990（FMPS）改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'score',
  items:['我给自己定的标准非常高','犯一点小错我都会耿耿于怀','事情没做到完美，我宁愿不做','我担心别人对我的表现失望','我反复检查已完成的工作',
         '身边人对我的期望很高','达不到目标时，我会强烈自责','我做事条理分明、井井有条','我害怕失败，所以会回避挑战','只有做到最好，我才觉得安心'],
  bands:[
    {max:23,label:'健康追求',color:'#33a474',desc:'你有上进心，但不被它绑架，这是最好的状态。',actions:['保持"完成比完美重要"的心态','把高标准用在关键的 20% 上','享受过程，别只盯着结果']},
    {max:36,label:'中度完美主义',color:'#e4b622',desc:'完美主义开始收"税"了：拖延、焦虑、自我攻击。',actions:['刻意练习"70 分交卷"：先完成再迭代','区分"我的标准"和"别人的眼光"，后者不值得','拖延时问自己：我是在追求完美，还是在害怕开始？']},
    {max:50,label:'高完美主义',color:'#e5484d',desc:'完美已变成枷锁，长期会导向焦虑和抑郁。',actions:['允许"足够好"：给任务设"及格线"而非"满分线"','犯错后练习自我同情，而不是自我攻击','如伴随长期焦虑/情绪低落，建议心理咨询']}
  ]
}
);

/* ============ 职业发展 ============ */
SCALES.push(
{
  id:'holland', cat:'职业发展', emoji:'🧭', title:'霍兰德职业兴趣测试（RIASEC）',
  desc:'职业规划的经典工具，18 道题找到你的职业兴趣代码。',
  time:'约4分钟', alpha:'—', theory:'Holland, 1997（RIASEC）',
  opts:['不喜欢','一般','喜欢'], base:0, type:'dims',
  items:[
    {t:'修理家电、组装家具',d:0},{t:'户外劳作、体力活动',d:0},{t:'操作机器、开车',d:0},
    {t:'解数学题、做逻辑推理',d:1},{t:'做实验、搞研究',d:1},{t:'读科普、钻研理论',d:1},
    {t:'画画、设计',d:2},{t:'写作、拍视频',d:2},{t:'演奏乐器、表演',d:2},
    {t:'教别人知识或技能',d:3},{t:'照顾、帮助他人',d:3},{t:'组织活动、调解矛盾',d:3},
    {t:'卖东西、谈生意',d:4},{t:'当领导、带团队',d:4},{t:'谈判、说服别人',d:4},
    {t:'整理数据、做表格',d:5},{t:'按流程、标准办事',d:5},{t:'管理档案、做财务',d:5}
  ],
  dims:[
    {name:'实际型 R',letter:'R',hi:'你动手能力强、务实，适合工程师、技术、户外等实操职业。',lo:'实操不是你的兴奋点。'},
    {name:'研究型 I',letter:'I',hi:'你爱钻研、重逻辑，适合科研、数据分析、技术研发。',lo:'纯理论研究不太对你的胃口。'},
    {name:'艺术型 A',letter:'A',hi:'你有创造力和审美，适合设计、内容、新媒体、艺术。',lo:'你更习惯按规则来，而非自由发挥。'},
    {name:'社会型 S',letter:'S',hi:'你乐于助人、擅长沟通，适合教育、咨询、医疗、HR。',lo:'与人打交道不是你的能量来源。'},
    {name:'企业型 E',letter:'E',hi:'你有领导欲和影响力，适合销售、管理、创业。',lo:'你对"当老大"没太大兴趣。'},
    {name:'常规型 C',letter:'C',hi:'你细致、有条理，适合财务、行政、运营、法务。',lo:'重复性事务工作会让你窒息。'}
  ]
},
{
  id:'procrastination', cat:'职业发展', emoji:'🦥', title:'拖延症测试（简版）',
  desc:'参考 Lay 拖延量表，10 道题测出你的拖延有多严重。',
  time:'约3分钟', alpha:'—', theory:'参考 Lay, 1986（GPS）改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'score',
  items:['我经常把事情拖到最后一刻','即使知道拖延有害，我还是会拖','做事前我会花很长时间"准备"','截止日期是我唯一的动力',
         '我很少提前完成任务','拖延让我错过过重要机会','任务越重要，我越不敢开始','我能很好地规划时间并执行',
         '拖延之后我会强烈自责，但下次还拖','"明天再做"是我最常对自己说的话'],
  reverse:[7],
  bands:[
    {max:23,label:'轻微拖延',color:'#33a474',desc:'你的执行力在线，偶尔拖延无伤大雅。',actions:['保持"2 分钟法则"：能 2 分钟做完的，立刻做','把大任务拆成小块，拖延最怕"小"','奖励机制：完成就给自己一点甜头']},
    {max:36,label:'中度拖延',color:'#e4b622',desc:'拖延已开始偷走你的时间和机会。',actions:['用"番茄钟"：25 分钟专注 + 5 分钟休息','找出你的拖延借口清单，逐个击破','把截止日期提前 3 天告诉自己，骗过大脑']},
    {max:50,label:'重度拖延',color:'#e5484d',desc:'拖延已严重影响生活，是时候系统性改变。',actions:['先解决情绪：拖延多是焦虑/完美主义，不是懒','试试" accountability 伙伴"：每天互相汇报进度','如拖延伴随长期情绪低落，建议心理评估']}
  ]
},
{
  id:'phoneaddiction', cat:'职业发展', emoji:'📱', title:'手机成瘾测试（简版）',
  desc:'参考智能手机成瘾量表编制，10 道题看看手机是不是在控制你。',
  time:'约2分钟', alpha:'—', theory:'参考 Kwon 等, 2013（SAPS）改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'score',
  items:['不带手机出门会让我焦虑','睡前最后一件事和醒来第一件事都是看手机','和朋友聚会时忍不住刷手机','我每天使用手机超过 5 小时',
         '我曾尝试减少使用，但失败了','手机没电或没网会让我坐立不安','走路、吃饭、上厕所都在看手机','我经常因为刷手机而熬夜',
         '家人朋友抱怨我总玩手机','没有手机，我就感觉与世界隔绝'],
  bands:[
    {max:23,label:'使用健康',color:'#33a474',desc:'你是手机的主人，继续保持。',actions:['保持睡前 1 小时不碰手机的好习惯','定期清理 App，少一个信息源就少一分打扰','把你的自律方法分享给"手机重度用户"朋友']},
    {max:36,label:'轻度依赖',color:'#e4b622',desc:'手机开始悄悄偷走你的时间。',actions:['打开屏幕使用时间统计，先看清真相','吃饭、聚会时把手机翻过去放','睡前把手机放到够不着的地方充电']},
    {max:50,label:'重度依赖',color:'#e5484d',desc:'手机已在实质控制你的生活。',actions:['试试"数字戒断"：每周半天不用手机','把最耗时的 2 个 App 删掉或设限','如伴随焦虑、失眠加重，建议减少刺激源并评估状态']}
  ]
},
{
  id:'careeranchor', cat:'职业发展', emoji:'⚓', title:'职业锚测试（职业价值观）',
  desc:'本站原创编制。10 道题找到你职业选择的"定海神针"。',
  time:'约3分钟', alpha:'—', theory:'本站原创编制，参考 Schein 职业锚理论',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  items:[
    {t:'成为某个领域的专家对我最重要',d:0},{t:'我愿意为钻研技术放弃管理岗',d:0},
    {t:'我渴望带领团队、承担更大责任',d:1},{t:'职位晋升是我工作的核心动力',d:1},
    {t:'自由安排工作方式比高薪更重要',d:2},{t:'我不想被条条框框束缚',d:2},
    {t:'稳定的工作和收入是我的首选',d:3},{t:'我愿意为"铁饭碗"放弃高风险高回报',d:3},
    {t:'我梦想做出属于自己的产品或事业',d:4},{t:'按部就班的工作让我窒息',d:4}
  ],
  dims:[
    {name:'技术锚',letter:'T',hi:'你的锚是"成为专家"。深耕专业、做技术大拿/顾问最适合你，别被"管理岗"绑架。',lo:'技术深耕不是你的首选。'},
    {name:'管理锚',letter:'M',hi:'你的锚是"带团队"。往管理线走，练领导力、扛指标，你的天花板在组织里。',lo:'管人不是你的兴奋点。'},
    {name:'自主锚',letter:'F',hi:'你的锚是"自由"。远程、自由职业、弹性工作制适合你，困在格子间会枯萎。',lo:'你对工作自由度要求不高。'},
    {name:'安全锚',letter:'S',hi:'你的锚是"稳定"。体制内、大厂、国企的确定性对你最重要，别羡慕高风险高回报。',lo:'稳定不是你的首要考量。'},
    {name:'创造锚',letter:'C',hi:'你的锚是"创造"。创业、做产品、从 0 到 1 是你的宿命，别在螺丝钉岗位上耗着。',lo:'从零开创不是你的渴望。'}
  ]
}
);

/* ============ 亲密关系 ============ */
SCALES.push(
{
  id:'attachment', cat:'亲密关系', emoji:'💞', title:'依恋类型测试（ECR 简版）',
  desc:'参考亲密关系经历量表，12 道题看清你在亲密关系中的依恋模式。',
  time:'约3分钟', alpha:'—', theory:'参考 Brennan 等, 1998（ECR）改编',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  attach4:true,
  items:[
    {t:'我担心伴侣不够爱我',d:0},{t:'伴侣稍一冷淡我就会不安',d:0},{t:'我需要反复确认对方的心意',d:0},
    {t:'我害怕被抛弃',d:0},{t:'我容易因关系问题而失眠',d:0},{t:'我总想知道对方在干什么',d:0},
    {t:'伴侣太亲密会让我想逃',d:1},{t:'我不习惯向伴侣袒露脆弱',d:1},{t:'我更喜欢保持独立空间',d:1},
    {t:'谈感情问题让我觉得别扭',d:1},{t:'我觉得依赖别人是软弱的表现',d:1},{t:'分手后我恢复得比常人快',d:1}
  ],
  dims:[
    {name:'焦虑',letter:'A',hi:'',lo:''},
    {name:'回避',letter:'V',hi:'',lo:''}
  ]
},
{
  id:'lovelang', cat:'亲密关系', emoji:'💝', title:'爱的五种语言测试',
  desc:'盖瑞·查普曼经典理论，15 道题找到你接收爱的"母语"。',
  time:'约4分钟', alpha:'—', theory:'Chapman, 1992《爱的五种语言》',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  items:[
    {t:'伴侣的夸奖能让我开心一整天',d:0},{t:'一句"我爱你"比礼物更打动我',d:0},{t:'被认可付出时，我最幸福',d:0},
    {t:'高质量的陪伴胜过一切',d:1},{t:'一起散步聊天是最好的约会',d:1},{t:'伴侣心不在焉会让我失落',d:1},
    {t:'收到用心挑选的礼物，我很感动',d:2},{t:'礼物代表"我被放在心上"',d:2},{t:'纪念日的礼物不能少',d:2},
    {t:'伴侣主动分担家务最暖心',d:3},{t:'"我来弄"比甜言蜜语更实在',d:3},{t:'行动比承诺更能证明爱',d:3},
    {t:'一个拥抱能瞬间治愈坏情绪',d:4},{t:'牵手、靠肩让我有安全感',d:4},{t:'肢体亲密是感情的温度计',d:4}
  ],
  dims:[
    {name:'肯定的言语',letter:'W',hi:'你的爱的语言是"肯定的言语"。多夸、多表白、写小纸条，你会被爱灌满。告诉伴侣：别猜，直接说。',lo:''},
    {name:'精心的时刻',letter:'T',hi:'你的爱的语言是"精心的时刻"。全心全意的陪伴胜过一切，约会时请放下手机。',lo:''},
    {name:'接受礼物',letter:'G',hi:'你的爱的语言是"接受礼物"。礼物轻重不重要，"被放在心上"最重要。',lo:''},
    {name:'服务的行动',letter:'A',hi:'你的爱的语言是"服务的行动"。帮你分担、替你搞定，就是最动人的情话。',lo:''},
    {name:'身体的接触',letter:'P',hi:'你的爱的语言是"身体的接触"。拥抱、牵手、靠肩，肢体温度就是你的安全感。',lo:''}
  ]
},
{
  id:'eq', cat:'亲密关系', emoji:'🧠', title:'情商测试（多维版）',
  desc:'本站原创编制。从自我觉察、自我管理、社交能力三维测情商。',
  time:'约3分钟', alpha:'—', theory:'本站原创编制，参考 Goleman 情商理论',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  items:[
    {t:'我能准确说出自己此刻的情绪',d:0},{t:'我知道什么会触发我的坏情绪',d:0},{t:'别人指出我的情绪时，我通常是认同的',d:0},{t:'我了解自己的优势和短板',d:0},
    {t:'生气时我能先冷静再回应',d:1},{t:'压力下我依然能理性决策',d:1},{t:'我能为长期目标克制短期冲动',d:1},{t:'挫折后我调整得比一般人快',d:1},
    {t:'我能敏锐察觉他人的情绪变化',d:2},{t:'我擅长化解尴尬和冲突',d:2},{t:'和陌生人相处我很自在',d:2},{t:'朋友常找我倾诉',d:2}
  ],
  dims:[
    {name:'自我觉察',letter:'S',hi:'你对自己看得很清，这是情商的地基。',lo:'你有时会被情绪带着走却不自知，多练习"情绪命名"。'},
    {name:'自我管理',letter:'M',hi:'你管得住情绪和冲动，关键时刻靠得住。',lo:'情绪一上头就容易失控，建议练"暂停 6 秒再回应"。'},
    {name:'社交能力',letter:'O',hi:'你是人际场上的高手，共情和影响力兼备。',lo:'社交让你耗电，多在小范围深交，别硬逼自己 social。'}
  ]
},
{
  id:'conflict', cat:'亲密关系', emoji:'⚔️', title:'冲突处理风格测试',
  desc:'本站原创编制。一吵架就知道：你是竞争型、回避型、妥协型还是协作型？',
  time:'约3分钟', alpha:'—', theory:'本站原创编制，参考 Thomas-Kilmann 冲突模型',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'dims',
  items:[
    {t:'争论时我一定要争出个对错',d:0},{t:'我不怕正面冲突',d:0},{t:'为争取权益，我愿意撕破脸',d:0},
    {t:'能躲的矛盾尽量躲',d:1},{t:'我宁愿冷战也不想吵架',d:1},{t:'多一事不如少一事',d:1},
    {t:'各退一步最省事',d:2},{t:'我常说"都行"，避免僵持',d:2},{t:'面子比里子重要，先和气再说',d:2},
    {t:'冲突是把问题谈清楚的好机会',d:3},{t:'我会努力找到双赢方案',d:3},{t:'吵完要复盘，避免再犯',d:3}
  ],
  dims:[
    {name:'竞争型',letter:'C',hi:'你的主导风格是竞争型：目标感强、不怕冲突。注意别赢了道理、输了关系。',lo:''},
    {name:'回避型',letter:'A',hi:'你的主导风格是回避型：怕冲突、能躲就躲。短期和平，长期积怨，小问题会发酵成大矛盾。',lo:''},
    {name:'妥协型',letter:'M',hi:'你的主导风格是妥协型：各退一步、和气为贵。效率高，但重要原则别轻易让。',lo:''},
    {name:'协作型',letter:'O',hi:'你的主导风格是协作型：直面问题、追求双赢。这是最健康也最难的风格，为你鼓掌。',lo:''}
  ]
}
);

/* ============ 自我成长 ============ */
SCALES.push(
{
  id:'loneliness', cat:'自我成长', emoji:'🌙', title:'孤独感测试（UCLA 简版）',
  desc:'参考加州大学洛杉矶分校孤独量表，10 道题测量你的孤独水平。',
  time:'约3分钟', alpha:'—', theory:'参考 Russell, 1996（UCLA）改编',
  opts:['从不','很少','有时','经常'], base:1, type:'score',
  items:['我觉得与周围人格格不入','我缺少陪伴','我觉得没有人真正了解我','我感到被孤立','我能找到人倾诉',
         '我觉得自己是群体中的局外人','我渴望有人陪伴，却难以开口','我有很多能聊得来的朋友','独处时我常常感到空虚','周末不知道找谁会让我难受'],
  reverse:[4,7],
  bands:[
    {max:17,label:'低孤独感',color:'#33a474',desc:'你的社交连接是健康的。',actions:['珍惜现在的圈子，主动维护别等"有空"','把你的社交能量分一点给孤独的朋友','独处时也能自得其乐，这是高级能力']},
    {max:27,label:'中度孤独感',color:'#e4b622',desc:'你渴望连接，却有点迈不开步。',actions:['每周主动发起一次邀约，别等别人找你','加入一个兴趣社群，共同爱好是最好的破冰','先从"弱连接"开始：和店员、邻居多聊两句']},
    {max:40,label:'高孤独感',color:'#e5484d',desc:'长期孤独对健康的伤害堪比吸烟，请认真对待。',actions:['把"交朋友"当成正式任务列入日程','考虑心理咨询，聊聊是什么卡住了你','先养一只植物或宠物，被需要也能治愈孤独']}
  ]
},
{
  id:'creativity', cat:'自我成长', emoji:'🎨', title:'创造力测试',
  desc:'本站原创编制。10 道题测测你的"脑洞"有多大。',
  time:'约2分钟', alpha:'—', theory:'本站原创编制，仅供自我探索',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'score',
  items:['我常冒出别人想不到的点子','我喜欢把不相关的东西组合出新玩法','在合理范围内，规则是用来打破的','我享受头脑风暴',
         '失败的尝试也是有趣的实验','我会用画画、写作或手工表达想法','别人说"不可能"时我更来劲','我常质疑"一直都是这样做的"',
         '发呆放空时，我的灵感最多','我愿意为热爱的事投入大量时间'],
  bands:[
    {max:23,label:'保守务实型',color:'#4298b4',desc:'你更信赖经验和规则，靠谱是你的标签。',actions:['每周刻意做一件"没意义但有趣"的事','试试"假如"游戏：假如没有限制，我会怎么做？','创造力可以练，先从模仿开始']},
    {max:36,label:'平衡型',color:'#e4b622',desc:'你该稳的时候稳，该放飞的时候也能放飞。',actions:['给灵感配一个笔记本，随手记','主动接触不同领域的人，跨界激发创意','每年学一项新技能，保持大脑可塑性']},
    {max:50,label:'高创造型',color:'#88619a',desc:'你是天生的点子王，别浪费这份天赋。',actions:['把点子变成作品：输出比想法重要 100 倍','找个能落地的搭档，互补长短','警惕"三分钟热度"：创意需要执行力护航']}
  ]
},
{
  id:'courage', cat:'自我成长', emoji:'🦁', title:'勇气水平测试',
  desc:'本站原创编制。勇气不是不害怕，而是害怕也敢往前走。',
  time:'约2分钟', alpha:'—', theory:'本站原创编制，仅供自我探索',
  opts:['非常不同意','不同意','一般','同意','非常同意'], base:1, type:'score',
  items:['害怕也敢先做再说','我敢在众人面前表达不同意见','为重要的事，我愿意承担风险','被拒绝也不会让我退缩太久',
         '我敢于承认错误并承担后果','舒适区待久了会让我不安','关键时刻，我信得过自己','我宁愿试错，也不愿错过'],
  bands:[
    {max:18,label:'谨慎型',color:'#4298b4',desc:'你三思而后行，稳扎稳打。',actions:['从小风险开始练胆：先举手、先发言','区分"真危险"和"只是不舒服"，后者值得闯','记住：不做选择本身也是一种选择']},
    {max:29,label:'稳健型',color:'#e4b622',desc:'你该冲时冲、该稳时稳，分寸感很好。',actions:['复盘你最勇敢的一次：当时靠什么？复制它','在重要机会面前，把"万一失败"换成"万一成了"','你的稳健是团队的定心丸']},
    {max:40,label:'勇者型',color:'#e5484d',desc:'你是行动派，天生的破局者。',actions:['把勇气用在值得的事上，别为刺激而冒险','冲之前留 10% 的敬畏心，给风险定价','带一带身边谨慎的人，你的背影很有力量']}
  ]
},
{
  id:'innerchild', cat:'自我成长', emoji:'🧸', title:'内在小孩受伤程度测试',
  desc:'本站原创编制。10 道题看看童年的回声还在多大程度上影响今天的你。',
  time:'约3分钟', alpha:'—', theory:'本站原创编制，仅供自我探索',
  opts:['从不','偶尔','经常','总是'], base:0, type:'score',
  items:['被批评时，我会瞬间回到"做错事的小孩"状态','我很难拒绝别人，怕让对方失望','取得成绩时，我第一反应是"还不够好"',
         '在亲密关系中，我渴望被无条件接纳','我会因小事突然情绪崩溃，事后觉得莫名其妙','照顾别人比被照顾更让我安心',
         '独处时我会感到莫名的不安','我对权威有本能的恐惧或下意识讨好','我很难真心夸奖自己','看到别人被爱，我会羡慕又心酸'],
  bands:[
    {max:10,label:'内在小孩健康',color:'#33a474',desc:'你的童年给你留下了不错的底子。',actions:['把这份安全感传递下去，善待身边的小孩','偶尔放纵一下"孩子气"，它是生命力的源泉','感恩那个把你养大的人（或努力养大自己的你）']},
    {max:20,label:'轻度受伤',color:'#e4b622',desc:'有些旧伤口偶尔还会疼，但不影响大局。',actions:['试着给小时候的自己写一封信','觉察"讨好"和"自责"的瞬间，问一句：这是现在的我，还是小时候的我？','推荐读《蛤蟆先生去看心理医生》']},
    {max:30,label:'中重度受伤',color:'#e5484d',desc:'童年的回声很大，它值得被认真疗愈。',actions:['考虑做几次心理咨询，内在小孩工作效果很好','练习"重新养育自己"：像理想父母一样对自己说话','记住：受伤不是你的错，疗愈是你的力量']}
  ]
}
);
console.log('[scales] 已加载 ' + SCALES.length + ' 个量表');

/* ============ 玄学测算（链接型工具卡） ============ */
SCALES.push(
{
  id:'star', cat:'玄学测算', emoji:'🔮', title:'马老师星座分析',
  desc:'12 星座今日/明日/本周/本月运势、幸运色与数字、速配星座、配对查询。',
  time:'随时查看', link:'/star-fortune/', n:'工具',
},
{
  id:'liuyao', cat:'玄学测算', emoji:'☯️', title:'六爻占卜',
  desc:'铜钱摇卦、数字起卦，自动排盘（纳甲/六亲/世应/旬空/六兽）与断卦参考。',
  time:'随时起卦', link:'/liuyao/', n:'工具',
}
);
</script>
<script>
let mtCur = null, mtIdx = 0, mtAns = [];
const mtCats = ['全部','情绪健康','人格特质','职业发展','亲密关系','自我成长','玄学测算'];
let mtCat = '全部';

function mtRenderMall() {
  const q = (document.getElementById('mt-search').value || '').trim();
  const box = document.getElementById('mt-cats');
  box.innerHTML = mtCats.map(c => `<button class="mt-cat${c===mtCat?' active':''}" onclick="mtSetCat('${c}')">${c}</button>`).join('');
  const list = SCALES.filter(s => (mtCat==='全部'||s.cat===mtCat) && (!q || s.title.includes(q) || s.desc.includes(q)));
  document.getElementById('mt-count').innerText = `共 ${list.length} 个${mtCat==='玄学测算'?'测算工具':'量表'}`;
  document.getElementById('mt-grid').innerHTML = list.map(s => s.link ? `
    <a class="mt-card" href="${s.link}" style="text-decoration:none;color:inherit;">
      <div class="emoji">${s.emoji}</div><h2>${s.title}</h2>
      <div class="desc">${s.desc}</div>
      <div class="mt-badges"><span class="mt-badge">🔗 测算工具</span><span class="mt-badge">${s.time}</span></div>
      <div class="mt-theory">📚 传统民俗 · 仅供娱乐</div>
      <div class="mt-start">进入 →</div>
    </a>` : `
    <div class="mt-card" onclick="mtStart('${s.id}')">
      <div class="emoji">${s.emoji}</div><h2>${s.title}</h2>
      <div class="desc">${s.desc}</div>
      <div class="mt-badges"><span class="mt-badge">${s.items.length} 题</span><span class="mt-badge">${s.time}</span>${s.alpha!=='—'?`<span class="mt-badge">信度 ${s.alpha}</span>`:''}</div>
      <div class="mt-theory">📚 ${s.theory}</div>
      <button class="mt-start" onclick="event.stopPropagation();mtStart('${s.id}')">开始测试 →</button>
    </div>`).join('') || '<p style="text-align:center;color:#999;grid-column:1/-1;">没有找到相关量表，换个关键词试试</p>';
}
function mtSetCat(c){ mtCat = c; mtRenderMall(); }

function mtStart(id) {
  mtCur = SCALES.find(s => s.id === id);
  mtIdx = 0; mtAns = new Array(mtCur.items.length).fill(null);
  document.getElementById('mt-mall').style.display = 'none';
  document.getElementById('mt-result').style.display = 'none';
  document.getElementById('mt-quiz').style.display = 'block';
  mtRenderQ(); window.scrollTo({top:0});
}
function mtQuit() {
  document.getElementById('mt-quiz').style.display = 'none';
  document.getElementById('mt-result').style.display = 'none';
  document.getElementById('mt-mall').style.display = 'block';
  mtRenderMall(); window.scrollTo({top:0});
}
function mtRestart(){ mtStart(mtCur.id); }
function mtRenderQ() {
  const n = mtCur.items.length;
  const it = mtCur.items[mtIdx];
  const text = (typeof it === 'string') ? it : it.t;
  document.getElementById('mt-qtext').innerText = text;
  document.getElementById('mt-counter').innerText = (mtIdx+1) + ' / ' + n;
  const done = mtAns.filter(a => a !== null).length;
  const pct = Math.round(done / n * 100);
  document.getElementById('mt-bar').style.width = pct + '%';
  document.getElementById('mt-pct').innerText = pct + '%';
  const box = document.getElementById('mt-opts');
  box.innerHTML = '';
  const letters = ['A','B','C','D','E','F'];
  mtCur.opts.forEach((op, i) => {
    const b = document.createElement('button');
    b.className = 'mt-opt' + (mtAns[mtIdx] === i ? ' sel' : '');
    b.innerHTML = `<b style="margin-right:10px;color:#425AEF">${letters[i]}</b>${op}`;
    b.onclick = () => {
      mtAns[mtIdx] = i;
      box.querySelectorAll('.mt-opt').forEach(x => x.classList.remove('sel'));
      b.classList.add('sel');
      setTimeout(() => mtNav(1), 200);
    };
    box.appendChild(b);
  });
  const qb = document.getElementById('mt-qbox');
  qb.style.animation = 'none'; qb.offsetHeight; qb.style.animation = '';
  document.getElementById('mt-prev').disabled = (mtIdx === 0);
  document.getElementById('mt-next').style.visibility = (mtIdx === n-1) ? 'visible' : 'hidden';
}
function mtNav(d) {
  const n = mtCur.items.length;
  if (d > 0) {
    if (mtIdx === n-1) { mtSubmit(); return; }
    mtIdx++;
  } else { if (mtIdx === 0) return; mtIdx--; }
  mtRenderQ(); window.scrollTo({top:0, behavior:'smooth'});
}
function mtVal(i) {
  const s = mtCur, it = s.items[i], ans = mtAns[i];
  let v = ans + s.base;
  const isRev = (typeof it !== 'string' && it.r) || (s.reverse && s.reverse.includes(i));
  if (isRev) v = (2 * s.base + s.opts.length - 1) - v;
  return v;
}
function mtSubmit() {
  if (mtAns.some(a => a === null)) { alert('还有题目没答完，请返回补答'); return; }
  const s = mtCur;
  document.getElementById('mt-quiz').style.display = 'none';
  document.getElementById('mt-result').style.display = 'block';
  setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 80);
  document.getElementById('mt-res-emoji').innerText = s.emoji;
  document.getElementById('mt-res-title').innerText = s.title + ' · 测试报告';
  window._mtReport = { title: s.title, lines: [] };
  const crisisEl = document.getElementById('mt-crisis');
  crisisEl.style.display = 'none';
  if (s.crisis && mtAns[s.crisis.item] > 0) {
    crisisEl.innerHTML = '🚨 <b>重要提醒</b><br>' + s.crisis.text;
    crisisEl.style.display = 'block';
  }
  if (s.type === 'score') mtRenderScore(s); else mtRenderDims(s);
  mtSaveHist(s);
}
function mtRenderScore(s) {
  let total = 0;
  for (let i = 0; i < s.items.length; i++) total += mtVal(i);
  if (s.std125) total = Math.round(total * 1.25);
  const band = s.bands.find(b => total <= b.max) || s.bands[s.bands.length-1];
  const maxScore = s.bands[s.bands.length-1].max;
  const ringPct = Math.min(100, Math.round(total / maxScore * 100));
  const circ = 2 * Math.PI * 62;
  window._mtReport.lines.push(`总分：${total} 分`, `结果：${band.label}`, band.desc);
  document.getElementById('mt-res-body').innerHTML = `
    <div class="mt-ring">
      <svg width="150" height="150"><circle cx="75" cy="75" r="62" fill="none" stroke="#eef1f7" stroke-width="12"/>
      <circle cx="75" cy="75" r="62" fill="none" stroke="${band.color}" stroke-width="12" stroke-linecap="round"
        stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - ringPct/100)}"/></svg>
      <div class="num"><b>${total}</b><span>总分 / ${maxScore}</span></div>
    </div>
    <div><span class="mt-band" style="background:${band.color}">${band.label}</span></div>
    <p class="mt-band-desc">${band.desc}</p>`;
  const itemsHtml = s.items.map((it, i) => {
    const t = (typeof it === 'string') ? it : it.t;
    return `<div>▫️ ${t} —— <b>${s.opts[mtAns[i]]}</b></div>`;
  }).join('');
  document.getElementById('mt-res-extra').innerHTML = `
    <div class="mt-sec"><h3>✅ 接下来可以这样做</h3>
      <ul class="mt-actions">${band.actions.map(a => `<li>${a}</li>`).join('')}</ul></div>
    <div class="mt-sec"><h3>📋 各条目回顾</h3><div class="mt-items">${itemsHtml}</div></div>
    <div class="mt-sec"><h3>📚 理论来源</h3><p style="font-size:.88rem;color:#888;line-height:1.9;">${s.theory}。本报告为筛查/自我探索用途，不构成医疗诊断。</p></div>`;
}
function mtRenderDims(s) {
  const dimScores = s.dims.map(() => ({sum:0, n:0}));
  s.items.forEach((it, i) => { dimScores[it.d].sum += mtVal(i); dimScores[it.d].n++; });
  const means = dimScores.map(d => d.sum / d.n);
  const maxMean = s.base + s.opts.length - 1, minMean = s.base;
  const colors = ['#425AEF','#33a474','#e4b622','#88619a','#4298b4','#f08c00'];
  let domHtml = '', domText = '';
  if (s.attach4) {
    const anx = means[0] > 3, avo = means[1] > 3;
    const t = !anx && !avo ? '安全型' : anx && !avo ? '焦虑型' : !anx && avo ? '回避型' : '恐惧型（矛盾型）';
    const d4 = {
      '安全型':'你在亲密关系中既亲近又独立，能信任伴侣、也能表达需求，这是最健康的依恋模式。继续保持，并把这份安全感传递给伴侣。',
      '焦虑型':'你对关系中的风吹草动高度敏感，渴望亲近又害怕失去。练习：把"他是不是不爱我"换成"直接问+观察行动"；培养关系之外的生活重心。',
      '回避型':'你习惯用距离保护自己，亲密让你想逃。练习：每天一次微小的袒露（分享感受而非事务）；允许自己"麻烦"别人一次。',
      '恐惧型（矛盾型）':'你既渴望亲密又害怕受伤，常常自我矛盾。这多与早期经历有关，心理咨询（尤其是依恋取向）对你帮助会很大。'
    };
    domHtml = `<div class="mt-dom"><b>💞 你的依恋类型：${t}</b><br>${d4[t]}</div>`;
    domText = `依恋类型：${t}`;
  } else {
    let top = 0;
    means.forEach((m, i) => { if (m > means[top]) top = i; });
    const d = s.dims[top];
    if (d.hi) { domHtml = `<div class="mt-dom"><b>⭐ 你的主导特质：${d.name}</b><br>${d.hi}</div>`; domText = `主导：${d.name}`; }
  }
  const barsHtml = s.dims.map((d, i) => {
    const pct = Math.round((means[i] - minMean) / (maxMean - minMean) * 100);
    const interp = s.attach4 ? '' : (means[i] >= (minMean+maxMean)/2 ? (d.hi||'') : (d.lo||''));
    return `<div class="mt-dim"><div class="mt-dim-top"><span>${d.letter ? d.letter+' · ' : ''}${d.name}</span><span>${means[i].toFixed(1)} / ${maxMean}</span></div>
      <div class="mt-dim-bar"><div class="mt-dim-fill" style="width:${pct}%;background:${colors[i%colors.length]}"></div></div>
      ${interp ? `<div class="mt-dim-txt">${interp}</div>` : ''}</div>`;
  }).join('');
  window._mtReport.lines.push(domText);
  document.getElementById('mt-res-body').innerHTML = domHtml;
  const hollandJobs = s.id === 'holland' ? `<div class="mt-sec"><h3>💼 你的职业兴趣代码</h3><p style="font-size:.92rem;color:#555;line-height:1.9;">${mtHollandCode(means, s)}</p></div>` : '';
  document.getElementById('mt-res-extra').innerHTML = `
    <div class="mt-sec"><h3>📊 各维度得分</h3>${barsHtml}</div>${hollandJobs}
    <div class="mt-sec"><h3>📚 理论来源</h3><p style="font-size:.88rem;color:#888;line-height:1.9;">${s.theory}。本报告为自我探索用途，不构成专业评估。</p></div>`;
}
function mtHollandCode(means, s) {
  const idx = means.map((m,i) => i).sort((a,b) => means[b]-means[a]).slice(0,2);
  const code = idx.map(i => s.dims[i].letter).join('');
  const jobs = {R:'工程师、技术员、军人、运动员',I:'科研人员、医生、程序员、数据分析师',A:'设计师、作家、自媒体、艺术家',S:'教师、咨询师、护士、HR',E:'销售、企业家、管理者、律师',C:'会计、行政、审计、档案管理'};
  const names = idx.map(i => s.dims[i].name).join(' + ');
  return `你的主导代码是 <b style="font-size:1.3rem;color:#425AEF">${code}</b>（${names}）。<br>匹配职业方向：${idx.map(i => jobs[s.dims[i].letter] || '相关领域').join('；')}。`;
}
function mtSaveHist(s) {
  try {
    const key = 'mt_hist_' + s.id;
    const hist = JSON.parse(localStorage.getItem(key) || '[]');
    const now = new Date();
    const ds = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
    const summary = window._mtReport.lines.slice(0,2).join('，');
    hist.push({d: ds, s: summary});
    localStorage.setItem(key, JSON.stringify(hist.slice(-10)));
    if (hist.length > 1) {
      const prev = hist[hist.length-2];
      document.getElementById('mt-hist-sec').style.display = 'block';
      document.getElementById('mt-hist').innerHTML =
        hist.slice(-5).reverse().map(h => `<div class="mt-items" style="margin-bottom:.4rem">📅 ${h.d} —— ${h.s}</div>`).join('') +
        `<p style="font-size:.85rem;color:#888;">距上次（${prev.d}）：${prev.s}</p>`;
    }
  } catch(e) {}
}
function mtCopy() {
  const r = window._mtReport;
  if (!r) return;
  const txt = `我的${r.title}测试报告\n${r.lines.join('\n')}\n—— 来自马老师博客心理量表商城 https://blog.8818618.xyz/mental-test/`;
  navigator.clipboard.writeText(txt).then(() => alert('报告已复制！'));
}
mtRenderMall();
</script>
{% endraw %}
