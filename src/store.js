import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    setDataList(state, dataList) {
      state.dataList = dataList;
    }
  },
  actions: {}
});
