<template lang="pug">
  div
    my-bread(@table="changeType(1)" :data="bread")
    my-table(v-if="type === 1"
    :config="table" :data="menu" @add="changeType(2)")
    my-form(v-if="type === 2"
    title="添加菜单", :config="form" )

</template>

<script>
  import {cmsMixin} from "../../utils/mixins"
  import {MenuModel} from "../../model/MenuModel"

  export default {
    data () {
      return {
        menu: []
      }
    },
    async created () {
      this.menu = await new MenuModel().getAllMenu()
    },
    methods: {
      _init () {
        this.bread.push('菜单管理')
        this.form = {
          name: '菜单名称',
          url: '路由',
          type: '类型',
        }
        this.table = {
          url: 'url',
          type: '类型',
          listorder: '排序',
          status: '状态'
        }
      }
    },
    mixins: [cmsMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
