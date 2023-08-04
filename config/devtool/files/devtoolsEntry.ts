
  
(() => {
  try {
    const devtoolModule = require('/Users/moonlittt/Ks/chrome-extension-template/src/devtools/panel1');
    if (devtoolModule) {
      const config = devtoolModule.config || {};
      const panelName = config.name || '';
      const panelIcon = config.icon || '';
      const fileName = 'devtool-panel1';
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

  