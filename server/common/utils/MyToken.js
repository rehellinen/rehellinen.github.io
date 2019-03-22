/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:37
 */

import md5 from 'md5'
import {TokenException} from "../exception/TokenException"
import {AccountModel} from "../../model/AccountModel"
import {Token} from "../../libs/utils/Token"


export class MyToken extends Token{
  async get (params) {
    const userInfo = await new AccountModel().checkAccount(params.name)
    this.checkPassword(params.password, userInfo)
    return super.get()
  }

  checkPassword (reqPassword, dbInfo) {
    const md5Password = md5($config.PASSWORD_PREFIX + reqPassword + dbInfo.salt)
    if (md5Password !== dbInfo.password) {
      throw new TokenException({
        message: '密码错误'
      })
    }
  }
}
