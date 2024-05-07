<template>
  <div class="sensor__image justify-center flex"><img src="@/assets/img/sensor/smoke.png" alt="Smoke Sensor"></div>
 <p><strong>Dym:</strong> {{ smokeStatus ? 'wykryty' : 'brak' }}</p>
</template>

<script>
export default {
  name: 'SmokeSensor',
  data() {
    return {
      smokeStatus: 'Brak danych'
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
          this.smokeStatus = data.smoke;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
}
</script>