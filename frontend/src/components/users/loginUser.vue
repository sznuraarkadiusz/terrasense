<template>
  <div className="login-form">
    <h2>Logowanie RFID</h2>
    <input v-model="username" placeholder="Nazwa użytkownika" type="text">
    <button @click="loginWithRFID">Zaloguj</button>
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
