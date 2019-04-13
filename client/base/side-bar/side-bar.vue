<template lang="pug">
  div.side-bar-container
    div.recommend.card
      p.title Most Popular Articles
      router-link.article(
        v-for="article in popularArticles"
        :key="article.id"
        :to="{path: `/detail/${article.id}`}" tag="div"
      )
        img(:src="article.main_img_url")
        div.text-container
          p.title {{article.title}}
          p.subtitle {{article.subtitle}}
</template>

<script>
  import {ArticleModel} from "../../model/ArticleModel"

  const article = new ArticleModel()

  export default {
    created () {
      this._getData()
    },
    data () {
      return {
        popularArticles: []
      }
    },
    methods: {
      async _getData () {
        this.popularArticles = await article.getPopularArticles()
      }
    }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .side-bar-container
    padding-left: 10%
    .recommend
      display: flex
      flex-direction: column
      .title
        font-size: $big-font-size
        font-weight: bold
        color: $normal-font-color
  .article
    display: flex
    margin-top: 10px
    img
      width: 70px
      height: 70px
      object-fit: cover
      border: 3px solid $border-three
    .text-container
      margin-left: 15px
      .title
        font-size: $normal-font-size
        font-weight: bold
      .subtitle
        color: $minor-font-color
        font-size: $small-font-size
  .de
</style>
