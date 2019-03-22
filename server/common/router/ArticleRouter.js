/**
 *  ArticleRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:59
 */
import {controller, del, get, post, put} from "../../libs/decorator/router"
import {ArticleController} from "../../controller/ArticleController"
import {auth, validate} from "../../libs/decorator/decorator"

const article = new ArticleController()

@controller('article')
class TokenRouter {
  @get('')
  async getArticle (ctx, next) {
    await article.getArticles(ctx, next)
  }

  @get('all')
  @auth('super')
  async getAllArticle (ctx, next) {
    await article.getAllArticles(ctx, next)
  }

  @get('one')
  @validate({name: 'Common', scene: 'id'})
  async getArticleById (ctx, next) {
    await article.getById(ctx, next)
  }

  @get('popular')
  async getPopularArticles (ctx, next) {
    await article.getPopularArticles(ctx, next)
  }

  @put('')
  // @auth('super')
  @validate({name: 'Article', scene: 'edit'})
  async edit (ctx, next) {
    await article.editArticles(ctx, next)
  }

  @post('')
  @auth('super')
  @validate({name: 'Article', scene: 'add'})
  async add (ctx, next) {
    await article.addArticles(ctx, next)
  }

  @del('')
  @auth('super')
  @validate({name: 'Article', scene: 'del'})
  async del (ctx, next) {
    await article.delArticles(ctx, next)
  }

  @put('/status')
  @auth('super')
  @validate({name: 'Common', scene: 'status'})
  changeStatus (ctx, next) {
    return article.changeStatus(ctx, next)
  }

  @put('/order')
  @auth('super')
  @validate({name: 'Common', scene: 'order'})
  changeOrder (ctx, next) {
    return article.changeOrder(ctx, next)
  }
}
