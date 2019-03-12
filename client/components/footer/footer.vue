<template lang="pug">
  div.container
    div.icon-container
    div.contact-container
      div.contact
        p.title Contact Me
        p WeChat：13229438008
        p Email：rehellinen@foxmail.com
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
    .icon-container
      background-color: $theme-color
      width: 100%
      height: 40px
    .contact-container
      width: 100%
      padding: 30px 0
      background-color: #f3f3f3
      display: flex
      align-items: center
      justify-content: space-around
      .contact
        height: 140px
        p
          color: $minor-font-color
          margin-top: 2px
        .title
          color: $main-font-color
          font-size: $biggest-font-size
          font-weight: bold
          margin-bottom: 15px
  .de
</style>
