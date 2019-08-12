<template lang="pug">
  div.container
    div.sub-contact
      p.title Contact Me
    el-row.contact-container
      el-col.contact(:xl="12" :lg="12" :md="12" :sm="12" :xs="24")
        p.title Contact Info
        div
          div.icon
            img(src="./wechat.png")
            p 13229438008
          div.icon
            img(src="./qq.png")
            p 912377791
          div.icon
            img(src="./email.png")
            p rehellinen@foxmail.com
      el-col.contact(:xl="12" :lg="12" :md="12" :sm="12" :xs="24")
        p.title Technology Stack
        div
          div.icon
            img(src="./vue.png")
            p Vue.js, mpvue, ES6, jQuery
          div.icon
            img(src="./node.png")
            p Node.js, ThinkPHP3/5, Koa2, Nuxt.js
          div.icon
            img(src="./linux.png")
            p Linux, Nginx, PM2, MySQL
    div.record
      p 粤ICP备17091826号-1
</template>

<script>
export default {
}
</script>

<style scoped lang="sass" rel="stylesheet/sass">
  @import "~sass/base"

  .container
    display: flex
    flex-direction: column
    .record
      background-color: #f3f3f3
      display: flex
      height: 40px
      align-items: center
      padding: 0 10%
      p
        color: $holder-font-color

    .sub-contact
      background-color: $theme-color
      height: 50px
      display: flex
      align-items: center
      padding: 0 10%
      .title
        color: $border-one
        font-size: $big-font-size
        letter-spacing: 1px
        font-weight: bold
    .contact-container
      width: 100%
      background-color: #f3f3f3
      .contact
        display: flex
        flex-direction: column
        align-items: center
        height: 110px
        margin: 30px 0
        .title
          color: $main-font-color
          font-size: $biggest-font-size
          font-weight: bold
          margin-bottom: 15px
          margin-left: 0
        p
          color: $minor-font-color
          font-size: $small-font-size
          margin-left: 10px
        .icon
          display: flex
          align-items: center
          margin-top: 5px
          img
            height: 25px
            width: 25px

  .de
</style>
