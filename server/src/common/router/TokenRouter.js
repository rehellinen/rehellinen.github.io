/**
 *  Token.js
 *  Create By rehellinen
 *  Create On 2018/10/25 23:08
 */
import {controller, get, post} from "../../libs/decorator/router"
import {TokenController} from "../../controller/TokenController"
import {validate, auth} from "../../libs/decorator/decorator"

const token = new TokenController()

@controller('token')
class TokenRouter {
  @post('')
  @validate({name: 'Token', scene: 'get'})
  async getToken (ctx, next) {
    await token.getToken(ctx, next)
  }


  @get('check')
  async checkToken (ctx, next) {
    await token.checkToken(ctx, next)
  }
}
