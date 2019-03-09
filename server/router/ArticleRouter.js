/**
 *  ArticleRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:59
 */
import {controller, get} from "../common/decorator/router"
import {ArticleController} from "../controller/ArticleController"
import {auth} from "../common/decorator/middleware"

const article = new ArticleController()

@controller('article')
class TokenRouter {
  @get('all')
  @auth('super')
  async getArticle (ctx, next) {
    await article.getArticles(ctx, next)
  }
}
