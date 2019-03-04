<template lang="pug">
  el-row(span="12")
    el-menu(
      default-active="1"
      class="el-menu-vertical-demo")
      el-menu-item(index="1")
        span(slot="title") 导航二
</template>

<script>
  export default {}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-row
    height: 100%
    .el-menu
      height: 100%
</style>
