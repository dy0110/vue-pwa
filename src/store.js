import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataList: [],
    FavoriteList: []
  },
  mutations: {
    setDataList(state, dataList) {
      // APIから取得したデータをVuexにセット
      state.dataList = dataList;
    }
  },
  actions: {},
  getters: {
    getDetailData: state => itemId => {
      // Vuexから詳細情報を取得
      const item = state.dataList.filter(list => {
        return list.id === itemId;
      });
      return item;
    }
  }
});
