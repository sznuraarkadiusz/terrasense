<template>
    <p><strong>Tlenek węgla:</strong> {{ coStatus }}</p>
</template>

<script>
export default {
  name: 'CoSensor',
  data() {
    return {
      coStatus: 'Ładowanie danych...'
    };
  },
  methods: {
    fetchData() {
      fetch('/get-data')
        .then(response => response.json())
        .then(data => {
          this.coStatus = data.co === 'Wykryty' ? 'Tlenek węgla wykryty!' : 'Brak tlenku węgla.';
        })
        .catch(error => {
          console.error('Błąd:', error);
          this.coStatus = 'Błąd podczas ładowania danych.';
        });
    }
  },
  mounted() {
    this.fetchData();
    setInterval(this.fetchData, 10000);
  }
}
</script>