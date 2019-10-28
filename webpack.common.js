const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [{
          loader: 'babel-loader'
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