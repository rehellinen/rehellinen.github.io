<template lang="pug">
  div.form-container
    p.title {{title}}
    el-form(ref="data" :model="data" label-width="80px")
      el-form-item(
        v-for="(conf, index) in config"
        :label="conf.label"
        :key="index"
      )
        el-input(
          v-if="!conf.type || conf.type === inputType.INPUT"
          v-model="data[conf.name]"
        )

        el-select(
          v-if="conf.type === inputType.SELECT"
          v-model="data[conf.name]"
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
          @blur="editorBlur"
        )
      el-form-item
        el-button(@click="onSubmit") {{buttonText}}
</template>

<script>
  import config from '../../utils/config'
  import MyEditor from '../../base/editor/editor'

  export default {
    data () {
      return {
        inputType: config.FORM
      }
    },
    props: {
      config: {
        type: Array,
        default: () => ({})
      },
      title: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: '提交'
      },
      data: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      onSubmit () {
        this.$emit('submit', this.data)
      },
      editorBlur (e) {
        const name = this.$refs.editor[0].$attrs['data-name']
        this.data[name] = e.content
      }
    },
    components: {
      MyEditor
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
