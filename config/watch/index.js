const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const { contentSrc } = require('../paths');
const { generateContentFile } = require('../content/generate');
const { getEntry } = require('../entry/base');

const watchContent = () => {
  const callback = () => generateContentFile(getEntry(contentSrc));
  const debounceCallback = debounce(callback, 300)
  chokidar.watch(contentSrc).on('add', debounceCallback).on('unlink', debounceCallback);
}

exports.watchContent = watchContent;