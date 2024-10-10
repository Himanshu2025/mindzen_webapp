import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/signup.vue'
import UserDashboard from '../views/userDashboard.vue'
import AdminDashboard from '../views/adminDashboard.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import SendEmailview from '../views/SendEmailview.vue'
import Tabledata from '../views/Tabledata.vue'
import addPost from '../views/addPost.vue'
import viewpost from '../views/viewPosts.vue'
import map from '../views/Map.vue'
import Tabledata02 from '../views/Tabledata02.vue'
import chatbot from '../views/chatbot.vue'
import map2 from '../views/map2.vue'
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
    path: '/Tabledata01',
    name: 'Tableview',
    component: Tabledata
  },
  {
    path: '/Tabledata02',
    name: 'Tableview02',
    component: Tabledata02
  },
  {
    path: '/addpost',
    name: 'Addpost',
    component: addPost
  },
  {
    path: '/viewpost',
    name: 'Viewpost',
    component: viewpost
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/map2',
    name: 'map2',
    component: map2
  },
  {
    path: '/chatbot',
    name: 'chatbot',
    component: chatbot
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
