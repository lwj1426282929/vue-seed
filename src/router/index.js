import Vue from 'vue'
import Router from 'vue-router'

import blog from './blog'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: 'Page1'
  },
  ...blog
]

export default new Router({
  mode: 'history',
  routes
})
