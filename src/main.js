
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import store from './store/index'
import sync from 'vuex-router-sync'
Vue.prototype.a=1


Vue.use(i18n)
sync.sync(store,router)
console.log(IMAGE_DIR);
new Vue({
  el: '#app',
  router,
  store,
  data(){
   return {
     a:1
   }
  },
  render:(h)=>h(App),
  created(){
    this.$setLocale('zh',()=>{
      console.log('zh')
    });
  }
})