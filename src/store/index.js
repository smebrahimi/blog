import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS: (state , payload) => {
      state.posts = payload;
    }
  },
  actions: {
    getPosts: ({commit, params}) => {
      axios.get('/posts?_expand=user', {params: params})
        .then((response) => {
          commit('SET_POSTS', response.data);
        })
        .catch()
    },
    addPost: ({payload}) => {
      axios.post('/posts', payload)
      .then((response) => {
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
