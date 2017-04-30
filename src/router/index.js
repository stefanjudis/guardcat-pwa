import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Settings from '@/components/Settings'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'GuardCat',
      component: Index
    },
    {
      path: '/login',
      name: 'Sogin',
      component: Login
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.getItem('token')) {
    return next('/login')
  }

  next()
})

export default router
