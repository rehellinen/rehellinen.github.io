/**
 *  Token.js
 *  Create By rehellinen
 *  Create On 2019/3/4 22:37
 */
import config from './config'
import axios from 'axios'
import store from 'store'

export class Token {
  constructor (name, password) {
    this.name = name
    this.password = password
    this.tokenUrl = config.restUrl + '/token'
    this.verifyUrl = config.restUrl + '/token/check'
    this.key = 'token'
  }

  async isLogin () {
    let token = this.getTokenFromCache()
    if (!token) return false
    return await this._verifyFromServer(token)
  }

  async _verifyFromServer (token) {
    const { data } = await axios({
      url: this.verifyUrl,
      method: 'get',
      headers: { token },
      validateStatus: (status) => status < 500
    })
    return data.data.isValid
  }

  // 从服务器获取Token
  async getTokenFromServer () {
    let { data, status } = await axios({
      url: this.tokenUrl,
      method: 'post',
      validateStatus: status => status >= 200 && status < 500,
      data: {
        name: this.name,
        password: this.password
      }
    })

    status = status.toString()
    let startChar = status.charAt(0)

    // 处理成功时的情况
    if (startChar === '2') {
      store.set(this.key, data.data)
    }
    return data
  }

  /**
   * 获取缓存中的Token
   * @return {*}
   */
  getTokenFromCache () {
    return store.get(this.key)
  }
}
