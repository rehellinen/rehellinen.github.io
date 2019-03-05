import {SuccessMessage} from "../common/exception/SuccessMessage"
import {MenuModel} from "../model/MenuModel"

/**
 *  MenuController.js
 *  Create By rehellinen
 *  Create On 2019/3/4 11:06
 */
export class MenuController {
  static async getMenu (ctx, next, type) {
    const data = await new MenuModel().getMenu(type)
    throw new SuccessMessage({ data })
  }
}
