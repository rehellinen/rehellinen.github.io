<template lang="pug">
  div.container
    el-menu(
      default-active="0"
      class="el-menu-vertical-demo"
      active-text-color="#303133"
      text-color="#909399"
      background-color="#fff"
    )
      router-link(v-for="(item, index) in menu" :key="item.id" tag="div" :to="item.url")
        el-menu-item(:index="index.toString()")
          i.el-icon-menu
          span.menu-title(slot="title") {{item.name}}
</template>

<script>
import { MenuModel } from '../../model/MenuModel'

const menu = new MenuModel()

export default {
  data () {
    return {
      menu: []
    }
  },
  async created () {
    this.menu = await menu.getBackMenu()
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"
  .container
    height: 100%
    ul
      height: 100%
  .menu-title
    margin-left: 15px
</style>
