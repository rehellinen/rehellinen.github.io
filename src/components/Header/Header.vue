<template lang="pug">
  div.header
    p.header__text rehellinen
</template>

<script>
export default {
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .header
    display: flex
    align-items: center
    width: 100%
    height: 60px
    background-color: $theme-color
    .header__text
      color: white
      font-size: $bigger-font-size
      margin-left: 15px
  .de
</style>
