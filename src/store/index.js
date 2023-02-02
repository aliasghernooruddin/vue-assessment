import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      firstName: null,
      lastName: null,
      email: null,
      file: null
    }
  },
  getters: {
  },
  mutations: {
    saveUserData(state, obj) {
      state.userData = obj
    }
  },
  actions: {
    saveUserData(commit, obj) {
      commit('saveUserData', obj)
    }
  },
  modules: {
  }
})
