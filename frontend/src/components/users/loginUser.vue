<template>
  <div class="login-form bg-gray-100">
      <h1 class="dashboard__title text-center mx-auto">Logowanie</h1>
    <div class="max-w-xs mx-auto bg-white rounded-lg shadow-md p-6">
    <input v-model="username" placeholder="Nazwa użytkownika" type="text" class="border p-2 rounded w-full mb-4">
    <button @click="loginWithRFID" class="btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline">Zaloguj</button>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: ''
    };
  },
  methods: {
    loginWithRFID() {
      axios.post('/login', {username: this.username})
          .then(response => {
            if (response.data.status === 'success') {
              alert('Zalogowano pomyślnie: ' + response.data.user);
              localStorage.setItem('isAuthenticated', 'true');
              window.dispatchEvent(new Event('login'))
              this.$router.push('/');
            } else {
              alert(response.data.message);
            }
          })
          .catch(error => {
            console.error('Błąd logowania RFID:', error);
            alert('Błąd logowania: ' + error.message);
          });
    }
  }
}
</script>
