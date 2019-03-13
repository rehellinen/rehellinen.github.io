/**
 *  ArticleModel.js
 *  Create By rehellinen
 *  Create On 2019/3/4 17:58
 */
import {BaseModel} from "./BaseModel"
import config from "../utils/config"

export class ArticleModel extends BaseModel{
  constructor () {
    super({
      tableName: 'article'
    })
  }

  getArticles () {
    return this.getAll({
      condition: {status: config.STATUS.NORMAL},
      order: ['order']
    })
  }

  getAllArticles () {
    return this.getAll({
      condition: ['status', '>', config.STATUS.DELETED],
      order: ['order']
    })
  }

  getPopularArticles () {
    return this.getAll({
      condition: {status: config.STATUS.NORMAL},
      order: ['count', 'order', 'id']
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
