export default {
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
  },
  getters: {
    data(state) {
      return state.breweries;
    },
    searchTerm(state) {
      return state.searchString;
    },
  },
};
