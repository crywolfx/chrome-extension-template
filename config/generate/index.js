const fs = require('fs');
const path = require('path');
const renderContent = require('../template/content');
const renderDevtools = require('../template/devtools');

const generate = (filePath, scriptString) => {
  const fullPath = path.join(process.cwd(), filePath);
  fs.writeFileSync(fullPath, scriptString);
  return fullPath;
}

exports.generateContent = (entrys) => {
  const stylePath = 'static/css/content/index.css';
  const scriptString = renderContent(entrys, stylePath);
  return generate('src/.entry/content.tsx', scriptString);
};

exports.generateDevtools = (entrys) => {
  const scriptString = renderDevtools(entrys);
  return generate('src/.entry/devtools.ts', scriptString);
}

exports.generateDevtoolsFileName = renderDevtools.createFileName;