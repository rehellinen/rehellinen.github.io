<template lang="pug">
  div
    el-row(:gutter="10")
      article-main(v-for="article in articles" :article="article" :key="article.id")
</template>

<script>
  import ArticleMain from '../../base/article-main/article-main'
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
      ArticleMain
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-col
    height: 100%
</style>
