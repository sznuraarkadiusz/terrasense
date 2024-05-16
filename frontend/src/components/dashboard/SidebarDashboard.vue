<template>
  <div v-if="user" :style="{ backgroundColor: sidebarBgColor }" class="sidebar lg:block hidden">
      <div class="p-5 sidebar__logo">
        <img :src="Logo" alt="Terra Sense - Safety is the basis!" />
      </div>
      <div class="sidebar__menu">
        <ul>
          <li class="p-3 hover:bg-gray-700"><router-link to="/">Strona główna</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/notifications">Powiadomienia</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/calendar">Kalendarz</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/settings">Ustawienia</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/user-management">Użytkownicy</router-link></li>
          <li class="p-3 hover:bg-gray-700"><a href="#">Pomoc</a></li>
          <li class="p-3 hover:bg-gray-700"><a href="http://192.168.68.155:3000" target="_blank">Grafana</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo_transparent.png';
import { mapState } from 'vuex';

export default {
  name: 'SidebarDashboard',
  data() {
    return {
      user: null,
      Logo
    };
  },
  computed: {
    ...mapState(['sidebarBgColor'])
  },
  methods: {
    checkLoginStatus() {
      const loggedIn = localStorage.getItem('isAuthenticated');
      if (loggedIn) {
        this.user = { name: 'admin' };
      }
    },
    logout(){
              this.user = null;
    }
  },
  mounted() {
    this.checkLoginStatus();
    window.addEventListener('logout', this.logout)
    window.addEventListener('login', this.checkLoginStatus)
  }
};
</script>