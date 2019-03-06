/**
 *  BaseValidate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 21:21
 */
import {Methods} from "./Methods"
import {getParams} from "../../utils/utils"

export class BaseValidate extends Methods{
  constructor (rules = {}, scene = {}) {
    super()
    this.rules = rules
    this.scene = scene
    this.checkedParams = {}
  }

  async check (ctx, scene) {
    let checkedParams = {}
    let params = await getParams(ctx)
    const rules = this.scene[scene]

    for (let field of rules) {
      const rule = this.rules[field]
      const validateFunc = rule[0].split('|')
      const errInfo = rule[1].split('|')

      validateFunc.forEach((item, index) => {
        this[item](params, field, errInfo[index])
      })

      checkedParams[field] = decodeURIComponent(params[field])
    }

    ctx.checkedParams = checkedParams
  }
}
