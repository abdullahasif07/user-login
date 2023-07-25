
import Vue from 'vue';
import Vuex from 'vuex';


export default new Vuex.Store({
  state: {
    userData: null, 
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
      localStorage.setItem('token', userData.token);
      localStorage.setItem('username', userData.user.name);
    },
  },
  actions: {
    saveUserData({ commit }, userData) {
      commit('setUserData', userData);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.userData !== null; 
    },
  },
});
