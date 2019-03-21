/**
 *  ParamException.js
 *  Create By rehellinen
 *  Create On 2018/10/13 10:34
 */
import {Exception} from "../../libs/exception/Exception"

export class ParamsException extends Exception{
  constructor(config) {
    super(config)
    if (!this.httpCode) this.httpCode = 400
    if (!this.status) this.status = 10000
    if (!this.message) this.message = '参数错误'
  }
}
