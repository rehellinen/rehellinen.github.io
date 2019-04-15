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

  async getArticles () {
    return await this.request({url: 'article'})
  }

  async getPopularArticles () {
    return await this.request({url: 'article/popular'})
  }

  async getMenuArticles (name) {
    return await this.request({
      url: 'article/menu',
      reqData: {name}
    })
  }
}
