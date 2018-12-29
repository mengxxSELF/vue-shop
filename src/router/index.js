import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Tabs from '@/components/Tabs'
import Detail from '@/components/Detail'
import Error from '@/components/Error'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabs',
      component: Tabs
    },
    // {
    //   path: '/detail/:id/:img',
    //   name: 'detail',
    //   component: Detail
    // },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      component : Test
    }
  ]
})
