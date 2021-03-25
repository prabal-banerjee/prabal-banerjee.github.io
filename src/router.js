import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Pub from './views/Pub.vue'
// import Intern from './views/Intern.vue'
// import Edu from './views/Edu.vue'
import NotFound from './views/NotFound.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/publications',
      component: () => import(/* webpackChunkName: "pub" */ './views/Pub.vue')
    },
    {
      path: '/experience',
      component: () => import(/* webpackChunkName: "intern" */ './views/Intern.vue')
    },
    {
      path: '/education',
      component: () => import(/* webpackChunkName: "edu" */ './views/Edu.vue')
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
