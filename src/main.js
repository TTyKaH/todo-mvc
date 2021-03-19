import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import router from './router/routes'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  // обеспечивает доступ всем компонентам к store
  // store: store,
  // Вариант записи от Давида
  store: new Vuex.Store(store),
  router,
  render: h => h(App),
}).$mount('#app')