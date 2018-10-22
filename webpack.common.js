const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    page1: ['./src/page1/index.js'],
    index: './src/index.js',
    another: './src/another-module.js',
    vendor: './src/common.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'song.html'
      }),
      new HtmlWebpackPlugin({
        template: 'home.html',
        filename: 'home.html'
      }),
      new HtmlWebpackPlugin({
        template: 'src/page1/index.html',
        filename: 'page1/page1.html'
      })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};