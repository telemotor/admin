import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../config'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    popularUrls: []
  },
  actions: {
    LOAD_POPULAR_URLS: function ({ commit }) {
      axios.get(config.api_url + '/used_pages')
        .then((response) => {
          commit('SET_POPULAR_URLS', { list: response.data })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mutations: {
    SET_POPULAR_URLS: (state, { list }) => {
      state.popularUrls = list
    }
  },
  getters: {
    popularUrls: state => {
      return state.popularUrls
    }
  }
})

export default store
