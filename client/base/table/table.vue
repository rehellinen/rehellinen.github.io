<template lang="pug">
  div
    el-button.add-button(size="small" @click="toAdd") 添加
    el-table(
    :data="data"
    border
    style="width: 100%"
    )
      el-table-column(prop="id" label="ID" fixed)
      el-table-column(
        v-for="(label, prop, index) in config"
        :prop="prop" :label="label" :key="index")
      el-table-column(label="操作" fixed="right")
        template(slot-scope="scope")
          el-button(type="text" size="small") 编辑
          el-button(type="text" size="small") 删除
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
