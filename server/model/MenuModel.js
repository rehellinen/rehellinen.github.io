/**
 *  MenuModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:08
 */
import {BaseModel} from "./BaseModel"

export class MenuModel extends BaseModel{
  constructor () {
    super({
      tableName: 'menu'
    })
  }

  async getAllMenu () {
    return await this.getAll({
      condition: ['status', '>', $config.STATUS.DELETED],
      order: ['type', 'order', 'id']
    })
  }

  async getMenu (type) {
    let cond = {
      type,
      status: $config.STATUS.NORMAL
    }
    return await this.getAll({
      condition: cond,
      order: ['order']
    })
  }

  async addMenu (data) {
    return await this.saveOne(data)
  }

  async editMenu (id, data) {
    return await this.editOne({
      condition: {id},
      data
    })
  }

  async delMenu (id) {
    return await this.deleteById(id)
  }

  async getIdByName (name) {
    const res =  await this.getAll({
      condition: {
        url: `/list/${name.startsWith('/') ? name.substr(1) : name}`
      }
    })

    return res[0].id
  }
}
