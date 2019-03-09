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
      condition: {status: 1},
      order: ['order']
    })
  }

  getAllArticles () {
    return this.getAll({
      condition: ['status', '>', -1],
      order: ['order']
    })
  }

  async addArticles (data) {
    return await this.saveOne(data)
  }

  async editArticles (id, data) {
    return await this.editOne({
      condition: {id},
      data
    })
  }

  async delArticles (id) {
    return await this.deleteById(id)
  }
}
