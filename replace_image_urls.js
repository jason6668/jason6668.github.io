const fs = require('fs');
const path = require('path');

const OLD_DOMAINS = [
  'https://i.lxlad.com/',
  'http://i.lxlad.com/',
  'https://img.090227.xyz/',
  'http://img.090227.xyz/',
  'https://bu.dusays.com/',
  'http://bu.dusays.com/'
];
const NEW_DOMAIN = 'https://tc.688650.xyz/';

const SCAN_DIRS = ['source', 'themes'];
const FILE_EXTENSIONS = ['.yml', '.md', '.js', '.ejs', '.html', '.css'];

let replacedCount = 0;
let processedFiles = 0;

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (FILE_EXTENSIONS.includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    for (const oldDomain of OLD_DOMAINS) {
      content = content.split(oldDomain).join(NEW_DOMAIN);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      replacedCount++;
      console.log(`✓ 已替换: ${filePath}`);
    }
    
    processedFiles++;
  } catch (err) {
    console.log(`✗ 处理失败 ${filePath}: ${err.message}`);
  }
}

console.log('开始扫描并替换图床地址...');
console.log(`新图床地址: ${NEW_DOMAIN}`);
console.log('----------------------------------------');

for (const dir of SCAN_DIRS) {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
}

console.log('----------------------------------------');
console.log(`处理完成! 共扫描 ${processedFiles} 个文件, 替换 ${replacedCount} 个文件`);