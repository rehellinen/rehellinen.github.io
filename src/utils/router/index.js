/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/3/3 15:53
 */
import Vue from 'vue'
import Router from 'vue-router'
import Foo from '../../components/article/article'

Vue.use(Router)


const routes = [
  { path: '/foo', component: Foo }
]

export const router = new Router({
  routes
})
