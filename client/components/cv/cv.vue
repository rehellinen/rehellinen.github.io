<template lang="pug">
  .container
    .header
      p.name 陈棋轩
      p 方向：
        span Web全栈
      p Tel: 13229438008
      p Email: rehellinen@foxmail.com
    .main
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
    /*width: 100%*/
    background-color: white
    .header
      padding: 30px 0 25px 35px
      background-color: $cv-color
      p
        color: white
        margin-bottom: 3px
      .name
        font-size: 35px
        font-weight: bold
        margin-bottom: 5px
        letter-spacing: 3px
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
