import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ItemDetail from "./views/ItemDetail";
import store from "./store";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/item/:itemId",
      component: ItemDetail,
      beforeEnter: (to, from, next) => { // [2]
        console.log('router: beforeEnter');
        console.log(to.params.itemId);
        const item = store.getters.getDetailData( Number(to.params.itemId) );
        if( item.length === 0 ){
          next({path: "/"})
        } else {
          next();
        }
    }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
