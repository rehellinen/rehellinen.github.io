<template lang="pug">
  el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="24")
    img(:src="img_url")
    div.time
      p.day {{day}}
      p.month {{month}}
    p.title {{title}}
    p.desc {{subtitle}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    month: {
      type: String,
      default: ''
    },
    day: {
      type: String,
      default: ''
    },
    img_url: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .el-col
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
        margin-top: 3px
  .de
</style>
