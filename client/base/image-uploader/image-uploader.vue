<template lang="pug">
  div.upload
    el-upload(
      action="http://127.0.0.1:9528/image"
      name="image"
      :on-preview="handlePreview",
      :file-list="fileList"
    )
      el-button(size="small" type="primary") 点击上传
</template>

<script>
  import {ImageModel} from "../../model/ImageModel"

  const imageModel = new ImageModel()

  export default {
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      handlePreview (file) {
        console.log(file)
      },
      async processImage (event) {
        const image = event.target.files[0]
        // 获取上传图片的URL
        const fr = new FileReader()
        fr.readAsDataURL(image)
        fr.onloadend = async (e) => {
          this.image = e.target.result

          let formData = new FormData()
          formData.append('image', this.image, 'test.jpg')

          const res = await imageModel.uploadImage(formData)
          this.$emit('uploaded', {image: res.data})
        }
      }
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .upload
    position: relative
    display: flex
    flex-direction: column
    img
      max-width: 200px
      margin-top: 10px
    input
      position: absolute
      left: 0
      top: 0
      opacity: 0
      -ms-filter: 'alpha(opacity=0)'
      height: 40px
    .upload-button
      border-radius: 5px
      background-color: $theme-color
      color: white
      padding: 5px 0
      margin-top: 5px
      font-size: 10px
      width: 80px
      letter-spacing: 1px
      height: 15px
      display: flex
      justify-content: center
      align-items: center
</style>
