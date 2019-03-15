/**
 *  ImageModel.js
 *  Create By rehellinen
 *  Create On 2019/3/12 9:51
 */
import {BaseModel} from "./BaseModel"

export class ImageModel extends BaseModel{
  constructor() {
    super('image')
    this.imageUrl = 'image'
  }


  async uploadImage (formData) {
    return await this.request({
      url: this.imageUrl,
      method: 'post',
      reqData: formData,
      contentType: 'application/x-www-form-urlencoded'
    })
  }
}
