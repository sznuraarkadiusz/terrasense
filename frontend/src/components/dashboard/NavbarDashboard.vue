<template>
  <nav :style="{ backgroundColor: navbarBgColor }" class="text-white py-3 px-4 flex justify-between items-center relative">
    <button v-if="user" @click="toggleMenu" class="block lg:hidden p-2">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <p class="text-base lg:block hidden">Terra Sense v1.0.1</p>

    <div class="flex items-center">
      <div v-if="!user">
        <button @click="handleRFIDLogin" class="py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">Zaloguj</button>
      </div>
      <div v-else class="flex items-center">
        <img :src="Logo" alt="Terra Sense avatar" class="w-8 h-8 rounded-full mr-2" />
        <span>{{ user }}</span>
        <button @click="logout" class="ml-4 py-2 px-4 bg-red-700 hover:bg-red-600 rounded">Wyloguj</button>
      </div>
    </div>

    <div v-if="menuOpen" class="navbar__menu absolute top-full left-0 bg-gray-800 w-full z-50">
      <ul>
        <li class="p-3 hover:bg-gray-700"><router-link to="/" @click="toggleMenu">Strona główna</router-link></li>
        <li class="p-3 hover:bg-gray-700"><router-link to="/notifications" @click="toggleMenu">Powiadomienia</router-link></li>
        <li class="p-3 hover:bg-gray-700"><router-link to="/calendar" @click="toggleMenu">Kalendarz</router-link></li>
        <li class="p-3 hover:bg-gray-700"><router-link to="/settings" @click="toggleMenu">Ustawienia</router-link></li>
        <li class="p-3 hover:bg-gray-700"><a href="#" @click="toggleMenu">Pomoc</a></li>
        <li class="p-3 hover:bg-gray-700"><a href="http://192.168.68.155:3000" target="_blank" @click="toggleMenu">Grafana</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import Logo from '@/assets/logo_transparent.png';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      user: null,
      menuOpen: false,
      Logo
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleRFIDLogin() {
      alert('Proszę zbliżyć kartę RFID do czytnika.');
      axios.post('http://192.168.68.155:5000/scan-rfid')
        .then(response => {
          if (response.data.status === 'success') {
            this.user = response.data.user;
            localStorage.setItem('isAuthenticated', 'true');
            alert('Zalogowano pomyślnie: ' + response.data.user);
        this.$nextTick(() => {
          this.$router.push('/').catch(err => {
            console.log(err);
          });
        });
          } else {
            alert('Logowanie nieudane: ' + response.data.message);
          }
        })
        .catch(error => {
          console.error('Błąd logowania RFID: ', error);
          alert('Błąd logowania: ' + error.message);
        });
    },
    logout() {
      axios.get('http://192.168.68.155:5000/logout').then(response => {
        if (response.data.status === 'success') {
          this.user = null;
          localStorage.removeItem('isAuthenticated');
          alert('Wylogowano pomyślnie');
          this.$router.push('/login-prompt');
        } else {
          alert('Problem z wylogowaniem: ' + response.data.message);
        }
      });
    },
    checkLoginStatus() {
      const loggedIn = localStorage.getItem('isAuthenticated');
      if (loggedIn) {
        this.user = { name: 'admin' };
      }
  },
  },
  mounted() {
    axios.get('http://192.168.68.155:5000/session-status').then(response => {
      if (response.data.logged_in) {
        this.user = response.data.user;
      }
    });
    this.checkLoginStatus();
  },
    computed: {
    ...mapState(['sidebarBgColor']),
    navbarBgColor() {
      return this.sidebarBgColor;
    }
  },
}
</script>