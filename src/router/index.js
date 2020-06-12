import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Breweries - Home' },
    component: Home,
  },
  {
    path: '/discover',
    name: 'Discover',
    meta: { title: 'Breweries - Discover' },
    component: () => import('@/views/Discover.vue'),
  },
  {
    path: '/detail/:name/:id',
    name: 'Detail',
    component: () => import('@/views/Detail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.afterEach((to) => {
//   Vue.nextTick(() => {
//     document.title = to.meta.title || 'Breweries';
//   });
// });

export default router;
