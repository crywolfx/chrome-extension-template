module.exports = function (isHot = false) {
  const baseTpl = `
  function tryImport (path) {
    try {
      importScripts(path);
    } catch (error) {
      console.error('import ' + path + ' error, message: ', error);
    }
  };
`
  const hotTpl = isHot && `tryImport('./hotBackground/hotBackground.js');` || '';
  return `${baseTpl}${hotTpl}tryImport('./background/background.js');`
}