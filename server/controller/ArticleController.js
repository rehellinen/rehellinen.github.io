import {SuccessMessage} from "../common/exception/SuccessMessage"
import {ArticleModel} from "../model/ArticleModel"
import {BaseController} from "./BaseController"

/**
 *  ArticleController.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:59
 */
export class ArticleController extends BaseController{
  constructor () {
    super(new ArticleModel())
  }

  async getArticles (ctx) {
    const data = await this.model.getArticles()
    throw new SuccessMessage({
      message: '获取文章成功',
      data
    })
  }

  async getAllArticles (ctx) {
    const data = await this.model.getAllArticles()
    throw new SuccessMessage({
      message: '获取文章成功',
      data
    })
  }

  async addArticles (ctx, next) {
    await this.model.addArticles(ctx.checkedParams)
    throw new SuccessMessage({
      message: '添加文章成功'
    })
  }

  async editArticles (ctx, next) {
    const id = ctx.checkedParams.id
    await this.model.editArticles(id, ctx.checkedParams)
    throw new SuccessMessage({
      message: '编辑文章成功'
    })
  }

  async delArticles(ctx, next) {
    const id = ctx.checkedParams.id
    await this.model.delArticles(id)
    throw new SuccessMessage({
      message: '删除文章成功'
    })
  }

  async getPopularArticles (ctx, next) {
    const data = await this.model.getPopularArticles()
    throw new SuccessMessage({
      message: '获取文章成功',
      data: data.slice(0, 4)
    })
  }

  async getById (ctx, next) {
    const id = ctx.checkedParams.id
    let data = await this.model.getOneById({
      id, condition: {status: $config.STATUS.NORMAL}
    })
    this.model._processArticle(data)

    throw new SuccessMessage({
      message: '获取数据成功',
      data
    })
  }
}

