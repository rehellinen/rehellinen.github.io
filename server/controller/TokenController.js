/**
 *  Token.js
 *  Create By rehellinen
 *  Create On 2018/10/26 14:59
 */
import {SuccessMessage} from "../common/exception/SuccessMessage"
import {Token} from "../common/service/Token"

export class TokenController {
  static async getToken (ctx) {
  }

  static checkToken (ctx) {
    Token.checkToken(ctx)
    throw new SuccessMessage()
  }
}
