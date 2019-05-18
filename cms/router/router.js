/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/3/3 15:53
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/cms-index/cms-index'
import Menu from '../components/cms-menu/cms-menu'
import Article from '../components/cms-article/cms-article'
import Login from '../components/login/login'

Vue.use(Router)


const routes = [
  { path: '/', component: Index },
  { path: '/menu', component: Menu },
  { path: '/article', component: Article },
  { path: '/login', component: Login }
]

export const router = new Router({
  routes
})
