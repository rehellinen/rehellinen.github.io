<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:span="16")
        router-view
      el-col(:span="8")
        side-bar
</template>

<script>
  import SideBar from '../../base/side-bar/side-bar'


  export default {
    components: {
      SideBar
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-col
    height: 100%
</style>
