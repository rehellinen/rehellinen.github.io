<template lang="pug">
  div
    my-dialog(:visible="visible"
      :title="title"
      :content="content"
      :cb="cb",
      :cancel="cancel",
      @confirm="toConfirm"
      @cancel="toCancel"
    )

    my-bread(
      @table="toIndex"
      :data="bread"
    )

    my-table(
      v-if="type === 1"
      :config="table"
      :data="data"
      @add="toAdd"
      @edit="toEdit",
      @delete="deleteData"
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
  import {cmsMixin} from "../../mixins/cmsMixin"
  import {dialogMixin} from "../../mixins/dialogMixin"
  import {MenuModel} from "../../model/MenuModel"

  const Menu = new MenuModel()

  export default {
    methods: {
      async _getData () {
        this.data = await Menu.getAllMenu()
      },
      _initCMS () {
        this._pushBread('菜单管理')
        this._setForm({
          name: '菜单名称',
          url: '路由',
          type: '类型',
        })
        this._setTable({
          name: '菜单名称',
          url: '路由',
          type: '类型'
        })
      },
      async addData (data) {
        this._requestWithInfo(
          async () => await Menu.addMenu(data)
        )
      },
      async editData (data) {
        this._requestWithInfo(
          async () => await Menu.editMenu(data)
        )
      },
      async deleteData (data) {
        const id = this.data[data.index].id
        this._requestWithQuery('是否确定删除',
          async () => await Menu.deleteMenu(id),
        )
      },
      async changeStatus (e) {
        this._changeStatus(e, Menu, 'editMenu')
      },
      async changeOrder (e) {
        await this._changeOrder(e, Menu, 'editMenu')
      }
    },
    mixins: [cmsMixin, dialogMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
