// npm install --save vuelidate

import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/main.vue'
import Article from '../components/article.vue'
import Profile from '../components/profile.vue'

import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },  
  {
    path: '/article',
    name: 'Article',
    component: Article
  },  
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },  
//  {
//    path: '/about',
//    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//    component: function () {
//      return import(/* webpackChunkName: "about" */ '../views/About.vue')
 //   }
//  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
