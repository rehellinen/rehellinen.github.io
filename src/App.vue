<template lang="pug">
  el-container.container
    el-header(height="120px")
      my-header
    el-container.main
      el-aside(width="250px")
        my-menu
      el-main
        my-main
    el-footer
      my-footer
</template>

<script>
  import MyHeader from './components/Header/Header'
  import MyMenu from './components/Menu/Menu'
  import MyMain from './components/Main/Main'
  import MyFooter from './components/Footer/Footer'

  export default {
    components: {
      MyHeader,
      MyMenu,
      MyMain,
      MyFooter
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~sass/reset"
  @import "~sass/base"
  .container
    /*min-height: 100vh*/
    .el-header
      padding: 0
      border-bottom: 1px solid $border-one
    .el-main
      background-color: $background-color
    .main
      width: 100%
    .el-footer
      padding: 0
  .de
</style>
