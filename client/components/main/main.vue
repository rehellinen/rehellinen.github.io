<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:xl="18" :lg="18" :md="17" :sm="24" :xs="24")
        router-view
      el-col.hidden-sm-and-down(:xl="6" :lg="6" :md="7")
        side-bar
</template>

<script>
  import SideBar from '../../base/side-bar/side-bar'
  import 'element-ui/lib/theme-chalk/display.css'

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
