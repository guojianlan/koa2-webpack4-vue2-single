import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import index from './modules/index'
import login from './modules/login'
const store = new Vuex.Store({
  modules:{
    index,
    login
  }
})
export default store;