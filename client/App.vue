<template lang="pug">
  el-container.wrapper
    el-header(height="120px")
      my-header
    el-main
      router-view
    el-footer(height="170px")
      my-footer
</template>

<script>
  import MyHeader from './components/header/header'
  import MyFooter from './components/footer/footer'

  export default {
    components: {
      MyHeader,
      MyFooter
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
      padding: 20px 10px
      background-color: $background-color
    .el-footer
      padding: 0
  .de
</style>
