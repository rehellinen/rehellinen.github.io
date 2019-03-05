<template lang="pug">
  div.container
    div
      p 123
    div
      p 123
    div
      p 123
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
    height: 100%
    border-right: 1px solid $border-one
    width: 200px
    div
      height: 50px
      display: flex
      justify-content: center
      align-items: center
      border-top: 1px solid $border-one
      p
        font-size: $big-font-size

  .de
</style>
