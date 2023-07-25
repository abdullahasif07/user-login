import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import dashboard from '../components/dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


