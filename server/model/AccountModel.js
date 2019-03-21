/**
 *  account.js
 *  Create By rehellinen
 *  Create On 2019/3/5 10:37
 */
import {Model} from "../libs/model/Model"

export class AccountModel extends Model{
  constructor () {
    super({
      tableName: 'account'
    })
  }

  async checkAccount (name) {
    const res = await this.getAll({
      condition: {
        name,
        status: $config.STATUS.NORMAL
      }
    })
    return res[0]
  }
}
