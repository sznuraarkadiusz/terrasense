<template>
  <div className="bg-gray-100 p-6">
    <h1 className="dashboard__title text-center mx-auto">Rejestracja</h1>
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md p-6">
      <input v-model="username" placeholder="Nazwa użytkownika" type="text" className="border p-2 rounded w-full mb-4">
      <button @click="registerUser"
              class="btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline">Zarejestruj
      </button>
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
    registerUser() {
      axios.post('/register', {username: this.username})
          .then(response => {
            if (response.data.message) {
              alert(response.data.message);
              this.$router.push('/login');
            } else {
              alert(response.data.error);
            }
          })
          .catch(error => {
            alert('Błąd rejestracji: ' + (error.response.data.error || error.message));
          });
    }
  }
}
</script>