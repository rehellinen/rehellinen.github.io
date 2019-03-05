<template lang="pug">
  div
    my-bread(
      @table="changeType(1)"
      :data="bread"
    )

    my-table(
      v-if="type === 1"
      :config="table"
      :data="data"
      @add="changeType(2)"
      @edit="toEdit"
    )

    my-form(
      v-else-if="type === 2"
      title="添加菜单"
      :config="form"
    )

    my-form(
      title="编辑菜单",
      :config="form"
      :data="editData"
      v-else
    )
</template>

<script>
  import {cmsMixin} from "../../utils/mixins"
  import {MenuModel} from "../../model/MenuModel"

  export default {
    data () {
      return {
      }
    },
    async created () {
      this.data = await new MenuModel().getAllMenu()
    },
    methods: {
      _initCMS () {
        this.bread.push('菜单管理')
        this.form = {
          name: '菜单名称',
          url: '路由',
          type: '类型',
        }
        this.table = {
          url: 'url',
          type: '类型'
        }
      }
    },
    mixins: [cmsMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
