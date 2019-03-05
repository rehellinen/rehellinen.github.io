/**
 *  mixins.js
 *  Create By rehellinen
 *  Create On 2019/3/5 15:34
 */
import {Token} from "./Token"
import MyForm from '../base/form/form'
import MyTable from '../base/table/table'
import MyBread from '../base/bread-crumb/bread-crumb'

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
      data: [],
      type: 1,
      form: {},
      table: {},
      bread: ['首页'],
      editData: {}
    }
  },
  created () {
    this._initCMS()
  },
  methods: {
    changeType (type) {
      this.type = type
      if (type === 1 && this.bread.length > 2) this.bread.pop()
      else if (type === 2) this.bread.push('添加')
      else this.bread.push('修改')
    },
    toEdit (e) {
      this.changeType(3)
      this.editData = this.data[e.index]
    }
  },
  components: {
    MyForm,
    MyTable,
    MyBread
  }
}

