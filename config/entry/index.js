const {
  optionsEntry,
  popupEntry,
  devToolEntry,
  backgroundEntry,
  contentEntry,
  ...others
} = require('./base');
const { generateContentFile } = require('../content/generate');
const { resolveApp } = require('../paths');

const isProduction = process.env.NODE_ENV === 'production';

const entry = {};
popupEntry.length && (entry.popup = popupEntry);
devToolEntry.length && (entry.devtool = devToolEntry);
optionsEntry.length && (entry.options = optionsEntry);
backgroundEntry.length && (entry.background = [...backgroundEntry].filter(Boolean));
contentEntry.length && (entry.content = [generateContentFile(contentEntry)].filter(Boolean));
if (!isProduction) {
  entry.hotContent = resolveApp('config/reload/content.ts');
  entry.hotBackground = resolveApp('config/reload/background.ts');
}

module.exports = { ...others, entry };
