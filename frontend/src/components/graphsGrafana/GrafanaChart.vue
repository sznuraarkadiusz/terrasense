<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { format, parseISO } from 'date-fns';

export default {
  name: 'SensorChart',
  props: {
    sensorType: String,
    sensorLabel: String,
    color: String
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initializeChart();
  },
  methods: {
    initializeChart() {
      fetch('/grafana-data')
        .then(response => response.json())
        .then(data => {
          this.renderChart(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    renderChart(data) {
      const ctx = this.$refs.chartCanvas.getContext('2d');
      this.chart?.destroy();

      const sensorIndex = data.results[0].series[0].columns.indexOf(this.sensorType);
      const chartData = data.results[0].series[0].values.map(value => ({
        x: format(parseISO(value[0]), 'yyyy-MM-dd HH:mm:ss'),
        y: value[sensorIndex]
      }));

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            label: this.sensorLabel,
            data: chartData,
            borderColor: this.color,
            fill: false
          }]
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute',
                stepSize: 15,
                displayFormats: {
                  minute: 'HH:mm'
                }
              },
              title: {
                display: true,
                text: 'Czas'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Wartość'
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
}
</script>