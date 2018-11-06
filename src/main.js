import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home/Home'
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
