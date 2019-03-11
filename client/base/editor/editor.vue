<template lang="pug">
  quill-editor(
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
  )
</template>

<script>
  import {quillEditor} from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  export default {
    data () {
      return {
        content: '',
        editorOption: {
        }
      }
    },
    methods: {
      onEditorBlur(quill) {
        this.$emit('blur', {content: this.content})
      },
    },
    components: {
      quillEditor
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
