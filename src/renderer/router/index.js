import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-window',
      component: require('@/pages/MainWindow/MainWindow').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
