/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:34
 */
import config from '../utils/config'
import axios from 'axios'
import {Token} from "../utils/Token"

export class BaseModel {
  constructor() {
    this.baseUrl = config.restUrl
  }

  /**
   * 对 axios 请求进行封装
   * @param params 请求参数配置
   *  params参数:
   *  1. url String [api地址]
   *  2. method String [http请求方式]
   *  3. data Object [请求时携带的参数]
   *  4. message Boolean [是否在结果中携带message]
   */
  async request (params) {
    const token = new Token().getTokenFromCache()

    const {data, status} = await axios({
      url: `${this.baseUrl}/${params.url}`,
      method: params.method || 'get',
      data: params.data,
      headers: {
        token,
        'content-type': 'application/json',
      },
      validateStatus: (status) => status < 500
    }).catch(ex => {
      console.log(ex)
    })

    return params.message ? data : data.data
  }
}

