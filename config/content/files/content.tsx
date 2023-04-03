
  
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  const render = (props: any) => {
    const { container, Component } = props;
    if (container) {
      const root = ReactDOM.createRoot(
        container
      );
      root.render(
        <React.StrictMode>
          <Component />
        </React.StrictMode>
      );
    }
  };
  const mount = (Component: any, shadow: any) => {
    const styleEl = document.createElement('link')
    const href = chrome.runtime.getURL('static/css/content/index.css');
    styleEl.setAttribute('rel', 'stylesheet')
    styleEl.setAttribute('href', href);
    if (!shadow) {
      const $container = document.createElement('div');
      render({ container: $container, Component });
      document.documentElement.appendChild($container);
      document.head.appendChild(styleEl);
    } else {
      const shadowContainer = document.createElement('div');
      const shadowConfig = Object.prototype.toString.call(shadow) === '[object Object]' ? shadow : { mode: 'open' };
      const shadowRoot = shadowContainer.attachShadow(shadowConfig);
      const $container = document.createElement('div');
      render({ container: $container, Component });
      shadowRoot.append(styleEl);
      shadowRoot.append($container);
      document.documentElement.appendChild(shadowContainer);
    }
  }
  
  const contentModule0 = require('/Users/moonlittt/kShou/chrome-extension-template/src/content/test1');
  if (contentModule0) {
    const config = contentModule0.config || {};
    const Component = contentModule0.default;
    const shadow = config.shadow === undefined ? true : config.shadow;
    if (config.component) {
      mount(Component, shadow)
    }
  }


  const contentModule1 = require('/Users/moonlittt/kShou/chrome-extension-template/src/content/test2');
  if (contentModule1) {
    const config = contentModule1.config || {};
    const Component = contentModule1.default;
    const shadow = config.shadow === undefined ? true : config.shadow;
    if (config.component) {
      mount(Component, shadow)
    }
  }

  