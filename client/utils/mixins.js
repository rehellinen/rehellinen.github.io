/**
 *  mixins.js
 *  Create By rehellinen
 *  Create On 2019/3/5 15:34
 */
import {Token} from "./Token"

export const dialogMixin = {
  async created () {
    const isLogin = await new Token().isLogin()
    if (!isLogin) this.$router.push('/login')
    if (this.$route.path === '/login') this.$router.push('/cms')
  },
  data () {
    return {
      visible: false,
      title: '',
      content: '',
    }
  },
  methods: {
    openDialog (title, content) {
      this.visible = true
      this.title = title
      this.content = content
    },
    closeDialog () {
      this.visible = false
    }
  }
}

