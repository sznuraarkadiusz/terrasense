  <template>
    <div class="bg-gray-100">
      <h1 class="dashboard__title text-center mx-auto">Powiadomienia</h1>
      <div class="flex justify-center flex-wrap items-center pt-6">
        <div class="max-w-md w-full lg:w-1/2 px-4">
          <div class="bg-white p-6 rounded-lg shadow-xl">
  <h2 class="text-xl font-semibold mb-4">Ustawienia alertów</h2>
      <form @submit.prevent="submitAlertSettings" class="flex flex-col items-center">
  <div v-for="{key, value} in orderedSettings" :key="key">
                <label :for="key" class="block text-gray-700 font-bold mb-2">{{ sensorNames[key] }}:</label>
    <div class="flex items-center mb-4">
    <input type="checkbox" v-model="value.enabled" :id="key" class="form-checkbox h-6 w-6 rounded-full border border-gray-300 text-green-500 mr-2">
    <input type="number" v-if="['temperature', 'humidity'].includes(key)" v-model="value.min" placeholder="Min" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-16 mr-2">
    <input type="number" v-if="['temperature', 'humidity'].includes(key)" v-model="value.max" placeholder="Max" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-16">
    <select v-model="value.priority" class="ml-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight">
      <option value="critical">Krytyczny</option>
      <option value="medium">Średni</option>
      <option value="low">Niski</option>
    </select>
    <button @click.prevent="deleteAlert(key)" type="button" class="ml-2 px-3 py-1 bg-red-500 text-white text-sm leading-tight rounded hover:bg-red-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Usuń</button>
  </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email do alertów:</label>
          <input type="email" v-model="alertSettings.email" id="email" placeholder="Wpisz swój email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="btn__alert--submit font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Zapisz Ustawienia</button>
        </div>
      </form>
    </div>
         </div>
        <div class="w-1/3 p-4 flex flex-col items-center justify-center">
          <div class="bg-white p-6 rounded-lg shadow-xl">
            <h2 class="text-xl font-semibold mb-4">Podsumowanie alertów</h2>
          <ul>
            <li v-for="{key, value} in filteredSettings" :key="key" class="mb-2">
              <strong>{{ sensorNames[key] }}</strong>:
              <span v-if="['temperature', 'humidity'].includes(key)">
                Min: {{ value.min }}, Max: {{ value.max }}
              </span>
              <span v-else>Aktywny</span>
            </li>
            <li v-if="alertSettings.email" class="mb-2">
              <strong>Email</strong>: {{ alertSettings.email }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        order: ['temperature', 'humidity', 'light', 'co', 'smoke', 'airQuality', 'email'],
        alertSettings: {
          temperature: { enabled: false, min: null, max: null, priority: 'medium' },
          humidity: { enabled: false, min: null, max: null, priority: 'medium' },
          light: { enabled: false, priority: 'medium' },
          co: { enabled: false, priority: 'medium' },
          smoke: { enabled: false, priority: 'medium' },
          airQuality: { enabled: false, priority: 'medium' },
          email: ''
        },
        sensorNames: {
          temperature: 'Temperatura',
          humidity: 'Wilgotność',
          light: 'Światło',
          co: 'Tlenek węgla',
          smoke: 'Dym',
          airQuality: 'Jakość powietrza',
          email: 'Email'
        }
      };
    },
      computed: {
        orderedSettings() {
          const settingsWithoutEmail = this.order.filter(key => key !== 'email');
          return settingsWithoutEmail.map(key => ({ key, value: this.alertSettings[key] || {} }));
        },
        filteredSettings() {
          return this.orderedSettings.filter(({ value }) => value && value.enabled);
        },
      },
    mounted() {
      this.fetchAlertSettings();
    },
    methods: {
      fetchAlertSettings() {
          fetch('/set-alerts', { method: 'GET' })
              .then(response => response.json())
              .then(data => {
                  this.alertSettings = {...this.alertSettings, ...data};
                  console.log("Zaktualizowano ustawienia", this.alertSettings);
              })
              .catch(error => console.error('Error:', error));
      },
      submitAlertSettings() {
        fetch('/set-alerts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.alertSettings)
        })
        .then(() => alert('Zapisano ustawienia'))
        .catch(error => console.error('Error:', error));
      },
      deleteAlert(sensor) {
          if (confirm(`Jesteś pewien, że chcesz usunać alert: ${sensor}`)) {
              fetch(`/set-alerts?type=${sensor}`, { method: 'DELETE' })
                  .then(response => response.json())
                  .then(result => {
                      alert(result.message);
                      this.fetchAlertSettings();
                  })
                  .catch(error => console.error('Error:', error));
          }
      }
    }
  };
  </script>