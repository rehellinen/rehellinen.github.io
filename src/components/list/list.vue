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
  import MyArticle from '../article/article'
  export default {
    components: {
      MyArticle
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
