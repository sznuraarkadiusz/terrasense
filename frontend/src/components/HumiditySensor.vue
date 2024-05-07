<template>
  <div class="sensor__image justify-center flex"><img src="@/assets/img/sensor/humidity.png" alt="Humidity Sensor"></div>
  <p><strong>Wilgotność:</strong> {{ humidity }} %</p>
</template>

<script>
export default {
  name: 'HumiditySensor',
  data() {
    return {
      humidity: 'Ładowanie...'
    };
  },
  methods: {
    fetchHumidity() {
      fetch('/get-data')
        .then(response => response.json())
        .then(data => {
          this.humidity = data.humidity;
        })
        .catch(error => {
          console.error('Error:', error);
          this.humidity = 'Błąd';
        });
    }
  },
  mounted() {
    this.fetchHumidity();
    setInterval(this.fetchHumidity, 5000);
  }
}
</script>