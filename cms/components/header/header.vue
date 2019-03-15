<template lang="pug">
  div.container
    el-row.header
      el-col(:xl="16" :lg="16" :md="16" :sm="12")
        router-link(to="/" tag="div")
          div.main-icon
            .block
          span.yellow rehe
          span.black llinen

    div.sub-header
      div
        a(href="https://github.com/rehellinen" target="_blank")
          p.name JavaScript、C++、Python、PHP
        a(href="https://github.com/rehellinen" target="_blank")
          p.desc welcome to fork me on github
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css'
  export default {
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  /** header icon **/
  .main-icon
    display: inline-block
    width: 15px
    height: 15px
    transform: rotate(90deg)
    background-color: $theme-color
    margin-right: 15px
    .block
      background-color: white
      width: 10px
      height: 10px
  span
    font-weight: bold
    color: $theme-color
    font-size: $vast-font-size
    letter-spacing: 2px
    .black
      color: $normal-font-color
  /** header icon **/


  .container
    display: flex
    flex-direction: column
    .header
      display: flex
      align-items: center
      height: 105px
      padding: 0 10%
    .sub-header
      padding: 0 10%
      height: 75px
      background-color: $theme-color
      display: flex
      align-items: center
      justify-content: space-between
      a
        width: 250px
        text-decoration: none
        p
          color: white
        .name
          font-size: $big-font-size
          letter-spacing: 1px
        .desc
          font-size: $small-font-size
          margin-top: 3px
      .language
        p
          color: white
  .de
</style>
