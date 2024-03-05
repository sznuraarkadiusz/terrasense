<template>
  <div>
    <h2>Jakość powietrza: {{ airQuality }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AirQualitySensor',
  data() {
    return {
      airQuality: 'Brak danych'
    };
  },
  mounted() {
    this.fetchData();
    setInterval(this.fetchData, 5000);
  },
  methods: {
    fetchData() {
      fetch('/get-data')
        .then(response => response.json())
        .then(data => {
          this.airQuality = data.airQuality;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
}
</script>