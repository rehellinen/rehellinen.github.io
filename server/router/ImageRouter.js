/**
 *  ImageRouter.js
 *  Create By rehellinen
 *  Create On 2019/3/11 21:12
 */
import {controller, post} from "../common/decorator/router"
import {auth} from "../common/decorator/middleware"
import {ImageController} from "../controller/ImageController"

@controller('image')
class ImageRouter {
  @post('')
  // @auth('super')
  async addImage (ctx, next) {
    await new ImageController().addImage(ctx, next)
  }
}
