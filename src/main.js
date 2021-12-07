import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store()

import VueRouter from 'vue-router'
import routes from './router'
Vue.use(VueRouter)
const router = new VueRouter()

import senaCfPlugin from 'sena-cf-plugin'
Vue.use(senaCfPlugin, router, routes, store)

import '../node_modules/sena-cf-plugin/dist/sena-cf-plugin.css'
import './styles/_styles.sass'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
