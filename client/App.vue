<template lang="pug">
  el-container.wrapper
    el-header(height="200px")
      my-header
    el-main
      router-view
    el-footer(height="240px")
      my-footer
</template>

<script>
  import MyHeader from './components/header/header'
  import MyFooter from './components/footer/footer'
  import LeftMenu from './components/left-menu/left-menu'

  export default {
    components: {
      MyHeader,
      MyFooter,
      LeftMenu
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~sass/reset"
  @import "~sass/base"
  .wrapper
    min-height: 100vh
    .el-header
      padding: 0
      border-bottom: 1px solid $border-one
    .el-main
      background-color: $background-color
      padding: 30px 15% 0 15%
    .el-footer
      padding: 0
  .de
</style>
