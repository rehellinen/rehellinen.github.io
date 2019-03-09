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

  static async getArticles (ctx) {
    const data = await this.model.getArticles()
    throw new SuccessMessage({
      message: '获取文章成功',
      data
    })
  }
}

