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
  import config from '../../utils/config'
  const Menu = new MenuModel()

  export default {
    methods: {
      async _getData () {
        this.data = await Menu.getAllMenu()
      },
      _initCMS () {
        this._setModel(Menu)
        this._pushBread('菜单管理')
        this._setForm([
          {
            name: 'name',
            label: '菜单名称'
          },
          {
            name: 'url',
            label: '路由'
          },
          {
            name: 'type',
            label: '类型',
            type: config.FORM.SELECT,
            options: [
              {
                label: '前端',
                value: 1
              },
              {
                label: '后台',
                value: 2
              },
            ]
          },
        ])
        this._setTable([
          {
            name: 'name',
            label: '菜单名称'
          },
          {
            name: 'url',
            label: '路由'
          },
          {
            name: 'type',
            label: '类型',
            map: (val) => val === 1 ? '前端' : '后台'
          }
        ])
      },
      async addData (data) {
        this._addData(data, 'addData')
      },
      async editData (data) {
        this._editData(data, 'editData')
      },
      async deleteData (data) {
        this._deleteData(data, 'deleteData')
      },
      async changeStatus (e) {
        this._changeStatus(e, 'editData')
      },
      async changeOrder (e) {
        this._changeOrder(e, 'editData')
      }
    },
    mixins: [cmsMixin, dialogMixin]
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
