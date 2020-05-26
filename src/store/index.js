import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breweries: [],
  },
  mutations: {
    updateBreweries(state, data) {
      state.breweries = data;
    },
  },
  actions: {
    async getData({ commit }, perPage) {
      const response = await fetch(`https://api.openbrewerydb.org/breweries?per_page=${perPage}`);
      const data = await response.json();
      commit('updateBreweries', data);
    },
  },
  getters: {
    allData(state) {
      return state.breweries;
    },
  },
  modules: {},
});
