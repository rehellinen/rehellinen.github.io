/**
 *  PushValidate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 22:38
 */
import {Validate} from "../../libs/validate/Validate"

export class TokenValidate extends Validate{
  constructor() {
    super()
    this.rules = {
      name: ['require', 'name'],
      password: ['require', 'password'],
      token: ['require', 'token']
    }

    this.scene = {
      check: ['token'],
      get: ['name', 'password']
    }
  }
}
