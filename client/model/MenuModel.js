/**
 *  MenuModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:34
 */
import {BaseModel} from "./BaseModel"

export class MenuModel extends BaseModel{
  async getMenu () {
    return await this.request({url: 'menu'})
  }
}

