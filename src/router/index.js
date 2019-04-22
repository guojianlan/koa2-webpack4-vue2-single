import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Login from '../views/login.vue'
import Index from '../views/index.vue'
// let Login = ()=>import('../views/login.vue')
// let Index = ()=>import('../views/index.vue')
const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes:[
    {
      path: '/',
      name: 'idx',
      redirect: {
        name: 'index'
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {

      },
      component:Login
    },
    {
      path: '/index',
      name: 'index',
      meta: {

      },
      component: Index
    }
  ]
})
export default router;