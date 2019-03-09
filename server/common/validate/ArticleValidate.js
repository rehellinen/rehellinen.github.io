/**
 *  ArticleValidate.js
 *  Create By rehellinen
 *  Create On 2019/3/9 15:29
 */
import {BaseValidate} from "./BaseValidate"

export class ArticleValidate extends BaseValidate{
  constructor() {
    super()
    this.rules = {
      id: ['require', 'id'],
      title: ['require', 'title'],
      subtitle: ['require', 'subtitle'],
      content: ['require', 'content'],
    }

    this.scene = {
      add: ['title', 'subtitle', 'content'],
      edit: ['id', 'title', 'subtitle', 'content'],
      del: ['id']
    }
  }
}
