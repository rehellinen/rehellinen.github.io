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
    title="添加文章"
    :config="form",
    :form-data="formData"
    @submit="toSubmit"
    )

    my-form(
    title="编辑文章",
    :config="form"
    :form-data="formData"
    @submit="toSubmit"
    v-else
    )
</template>

<script>
import { cmsMixin } from '../../mixins/cmsMixin'
import { dialogMixin } from '../../mixins/dialogMixin'
import { ArticleModel } from '../../model/ArticleModel'
import config from '../../utils/config'
import { MenuModel } from '../../model/MenuModel'
const article = new ArticleModel()
const menu = new MenuModel()

export default {
  mixins: [cmsMixin, dialogMixin],
  data () {
    return {
      menu: []
    }
  },
  methods: {
    async _getData () {
      this.menu = await menu.getFrontMenu()
      this.data = await article.getAllArticles()
    },
    _initCMS () {
      const selectOpt = this.getMenuSelectOpt()
      this._setModel(article)
      this._pushBread('文章管理')
      this._setForm([
        {
          name: 'title',
          label: '标题'
        },
        {
          name: 'subtitle',
          label: '副标题'
        },
        {
          name: 'main_img_url',
          label: '主图',
          type: config.FORM.IMAGE
        },
        {
          name: 'menu_id',
          label: '菜单名称',
          type: config.FORM.SELECT,
          options: selectOpt
        },
        {
          name: 'content',
          label: '内容',
          type: config.FORM.EDITOR
        }
      ])
      this._setTable([
        {
          name: 'title',
          label: '标题'
        },
        {
          name: 'subtitle',
          label: '副标题'
        }
      ])
    },
    getMenuSelectOpt () {
      const res = []
      this.menu.forEach(item => {
        res.push({
          label: item.name,
          value: item.id
        })
      })
      return res
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
</style>
