<template lang="pug">
  div.form-container
    p.title {{title}}
    el-form(ref="data" :model="formData" label-width="80px")
      el-form-item(
        v-for="(conf, index) in config"
        :label="conf.label"
        :key="index"
      )
        el-input(
          v-if="!conf.type || conf.type === inputType.INPUT"
          v-model="formData[conf.name]"
        )

        el-select(
          v-if="conf.type === inputType.SELECT"
          v-model="formData[conf.name]"
        )
          el-option(
            v-for="(item, i) in conf.options"
            :label="item.label"
            :value="item.value"
            :key="i"
          )

        my-editor.editor(
          ref="editor"
          v-if="conf.type === inputType.EDITOR",
          :data-name="conf.name"
          @change="editorChange"
        )

        my-image-uploader(
          ref="image"
          v-if="conf.type === inputType.IMAGE",
          :data-name="conf.name"
          :initialVal="formData[conf.name]"
          @uploaded="imageUploaded"
        )
      el-form-item
        el-button(@click="onSubmit") {{buttonText}}
</template>

<script>
  import config from '../../utils/config'
  import MyEditor from '../editor/editor'
  import MyImageUploader from '../image-uploader/image-uploader'

  export default {
    mounted () {
      for (let conf of this.config) {
        if (conf.type === config.FORM.EDITOR) {
          this.$refs.editor[0].setContent(this.formData[conf.name])
        }

        if (conf.type === config.FORM.IMAGE) {
          this.$refs.image[0].setImgUrl(this.formData[conf.name])
        }
      }
    },
    data () {
      return {
        inputType: config.FORM
      }
    },
    props: {
      config: {
        type: Array,
        default: () => ([])
      },
      title: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: '提交'
      },
      formData: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      onSubmit () {
        this.$emit('submit', this.formData)
      },
      editorChange (e) {
        const name = this.$refs.editor[0].$attrs['data-name']
        this.formData[name] = e.content
      },
      imageUploaded (e) {
        const name = this.$refs.image[0].$attrs['data-name']
        this.formData[name] = e.path
      }
    },
    components: {
      MyEditor,
      MyImageUploader
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .form-container
    max-width: 500px
    .title
      color: $main-font-color
      font-size: $vast-font-size
      font-weight: bold
      margin: 20px 0 20px 80px
    .el-select
      width: 100%
    .editor
      width: 550px
</style>
