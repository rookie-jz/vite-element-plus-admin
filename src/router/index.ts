import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页', noAuth: true },
    name: 'Login',
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    meta: { title: '首页', icon: 'home' },
    children: [
      {
        path: 'index',
        name: 'homeIndex',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' }
      }
    ]
  }
]

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes
})

export default router
