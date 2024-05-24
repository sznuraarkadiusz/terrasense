<template>
  <div v-if="user" :style="{ backgroundColor: sidebarBgColor }" class="sidebar lg:block hidden">
      <div class="p-5 sidebar__logo">
        <img :src="Logo" alt="Terra Sense - Safety is the basis!" />
      </div>
      <div class="sidebar__menu">
        <ul>
          <li class="p-3 hover:bg-gray-700"><router-link to="/">Strona główna</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/notifications">Powiadomienia</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/calendar">Archiwum</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/settings">Ustawienia</router-link></li>
          <li class="p-3 hover:bg-gray-700"><router-link to="/user-management">Użytkownicy</router-link></li>
          <li class="p-3 hover:bg-gray-700"><a href="http://192.168.68.155:3000/d/cdm0ejxl5mv40c/wykresy?orgId=1&refresh=5s" target="_blank">Grafana</a></li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      axios.get('/session-status').then(response => {
        if (response.data.logged_in) {
          this.user = { name: response.data.user };
        } else {
          this.user = null;
        }
      }).catch(() => {
        this.user = null;
      });
    },
    logout() {
      this.user = null;
    }
  },
  mounted() {
    this.checkLoginStatus();
    window.addEventListener('logout', this.logout);
    window.addEventListener('login', this.checkLoginStatus);
  }
};
</script>