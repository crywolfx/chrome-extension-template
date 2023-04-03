const fs = require('fs');
const path = require('path');
const renderTpl = require('./tpl');

function generateContentFile(entrys) {
  const contentPath = path.join(process.cwd(), 'config/content/files/content.tsx');
  const stylePath = 'static/css/content/index.css';
  
  const jsContent = renderTpl(entrys.map((item) => item.split('.').shift()), stylePath);
  fs.writeFileSync(contentPath, jsContent);
  return contentPath;
}

module.exports = { generateContentFile }