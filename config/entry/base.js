'use strict';

const fs = require('fs');
const paths = require('../paths');

const dataPaths = [paths.optionsSrc, paths.popupSrc, paths.devToolSrc, paths.backgroundSrc, paths.contentSrc]

const getEntry = (path) => {
  if (!fs.existsSync(path)) return [];
  return fs.readdirSync(path).filter((name) => name.match(/\.(ts|tsx)$/)).map((item) => `${path}/${item}`);
};

const [hasOptions, hasPopup, hasDevTool, hasBackground, hasContent] = dataPaths.map((p) => fs.existsSync(p));
const [optionsEntry, popupEntry, devToolEntry, backgroundEntry, contentEntry] = dataPaths.map((p) => getEntry(p));


module.exports = {
  hasOptions,
  hasPopup,
  hasDevTool,
  hasBackground,
  hasContent,
  optionsEntry,
  popupEntry,
  devToolEntry,
  backgroundEntry,
  contentEntry
}