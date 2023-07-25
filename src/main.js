import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store.js';

const app = createApp(App);

app.use(store);

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const isAuthenticated = store.getters.isAuthenticated;
const isAuthenticated = localStorage.getItem('token');

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'home' });
  } else if (isAuthenticated && to.name === 'home') {
    console.log('isAuthenticated', isAuthenticated);
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

app.use(router);

app.mount('#app');





