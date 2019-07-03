import Vue from 'vue'
import App from './App.vue'
//import bootstrap from 'bootstrap';
//import jquery from 'jquery';
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
