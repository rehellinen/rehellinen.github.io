/**
 *  webpack.prod.conf.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:18
 */

const merge = require('webpack-merge')
const config = require('./config')
const baseWebpackConf = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin


const webpackConfig = merge(baseWebpackConf, {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        },
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css',
    })
  ]
})

if (config.PROD.BUNDLE_ANALYZER) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin)
}

module.exports = webpackConfig
