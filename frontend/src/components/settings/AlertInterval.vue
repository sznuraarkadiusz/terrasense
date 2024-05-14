  <template>
        <div class="max-w-md w-full lg:w-1/2 px-4 sm:py-4">
          <div class="bg-white p-6 rounded-lg shadow-xl">
    <div class="alert-interval">
      <h2 class="alert-interval__title text-xl font-semibold mb-4">Częstotliwość powiadomień</h2>
      <form @submit.prevent="updateEmailInterval">
      <div>
        <input class="max-w-14" type="number" v-model="emailInterval" placeholder="Interval in minutes" min="1">
        <span class="tooltip-icon mx-2" title="Domyślnie 5 min">?</span>
        <button type="submit" class="btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:mt-4">Zaktualizuj interwał</button>
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
        emailInterval: localStorage.getItem('emailInterval') || 5
      };
    },
  methods: {
    updateEmailInterval() {
      fetch('/update-email-interval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ interval: this.emailInterval })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('emailInterval', this.emailInterval);
          alert('Interwał e-mail został zaktualizowany.');
        } else {
          alert('Nie udało się zaktualizować interwału.');
        }
      })
      .catch(error => console.error('Error updating email interval:', error));
    }
  }
  }
  </script>