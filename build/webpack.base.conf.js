/**
 *  webpack-base.conf.js.js
 *  Create By rehellinen
 *  Create On 2018/11/5 11:37
 */
const {resolve} = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = process.argv[process.argv.length - 1]

const r = path => resolve(__dirname, path)

module.exports = {
  context: r('../'),
  entry: {
    app: `./${entry}/index.js`,
  },
  output: {
    path: r(`../dist/${entry}`),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    alias: {
      sass: r('../static/sass'),
      assets: r('../static'),
    },
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {indentedSyntax: true}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
