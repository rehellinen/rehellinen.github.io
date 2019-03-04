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
    this.tokenUrl = config.restUrl + '/token/admin'
    this.verifyUrl = config.restUrl + '/token/check'
    this.key = 'token'
  }

  async verify () {
    let token = this.getTokenFromCache()

    if (token) await this._verifyFromServer()
    else await this.getTokenFromServer()
  }

  async _verifyFromServer (token) {
    const {data, status} = await axios.get(this.verifyUrl, {
      headers: {
        token
      },
      validateStatus: (status) => status < 500
    })
    if (!data.data.isValid) {
      await this.getTokenFromServer()
    }
  }

  // 从服务器获取Token
  async getTokenFromServer () {
    const data = await axios.get(this.tokenUrl, {
      params: {
        name: this.name,
        password: this.password
      }
    })

    let status = data.status.toString()
    let startChar = status.charAt(0)

    // 处理成功时的情况
    if (startChar === '2') {
      store.set(this.key, data.data.data)
    }

    return data.data.data
  }

  /**
   * 获取缓存中的Token
   * @return {*}
   */
  getTokenFromCache () {
    return store.get(this.key)
  }
}
