<template lang="pug">
  el-dialog(
    :title="title"
    :visible.sync="visible"
    width="30%"
  )
    span {{content}}
    span(slot="footer" class="dialog-footer")
      el-button(@click="closeDialog") 取消
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeDialog () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
