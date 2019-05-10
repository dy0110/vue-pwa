import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ItemDetail from "./views/ItemDetail";
import FavolitList from "./views/favolitList"
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
      path: "/item/:itemId",
      component: ItemDetail,
      beforeEnter: (to, from, next) => {
        // 直接アクセスして来た時にトップページへ戻す
        console.log("router: beforeEnter");
        console.log(to.params.itemId);
        const item = store.getters.getDetailData(Number(to.params.itemId));
        if (item.length === 0) {
          next({ path: "/" });
        } else {
          next();
        }
      }
    },
    {
      path: "/favolitList",
      name: 'favolitList',
      component: FavolitList
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
