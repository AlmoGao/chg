import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    token: "",
    config: {},
    share: {
      show: false,
      item: {}
    }
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setConfig(state, data) {
      state.config = data;
    },
    setShare(state, data) {
      state.share = {
        show: true,
        item: data
      }
    },
    closeShare(state) {
      state.share = {
        show: false,
        item: {}
      }
    },
  },
  actions: {},
  plugins: [createPersistedState()],
});
