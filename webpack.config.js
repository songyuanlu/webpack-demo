const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    page1: './src/page1/index.js',
  },
  output: {
    filename: '[name].bundle-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  // ,plugins: [
  //   // new CleanWebpackPlugin(['dist']),
  //   // new HtmlWebpackPlugin({
  //   //   title: 'Output Management',
  //   //   template: 'index.html',
  //   //   filename: 'bbb-[hash].html'
  //   // }),
  //   // ,new webpack.NamedModulesPlugin()
  //   // ,new webpack.HotModuleReplacementPlugin()
  // ]
};