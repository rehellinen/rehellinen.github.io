<template lang="pug">
  div
    el-row(:gutter="10")
      my-article
      my-article
      my-article
      my-article
      my-article
      my-article
</template>

<script>
  import MyArticle from '../article/article'
  export default {
    components: {
      MyArticle
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-col
    height: 100%
</style>
