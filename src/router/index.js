import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginComponent from '../components/LoginComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
   component: AboutView,
   meta:{
    auth: true
   }
   
  },
  {
    name: "login",
    path: '/login',
    component: LoginComponent,
    meta:{
      guest: true
     }
    
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  
  if (to.matched.some((record) => record.meta.auth)) {
    const isloggedIn = router.app.$store.state.isloggedIn;
    if (!isloggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    const isloggedIn = router.app.$store.state.isloggedIn;
    if (isloggedIn) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
