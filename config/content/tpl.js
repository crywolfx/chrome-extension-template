const createRender = (paths) => paths.map((item, index) => `
  const contentModule${index} = require('${item}');
  if (contentModule${index}) {
    const config = contentModule${index}.config || {};
    const Component = contentModule${index}.default;
    const style = contentModule${index}.style;
    const shadow = config.shadow === undefined ? true : config.shadow;
    if (config.component) {
      mount(Component, shadow)
    }
  }
`).join('\n')

const baseTpl = (stylePath) => {
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
  const mount = (Component: any, shadow: any) => {
    let styleEl: any;
    const style = require('${stylePath}?toString').default;
    if (style && style !== '[object Object]') {
      styleEl = document.createElement('style');
      styleEl.textContent = style.toString();
    }
    if (!shadow) {
      const $container = document.createElement('div');
      render({ container: $container, Component });
      document.documentElement.appendChild($container);
      styleEl && document.head.appendChild(styleEl);
    } else {
      const shadowContainer = document.createElement('div');
      const shadowConfig = Object.prototype.toString.call(shadow) === '[object Object]' ? shadow : { mode: 'open' };
      const shadowRoot = shadowContainer.attachShadow(shadowConfig);
      const $container = document.createElement('div');
      render({ container: $container, Component });
      styleEl && shadowRoot.append(styleEl);
      shadowRoot.append($container);
      document.documentElement.appendChild(shadowContainer);
    }
  }`
}

module.exports = (path, stylePath) => {
  const paths = Array.isArray(path) ? path : [path];
  return paths.length ? `
  ${baseTpl(stylePath)}
  ${createRender(paths)}
  ` : '';
}