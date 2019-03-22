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

  async getArticles () {
    const articles = await this.getAll({
      condition: {status: $config.STATUS.NORMAL},
      order: ['order']
    })
    articles.forEach(item => this._processArticle(item))
    return articles
  }

  async getAllArticles () {
    const articles = await this.getAll({
      condition: ['status', '>', $config.STATUS.DELETED],
      order: ['order']
    })
    articles.forEach(item => this._processArticle(item))
    return articles
  }

  async getPopularArticles () {
    const articles = await this.getAll({
      condition: {status: $config.STATUS.NORMAL},
      order: ['count', 'order', 'id']
    })

    articles.forEach(item => this._processArticle(item))
    return articles
  }

  _processArticle (article) {
    article.main_img_url = $config.IMAGE_PREFIX + article.main_img_url
    article.main_img_url = article.main_img_url.replace(/\/upload/, '')
  }

  async addArticles (data) {
    return await this.saveOne(data)
  }

  async editArticles (id, data) {
    data.main_img_url = data.main_img_url.replace(/http.*\.(cn|com)/g, '')
    console.log(data.main_img_url)
    return await this.editOne({
      condition: {id},
      data
    })
  }

  async delArticles (id) {
    return await this.deleteById(id)
  }
}
