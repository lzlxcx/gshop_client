/*
* 路由器模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path:'/msite',
      component: MSite,
      meta: {
        showFooter: true //标识需要显示的footer
      }
    },
    {
      path:'/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/login',
      component: Login
    }
  ]
})