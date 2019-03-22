/**
 *  Token.js
 *  Create By rehellinen
 *  Create On 2018/10/26 14:59
 */
import {SuccessMessage} from "../common/exception/SuccessMessage"
import {MyToken} from "../common/utils/MyToken"

export class TokenController {
  async getToken (ctx) {
    const token = await
      new MyToken($config.SCOPE.SUPER).get(ctx.checkedParams)
    throw new SuccessMessage({
      data: token
    })
  }

  checkToken (ctx) {
    MyToken.isSuper(ctx)
    throw new SuccessMessage({
      data: {isValid: true}
    })
  }
}
