<template lang="pug">
  div.container
    el-row.header.hidden-xs-only
      el-col(:xl="16" :lg="16" :md="16" :sm="12")
        router-link(to="/" tag="div")
          div.main-icon
            .block
          span.yellow rehe
          span.black llinen
      el-col(:xl="8" :lg="8" :md="8" :sm="12")
        top-menu(v-if="showMenu")

    div.xs-header.hidden-sm-and-up
      div
        div.main-icon
          .block
        span.yellow rehe
        span.black llinen
      top-menu(v-if="showMenu")

    div.sub-header
      div
        a(href="https://github.com/rehellinen" target="_blank")
          p.name JavaScript、C++、Python、PHP
        a(href="https://github.com/rehellinen" target="_blank")
          p.desc welcome to fork me on github
      div.language.hidden-sm-and-down
        p In My Dictionary, There Is No Impossibility
</template>

<script>
import TopMenu from '../../base/top-menu/top-menu'
import 'element-ui/lib/theme-chalk/display.css'

export default {
  components: {
    TopMenu
  },
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  /** header icon **/
  .main-icon
    display: inline-block
    width: 13px
    height: 13px
    transform: rotate(90deg)
    background-color: $theme-color
    margin-right: 15px
    .block
      background-color: white
      width: 9px
      height: 9px
      position: relative
      bottom: 1px
      right: 1px
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
    background-color: white
    .header
      display: flex
      align-items: center
      height: 105px
      padding: 0 10%
    .xs-header
      padding: 0 10%
      height: 105px
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-around
      .main-icon
        margin-right: 12px
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
