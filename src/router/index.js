import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from '../components/UserRegister.vue';
import UserLogin from '../components/UserLogin.vue';
import ProtectedArea from '../components/ProtectedArea.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', component: UserRegister },
  { path: '/login', component: UserLogin },
  { path: '/protected', component: ProtectedArea }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
