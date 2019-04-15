<template lang="pug">
  div
    div.no-article(v-if="articles.length === 0")
      p 暂无文章
    article-card(v-for="article in articles" :article="article" :key="article.id")
</template>

<script>
  import {ArticleModel} from "../../model/ArticleModel"
  import ArticleCard from '../../base/article-card/article-card'

  const article = new ArticleModel()

  export default {
    data () {
      return {
        articles: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      async getData () {
        const menuUrl = this.$route.path.split('/').pop()
        this.articles = await article.getMenuArticles(menuUrl)
      }
    },
    watch: {
      $route () {
        this.getData()
      }
    },
    components: {
      ArticleCard
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .no-article
    display: flex
    justify-content: center

</style>
