import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home/index'
import Projects from './components/Projects/Projects'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path:'/', component: Home },
    { path:'/projects', component: Projects },
    { path: '*', redirect: '/' }
  ]
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
