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
      main_img_url: ['require', 'main_img_url'],
    }

    this.scene = {
      add: ['title', 'subtitle', 'content', 'main_img_url'],
      edit: ['id', 'title', 'subtitle', 'content', 'main_img_url'],
      del: ['id']
    }
  }
}
