import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Protected from '../components/Protected.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/protected', component: Protected }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
