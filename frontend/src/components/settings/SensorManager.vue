<template>
        <div class="max-w-md w-full lg:w-1/2 px-4 py-4">
        <div class="bg-white p-6 rounded-lg shadow-xl">
  <div class="sensor-manager">
    <h2 class="sensor-manager__title text-xl font-semibold mb-4">Widoczność czujników</h2>
    <ul class="flex-col items-center justify-center flex">
      <li v-for="(isActive, sensor) in sensors" :key="sensor" class="sensor-manager__item mb-2 flex items-center">
        <label :for="`switch-${sensor}`" class="sensor-manager__label mr-2">{{ sensorNames[sensor] || sensor }}:</label>
        <div class="sensor-manager__checkbox">
          <input type="checkbox" :id="`switch-${sensor}`" :checked="isActive" @change="handleToggle(sensor)" class="sensor-manager__toggle">
        </div>
      </li>
    </ul>
  </div>
        </div>
        </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      sensorNames: {
        temperature: 'Temperatura',
        humidity: 'Wilgotność',
        light: 'Światło',
        co: 'Tlenek węgla',
        smoke: 'Dym',
        airQuality: 'Jakość powietrza'
      }
    };
  },
  computed: {
    ...mapState({
      sensors: state => state.sensors
    })
  },
  methods: {
    ...mapActions(['toggleSensor']),
    handleToggle(sensor) {
      this.toggleSensor(sensor);
    }
  }
}
</script>