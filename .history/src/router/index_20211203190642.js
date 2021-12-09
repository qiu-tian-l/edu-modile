import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '@/views/course'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login')
  },
  {
    path: '/',
    name: 'course',
    component: Course
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'login' */'@/views/user')
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: 'login' */'@/views/error-page')
  }
]

const router = new VueRouter({
  routes
})

export default router
