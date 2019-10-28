const path = require('path');
const common = require('./webpack.common')
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  },
});