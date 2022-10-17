'use strict';

const createRender = (paths) => paths.map((item, index) => `
  const contentModule${index} = require('${item}');
  if (contentModule${index}) {
    const config = contentModule${index}.config || {};
    const Component = contentModule${index}.default;
    const style = contentModule${index}.style;
    const shadow = config.shadow === undefined ? true : config.shadow;
    if (config.component) {
      mount(Component, shadow, style)
    }
  }
`).join('\n')

module.exports = (path) => {
  const paths = Array.isArray(path) ? path : [path];
  return `
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
  const mount = (Component, shadow, style = '') => {
    let styleEl;
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
  ${createRender(paths)}
  `
}