<template lang="pug">
  div.upload
    el-upload(
      :action="uploadUrl"
      name="image"
      list-type="picture"
      :headers="header"
      :show-file-list="false"
      :on-success="uploadSuccess",
      :on-error="uploadError"
    )
      el-button(size="small" type="primary") 点击上传
    img(:src="imgUrl")
</template>

<script>
import config from '../../pages/cms/utils/config'
import { Token } from '../../pages/cms/utils/Token'

export default {
  data () {
    return {
      imgUrl: '',
      uploadUrl: '',
      header: {}
    }
  },
  async created () {
    this.uploadUrl = config.restUrl + '/image'
    this.header.token = await new Token().getTokenFromCache()
  },
  methods: {
    setImgUrl (url) {
      this.imgUrl = url
    },
    uploadSuccess (response, file, fileList) {
      this.imgUrl = file.url
      this.$emit('uploaded', response.data)
    },
    uploadError (err, file, fileList) {
      console.log(err)
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
