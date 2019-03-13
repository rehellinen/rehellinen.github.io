<template lang="pug">
  div.article-container
    router-link.article(:to="{path: `/detail/${article.id}`}" tag="div")
      div.zoom
        div(:style="imgStyle")
      div.text-container
        p.title {{article.title}}
        p.subtitle {{article.subtitle}}
    div.line
</template>

<script>
export default {
  computed: {
    imgStyle () {
      return {
        'background-image': `url(${this.article.main_img_url})`
      }
    }
  },
  props: {
    article: {
      type: Object,
      default: () => ({})
    },
  },
  methods: {
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .article-container
    display: flex
    flex-direction: column
    a
      text-decoration: none

  .article
    display: flex
    .zoom
      width: 400px
      div
        width: 100%
        height: 0
        padding-bottom: 50%
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
  .de
</style>
