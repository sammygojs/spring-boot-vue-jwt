<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input type="text" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import AuthService from '../services/authService';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: ''
      };
    },
    methods: {
      handleLogin() {
        AuthService.login({
          email: this.email,
          password: this.password
        })
          .then(() => {
            this.$router.push('/protected');
          })
          .catch(error => {
            this.message = 'Invalid credentials';
          });
      }
    }
  };
  </script>
  