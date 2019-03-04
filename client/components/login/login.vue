<template lang="pug">
  div
    p.title 管理员登录
    el-form(ref="form" :model="form" label-width="80px")
      el-form-item(label="账号：")
        el-input(v-model="form.name")

      el-form-item(label="密码：")
        el-input(v-model="form.password")

      el-form-item
        el-button(@click="onSubmit") 登录
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (e) {
      console.log(this.form.name)
      console.log(this.form.password)
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
    text-align: center
    margin-bottom: 25px
</style>
