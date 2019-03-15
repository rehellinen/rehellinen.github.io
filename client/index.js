/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import Vue from 'vue'
import App from './App'
import {router} from './router/router'
import {
  Header, Container, Aside, Main, Footer,
  Row, Col
} from 'element-ui'
import 'assets/theme/index.css'

[
  Header, Container, Aside, Main, Footer,
  Row, Col
].forEach(item => Vue.use(item))

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
