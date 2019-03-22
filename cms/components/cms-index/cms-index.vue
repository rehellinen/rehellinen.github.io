<template lang="pug">
  el-row
    el-col(:xl="6" :lg="6" :md="8" :sm="12" :xs="12")
      el-card
        div(slot="header")
          p 文章数量
        div()
          p 123
</template>

<script>
  import {cmsMixin} from "../../mixins/cmsMixin"

  export default {
    mixins: [cmsMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
