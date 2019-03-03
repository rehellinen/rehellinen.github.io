<template lang="pug">
  el-container.container
    el-header
      my-header
    el-container.main
      el-aside(width="200px") Aside
      el-container
        el-main Main
        el-footer Footer
      el-container
</template>

<script>
  import MyHeader from './components/Header/Header'
  export default {
    components: {
      MyHeader
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
