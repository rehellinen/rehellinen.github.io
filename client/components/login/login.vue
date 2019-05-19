<template lang="pug">
  div.container
    my-dialog(:visible="visible"
    :title="title"
    :content="content",
    :cb="cb"
    @close="closeDialog")
    el-form(ref="form" :model="form" label-width="80px")
      p.title 管理员登录
      el-form-item(label="账号：")
        el-input(v-model="form.name")

      el-form-item(label="密码：")
        el-input(v-model="form.password" show-password)

      el-form-item
        el-button(@click="onSubmit") 登录
</template>

<script>
import { dialogMixin } from '../../pages/cms/mixins/dialogMixin'
import { cmsMixin } from '../../pages/cms/mixins/cmsMixin'
import { Token } from '../../pages/cms/utils/Token'

export default {
  mixins: [dialogMixin, cmsMixin],
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
      this.openDialog('提示', res.message,
        () => {
          if (res.status === 1) this.$router.push('/')
          else this.closeDialog()
        }, true
      )
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .container
    padding: 0 10%
    .el-form
      max-width: 500px
    .title
      color: $main-font-color
      font-size: $vast-font-size
      font-weight: bold
      margin-bottom: 15px
      margin-left: 80px
</style>
