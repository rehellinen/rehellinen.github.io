/**
 *  ArticleRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:59
 */
import {controller, get} from "../common/decorator/router"
import {ArticleController} from "../controller/ArticleController"
import {auth} from "../common/decorator/middleware"

@controller('article')
class TokenRouter {
  @get('all')
  @auth('super')
  async getArticle (ctx, next) {
    await ArticleController.getArticles(ctx, next)
  }
}
