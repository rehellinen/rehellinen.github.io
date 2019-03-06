/**
 *  MenuModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:08
 */
import {BaseModel} from "./BaseModel"

export class MenuModel extends BaseModel{
  constructor () {
    super()

    this.model = this.db.Model.extend({
      tableName: 'menu'
    })
  }

  async getMenu (type) {
    let cond
    if (type) {
      cond = {
        type,
        status: 1
      }
    } else {
      cond = ['status', '>', -1]
    }
    return await this.getAll(cond, [], ['listorder'])
  }

  async addMenu (data) {
    return await this.saveOne(data)
  }

  async editMenu (id, data) {
    return await this.editOne({id}, data)
  }

  async delMenu (id) {
    return await this.deleteById(id)
  }
}
