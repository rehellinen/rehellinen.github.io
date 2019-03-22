/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2019/3/22 13:04
 */
import {Model} from "../libs/model/Model"

export class BaseModel extends Model{
  changeStatus (id, status) {
    return this.editOne({
      condition: {id},
      data: {status}
    })
  }

  changeOrder (id, order) {
    return this.editOne({
      condition: {id},
      data: {order}
    })
  }
}
