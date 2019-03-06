import {SuccessMessage} from "../common/exception/SuccessMessage"
import {MenuModel} from "../model/MenuModel"

/**
 *  MenuController.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:06
 */
export class MenuController {
  static async getMenu (ctx, next, type) {
    const data = await new MenuModel().getMenu(type)
    throw new SuccessMessage({
      message: '获取菜单成功',
      data
    })
  }

  static async addMenu (ctx, next) {
    await new MenuModel().addMenu(ctx.checkedParams)
    throw new SuccessMessage({
      message: '添加菜单成功'
    })
  }

  static async editMenu (ctx, next) {
    const id = ctx.checkedParams.id
    await new MenuModel().editMenu(id, ctx.checkedParams)
    throw new SuccessMessage({
      message: '编辑菜单成功'
    })
  }

  static async delMenu (ctx, next) {
    const id = ctx.checkedParams.id
    await new MenuModel().delMenu(id)
    throw new SuccessMessage({
      message: '删除菜单成功'
    })
  }
}
