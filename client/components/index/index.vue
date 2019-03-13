<template lang="pug">
  div.article-container
    div.one-article(v-for="article in articles" :article="article" :key="article.id")
      router-link(:to="{path: `/detail/${article.id}`}" tag="div")
        el-row.article(:gutter="40")
          el-col(:span="12" :xs="24")
            div.background
              div.main-img(:style="imgStyle(article)")
          el-col(:span="12" :xs="24")
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
      .main-img
        width: 100%
        height: 0
        padding-bottom: 60%
        background-size: cover
        margin: 10px 0
        border: 5px solid $border-three
      .text-container
        .title
          font-size: $bigger-font-size
          font-weight: bold
        .subtitle
          font-size: $normal-font-color
          color: $minor-font-color
          margin-top: 5px
</style>
