import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function existToken() {
  let password = JSON.parse(localStorage.getItem('token'))
  if (password !== null) {
    return true
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/profile' && !existToken()) {
    next('/login')
  }
  else {
    // checkToken()
    next()
  }
})

export default router
