<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
        my-article
      el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
        my-article
      el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
        my-article
      el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
        my-article
      el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
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
