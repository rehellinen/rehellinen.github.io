import {MenuModel} from "../model/MenuModel"
import {SuccessMessage} from "../common/exception/SuccessMessage"
import config from "../utils/config"

/**
 *  BaseController.js
 *  Create By rehellinen
 *  Create On 2019/3/9 13:42
 */

export class BaseController {
  constructor (model) {
    this.model = model
  }

  async changeStatus (ctx, next) {
    const params = ctx.checkedParams
    await this.model.changeStatus(params.id, params.status)
    throw new SuccessMessage({
      message: '更改状态成功'
    })
  }

  async changeOrder (ctx, next) {
    const params = ctx.checkedParams
    await this.model.changeOrder(params.id, params.order)
    throw new SuccessMessage({
      message: '更改排序成功'
    })
  }

  async getById (ctx, next) {
    const id = ctx.checkedParams.id
    const data = await this.model.getOneById({
      id, condition: {status: config.STATUS.NORMAL}
    })
    throw new SuccessMessage({
      message: '获取数据成功',
      data
    })
  }
}
