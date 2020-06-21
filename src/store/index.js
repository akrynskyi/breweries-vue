import Vue from 'vue';
import Vuex from 'vuex';

import Feedbacks from './modules/feedbacks';
import Breweries from './modules/breweries';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    Feedbacks,
    Breweries,
  },
});
