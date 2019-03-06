/**
 *  mixins.js
 *  Create By rehellinen
 *  Create On 2019/3/5 15:34
 */
import {Token} from "./Token"
import MyForm from '../base/form/form'
import MyTable from '../base/table/table'
import MyBread from '../base/bread-crumb/bread-crumb'
import MyDialog from '../base/dialog/dialog'
import config from './config'

export const dialogMixin = {
  async created () {
    const isLogin = await new Token().isLogin()
    if (!isLogin) {
      this.$router.push('/login')
    } else {
      if (this.$route.path === '/login') this.$router.push('/cms')
    }
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
  },
  components: {
    MyDialog
  }
}

export const cmsMixin = {
  data () {
    return {
      model: '',
      data: [],
      type: 1,
      form: {},
      table: {},
      bread: ['首页'],
      formData: {}
    }
  },
  async created () {
    this._initCMS()
    await this._getData()
  },
  methods: {
    // 新组件需覆盖的方法
    _initCMS () {},
    addData (data) {},
    editData (data) {},
    changeType (type) {
      this.type = type
      if (type === config.CMS.INDEX && this.bread.length > 2) this.bread.pop()
      else if (type === config.CMS.ADD) this.bread.push('添加')
      else this.bread.push('修改')
    },
    toEdit (e) {
      this.changeType(config.CMS.EDIT)
      this.formData = this.data[e.index]
    },
    toIndex () {
      this.changeType(config.CMS.INDEX)
    },
    toSubmit (e) {
      if (this.type === config.CMS.ADD) {
        this.addData(e)
      } else if (this.type === config.CMS.EDIT) {
        this.editData(e)
      }
    }
  },
  components: {
    MyForm,
    MyTable,
    MyBread
  }
}

