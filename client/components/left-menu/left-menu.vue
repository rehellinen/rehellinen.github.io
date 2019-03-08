<template lang="pug">
  div.container
    el-menu(
      default-active="2"
      class="el-menu-vertical-demo"
    )
      router-link(v-for="item in menu" :key="item.id" tag="div" :to="item.url")
        el-menu-item(index="1")
          i.el-icon-setting
          span(slot="title") {{item.name}}
</template>

<script>
  import {MenuModel} from "../../model/MenuModel"

  export default {
    data () {
      return {
        menu: []
      }
    },
    async created () {
      this.menu = await new MenuModel().getBackMenu()
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .container
    height: 100%
    ul
      height: 100%
</style>
