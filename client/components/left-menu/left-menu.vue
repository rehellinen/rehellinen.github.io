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

  const menu = new MenuModel()

  export default {
    data () {
      return {
        menu: [],
        back: [],
        front: []
      }
    },
    async created () {
      this.back = await menu.getBackMenu()
      this.front = await menu.getFrontMenu()
      this.updateMenu()
    },
    watch: {
      $route (to) {
        this.updateMenu()
      }
    },
    methods: {
      updateMenu () {
        this.menu = this.$route.path.startsWith('/cms') ?
          this.back : this.front
      }
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
