import {
  createRouter,
  createWebHistory,
  RouteRecordRaw 
} from 'vue-router';

import Main       from '../views/MainView.vue';
import SignIn     from '../views/SignIn.vue';

import middleware from './middleware';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    beforeEnter: middleware.authenticated,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
    beforeEnter: middleware.notAuthenticated,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
