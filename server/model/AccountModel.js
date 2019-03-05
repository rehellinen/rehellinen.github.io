/**
 *  account.js
 *  Create By rehellinen
 *  Create On 2019/3/5 10:37
 */
import {BaseModel} from "./BaseModel"
import config from "../utils/config"

export class AccountModel extends BaseModel{
  constructor () {
    super()

    this.model = this.db.Model.extend({
      tableName: 'account'
    })
  }

  async checkAccount (name) {
    const res = await this.getAll({
      name,
      status: config.STATUS.NORMAL
    })
    return res[0]
  }
}
