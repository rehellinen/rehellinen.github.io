/**
 *  MenuRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 10:50
 */
import {controller, get} from "../common/decorator/router"
import {MenuController} from "../controller/MenuController"

@controller('menu')
class TokenRouter {
  @get('')
  async getToken (ctx, next) {
    await MenuController.getMenu(ctx, next)
  }
}
