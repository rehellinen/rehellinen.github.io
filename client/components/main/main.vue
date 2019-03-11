<template lang="pug">
  div
    el-row(:gutter="10")
      my-article(v-for="article in articles" :article="article" :key="article.id")
</template>

<script>
  import MyArticle from '../../base/article/article'
  import {ArticleModel} from "../../model/ArticleModel"

  const article = new ArticleModel()

  export default {
    data () {
      return {
        articles: []
      }
    },
    async created () {
      this.articles = await article.getArticles()
    },
    components: {
      MyArticle
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-col
    height: 100%
</style>
