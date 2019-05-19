<template lang="pug">
  div
    div.no-article(v-if="articles.length === 0")
      p 暂无文章
    article-card(v-for="article in articles" :article="article" :key="article.id")
</template>

<script>
import { ArticleModel } from '../../pages/client/model/ArticleModel'
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
  watch: {
    $route () {
      this.getData()
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
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .no-article
    display: flex
    justify-content: center

</style>
