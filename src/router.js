import Vue from 'vue'
import Router from 'vue-router'
import Greeting from './components/Greeting.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Greeting
    },
    {
      path: '/background',
      name: 'Background',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Background.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import(/* webpackChunkName: "about" */ './components/Resume.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ './components/Contact.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import(/* webpackChunkName: "about" */ './components/404.vue')
    }
  ],
  data () {
    return {
      visited: -1
    }
  }
})
