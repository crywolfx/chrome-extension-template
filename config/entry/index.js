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
backgroundEntry.length && (entry.background = [...backgroundEntry, !isProduction && resolveApp('config/reload/background.ts')].filter(Boolean));
contentEntry.length && (entry.content = [generateContentFile(contentEntry), !isProduction && resolveApp('config/reload/content.ts')].filter(Boolean));

module.exports = { ...others, entry };
