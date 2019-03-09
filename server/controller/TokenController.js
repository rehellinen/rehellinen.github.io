/**
 *  Token.js
 *  Create By rehellinen
 *  Create On 2018/10/26 14:59
 */
import {SuccessMessage} from "../common/exception/SuccessMessage"
import {Token} from "../common/service/Token"

export class TokenController {
  async getToken (ctx) {
    const token = await new Token().get(ctx.checkedParams)
    throw new SuccessMessage({
      data: token
    })
  }

  checkToken (ctx) {
    Token.checkToken(ctx)
    throw new SuccessMessage({
      data: {isValid: true}
    })
  }
}
