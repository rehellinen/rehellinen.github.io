<template lang="pug">
  div.container
    div.header
      p.header__text rehellinen
      top-menu
    div.github
      a(href="https://github.com/rehellinen" target="_blank")
        p Fork me on github : rehellinen
</template>

<script>
  import TopMenu from '../top-menu/top-menu'
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
      width: 100%
      height: 75px
      .header__text
        color: $theme-color
        font-size: $vast-font-size
        margin-left: 4%
    .github
      width: 100%
      height: 45px
      background-color: $main-font-color
      display: flex
      align-items: center
      a
        width: 250px
        margin-left: 4%
        text-decoration: none
        p
          color: white
          font-size: $normal-font-color
  .de
</style>
