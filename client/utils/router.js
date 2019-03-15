/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/3/3 15:53
 */
import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/detail/detail'
import List from '../components/list/list'
import Index from '../components/index/index'

Vue.use(Router)


const routes = [
  { path: '/', component: Index},
  { path: '/detail/:article_id', component: Detail },
  { path: '/list/:list_id', component: List }
]

export const router = new Router({
  routes
})
