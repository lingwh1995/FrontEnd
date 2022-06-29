import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/views/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: GoodList
    }
  ]
})
