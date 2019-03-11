/**
 *  Article.js
 *  Create By rehellinen
 *  Create On 2019/3/8 22:35
 */
import {BaseModel} from "./BaseModel"

export class ArticleModel extends BaseModel{
  constructor () {
    super('article')
  }

  async getAllArticles () {
    return await this.request({url: 'article/all'})
  }

  async getArticles () {
    return await this.request({url: 'article'})
  }
}
