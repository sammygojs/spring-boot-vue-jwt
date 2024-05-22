<template>
  <div id="app">
    <nav>
      <router-link v-if="!currentUser" to="/login">Login</router-link>
      <router-link v-if="!currentUser" to="/register">Register</router-link>
      <router-link v-if="currentUser" to="/protected">Protected Area</router-link>
      <a v-if="currentUser" href="#" @click="logout">Logout</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AuthService from './services/authService';

export default {
  name: 'App',
  data() {
    return {
      currentUser: null
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  },
  methods: {
    logout() {
      AuthService.logout();
      this.currentUser = null;
      this.$router.push('/login');
    }
  }
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
