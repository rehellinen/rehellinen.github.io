/**
 *  mixins.js
 *  Create By rehellinen
 *  Create On 2019/3/5 15:34
 */
import {Token} from "./Token"
import MyForm from '../base/form/form'

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

export const cmsMixin = {
  data () {
    return {
      type: 1,
      config: {}
    }
  },
  created () {
    this._initForm()
  },
  methods: {
    changeType (type) {
      this.type = type
    }
  },
  components: {
    MyForm
  }
}

