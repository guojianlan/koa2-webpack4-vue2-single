const state = {
  loginData:""
}
const mutations = {
  ['SETLOGINDATA'](state,data){
    state.loginData = data
  }
}
const getters = {
  getLoginData:state=>state.loginData
}
const actions = {
  set_login_data({commit},data){
    commit('SETLOGINDATA',data)
  }
}
export default {
  // namespaced:true,//用于
  state,
  mutations,
  getters,
  actions
}