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
    :data="formData"
    @submit="toSubmit"
    )

    my-form(
    title="编辑文章",
    :config="form"
    :data="formData"
    @submit="toSubmit"
    v-else
    )
</template>

<script>
  import {cmsMixin} from "../../mixins/cmsMixin"
  import {dialogMixin} from "../../mixins/dialogMixin"
  import {ArticleModel} from "../../model/ArticleModel"
  import config from '../../utils/config'
  const Article = new ArticleModel()

  export default {
    methods: {
      async _getData () {
        this.data = await Article.getAllArticles()
      },
      _initCMS () {
        this._setModel(Article)
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
            name: 'content',
            label: '内容'
          },
        ])
        this._setTable([
          {
            name: 'title',
            label: '标题'
          },
          {
            name: 'subtitle',
            label: '副标题'
          },
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
