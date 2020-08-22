import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  data: function() {
    return {
      get token() {
        return localStorage.getItem('token') || 0;
      },
      set tokens(value) {
        localStorage.setItem('token', value);
      }
    };
  },
    }).$mount('#app');
