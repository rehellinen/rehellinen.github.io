<template lang="pug">
  router-view
</template>

<script>
  import LeftMenu from '../left-menu/left-menu'
  export default {
    components: {
      LeftMenu
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-container
    height: 100%
    .cms-main
      padding: 20px 15px 10px 15px
</style>
