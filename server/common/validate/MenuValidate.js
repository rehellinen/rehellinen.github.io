/**
 *  PushValidate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 22:38
 */
import {Validate} from "../../libs/validate/Validate"

export class MenuValidate extends Validate{
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
      del: ['id']
    }
  }
}
