import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMq from 'vue-mq'
import App from './App.vue'
import Home from './components/Home/index'
import Projects from './components/Projects/index'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path:'/', component: Home },
    { path:'/projects', component: Projects },
    { path: '*', redirect: '/' }
  ]
})

Vue.use(VueRouter)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 1200,
    desktop: Infinity,
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
