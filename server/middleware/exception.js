import {types} from "../utils/mime"
import {BaseException} from "../common/exception/BaseException"

export const exception = (app) => {
  const processError = (e, ctx) => {
    if (e instanceof BaseException) {
      ctx.status = e.httpCode
      ctx.type = types.json
      ctx.body = e.getError()
    } else {
      if ($config.DEBUG) {
        console.log(e)
        ctx.status = 500
        ctx.type = types.json
        ctx.body = {
          status: 500,
          message: e.toString()
        }
      } else {
        ctx.body = '服务器内部错误'
      }
    }
  }

  const exceptionHandler = async (ctx, next) => {
    try {
      await next()
    } catch (e) {
      processError(e, ctx)
    }
  }
  app.use(exceptionHandler)
}
