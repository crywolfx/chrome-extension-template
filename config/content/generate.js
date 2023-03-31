const fs = require('fs');
const path = require('path');
const renderTpl = require('./tpl');

function generateContentFile(entrys) {
  const contentPath = path.join(process.cwd(), 'config/content/files/content.tsx');
  const jsContent = renderTpl(entrys.map((item) => item.split('.').shift()));
  fs.writeFileSync(contentPath, jsContent);
  return contentPath;
}

module.exports = { generateContentFile }