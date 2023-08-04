const createFileName = (filename) => `devtool-${filename}`;
const createRender = (paths) => paths.map((item, index) => `
(() => {
  try {
    const devtoolModule = require('${item}');
    if (devtoolModule) {
      const config = devtoolModule.config || {};
      const panelName = config.name || '';
      const panelIcon = config.icon || '';
      const fileName = '${createFileName(item.split('/').pop())}';
      chrome.devtools.panels.create(
        panelName || fileName,
        panelIcon,
        fileName + '.html',
        function (panel) {
          // code invoked on panel creation
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
})();
`).join('\n')

module.exports = (path) => {
  const paths = Array.isArray(path) ? path : [path];
  return paths.length ? `
  ${createRender(paths)}
  ` : '';
}

module.exports.createFileName = createFileName;