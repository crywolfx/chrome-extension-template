const {
  optionsEntry,
  popupEntry,
  devtoolsEntry,
  backgroundEntry,
  contentEntry,
  ...others
} = require('./base');
const { generateContentFile: contentGenerateContentFile } = require('../content/generate');
const { generateContentFile: devToolGenerateContentFile, createFileName } = require('../devtool/generate');
const { resolveApp } = require('../paths');

const isProduction = process.env.NODE_ENV === 'production';
const isHot = process.env.HOT === 'true';

const entry = {};
const devtoolsReallyEntry = {};
if (popupEntry.length) {
  entry.popup = popupEntry
}
if (optionsEntry.length) {
  entry.options = optionsEntry
}
if (backgroundEntry.length) {
  entry.background = backgroundEntry
}
if (contentEntry.length) {
  entry.content = contentGenerateContentFile(contentEntry)
}
if (devtoolsEntry.length) {
  entry.devtoolsEntry = devToolGenerateContentFile(devtoolsEntry);
  devtoolsEntry.map((path) => {
    const filename = path.split('/').pop().split('.').shift();;
    devtoolsReallyEntry[`${createFileName(filename)}`] = path;  
  });
  Object.assign(entry, devtoolsReallyEntry);
}

if (!isProduction && isHot) {
  entry.hotContent = resolveApp('config/reload/content.ts');
  entry.hotBackground = resolveApp('config/reload/background.ts');
}

module.exports = { ...others, devtoolsReallyEntry, entry };
