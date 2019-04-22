const state = {
  indexData:"1"
}
const mutations = {
  ['SETINDEXDATA'](state,data){
    state.indexData = data
  }
}
const getters = {
  getIndexData:state=>state.indexData
}
const actions = {
  set_index_data({commit},data){
    commit('SETINDEXDATA',data)
  }
}
export default {
  // namespaced:true,//用于
  state,
  mutations,
  getters,
  actions
}