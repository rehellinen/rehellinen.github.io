/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:37
 */
import {WECHAT} from '../../utils/config'
import axios from 'axios'
import md5 from 'md5'
import {getRandChars} from '../../utils/utils'
import cache from 'memory-cache'
import {TokenException} from "../exception/TokenException"
import {AccountModel} from "../../model/AccountModel"
import config from "../../utils/config"

export class Token {
  async get (params) {
    const userInfo = await new AccountModel().checkAccount(params.name)
    this.checkPassword(params.password, userInfo)
    return this.saveToCache('admin')
  }

  checkPassword (reqPassword, dbInfo) {
    const md5Password = md5(config.PASSWORD_PREFIX + reqPassword + dbInfo.salt)
    if (md5Password !== dbInfo.password) {
      throw new TokenException({
        message: '密码错误'
      })
    }
  }

  /**
   * 保存Token到缓存
   * @param cachedValue 需要保存的信息
   */
  saveToCache (cachedValue) {
    const cachedKey = Token.generateToken()

    cache.put(cachedKey, JSON.stringify(cachedValue), $config.TOKEN_EXPIRES_IN, () => {
      cache.del(cachedKey)
    })
    return cachedKey
  }

  /**
   * 验证权限是否合法
   * @param ctx
   * @param scope
   */
  static checkScope (ctx, scope) {
    const cachedScope = Token.getSpecifiedValue(ctx, 'scope')
    if (scope !== cachedScope) {
      throw new TokenException()
    }
  }

  /**
   * 获取指定的数据
   * @param ctx
   * @param key
   * @return {*}
   */
  static getSpecifiedValue (ctx, key = 'id') {
    const info = cache.get(ctx.header.token)
    const infoObj =  JSON.parse(info)
    if (!info || !infoObj[key]) {
      throw new TokenException()
    }

    return infoObj[key]
  }

  /**
   * 坚持Token是否过期
   * @param ctx Koa2上下文
   */
  static checkToken (ctx) {
    const token = cache.get(ctx.header.token)
    if (!token) {
      throw new TokenException()
    }
  }

  /**
   * 生成Token令牌
   */
  static generateToken () {
    const str = getRandChars(32)
    const time = new Date().getTime()
    const prefix = $config.TOKEN_PREFIX

    return md5(`${str}-${time}-${prefix}`)
  }
}
