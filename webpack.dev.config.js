var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var CopyWebpackPlugin = require('copy-webpack-plugin');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'client')
};

config.plugins = config.plugins.concat([
  new CopyWebpackPlugin([
    { from: 'client/assets', to: 'assets' }
  ]),
  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
