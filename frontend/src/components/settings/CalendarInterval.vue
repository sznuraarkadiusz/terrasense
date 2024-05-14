<template>
  <div class="max-w-md w-full lg:w-1/2 px-4 sm:py-4">
    <div class="bg-white p-6 rounded-lg shadow-xl">
      <div class="calendar-interval">
        <h2 class="calendar-interval__title text-xl font-semibold mb-4">Częstotliwość Interwału Kalendarza</h2>
        <form @submit.prevent="updateCalendarInterval">
          <div>
            <input class="max-w-14" type="number" v-model.number="calendarInterval" placeholder="Interwał w minutach" min="1">
            <span class="tooltip-icon mx-2" title="Domyślnie 5 minut">?</span>
            <button type="submit" class="btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:mt-4">
              Zaktualizuj interwał
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calendarInterval: 5 // Default interval in minutes
    };
  },
  methods: {
    updateCalendarInterval() {
      this.$emit('update-calendar-interval', this.calendarInterval);
    }
  }
}
</script>

<style scoped>
.calendar-interval__title {
  color: #1a202c;
}
.tooltip-icon {
  cursor: pointer;
  font-weight: bold;
}
</style>
