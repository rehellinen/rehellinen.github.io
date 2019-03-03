/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import Vue from 'vue'
import App from './App'
import {Header, Container, Aside, Main, Footer} from 'element-ui'
import 'assets/theme/index.css'

[
  Header, Container, Aside, Main, Footer
].forEach(item => Vue.use(item))

new Vue({
  el: '#app',
  render: h => h(App)
})
