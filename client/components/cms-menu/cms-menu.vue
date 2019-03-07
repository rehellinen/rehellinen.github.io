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
  import config from "../../utils/config"
  import {copyObj} from "../../utils/utils"

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
          await Menu.addMenu(data),
          () => {
            this.toIndex()
            this._getData()
          }
        )
      },
      async editData (data) {
        this._requestWithInfo(
          await Menu.editMenu(data),
          () => {
            this.toIndex()
            this._getData()
          }
        )
      },
      async deleteData (data) {
        const id = this.data[data.index].id

        this._requestWithQuery('是否确定删除',
          await Menu.deleteMenu(id),
          this._getData
        )
      },
      async changeStatus (data) {
        const status = this.data[data.index].status === config.STATUS.NORMAL ?
            config.STATUS.ABNORMAL : config.STATUS.NORMAL
        const reqData = copyObj(this.data[data.index])
        reqData.status = status

        this._requestWithQuery('是否确定更改状态',
          await Menu.editMenu(reqData),
          this._getData
        )
      },
      async changeOrder (data) {
        this.data[data.index].listorder = data.order
        this._requestWithQuery('是否确定更改排序',
          await Menu.editMenu(this.data[data.index]),
          this._getData
        )
      }
    },
    mixins: [cmsMixin, dialogMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
