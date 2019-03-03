<template lang="pug">
  div.container
    img(src="/assets/images/12.png")
    div.time
      p.day 16
      p.month May
    p.title 这是标题
    p.desc 这是简介这是简介这是简介这是简介
</template>

<script>
export default {
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .container
    display: flex
    flex-direction: column
    position: relative
    margin-bottom: 20px
    img
      width: 100%
      min-height: 200px
    .title
      color: $normal-font-size
      font-size: $big-font-size
      margin-top: 5px
    .desc
      color: $minor-font-color
      margin-top: 5px
    .time
      position: absolute
      top: 5px
      left: 10px
      background-color: white
      padding: 5px 15px
      .day
        font-size: $bigger-font-size
        line-height: $biggest-font-size
        font-weight: bold
      .month
        font-size: $small-font-size
        line-height: $small-font-size
  .de
</style>
