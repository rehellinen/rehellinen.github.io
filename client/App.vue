<template lang="pug">
  el-container.container
    el-header(height="120px")
      my-header
    el-main
      router-view
    el-footer
      my-footer
</template>

<script>
  import MyHeader from './components/header/header'
  import MyMain from './components/main/main'
  import MyFooter from './components/footer/footer'

  export default {
    components: {
      MyHeader,
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
      padding: 20px 10%
      background-color: $background-color
    .main
      width: 100%
    .el-footer
      padding: 0
  .de
</style>
