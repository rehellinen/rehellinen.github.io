<template lang="pug">
  el-row(:gutter="20")
    el-col(:xl="4" :lg="5" :md="6" :sm="7" :xs="12")
      left-menu
    el-col(:xl="20" :lg="19" :md="18" :sm="17" :xs="12")
      router-view
</template>

<script>
  import LeftMenu from '../../base/left-menu/left-menu'
  export default {
    components: {
      LeftMenu
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">

</style>
