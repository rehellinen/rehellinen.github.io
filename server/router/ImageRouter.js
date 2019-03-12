/**
 *  ImageRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/11 21:12
 */
import {controller, post} from "../common/decorator/router"
import {auth, middleware} from "../common/decorator/middleware"
import {ImageController} from "../controller/ImageController"
import {upload} from "../common/service/Multer"

@controller('image')
class ImageRouter {
  @post('')
  // @auth('super')
  @middleware(upload)
  async addImage (ctx, next) {
    await new ImageController().addImage(ctx, next)
  }
}
