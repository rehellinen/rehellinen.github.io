<template lang="pug">
  div
    my-dialog(:visible="visible"
    :title="title"
    :content="content"
    @close="closeDialog")
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
  import {dialogMixin} from "../../utils/mixins"
  import {Token} from "../../utils/Token"

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
      async onSubmit (e) {
        const res = await new Token(this.form.name, this.form.password)
          .getTokenFromServer()
        if (res.status === 1) this.$router.push('/cms')
        this.openDialog('提示', res.message)
      }
    },
    mixins: [dialogMixin]
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
