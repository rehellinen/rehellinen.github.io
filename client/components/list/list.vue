<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:span="8")
        my-article
      el-col(:span="8")
        my-article
      el-col(:span="8")
        my-article
      el-col(:span="8")
        my-article
      el-col(:span="8")
        my-article
      el-col(:span="8")
        my-article
</template>

<script>
  import ArticleList from '../../base/article-list/article-list'
  export default {
    components: {
      ArticleList
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
