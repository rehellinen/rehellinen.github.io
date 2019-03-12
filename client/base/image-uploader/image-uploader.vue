<template lang="pug">
  div.upload
    el-upload(
      action="http://127.0.0.1:9528/image"
      name="image"
      list-type="picture"
      :on-success="uploadSuccess",
      :on-error="uploadError"
      :file-list="fileList"
    )
      el-button(size="small" type="primary") 点击上传
</template>

<script>
  export default {
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      uploadSuccess (response, file, fileList) {
        this.$emit('uploaded', response.data)
      },
      uploadError (err, file, fileList) {
        console.log(err)
      },
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
