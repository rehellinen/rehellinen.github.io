/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import Vue from 'vue'
import App from './App'
import {router} from './utils/router'
import {
  Header, Container, Aside, Main, Footer,
  Row, Col,
  Menu, Submenu, MenuItemGroup, MenuItem
} from 'element-ui'
import 'assets/theme/index.css'

[
  Header, Container, Aside, Main, Footer,
  Row, Col,
  Menu, Submenu, MenuItemGroup, MenuItem
].forEach(item => Vue.use(item))

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
