<template lang="pug">
  div.detail
    img.main-img(:src="article.main_img_url")
    p.title {{article.title}}
    p.sub-title {{article.subtitle}}
    .line
    p.content(v-html="article.content")
</template>

<script>
  import {ArticleModel} from "../../model/ArticleModel"

  const article = new ArticleModel()

  export default {
    data () {
      return {
        article: {}
      }
    },
    created () {
      const articleId = this.$route.params.article_id
      this.getData(articleId)
    },
    methods: {
      async getData (id) {
        this.article = await article.getById(id)
      }
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .detail
    width: 75%
    .main-img
      width: 100%
    .title
      color: $main-font-color
      font-size: $bigger-font-size
      font-weight: bold
      letter-spacing: 2px
      margin-top: 20px
    .sub-title
      color: $minor-font-color
      margin-top: 5px
    .content
      margin: 20px 0

  .de
</style>
