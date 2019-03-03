<template lang="pug">
  el-container.container
    el-header(height="80px")
      my-header
    el-container.main
      el-aside
        my-menu
      el-main Main
    el-footer Footer
</template>

<script>
  import MyHeader from './components/Header/Header'
  import MyMenu from './components/Menu/Menu'
  export default {
    components: {
      MyHeader,
      MyMenu
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">
  @import "~sass/reset"
  .container
    min-height: 100vh
    .el-header
      padding: 0
    .main
      width: 100%
  .de
</style>
