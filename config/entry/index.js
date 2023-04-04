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

const entry = {};
popupEntry.length && (entry.popup = popupEntry);
devToolEntry.length && (entry.devtool = devToolEntry);
optionsEntry.length && (entry.options = optionsEntry);
backgroundEntry.length && (entry.background = [...backgroundEntry, resolveApp('config/reload/index.ts')]);
contentEntry.length && (entry.content = [generateContentFile(contentEntry)]);

module.exports = { ...others, entry };
