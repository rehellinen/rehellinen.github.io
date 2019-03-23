/**
 *  utils.js
 *  Create By rehellinen
 *  Create On 2019/3/23 15:52
 */
const {resolve} = require('path')
// 定位到根目录
exports.r = path => resolve(__dirname, '../', path)
// 是否为生产环境
exports.isProduction = process.env.NODE_ENV === 'production'
