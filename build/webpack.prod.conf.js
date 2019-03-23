/**
 *  webpack.prod.conf.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:18
 */

const merge = require('webpack-merge')
const baseWebpackConf = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConf, {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
  ]
})
