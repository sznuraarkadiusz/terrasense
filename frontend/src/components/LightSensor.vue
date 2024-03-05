<template>
    <p><strong>Światło:</strong> {{ lightState ? 'Światło wykryte' : 'Brak światła' }}</p>
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
          this.lightState = data.light === 'Światło wykryte';
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