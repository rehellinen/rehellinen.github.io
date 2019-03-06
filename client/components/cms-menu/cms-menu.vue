<template lang="pug">
  div
    my-dialog(:visible="visible"
      :title="title"
      :content="content"
      @close="closeDialog"
    )

    my-bread(
      @table="changeType(1)"
      :data="bread"
    )

    my-table(
      v-if="type === 1"
      :config="table"
      :data="data"
      @add="changeType(2)"
      @edit="toEdit",
      @delete="toDelete"
      @order="changeOrder"
      @status="changeStatus"
    )

    my-form(
      v-else-if="type === 2"
      title="添加菜单"
      :config="form",
      :data="formData"
      @submit="toSubmit"
    )

    my-form(
      title="编辑菜单",
      :config="form"
      :data="formData"
      @submit="toSubmit"
      v-else
    )
</template>

<script>
  import {cmsMixin, dialogMixin} from "../../utils/mixins"
  import {MenuModel} from "../../model/MenuModel"
  import config from "../../utils/config"

  const Menu = new MenuModel()

  export default {
    methods: {
      async _getData () {
        this.data = await Menu.getAllMenu()
      },
      _initCMS () {
        this.bread.push('菜单管理')
        this.form = {
          name: '菜单名称',
          url: '路由',
          type: '类型',
        }
        this.table = {
          name: '菜单名称',
          url: 'url',
          type: '类型'
        }
      },
      async addData (data) {
        const res = await Menu.addMenu(data)
        this.openDialog('提示', res.message)
        this.toIndex()
      },
      async editData (data) {
        const res = await Menu.editMenu(data)
        this.openDialog('提示', res.message)
        this.toIndex()
      },
      async toDelete (data) {
        const id = this.data[data.index].id
        const res = await Menu.deleteMenu(id)
        this.openDialog('提示', res.message)
        this._getData()
      },
      async changeStatus (data) {
        this.data[data.index].status =
          this.data[data.index].status === config.STATUS.NORMAL ?
            config.STATUS.ABNORMAL : config.STATUS.NORMAL
        console.log(this.data[data.index])
        const res = await Menu.editMenu(this.data[data.index])
        this.openDialog('提示', res.message)
        this._getData()
      },
      async changeOrder (data) {
        this.data[data.index].listorder = data.order
        const res = await Menu.editMenu(this.data[data.index])
        this.openDialog('提示', res.message)
        this._getData()
      }
    },
    mixins: [cmsMixin, dialogMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
