import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';
import ChefsView from '../pages/ChefsView.vue';
import ChefDetailView from '../pages/ChefDetailView.vue';
import AuthView from '../pages/AuthView.vue';
import CartView from '../pages/CartView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/chefs', component: ChefsView },
  { path: '/chef/:id', component: ChefDetailView, props: true },
  { path: '/auth', component: AuthView },
  { path: '/cart', component: CartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
