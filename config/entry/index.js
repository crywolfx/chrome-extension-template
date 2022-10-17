'use strict';
const {
  optionsEntry,
  popupEntry,
  devToolEntry,
  backgroundEntry,
  contentEntry,
  ...others
} = require('./base');
const createContentEntry = require('../content/resolve');

const entry = {};
popupEntry.length && (entry.popup = popupEntry);
devToolEntry.length && (entry.devtool = devToolEntry);
optionsEntry.length && (entry.options = optionsEntry);
backgroundEntry.length && (entry.background = backgroundEntry);
contentEntry.length && (entry.content = createContentEntry(contentEntry));

module.exports = { ...others, entry };
