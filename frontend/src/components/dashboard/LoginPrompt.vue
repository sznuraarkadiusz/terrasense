<template>
  <div class="login-prompt h-screen flex justify-center items-center">
    <div class="text-center">
      <img :src="BlockedImage" alt="Terra Sense - Safety is the basis!"/>
      <h1 class="dashboard__title">Podgląd niedostępny</h1>
      <p>Zaloguj się, aby zobaczyć zawartość.</p>
    </div>
  </div>
</template>

<script>
import BlockedImage from '@/assets/img/people-with-snake.jpg';
import axios from 'axios';

export default {
  name: 'LoginPrompt',
  data() {
    return {
      BlockedImage
    };
  },
  created() {
    axios.get('/session-status').then(response => {
      if (response.data.logged_in) {
        this.$router.push('/');
      }
    });
  }
};
</script>