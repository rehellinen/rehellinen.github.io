<template lang="pug">
  el-row(:gutter="20")
    el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
      div.index-card.color-one
        div.text-container
          p.title 文章数量
          p.count 123
    el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
      div.index-card.color-two
        div.text-container
          p.title 最大访问
          p.count 123
    el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
      div.index-card.color-three
        div.text-container
          p.title 最大访问
          p.count 123
    el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
      div.index-card.color-four
        div.text-container
          p.title 最大访问
          p.count 123
</template>

<script>
import { cmsMixin } from '../../pages/cms/mixins/cmsMixin'

export default {
  mixins: [cmsMixin]
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .index-card
    display: flex
    background-color: white
    padding: 15px 10px
    margin-bottom: 10px
    border-radius: 5px
    i
      font-size: 45px
      color: #c8c8c8
    p
      color: white
    .text-container
      margin-left: 25px
      padding-top: 5px
      .title
        font-size: $big-font-size
      .count
        font-size: $vast-font-size
  .color-one
    background-color: #7e9fcc
  .color-two
    background-color: #ba8bd1
  .color-three
    background-color: #fcb247
  .color-four
    background-color: #96b9e3
  .de
</style>
