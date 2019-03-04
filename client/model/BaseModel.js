/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:34
 */
import config from '../utils/config'
import axios from 'axios'

export class BaseModel {
  constructor() {
    this.baseUrl = config.restUrl
  }

  /**
   * 对 axios 请求进行封装
   * @param params 请求参数配置
   *  params参数:
   *  1. url [api地址]
   *  2. method [http请求方式]
   *  3. data [请求时携带的参数]
   */
  async request (params) {
    const res = await axios({
      url: `${this.baseUrl}/${params.url}`,
      method: params.method || 'get',
      data: params.data
    }).catch(ex => {
      console.log(ex)
    })
    console.log(res)
  }
}

