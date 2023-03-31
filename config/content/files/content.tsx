
  
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
  const mount = (Component: any, shadow: any, style = '') => {
    let styleEl: any;
    if (style) {
      styleEl = document.createElement('style');
      styleEl.textContent = style;
    }
    if (!shadow) {
      const $container = document.createElement('div');
      render({ container: $container, Component });
      document.documentElement.appendChild($container); 
      styleEl && document.head.appendChild(styleEl);
    } else {
      const shadowContainer = document.createElement('div');
      const shadowConfig = Object.prototype.toString.call(shadow) === '[object Object]' ? shadow : { mode: 'open'};
      const shadowRoot = shadowContainer.attachShadow(shadowConfig);
      const $container = document.createElement('div');
      render({ container: $container, Component });
      shadowRoot.append(styleEl);
      shadowRoot.append($container);
      document.documentElement.appendChild(shadowContainer); 
    }
  }
  
  const contentModule0 = require('/Users/moonlittt/kShou/chrome-extension-template/src/content/test2');
  if (contentModule0) {
    const config = contentModule0.config || {};
    const Component = contentModule0.default;
    const style = contentModule0.style;
    const shadow = config.shadow === undefined ? true : config.shadow;
    if (config.component) {
      mount(Component, shadow, style)
    }
  }

  