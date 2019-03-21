import {Exception} from "../../libs/exception/Exception"

export class SuccessMessage extends Exception{
  constructor(config) {
    super(config)
    if (!this.httpCode) this.httpCode = 200
    if (!this.status) this.status = 1
    if (!this.message) this.message = '请求成功'
  }
}
