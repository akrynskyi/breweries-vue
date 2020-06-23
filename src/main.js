import '@/assets/styles/global.scss';

import titleMixin from '@/mixins/titleMixin';
import dateFilter from '@/filters/date-filter';
import textFilter from '@/filters/text-filter';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.mixin(titleMixin);
Vue.filter('fromNow', dateFilter);
Vue.filter('cutText', textFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
