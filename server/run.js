/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/3/4 10:29
 */
require('@babel/register')({
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
})
require('@babel/polyfill')

// 启动服务器
require('./index.js')
