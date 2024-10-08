import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/signup.vue'
import Signin from '../views/signin.vue'
import UserDashboard from '../views/userDashboard.vue'
import AdminDashboard from '../views/adminDashboard.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import SendEmailview from '../views/SendEmailview.vue'
import TableDataView from '../views/TableDataview.vue'
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
  },
  {
    path: '/Firelogin',
    name: 'Firelogin',
    component: FirebaseSigninView
  },
  {
    path: '/Fireregister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/Sendemail',
    name: 'Sendemail',
    component: SendEmailview
  },
  {
    path: '/Tabledata',
    name: 'Tabledata',
    component: TableDataView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
