/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/25 19:06
 */
import Koa from 'koa'
import {resolve} from 'path'
import R from 'ramda'
import chalk from 'chalk'
import config from './utils/config'

const r = path => resolve(__dirname, path)
const middlewares = ['exception', 'router']
global.$config = config

class Server {
  constructor () {
    this.app = new Koa()
    this.host = process.env.HOST || '127.0.0.1'
    this.port = process.env.PORT || 9528
  }

  start () {
    // 使用中间件
    this.useMiddlewares()(middlewares)
    // 设置监听
    this.app.listen(this.port, this.host)
    console.log(chalk.blue(`Server listens on ${this.host}:${this.port}`))
  }

  useMiddlewares () {
    return R.map(R.pipe(
      item => `${r('./middleware')}/${item}`,
      require,
      R.map(item => item(this.app))
    ))
  }
}

(new Server()).start()
