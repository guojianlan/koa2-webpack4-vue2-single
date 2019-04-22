import Vue from 'vue'
import _ from 'lodash'
import axios from 'axios'
export default (_Vue)=>{
  //vue——i18n插件，需要安装axios,lodash
  if(!_Vue){
    _Vue = Vue
  }
  //缓存个
  let cache = {};
  var i18nVue = new _Vue({
    data(){
      return {
        locale:'',
        message:null
      }
    }
  })
  let vm = i18nVue;
  _Vue.prototype.$setLocale=(locale,cb)=>{
    //如果locale相同，则return,并且执行回调
    if(vm.locale == locale){
      console.log('加载相同的')
      cb && cb()
      return;
    }
    //判断cache有内容，并且cache['locale']不是空值
    if(!_.isEmpty(cache) && !_.isEmpty(cache[`${locale}`])){
      vm.locale = locale;
      vm.message = cache[`${locale}`];
      console.log('cache')
      cb && cb()
      return ;
    }
    //远程获取
    axios.get(`/resource/${locale}.json`).then((resp)=>{
      if(resp.status ==200 && resp.data){
        vm.locale = locale;
        vm.message=resp.data;
        cache[`${locale}`] = resp.data;
        cb && cb()
      }
    })
  }
  _Vue.locale='sss'
  //添加根据key获取数据的方法
  _Vue.prototype.$t = (key,defaultVal,replaceVal)=>{
    //直接使用lodash函数获取值
    let result = _.result(vm.message, key,defaultVal?defaultVal:'');
    if(replaceVal && result){
      return _.template(result)(replaceVal)
    }
    return result;
  }
  window.hehe=_Vue;
};
