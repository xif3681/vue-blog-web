import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
// import about from './modules/about'
import postedit from './modules/postedit'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })

export default new Vuex.Store({
  modules: {
    // about,
    postedit
  },
  // state,
  actions,
  mutations
})
