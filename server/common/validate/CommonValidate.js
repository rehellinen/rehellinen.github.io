/**
 *  CommonValidate.js
 *  Create By rehellinen
 *  Create On 2019/3/9 11:31
 */
import {Validate} from "../../libs/validate/Validate"

export class CommonValidate extends Validate{
  constructor() {
    super()
    this.rules = {
      id: ['require', 'id'],
      order: ['require', 'order'],
      status: ['require', 'status'],
    }

    this.scene = {
      status: ['id', 'status'],
      order: ['id', 'order'],
      id: ['id']
    }
  }
}
