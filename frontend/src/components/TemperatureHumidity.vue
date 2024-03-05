<template>
    <p><strong>Temperatura:</strong> {{ temperature }} °C</p>
    <p><strong>Wilgotność:</strong> {{ humidity }} %</p>
</template>

<script>
export default {
  name: 'TemperatureHumidity',
  data() {
    return {
      temperature: 'Ładowanie...',
      humidity: 'Ładowanie...'
    };
  },
  methods: {
    fetchData() {
      fetch('/get-data')
        .then(response => response.json())
        .then(data => {
          this.temperature = data.temperature;
          this.humidity = data.humidity;
        })
        .catch(error => {
          console.error('Error:', error);
          this.temperature = 'Błąd';
          this.humidity = 'Błąd';
        });
    }
  },
  mounted() {
    this.fetchData();
    setInterval(this.fetchData, 5000);
  }
}
</script>
