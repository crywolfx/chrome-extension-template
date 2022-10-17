'use strict';
const fs = require('fs');
const path = require('path');
const renderTpl = require('./tpl');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = function createContentEntry (entrys) {
  entrys = entrys.map((item) => item.split('.').shift());
  const jsContent = renderTpl(entrys);
  const fileName = 'content.tsx';
  const newPath = path.resolve(appDirectory, 'config/content/files/' + fileName);
  fs.writeFileSync(newPath, jsContent);
  return newPath;
}