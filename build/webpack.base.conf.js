/**
 *  webpack-base.conf.js.js
 *  Create By rehellinen
 *  Create On 2018/11/5 11:37
 */
const config = require('./config')
const {r,isProduction} = require('./utils')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  context: r('./'),
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: `./client/index.js`,
  },
  output: {
    path: config.PROD.ASSETS_ROOT,
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: "[name].[hash:8].chunk.js",
    publicPath: isProduction
      ? config.PROD.PUBLIC_PATH
      : config.DEV.PUBLIC_PATH
  },
  resolve: {
    alias: {
      sass: r('./static/sass'),
      assets: r('./static'),
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
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
