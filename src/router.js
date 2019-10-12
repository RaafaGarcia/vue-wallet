import Vue from 'vue'
import Router from 'vue-router'
import general from './views/General.vue'
import home from './components/home.vue'
import inicio from './components/inicio.vue'
import about from './components/About.vue'
import projectPage from './components/projectPage.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/', 
    component: general, 
    children: [ 
        { path: '', component: home }, 
      ] 
    },
    {
      path: '/about/:id',
      name: 'about',
      props: true,
      component: about
    },
    {
      path: '/:project/:id',
      name: 'project',
      props: true,
      component: projectPage
    }
  ]
})
