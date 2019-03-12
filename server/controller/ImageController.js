/**
 *  ImageController.js
 *  Create By rehellinen
 *  Create On 2019/3/11 21:13
 */
import {SuccessMessage} from "../common/exception/SuccessMessage"
import {fileName} from "../common/service/Multer"

export class ImageController {
  async addImage (ctx, next) {
    const date = new Date()
    const today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`
    throw new SuccessMessage({
      message: '上传图片成功',
      data: {
        path: `/upload/${today}/${fileName}`
      }
    })
  }
}
