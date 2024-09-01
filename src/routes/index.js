import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/signup.vue'
import Signin from '../views/signin.vue'
import UserDashboard from '../views/userDashboard.vue'
import AdminDashboard from '../views/adminDashboard.vue'
import store from '@/store/store'
const routes = [
  {
    path: '/',
    redirect: '/signup'
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/userDashboard',
    name: 'userDashboard',
    component: UserDashboard
  },
  {
    path: '/adminDashboard',
    name: 'adminDashboard',
    component: AdminDashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
