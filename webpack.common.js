const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            mimetype: 'image/png'
          }
        }]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ],
  },
}