<template lang="pug">
  div.card
    router-link(:to="{path: `/detail/${article.id}`}" tag="div")
      el-row.article(:gutter="40")
        el-col(:span="8" :xs="24")
          div.background
            div.main-img(:style="imgStyle(article)")
        el-col(:span="16" :xs="24")
          div.text-container
            p.title {{article.title}}
            p.subtitle {{article.subtitle}}
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
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

  .article
    .main-img
      height: 0
      padding-bottom: 60%
      background-size: cover
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
