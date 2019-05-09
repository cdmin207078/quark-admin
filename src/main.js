import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// import BootstrapVue from "bootstrap-vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Vue.use(BootstrapVue);

import iView from "iview";
// import "iview/dist/styles/iview.css"; // 自定义主题
import "./theme/index.less";

Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
