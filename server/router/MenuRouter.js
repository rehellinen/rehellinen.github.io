/**
 *  MenuRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 10:50
 */
import {controller, get} from "../common/decorator/router"
import {MenuController} from "../controller/MenuController"
import config from '../utils/config'

@controller('menu')
class TokenRouter {
  @get('all')
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
}
