const fs = require('fs');
const path = require('path');
const renderTpl = require('./tpl');

function generateContentFile(entrys) {
  const entry = path.join(process.cwd(), 'config/devtool/files/devtoolsEntry.ts');

  const jsContent = renderTpl(entrys.map((item) => item.split('.').shift()));
  fs.writeFileSync(entry, jsContent);
  return entry;
}

module.exports = { generateContentFile, createFileName: renderTpl.createFileName }