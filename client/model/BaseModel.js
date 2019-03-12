/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:34
 */
import config from '../utils/config'
import axios from 'axios'
import router from 'vue-router'
import {Token} from "../utils/Token"

export class BaseModel {
  constructor(modelName) {
    this.modelName = modelName
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
   *  5. contentType String [设置content-type]
   */
  async request ({url, reqData, message, method = 'get', contentType = 'application/json'}) {
    const token = new Token().getTokenFromCache()
    const {data, status} = await axios({
      url: `${this.baseUrl}/${url}`,
      method: method,
      data: reqData,
      headers: {
        token,
        'content-type': contentType,
      },
      validateStatus: (status) => status < 500
    }).catch(ex => {
      console.log(ex)
    })

    // 需要处理的几种情况：
    // 1. 400 --- 参数错误
    // 2. 401 --- token无效
    // 3. 404 --- 找不到资源
    // 4. 500 --- 服务器错误



    // 参数错误
    if (status === 400) {

    }

    // Token过期
    if (status === 401) {
      router.push('/login')
    }

    // 成功
    if (status === 200) {
      return message ? data : data.data
    }
  }

  async addData (reqData) {
    return await this.request({
      url: this.modelName,
      reqData,
      method: 'post',
      message: true
    })
  }

  async editData (reqData) {
    return await this.request({
      url: this.modelName,
      reqData,
      method: 'put',
      message: true
    })
  }

  async deleteData (id) {
    return await this.request({
      url: this.modelName,
      method: 'delete',
      reqData: {id},
      message: true
    })
  }

  async changeStatus (id, status) {
    return await this.request({
      url: `${this.modelName}/status`,
      method: 'put',
      reqData: {id, status},
      message: true
    })
  }

  async changeOrder (id, order) {
    return await this.request({
      url: `${this.modelName}/order`,
      method: 'put',
      reqData: {id, order},
      message: true
    })
  }
}

