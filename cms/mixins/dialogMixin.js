/**
 *  mixins.js
 *  Create By rehellinen
 *  Create On 2019/3/5 15:34
 */
import {Token} from "../utils/Token"
import MyDialog from '../base/dialog/dialog'

export const dialogMixin = {
  async created () {
    const isLogin = await new Token().isLogin()
    if (!isLogin) {
      this.$router.push('/login')
    } else {
      if (this.$route.path === '/login') this.$router.push('/')
    }
  },
  data () {
    return {
      visible: false,
      title: '',
      content: '',
      cancel: false,
      cb: new Function()
    }
  },
  methods: {
    openDialog (title, content, cb, showCancel = !!cb) {
      showCancel ? this.showCancel() : this.hideCancel()
      this.visible = true
      this.title = title
      this.content = content
      this.cb = cb
    },
    showCancel () {
      this.cancel = true
    },
    hideCancel () {
      this.cancel = false
    },
    toCancel () {
      this.closeDialog()
    },
    toConfirm () {
      this.closeDialog()
    },
    closeDialog () {
      this.visible = false
    }
  },
  components: {
    MyDialog
  }
}

