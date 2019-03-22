<template lang="pug">
  .container
    .header
      p.name 陈棋轩
      p 求职意向：
        span 前端开发
      p Tel: 13229438008
      p Email: rehellinen@foxmail.com
    .main
      .title-container
        .dot
        .title
          p 教育背景
        //.line
    .de
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
    width: 100%
    .header
      background-color: $cv-color
      padding: 30px 0 15px 20px
      .name
        font-size: 30px
        font-weight: bold
        margin-bottom: 10px
        margin-left: 20px
      p
        color: white
    .main
      padding: 10px 10%
      .title-container
        display: flex
        justify-content: space-between
        align-items: center
        .dot
          background-color: $cv-color
          height: 20px
          width: 20px
          border-radius: 50%
        .line
          background-color: $cv-color
          height: 2px
          position: relative
          margin: 0
          bottom: 10px
        .title
          background-color: $cv-color
          display: flex
          justify-content: flex-end
          align-items: center
          padding: 5px 15px
          width: 130px

          p
            color: white
            font-size: $bigger-font-size



  .de
</style>
