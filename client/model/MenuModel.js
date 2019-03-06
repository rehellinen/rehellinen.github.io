/**
 *  MenuModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:34
 */
import {BaseModel} from "./BaseModel"

export class MenuModel extends BaseModel{
  async getAllMenu () {
    return await this.request({url: 'menu/all'})
  }

  async getFrontMenu () {
    return await this.request({url: 'menu/front'})
  }

  async getBackMenu () {
    return await this.request({url: 'menu/back'})
  }

  async addMenu (data) {
    return await this.request({
      url: 'menu',
      method: 'post',
      data,
      message: true
    })
  }

  async editMenu (data) {
    return await this.request({
      url: 'menu',
      method: 'put',
      data,
      message: true
    })
  }
}

