import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user')) || null
  },
  mutations: {
    setUser (value) {
      window.localStorage.setItem('user', value)
    }
  },
  actions: {
  },
  modules: {
  }
})
