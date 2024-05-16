<template>
  <div class="bg-gray-100 p-6">
      <h1 class="dashboard__title text-center mx-auto">Użytkownicy</h1>
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div class="user-grid text-center font-bold py-2 border-b-2 mb-4">
        <div>ID</div>
        <div>Nazwa użytkownika</div>
        <div>ID Karty RFID</div>
        <div>Akcje</div>
      </div>
      <ul>
        <li v-for="user in users" :key="user.id" class="user-grid text-center items-center p-2 hover:bg-gray-50">
          <span>{{ user.id }}</span>
          <span>{{ user.username }}</span>
          <span>{{ user.rfid }}</span>
          <button v-if="user.id !== 1" @click="deleteUser(user.id)" class="py-1 px-3 bg-red-700 hover:bg-red-800 rounded text-white">Usuń</button>
        </li>
      </ul>
      <div class="mt-4">
        <input v-model="newUser.username" placeholder="Nazwa użytkownika" class="border p-2 rounded w-full mb-4">
        <button @click="addUser" class="btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline">Dodaj użytkownika</button>
      </div>
    </div>
  </div>
</template>

<style>
.user-grid {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 0.5fr;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      newUser: {
        username: ''
      }
    };
  },
  methods: {
    fetchUsers() {
      axios.get('/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          alert('Błąd pobierania użytkowników: ' + error.message);
        });
    },
    addUser() {
      if (!this.newUser.username.trim()) {
        alert('Nazwa użytkownika jest wymagana');
        return;
      }

      alert('Proszę przyłożyć kartę do czytnika...');
      axios.post('/add-user', this.newUser)
        .then(() => {
          alert('Użytkownik dodany!');
          this.fetchUsers();
          this.newUser.username = '';
        })
        .catch(error => {
          const errorMessage = error.response && error.response.data && error.response.data.error
            ? error.response.data.error
            : 'Nieznany błąd';
          alert('Błąd dodawania użytkownika: ' + errorMessage);
        });
    },
    deleteUser(id) {
      axios.delete(`/user/${id}`)
        .then(() => {
          alert('Użytkownik usunięty');
          this.fetchUsers();
        })
        .catch(error => {
          alert('Błąd usuwania użytkownika: ' + error.response.data.error);
        });
    }
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>