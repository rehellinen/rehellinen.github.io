/**
 *  ImageController.js
 *  Create By rehellinen
 *  Create On 2019/3/11 21:13
 */
import {r} from "../utils/utils"
import Multer from 'koa-multer'
import {SuccessMessage} from "../common/exception/SuccessMessage"

const date = new Date()
const storage = Multer.diskStorage({
  destination: r(`../../upload/${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`),
  filename (ctx, file, cb) {
    const filenameArr = file.originalname.split('.');
    cb(null, Date.now() + '.' + filenameArr[filenameArr.length - 1]);
  }
})
export const upload = Multer({storage})

export class ImageController {
  addImage (ctx, next) {
    upload.single('image')(ctx, next)
    throw new SuccessMessage()
  }
}
