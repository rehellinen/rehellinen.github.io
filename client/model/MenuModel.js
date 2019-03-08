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

  async addData (data) {
    return await super.addData('menu', data)
  }

  async editData (data) {
    return await super.editData('menu', data)
  }

  async deleteData (id) {
    return await super.deleteData('menu', id)
  }
}

