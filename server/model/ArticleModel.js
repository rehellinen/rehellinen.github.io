/**
 *  ArticleModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:58
 */
import {BaseModel} from "./BaseModel"

export class ArticleModel extends BaseModel{
  constructor () {
    super({
      tableName: 'article'
    })
  }

  getArticles () {
    return this.getAll({
      condition: ['status', '>', -1],
      order: ['order']
    })
  }
}
