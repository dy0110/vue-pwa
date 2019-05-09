import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import locastrage from "./localstrage";
import "vuetify/dist/vuetify.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  locastrage,
  render: h => h(App)
}).$mount("#app");
