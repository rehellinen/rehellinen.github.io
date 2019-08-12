<template lang="pug">
  el-container.wrapper
    el-header(height="200px")
      my-header(:showMenu="true")
    el-main
      my-main
    el-footer(height="240px")
      my-footer
</template>

<script>
import MyMain from '../../components/main/main'
import MyHeader from '../../components/header/header'
import MyFooter from '../../components/footer/footer'

export default {
  components: {
    MyHeader,
    MyFooter,
    MyMain
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~sass/reset"
  @import "~sass/base"
  .wrapper
    min-height: 100vh
    font-family: "Microsoft YaHei"
    .el-header
      padding: 0
      border-bottom: 1px solid $border-one
    .el-main
      background-color: $background-color
      padding: 30px 10% 0 10%
    .el-footer
      padding: 0
    p
      font-size: $normal-font-size
      color: $normal-font-color
    .line
      height: 1px
      background-color: $border-one
      width: 100%
      margin: 20px 0
  .de
</style>
