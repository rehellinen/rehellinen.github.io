/**
 *  ImageRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/11 21:12
 */
import {controller, post} from "../../libs/decorator/router"
import {auth, middleware} from "../../libs/decorator/decorator"
import {ImageController} from "../../controller/ImageController"
import {upload} from "../../libs/utils/multer"

@controller('image')
class ImageRouter {
  @post('')
  @auth('super')
  @middleware(upload)
  async addImage (ctx, next) {
    await new ImageController().addImage(ctx, next)
  }
}
