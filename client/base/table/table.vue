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
      el-table-column(prop="listorder" label="排序" width="60")
      // 状态
      el-table-column(prop="status" label="状态" width="60")
      // 操作
      el-table-column(label="操作" fixed="right" width="145")
        template(slot-scope="scope")
          el-button(size="mini") 编辑
          el-button(type="danger" size="mini") 删除
</template>

<script>
export default {
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
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  .add-button
    margin-bottom: 10px
</style>
