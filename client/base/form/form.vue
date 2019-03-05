<template lang="pug">
  div
    p.title {{title}}
    el-form(ref="form" :model="form" label-width="80px")
      el-form-item(v-for="(label, name, index) in config"
        :label="label" :key="index")
        el-input(v-model="form[name]")

      el-form-item
        el-button(@click="onSubmit") {{buttonText}}
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  props: {
    config: {
      type: Object,
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
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .title
    color: $main-font-color
    font-size: $vast-font-size
    font-weight: bold
    margin-left: 80px
    margin-bottom: 25px
</style>
