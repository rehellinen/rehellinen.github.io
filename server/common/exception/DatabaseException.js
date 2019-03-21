import {Exception} from "../../libs/exception/Exception"

export class DatabaseException extends Exception{
  constructor(config) {
    super(config)
    if (!this.httpCode) this.httpCode = 404
    if (!this.status) this.status = 40000
    if (!this.message) this.message = '获取数据失败'
  }
}
