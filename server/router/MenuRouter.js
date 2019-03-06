/**
 *  MenuRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 10:50
 */
import {controller, get, put, post, del} from "../common/decorator/router"
import {MenuController} from "../controller/MenuController"
import config from '../utils/config'
import {auth, validate} from "../common/decorator/middleware"

@controller('menu')
class TokenRouter {
  @get('all')
  @auth('super')
  async getAll (ctx, next) {
    await MenuController.getMenu(ctx, next)
  }

  @get('front')
  async getFront (ctx, next) {
    await MenuController.getMenu(ctx, next, config.MENU.FRONT)
  }

  @get('back')
  async getBack (ctx, next) {
    await MenuController.getMenu(ctx, next, config.MENU.BACK)
  }

  @put('')
  @validate({name: 'Menu', scene: 'edit'})
  async edit (ctx, next) {
    await MenuController.editMenu(ctx, next)
  }

  @post('')
  @validate({name: 'Menu', scene: 'add'})
  async add (ctx, next) {
    await MenuController.addMenu(ctx, next)
  }

  @del('')
  @validate({name: 'Menu', scene: 'del'})
  async del (ctx, next) {
    await MenuController.delMenu(ctx, next)
  }
}
