import {SuccessMessage} from "../common/exception/SuccessMessage"
import {ArticleModel} from "../model/ArticleModel"

/**
 *  ArticleController.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:59
 */
export class ArticleController {
  static async getArticles (ctx) {
    const data = await new ArticleModel().getArticles()
    throw new SuccessMessage({ data })
  }
}

