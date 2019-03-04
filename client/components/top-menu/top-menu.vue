<template lang="pug">
  el-menu(default-active="1" class="el-menu-demo" mode="horizontal" @select="")
    el-menu-item(v-for="(item, index) in menu" :index="(index + 1).toString()" :key="item.id")
      router-link(tag="div" :to="item.url") {{item.name}}
</template>

<script>
  import {MenuModel} from "../../model/MenuModel"
  const Menu = new MenuModel()

  export default {
    data () {
      return {
        menu: []
      }
    },
    created () {
      this._getMenu()
    },
    methods: {
      async _getMenu () {
        this.menu = await Menu.getMenu()
      }
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .el-menu
    border: 0
</style>
