import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breweries: [],
    searchString: '',
  },
  mutations: {
    updateBreweries(state, data) {
      state.breweries = data;
    },
    updateSearchString(state, value) {
      state.searchString = value;
    },
  },
  actions: {
    async getData({ commit }, perPage) {
      const response = await fetch(`https://api.openbrewerydb.org/breweries?per_page=${perPage}`);
      const data = await response.json();
      commit('updateBreweries', data);
    },
    // searchInData({ commit, state }, value) {
    //   if (!value.trim()) {
    //     commit('updateDataToDisplay', state.breweries);
    //   } else {
    //     const result = state.dataToDisplay
    //       .filter((item) => item.name.toLowerCase().includes(value));
    //     commit('updateDataToDisplay', result);
    //   }
    // },
  },
  getters: {
    allData(state) {
      return state.breweries;
    },
    searchTerm(state) {
      return state.searchString;
    },
  },
  modules: {},
});
