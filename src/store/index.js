import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isloggedIn: false,
  },
  getters: {
    checkLogin: (state) => state.isloggedIn,
  },
  mutations: {
    Set_Login(state,payload) {
      state.isloggedIn = payload;
    },
  },
    actions: {
      Set_Login: function ({ commit }, payload) {
        commit("Set_Login", payload);
      },
    },
    modules: {},
  }
);
