<template>
    <div class="sensor__image justify-center flex"><img src="@/assets/img/sensor/airquality.png" alt="Air Quality Sensor"></div>
    <p><strong>Jakość powietrza:</strong> {{ airQuality  ? 'dobra' : 'umiarkowana' }}</p>
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