import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

// netlify identity
netlifyIdentityWidget.init();
// Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://bc-dashboard.netlify.com/.netlify/identity",
  setCookie: true
});
//
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
