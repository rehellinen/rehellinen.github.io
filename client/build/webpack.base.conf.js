/**
 *  webpack-base.conf.js.js
 *  Create By rehellinen
 *  Create On 2018/11/5 11:37
 */
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./config')
const { r, isProduction } = require('./utils')

module.exports = {
  context: r('./'),
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: `./src/pages/index/index.js`,
    cms: './src/pages/cms/index.js'
  },
  output: {
    path: config.PROD.ASSETS_ROOT,
    filename: `js/[name].[hash:5].bundle.js`,
    chunkFilename: `js/[name].[hash:5].chunk.js`,
    publicPath: isProduction
      ? config.PROD.PUBLIC_PATH
      : config.DEV.PUBLIC_PATH
  },
  resolve: {
    alias: {
      sass: r(`./src/assets/sass`),
      assets: r(`./src/assets`)
    },
    modules: [r('node_modules')],
    extensions: ['.vue', '.js', '.json'],
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [r('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [r('src')],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.sass$/,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { indentedSyntax: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          isProduction
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 15000
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          },
          'image-webpack-loader'
        ]
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
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(isProduction)
    })
  ]
}