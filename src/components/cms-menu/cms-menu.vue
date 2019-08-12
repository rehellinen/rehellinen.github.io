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
      :form-data="formData"
      @submit="toSubmit"
    )

    my-form(
      title="编辑菜单",
      :config="form"
      :form-data="formData"
      @submit="toSubmit"
      v-else
    )
</template>

<script>
import { cmsMixin } from '../../pages/cms/mixins/cmsMixin'
import { dialogMixin } from '../../pages/cms/mixins/dialogMixin'
import { MenuModel } from '../../pages/cms/model/MenuModel'
import config from '../../pages/cms/utils/config'

const Menu = new MenuModel()

export default {
  mixins: [cmsMixin, dialogMixin],
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
            }
          ]
        }
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
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
