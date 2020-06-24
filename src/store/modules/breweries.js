export default {
  state: {
    breweries: [],
    searchString: '',
  },

  mutations: {
    updateBreweries(state, data) {
      if (state.breweries.length) {
        state.breweries = [...state.breweries, ...data];
      } else {
        state.breweries = data;
      }
    },

    updateSearchString(state, value) {
      state.searchString = value;
    },
  },

  actions: {
    async getData({ commit }, params) {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?page=${params.page || 1}&per_page=${params.perPage || 20}`,
      );
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
