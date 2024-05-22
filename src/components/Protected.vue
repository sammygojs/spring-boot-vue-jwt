<template>
    <div class="protected">
      <h2>Protected Area</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import authHeader from '../services/auth-header';
  
  export default {
    data() {
      return {
        content: ''
      };
    },
    mounted() {
      axios
        .get('http://localhost:8080/protected', { headers: authHeader() })
        .then(response => {
          this.content = response.data;
        })
        .catch(error => {
          this.content = error.response.data.message;
        });
    }
  };
  </script>
  