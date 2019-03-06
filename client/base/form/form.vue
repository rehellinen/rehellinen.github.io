<template lang="pug">
  div
    p.title {{title}}
    el-form(ref="data" :model="data" label-width="80px")
      el-form-item(v-for="(label, name, index) in config"
        :label="label" :key="index")
        el-input(v-model="data[name]")

      el-form-item
        el-button(@click="onSubmit") {{buttonText}}
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: '提交'
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.data)
    }
  }
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .title
    color: $main-font-color
    font-size: $vast-font-size
    font-weight: bold
    margin: 20px 0 20px 80px
</style>
