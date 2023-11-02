import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      meta:{
        requiresAuth:true,
    }
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
    meta:{
      requiresAuth:true,
  }
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    

  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isloggedIn = router.app.$store.state.isloggedIn;
    if (!isloggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGet)) {
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
export default router;
