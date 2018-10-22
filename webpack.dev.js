const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   filename: 'index.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   filename: 'song.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'home.html',
    //   filename: 'home.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'src/page1/index.html',
    //   filename: 'page1/page1.html'
    // })
    // ,new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: '[name].js'
    // })
    // ,new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // })
  ]
});