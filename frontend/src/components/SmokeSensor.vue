<template>
  <div>
    <h2>Wykrywanie dymu: {{ smokeStatus }}</h2>
  </div>
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