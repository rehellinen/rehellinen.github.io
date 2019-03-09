/**
 *  Article.js
 *  Create By rehellinen
 *  Create On 2019/3/8 22:35
 */
import {BaseModel} from "./BaseModel"

export class ArticleModel extends BaseModel{
  async getAllArticles () {
    return await this.request({url: 'article/all'})
  }
}
