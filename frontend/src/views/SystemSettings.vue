<template>
  <div class="bg-gray-100">
    <h1 class="dashboard__title text-center mx-auto">Ustawienia</h1>
    <div class="flex justify-center flex-wrap items-center pt-6">
        <sensor-manager></sensor-manager>
          <alert-interval></alert-interval>
        <colors-customization @colorUpdated="handleColorUpdated"></colors-customization>
    </div>
  </div>
</template>

<script>
import SensorManager from '@/components/settings/SensorManager.vue';
import AlertInterval from '@/components/settings/AlertInterval.vue';
import ColorsCustomization from "@/components/settings/ColorsCustomization.vue";

export default {
  components: {
    SensorManager,
    AlertInterval,
    ColorsCustomization
  },
  methods: {
    handleColorUpdated(newColor) {
      this.$root.$emit('updateSidebarColor', newColor);
    }
  }
}
</script>
