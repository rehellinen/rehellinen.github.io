/**
 *  ArticleValidate.js
 *  Create By rehellinen
 *  Create On 2019/3/9 15:29
 */
import {Validate} from "../../libs/validate/Validate"

export class ArticleValidate extends Validate{
  constructor() {
    super()
    this.rules = {
      id: ['require', 'id'],
      title: ['require', 'title'],
      subtitle: ['require', 'subtitle'],
      content: ['require', 'content'],
      main_img_url: ['require', 'main_img_url'],
      menu_id: ['require', 'menu_id'],
    }

    this.scene = {
      add: ['title', 'subtitle', 'content', 'main_img_url', 'menu_id'],
      edit: ['id', 'title', 'subtitle', 'content', 'main_img_url', 'menu_id'],
      del: ['id']
    }
  }
}
