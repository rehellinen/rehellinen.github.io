<template lang="pug">
  div.article-container
    article-card(v-for="article in articles" :article="article" :key="article.id")
</template>

<script>
import { ArticleModel } from '../../pages/index/model/ArticleModel'
import ArticleCard from '../../base/article-card/article-card'

const article = new ArticleModel()

export default {
  components: {
    ArticleCard
  },
  data () {
    return {
      articles: []
    }
  },
  async created () {
    this.articles = await article.getArticles()
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .one-article
    a
      text-decoration: none

</style>
