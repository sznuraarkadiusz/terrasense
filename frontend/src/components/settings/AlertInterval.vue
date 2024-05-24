<template>
  <div class="max-w-md w-full lg:w-1/2 px-4 sm:py-4">
    <div class="bg-white p-6 rounded-lg shadow-xl">
      <div class="alert-interval flex flex-col items-center justify-center">
        <h2 class="alert-interval__title text-xl font-semibold mb-4">Częstotliwość powiadomień</h2>
  <form @submit.prevent="updateEmailInterval">
    <div class="mb-4 flex items-center">
      <label for="criticalInterval" class="block text-gray-700 mr-2 w-20">Krytyczna:</label>
      <input id="criticalInterval" type="number" v-model="emailIntervals.critical" placeholder="Interwał w minutach" min="1" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-24 border-solid border-2 border-red-600">
    </div>
    <div class="mb-4 flex items-center">
      <label for="mediumInterval" class="block text-gray-700 mr-2 w-20">Średnia:</label>
      <input id="mediumInterval" type="number" v-model="emailIntervals.medium" placeholder="Interwał w minutach" min="1" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-24 border-solid border-2 border-yellow-600">
    </div>
    <div class="mb-4 flex items-center">
      <label for="lowInterval" class="block text-gray-700 mr-2 w-20">Niska:</label>
      <input id="lowInterval" type="number" v-model="emailIntervals.low" placeholder="Interwał w minutach" min="1" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-24 border-solid border-2 border-lime-600">
    </div>
    <div>
      <button type="submit" class="btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:mt-4">Zaktualizuj interwały</button>
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
      emailIntervals: {
        critical: localStorage.getItem('criticalInterval') || 1,
        medium: localStorage.getItem('mediumInterval') || 5,
        low: localStorage.getItem('lowInterval') || 10
      }
    };
  },
  methods: {
    updateEmailInterval() {
      fetch('/update-email-interval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.emailIntervals)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('criticalInterval', this.emailIntervals.critical);
          localStorage.setItem('mediumInterval', this.emailIntervals.medium);
          localStorage.setItem('lowInterval', this.emailIntervals.low);
          alert('Interwały e-mail zostały zaktualizowane.');
        } else {
          alert('Nie udało się zaktualizować interwałów.');
        }
      })
      .catch(error => console.error('Error updating email intervals:', error));
    }
  }
};
</script>