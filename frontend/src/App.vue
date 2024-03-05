<template>
  <div id="app">
    <div className="mt-12">
      <h2>Stan czujników:</h2>
      <TemperatureHumidity/>
      <LightSensor/>
      <CoSensor/>
      <SmokeSensor/>
      <AirQualitySensor/>
    </div>
  </div>
</template>

<script>
import TemperatureHumidity from './components/TemperatureHumidity.vue'
import LightSensor from './components/LightSensor.vue'
import CoSensor from './components/CoSensor.vue'
import SmokeSensor from './components/SmokeSensor.vue'
import AirQualitySensor from './components/AirQualitySensor.vue'

export default {
  name: 'App',
  components: {
    TemperatureHumidity,
    LightSensor,
    CoSensor,
    SmokeSensor,
    AirQualitySensor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
