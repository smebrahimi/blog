import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    isLoading: false
  },
  mutations: {
    SET_POSTS: (state , payload) => {
      state.posts = payload;
    },
    SET_LOADING: (state, payload) => {
      state.isLoading = payload
    }
  },
  actions: {
    getPosts: async ({commit}, params) => {
      console.log(params)
      await axios.get('/posts?_expand=user', {params: params})
        .then((response) => {
          commit('SET_POSTS', response.data);
        })
        .catch()
    },
    addPost: async ({commit}, payload) => {
      commit('SET_LOADING', true);
      await axios.post('/posts', payload)
      .then((response) => {
        commit('SET_LOADING', false);
        return response.data;
      })
      .catch()
    }
  },
  getters: {
    posts: (state) => total => state.posts.slice(0, total),
  },
  modules: {
  }
})
