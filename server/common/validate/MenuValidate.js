/**
 *  PushValidate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 22:38
 */
import {BaseValidate} from "./BaseValidate"

export class MenuValidate extends BaseValidate{
  constructor() {
    super()
    this.rules = {
      id: ['require', 'id'],
      name: ['require', 'name'],
      url: ['require', 'url'],
      type: ['require', 'type'],
    }

    this.scene = {
      add: ['name', 'url', 'type'],
      edit: ['id', 'name', 'url', 'type'],
    }
  }
}
