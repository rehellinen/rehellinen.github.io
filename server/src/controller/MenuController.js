import {SuccessMessage} from "../common/exception/SuccessMessage"
import {MenuModel} from "../model/MenuModel"
import {BaseController} from "./BaseController"

export class MenuController extends BaseController{
  constructor () {
    super(new MenuModel())
  }

  async getAllMenu (ctx, next, type) {
    const data = await this.model.getAllMenu()
    throw new SuccessMessage({
      message: '获取所有菜单成功',
      data
    })
  }

  async getMenuByType (ctx, next, type) {
    const data = await this.model.getMenu(type)
    throw new SuccessMessage({
      message: '获取菜单成功',
      data
    })
  }

  async addMenu (ctx, next) {
    await this.model.addMenu(ctx.checkedParams)
    throw new SuccessMessage({
      message: '添加菜单成功'
    })
  }

  async editMenu (ctx, next) {
    const id = ctx.checkedParams.id
    await this.model.editMenu(id, ctx.checkedParams)
    throw new SuccessMessage({
      message: '编辑菜单成功'
    })
  }

  async delMenu (ctx, next) {
    const id = ctx.checkedParams.id
    await this.model.delMenu(id)
    throw new SuccessMessage({
      message: '删除菜单成功'
    })
  }
}
