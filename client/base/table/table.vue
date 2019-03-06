<template lang="pug">
  div
    el-button.add-button(size="small" @click="toAdd") 添加
    el-table(
    :data="data"
    border
    style="width: 100%"
    )
      // id
      el-table-column(prop="id" label="ID" fixed width="50")
      // 其他
      el-table-column(
        v-for="(label, prop, index) in config"
        :prop="prop" :label="label" :key="index")

      // 排序
      el-table-column(prop="listorder" label="排序" width="70")
        template(slot-scope="scope")
          el-input(
            :placeholder="scope.row.listorder"
            v-model="listorder[scope.$index]"
            @blur="changeOrder(scope.$index)"
          )
      // 状态
      el-table-column(prop="status" label="状态" width="60")
        template(slot-scope="scope")
          p {{statusCN(scope.row.status)}}

      // 编辑与删除操作
      el-table-column(label="操作" fixed="right" width="145")
        template(slot-scope="scope")
          el-button(
            size="mini"
            @click.native.prevent="toEdit(scope.$index)"
          ) 编辑
          el-button(
            type="danger" size="mini"
            @click.native.prevent="toDelete(scope.$index)"
          ) 删除
</template>

<script>
  import config from '../../utils/config'

  export default {
    data () {
      return {
        listorder: []
      }
    },
    props: {
      data: {
        type: Array,
        default: () => []
      },
      config: {
        type: Object,
        default: () => ({})
      },
    },
    methods: {
      toAdd () {
        this.$emit('add')
      },
      toEdit (index) {
        this.$emit('edit', { index })
      },
      toDelete (index) {
        this.$emit('delete', { index })
      },
      changeOrder (index) {
        if (!this.listorder[index]) return
        this.$emit('order', {
          index ,
          order: this.listorder[index]
        })
        this.listorder = []
      },
      statusCN (status) {
        if (status === config.STATUS.NORMAL) return '正常'
        else if (status === config.STATUS.NORMAL) return '停用'
        else return '错误'
      }
    }
  }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .add-button
    margin-bottom: 10px
</style>
