<template lang="pug">
  el-menu(:default-active="1" class="el-menu-demo" mode="horizontal" @select="")
    el-menu-item(index="1") JavaScript
    el-menu-item(index="2") Webpack
    el-menu-item(index="3") Node.js
    el-menu-item(index="5") About Me
</template>

<script>
export default {
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-menu
    border: 0
</style>
