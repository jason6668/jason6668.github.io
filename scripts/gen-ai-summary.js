'use strict';
/**
 * 生成文章 AI 摘要（增量）：读取 source/_posts，调用 OpenAI 兼容接口为缺摘要的文章生成摘要，
 * 写入 source/_data/ai_summary.json（key = 文章 slug）。
 *
 * 环境变量：
 *   AI_API_KEY   必填（ChatAnywhere: https://api.chatanywhere.org 免费申请）
 *   AI_API_URL   可选，默认 https://api.chatanywhere.org/v1（注意 key 绑定的 host：.org 和 .tech 不通用）
 *   AI_MODEL     可选，默认 gpt-4o-mini
 *
 * 用法：AI_API_KEY=xxx node scripts/gen-ai-summary.js
 *
 * 注意：require.main 保护防止 Hexo 把本文件当插件加载（否则 process.exit 会中断构建）。
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const API_URL = process.env.AI_API_URL || 'https://api.chatanywhere.org/v1';
const MODEL = process.env.AI_MODEL || 'gpt-4o-mini';
const KEY = process.env.AI_API_KEY;

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function summarize(title, content, retries = 3) {
  const text = content.replace(/!\[.*?\]\(.*?\)/g, '').replace(/<[^>]+>/g, '').slice(0, 6000);
  const res = await fetch(API_URL + '/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + KEY,
      'HTTP-Referer': 'https://blog.8818618.xyz',
      'X-Title': 'Mteacher Blog AI Summary'
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: '你是一个博客文章摘要助手。用简体中文写一段 80-150 字的文章摘要，客观概括核心内容，不加评价和寒暄，直接输出摘要正文。' },
        { role: 'user', content: `标题：${title}\n\n正文：\n${text}` }
      ],
      temperature: 0.3,
      max_tokens: 400
    })
  });
  if (res.status === 429 && retries > 0) {
    console.log('  限流 429，60 秒后重试…');
    await sleep(60000);
    return summarize(title, content, retries - 1);
  }
  if (!res.ok) throw new Error('API 返回 ' + res.status + ': ' + (await res.text()).slice(0, 200));
  const data = await res.json();
  return (data.choices?.[0]?.message?.content || '').trim();
}

async function main() {
  if (!KEY) { console.error('缺少 AI_API_KEY 环境变量'); process.exit(1); }
  const root = path.join(__dirname, '..');
  const postsDir = path.join(root, 'source', '_posts');
  const dataDir = path.join(root, 'source', '_data');
  const dataFile = path.join(dataDir, 'ai_summary.json');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  const map = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, 'utf8')) : {};

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  let added = 0, skipped = 0;
  for (const f of files) {
    const raw = fs.readFileSync(path.join(postsDir, f), 'utf8');
    const { data, content } = matter(raw);
    const slug = data.abbrlink ? String(data.abbrlink) : f.replace(/\.md$/, '');
    const title = data.title || slug;
    if (map[slug] && map[slug].trim()) { skipped++; continue; }
    console.log(`[${added + skipped + 1}/${files.length}] 生成摘要: ${title}`);
    try {
      map[slug] = await summarize(title, content);
      added++;
      // OpenRouter 免费模型节奏快很多，每次间隔 5 秒
      fs.writeFileSync(dataFile, JSON.stringify(map, null, 2)); // 逐篇落盘，断了也能续
      await sleep(5000);
    } catch (e) {
      console.error('  失败:', e.message);
    }
  }
  fs.writeFileSync(dataFile, JSON.stringify(map, null, 2));
  console.log(`完成：新增 ${added} 篇，跳过已有 ${skipped} 篇 -> ${dataFile}`);
}

if (require.main === module) {
  main().catch(e => { console.error(e); process.exit(1); });
}
