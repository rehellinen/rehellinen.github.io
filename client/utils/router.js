/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2019/3/3 15:53
 */
import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/detail/detail'
import List from '../components/list/list'
import Main from '../components/main/main'
import Login from '../components/login/login'
import Cms from '../components/cms/cms'
import CmsMenu from '../components/cms-menu/cms-menu'
import CmsArticle from '../components/cms-article/cms-article'

Vue.use(Router)


const routes = [
  { path: '/', component: Main},
  { path: '/detail/:article_id', component: Detail },
  { path: '/list/:list_id', component: List },
  { path: '/login', component: Login },
  { path: '/cms', component: Cms,
    children: [
      { path: 'menu', component: CmsMenu },
      { path: 'article', component: CmsArticle },
    ]
  }
]

export const router = new Router({
  routes
})
