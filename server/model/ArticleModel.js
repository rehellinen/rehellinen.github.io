/**
 *  ArticleModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:58
 */
import {BaseModel} from "./BaseModel"

export class ArticleModel extends BaseModel{
  constructor () {
    super()

    this.model = this.db.Model.extend({
      tableName: 'article'
    })
  }

  getArticles () {
    return this.getAll(
      ['status', '>', -1],
      [],
      ['listorder']
    )
  }
}
