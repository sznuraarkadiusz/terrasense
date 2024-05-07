<template>
  <div class="sensor__image justify-center flex"><img src="@/assets/img/sensor/temperature.png" alt="Temperature Sensor"></div>
  <p><strong>Temperatura:</strong> {{ temperature }} °C</p>
</template>

<script>
export default {
  name: 'TemperatureSensor',
  data() {
    return {
      temperature: 'Ładowanie...'
    };
  },
  methods: {
    fetchTemperature() {
      fetch('/get-data')
        .then(response => response.json())
        .then(data => {
          this.temperature = data.temperature;
          this.$emit('update-temperature', this.temperature);
        })
        .catch(error => {
          console.error('Error:', error);
          this.temperature = 'Błąd';
        });
    }
  },
  mounted() {
    this.fetchTemperature();
    setInterval(this.fetchTemperature, 5000);
  }
}
</script>