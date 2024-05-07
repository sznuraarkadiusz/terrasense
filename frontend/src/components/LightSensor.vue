<template>
    <div class="sensor__image justify-center flex"><img src="@/assets/img/sensor/light.png" alt="Light Sensor"></div>
    <p><strong>Światło:</strong> {{ lightState ? 'wykryte' : 'brak' }}</p>
</template>

<script>
export default {
  name: 'LightSensor',
  data() {
    return {
      lightState: false
    };
  },
  methods: {
    fetchLightData() {
      fetch('/get-data')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.lightState = data.light;
        })
        .catch(error => {
          console.error('Error:', error);
          this.lightState = false;
        });
    }
  },
  mounted() {
    this.fetchLightData();
    setInterval(this.fetchLightData, 5000);
  }
}
</script>