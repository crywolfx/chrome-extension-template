'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryInfo = require('./entry');
const paths = require('./paths');

const create = (config, isEnvProduction) => {
  return new HtmlWebpackPlugin(
    Object.assign(
      {},
      {
        ...config
      },
      isEnvProduction
        ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
        : undefined
    )
  )
}

const templates = [
  entryInfo.hasOptions && {
    template: paths.optionsHtml,
    chunks: ['options'],
    filename: `options.html`,
  },
  entryInfo.hasPopup && {
    template: paths.popupHtml,
    chunks: ['popup'],
    filename: `popup.html`
  },
  entryInfo.hasDevTool && {
    template: paths.devToolHtml,
    chunks: ['devtool'],
    filename: `devtool.html`
  }
].filter(Boolean)

module.exports = (isEnvProduction) => templates.map((tpl) => create(tpl, isEnvProduction))