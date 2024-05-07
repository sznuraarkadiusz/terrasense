<template>
  <div class="dashboard__sensors bg-gray-100">
    <h1 class="dashboard__title text-center mx-auto">Panel monitoringu</h1>
    <div class="flex flex-wrap justify-center">
      <!-- Usuwamy v-if i korzystamy z przefiltrowanej listy -->
      <div v-for="sensor in visibleSensors" :key="sensor.type"
           class="sensor__item w-full sm:w-1/2 md:w-1/3 p-3 bg-white shadow">
        <component :is="sensor.component" />
        <sensor-details>
          <grafana-chart :sensor-type="sensor.type" :sensor-label="sensor.label" :color="sensor.color"/>
        </sensor-details>
      </div>
    </div>
    <footer class="p-3 w-full text-center">
      <p class="text-sm text-gray-600">
        Copyright &copy; 2024 Terra Sense – Wszelkie prawa zastrzeżone |
        <a href="https://github.com/sznuraarkadiusz">DEVAS Arkadiusz Sznura 🔥</a>
      </p>
    </footer>
  </div>
</template>

<script>
import SensorDetails from '@/components/sensorDetails/SensorDetails.vue';
import GrafanaChart from "@/components/graphsGrafana/GrafanaChart";
import LightSensor from "@/components/LightSensor";
import SmokeSensor from "@/components/SmokeSensor";
import AirQualitySensor from "@/components/AirQualitySensor";
import CoSensor from "@/components/CoSensor";
import HumiditySensor from "@/components/HumiditySensor";
import TemperatureSensor from "@/components/TemperatureSensor";
import { mapState } from 'vuex';

export default {
  components: {
    TemperatureSensor,
    HumiditySensor,
    AirQualitySensor,
    CoSensor,
    SmokeSensor,
    LightSensor,
    SensorDetails,
    GrafanaChart
  },
  computed: {
    ...mapState({
      sensorsState: state => state.sensors
    }),
    visibleSensors() {
      return this.sensors.filter(sensor => this.sensorsState[sensor.type]);
    }
  },
  data() {
    return {
      sensors: [
        { type: 'temperature', label: 'Temperatura', color: 'rgb(255, 99, 132)', component: TemperatureSensor },
        { type: 'humidity', label: 'Wilgotność', color: 'rgb(26, 196, 92)', component: HumiditySensor },
        { type: 'light', label: 'Światło', color: 'rgb(255, 206, 86)', component: LightSensor },
        { type: 'smoke', label: 'Dym', color: 'rgb(255, 159, 64)', component: SmokeSensor },
        { type: 'co', label: 'Tlenek węgla', color: 'rgb(153, 102, 255)', component: CoSensor },
        { type: 'airQuality', label: 'Jakość powietrza', color: 'rgb(75, 192, 192)', component: AirQualitySensor }
      ]
    };
  }
}
</script>
