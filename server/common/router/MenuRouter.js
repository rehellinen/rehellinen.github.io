/**
 *  MenuRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 10:50
 */
import {controller, get, put, post, del} from "../../libs/decorator/router"
import {MenuController} from "../../controller/MenuController"
import {auth, validate} from "../../libs/decorator/decorator"

const menu = new MenuController()

@controller('menu')
class MenuRouter {
  @get('all')
  @auth('super')
  async getAll (ctx, next) {
    await menu.getAllMenu(ctx, next)
  }

  @get('front')
  async getFront (ctx, next) {
    await menu.getMenuByType(ctx, next, $config.MENU.FRONT)
  }

  @get('back')
  async getBack (ctx, next) {
    await menu.getMenuByType(ctx, next, $config.MENU.BACK)
  }

  @put('')
  @auth('super')
  @validate({name: 'Menu', scene: 'edit'})
  async edit (ctx, next) {
    await menu.editMenu(ctx, next)
  }

  @post('')
  @auth('super')
  @validate({name: 'Menu', scene: 'add'})
  async add (ctx, next) {
    await menu.addMenu(ctx, next)
  }

  @del('')
  @auth('super')
  @validate({name: 'Menu', scene: 'del'})
  async del (ctx, next) {
    await menu.delMenu(ctx, next)
  }

  @put('status')
  @auth('super')
  @validate({name: 'Common', scene: 'status'})
  changeStatus (ctx, next) {
    return menu.changeStatus(ctx, next)
  }

  @put('order')
  @auth('super')
  @validate({name: 'Common', scene: 'order'})
  changeOrder (ctx, next) {
    return menu.changeOrder(ctx, next)
  }
}
