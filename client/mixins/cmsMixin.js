import config from "../utils/config"
import MyForm from '../base/form/form'
import MyTable from '../base/table/table'
import MyBread from '../base/bread-crumb/bread-crumb'
import {copyObj} from "../utils/utils"
/**
 *  cmsMixin.js
 *  Create By rehellinen
 *  Create On 2019/3/7 11:02
 */
export const cmsMixin = {
  data () {
    return {
      // 表格展示的数据
      data: [],
      // 页面类型（首页、添加、编辑）
      type: config.CMS.INDEX,
      // 表单的配置
      form: {},
      // 表格的配置
      table: {},
      // 面包屑导航栏
      bread: ['首页'],
      // 编辑页面展示的数据
      formData: {},
      // 模型
      model: null
    }
  },
  // CMS初始化
  async created () {
    this._initCMS()
    await this._getData()
  },
  methods: {
    // 新组件需覆盖的方法
    _initCMS () {},
    _getData () {},
    addData (data) {},
    editData (data) {},
    deleteData (data) {},
    changeStatus (data) {},
    changeOrder (data) {},

    // 跳转到添加页面
    toAdd (e) {
      this._changePageType(config.CMS.ADD)
    },

    // 跳转到编辑页面
    toEdit (e) {
      this._changePageType(config.CMS.EDIT)
      this.formData = this.data[e.index]
    },

    // 跳转到首页
    toIndex () {
      this._changePageType(config.CMS.INDEX)
      this.formData = {}
    },

    /**
     * 处理添加、编辑页面中按钮点击后的事件
     * @param e 按钮点击事件的参数
     */
    toSubmit (e) {
      if (this.type === config.CMS.ADD) {
        this.addData(e)
      } else if (this.type === config.CMS.EDIT) {
        this.editData(e)
      }
    },

    /**
     * 获取http请求结果之后，弹出dialog来显示信息
     * @param request http请求
     * @private
     */
    async _requestWithInfo (request) {
      const res = await request()
      this.openDialog(
        '提示', res.message,
        () => {
          this.formData = {}
          this.toIndex()
          this._getData()
        },
        false
      )
    },

    /**
     * 发送http请求前弹出询问dialog
     * 点击确定后进行_requestWithInfo操作
     * @param content dialog显示的内容
     * @param request http请求
     * @private
     */
    async _requestWithQuery (content, request) {
      this.openDialog('提示', content,
        async () => {
          this._requestWithInfo(request)
        }, true)
    },

    _addData (data, action) {
      this._requestWithInfo(
        async () => await this.model[action](data)
      )
    },

    _editData (data, action) {
      this._requestWithInfo(
        async () => await this.model[action](data)
      )
    },

    _deleteData (data, action) {
      const id = this.data[data.index].id
      this._requestWithQuery('是否确定删除',
        async () => await this.model[action](id),
      )
    },

    async _changeStatus (e, action) {
      const status = this.data[e.index].status === config.STATUS.NORMAL ?
        config.STATUS.ABNORMAL : config.STATUS.NORMAL
      const reqData = copyObj(this.data[e.index])
      reqData.status = status

      this._requestWithQuery('是否确定更改状态',
        async () => await this.model[action](reqData)
      )
    },

    async _changeOrder (e, action) {
      this.data[e.index].listorder = e.order
      this._requestWithQuery('是否确定更改排序',
        async () => await this.model[action](this.data[e.index])
      )
    },

    /**
     * 改变页面状态（首页、添加、编辑）
     * @param type 页面类型（0 - 首页，1 - 添加，2 - 编辑）
     * @private
     */
    _changePageType (type) {
      this.type = type
      if (type === config.CMS.INDEX && this.bread.length > 2) this._popBread()
      else if (type === config.CMS.ADD) this._pushBread('添加')
      else this._pushBread('修改')
    },

    // 往面包屑导航栏添加元素
    _pushBread (name) {
      this.bread.push(name)
    },

    // 删除面包屑导航栏的最后一个元素
    _popBread () {
      this.bread.pop()
    },

    // 配置添加、编辑页面的表单元素
    _setForm (conf) {
      this.form = conf
    },

    // 配置表格
    _setTable (conf) {
      this.table = conf
    },

    // 配置Model
    _setModel (model) {
      this.model = model
    },
  },
  components: {
    MyForm,
    MyTable,
    MyBread
  }
}
