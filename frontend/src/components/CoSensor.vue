<template>
  <div class="sensor__image justify-center flex"><img src="@/assets/img/sensor/co.png" alt="CO Sensor"></div>
    <p><strong>Tlenek węgla:</strong> {{ coStatus ? 'wykryty' : 'brak'}}</p>
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
          this.coStatus = data.co;
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