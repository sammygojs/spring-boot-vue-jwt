<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="email">Email:</label>
        <input type="text" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import AuthService from '../services/authService';

export default {
  name: 'UserRegister',
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    handleRegister() {
      AuthService.register({
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.message = 'Registered successfully!';
        })
        .catch(error => {
          this.message = error.response.data.message;
        });
    }
  }
};
</script>
