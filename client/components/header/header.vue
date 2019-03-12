<template lang="pug">
  div.container
    div.header
      div
        span.yellow rehe
        span.black llinen
      top-menu
    div.sub-header
      div
        a(href="https://github.com/rehellinen" target="_blank")
          p.name JavaScript、C++、Python、PHP
        a(href="https://github.com/rehellinen" target="_blank")
          p.desc welcome to fork me on github
      div.language
        p I Love Coding
</template>

<script>
  import TopMenu from '../../base/top-menu/top-menu'
  export default {
    components: {
      TopMenu
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .container
    display: flex
    flex-direction: column
    .header
      display: flex
      align-items: center
      justify-content: space-between
      height: 105px
      padding: 0 10%
      span
        font-weight: bold
        color: $theme-color
        font-size: $vast-font-size
        letter-spacing: 2px
      .black
        color: $normal-font-color
    .sub-header
      padding: 0 10%
      height: 90px
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
