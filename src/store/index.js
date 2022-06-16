import { createStore } from "vuex";

export default createStore({
  state: {
    theme_color: "",
  },
  mutations: {
    setMycolor(state, value) {
      state.theme_color = value;
    },
  },
  actions: {},
  modules: {},
});
