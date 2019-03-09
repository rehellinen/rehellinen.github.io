/**
 *  CommonValidate.js
 *  Create By rehellinen
 *  Create On 2019/3/9 11:31
 */
import {BaseValidate} from "./BaseValidate"

export class CommonValidate extends BaseValidate{
  constructor() {
    super()
    this.rules = {
      id: ['require', 'id'],
      order: ['require', 'order'],
      status: ['require', 'status'],
    }

    this.scene = {
      status: ['id', 'status'],
      order: ['id', 'order']
    }
  }
}
