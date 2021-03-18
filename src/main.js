import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  // обеспечивает доступ всем компонентам к store
  // store: store,
  // Вариант записи от Давида
  store: new Vuex.Store(store),
  render: h => h(App),
}).$mount('#app')