/**
 *  ArticleRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:59
 */
import {controller, get} from "../common/decorator/router"
import {ArticleController} from "../controller/ArticleController"

@controller('article')
class TokenRouter {
  @get('')
  async getToken (ctx, next) {
    await ArticleController.getArticles(ctx, next)
  }
}
