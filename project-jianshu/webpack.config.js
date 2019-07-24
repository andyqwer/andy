const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // 入口文件
  entry: './src/index.jsx',
  // 出口文件
  output: {
    filename: 'javascripts/main-[hash:4].js',
    path: path.resolve('dist')
  },
  // 处理对应模块
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.(jpg|jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name]-[hash:4].[ext]'
            }
          }
        ]
      }
    ]
  },
  // 对应的插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    }),
  ],
  // 开发服务器配置
  devServer: {
    port: 3001,
    hot: true,
    open: true
  },
  devtool: 'source-map'
};