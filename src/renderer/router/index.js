import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
	{
	  path: '/',
	  name: 'main-window',
	  component: () => import('@/pages/MainWindow/MainWindow.vue'),
	  children: [
		  {
		    path: '',
		    component: () => import('@/pages/MainWindow/pages/Index.vue')
		  },
		  {
		    path: '/setting',
		    component: () => import('@/pages/MainWindow/pages/Setting.vue')
		  }
	  ]
	}
  ]
})
