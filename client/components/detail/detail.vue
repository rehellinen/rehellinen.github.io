<template lang="pug">
  div.detail-container
    img.main-img(:src="article.main_img_url")
    p.title {{article.title}}
    p.sub-title {{article.subtitle}}
    .line
    div.ql-container.ql-snow.no-border
      div.ql-editor.content(v-html="article.content")
</template>

<script>
import { ArticleModel } from '../../model/ArticleModel'
import 'quill/dist/quill.snow.css'

const article = new ArticleModel()

export default {
  data () {
    return {
      article: {}
    }
  },
  watch: {
    $route (newRoute) {
      const articleId = newRoute.params.article_id
      this.getData(articleId)
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

  .detail-container
    display: flex
    flex-direction: column
    .main-img
      width: 100%
      border: 5px solid $border-three
    .title
      color: $main-font-color
      font-size: $bigger-font-size
      font-weight: bold
      letter-spacing: 2px
      margin-top: 20px
    .sub-title
      color: $minor-font-color
      margin-top: 5px
    .no-border
      border: 0
      .content
        margin-bottom: 20px
        padding: 0
    .side-bar
      width: 30%
    .de
</style>
