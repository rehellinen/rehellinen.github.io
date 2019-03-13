<template lang="pug">
  div.article-container
    div.one-article(v-for="article in articles" :article="article" :key="article.id")
      router-link.article(:to="{path: `/detail/${article.id}`}" tag="div")
        div.zoom
          div(:style="imgStyle(article)")
        div.text-container
          p.title {{article.title}}
          p.subtitle {{article.subtitle}}
      div.line
</template>

<script>
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
    methods: {
      imgStyle (article) {
        return {
          'background-image': `url(${article.main_img_url})`
        }
      }
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .one-article
    display: flex
    flex-direction: column
    a
      text-decoration: none
    .article
      display: flex
      .zoom
        width: 350px
        div
          width: 100%
          height: 0
          padding-bottom: 55%
          overflow: hidden
          background: no-repeat center center
          background-size: cover
      .text-container
        margin-left: 6%
        .title
          font-size: $bigger-font-size
          font-weight: bold
        .subtitle
          font-size: $normal-font-color
          color: $minor-font-color
          margin-top: 5px
</style>
