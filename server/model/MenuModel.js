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

  getMenu (type) {
    const cond = {status: 1}
    if (type) {
      cond.type = type
    }
    return this.getAll(cond, [], ['listorder'])
  }
}
