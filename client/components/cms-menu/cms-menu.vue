<template lang="pug">
  div
    my-form(title="添加菜单", :config="config" v-if="type === 2")
    el-button.add-button(size="small" @click="changeType(2)") 添加
    el-table(
      :data="menu"
      border
      style="width: 100%"
    )
      el-table-column(prop="id" label="ID" fixed)
      el-table-column(prop="name" label="名称")
      el-table-column(prop="url" label="url")
      el-table-column(prop="type" label="类型")
      el-table-column(prop="listorder" label="排序")
      el-table-column(prop="status" label="状态")
      el-table-column(label="排序" fixed="right")
        template(slot-scope="scope")
          el-button(type="text" size="small") 编辑
          el-button(type="text" size="small") 删除
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
      _initForm () {
        this.config = {
          name: '菜单名称',
          url: '路由',
          type: '类型',
        }
      }
    },
    mixins: [cmsMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .add-button
    margin-bottom: 10px
</style>
