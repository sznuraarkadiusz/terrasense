<template>
  <div class="bg-gray-100">
    <h1 class="dashboard__title text-center mx-auto">Archiwum</h1>

    <div class="flex justify-center mt-4">
      <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h2 class="calendar__title text-xl font-semibold mb-4 text-center">Legenda</h2>
        <ul>
          <li><strong>Jakość powietrza:</strong> 0 - umiarkowana, 1 - dobra</li>
          <li><strong>Tlenek węgla:</strong> 0 - brak, 1 - wykryty</li>
          <li><strong>Dym:</strong> 0 - brak, 1 - wykryty</li>
          <li><strong>Światło:</strong> 0 - brak, 1 - wykryte</li>
        </ul>
      </div>
    </div>

    <div class="flex justify-center flex-wrap items-center pt-6">
      <div class="p-4 bg-white rounded-lg shadow-md w-full max-w-4xl">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-wrap gap-4 mb-4">
            <label v-for="column in selectableColumns" :key="column" class="flex items-center space-x-2">
              <input type="checkbox" v-model="showColumns[column]" class="form-checkbox h-4 w-4 text-gray-700">
              <span>{{ columnNames[column] }}</span>
            </label>
          </div>

          <div class="flex flex-wrap gap-4 mb-4 justify-center">
            <input type="datetime-local" v-model="timeFilter.start" class="border p-2 rounded">
            <input type="datetime-local" v-model="timeFilter.end" class="border p-2 rounded">
            <button @click="fetchData" class="btn__alert--submit py-2 px-4 rounded focus:outline-none focus:shadow-outline">Filtruj</button>
            <button @click="clearFilters" class="ml-4 py-2 px-4 bg-red-700 hover:bg-red-600 rounded text-white">Wyczyść</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 bg-gray-100 p-4 rounded-lg shadow-inner">
          <span class="font-bold">{{ columnNames.time }}</span>
          <span v-for="column in visibleColumns" :key="column" class="font-bold">{{ columnNames[column] }}</span>
        </div>

        <div v-for="data in filteredSensorData" :key="data.time" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 bg-white p-4 rounded-lg shadow-md mt-2">
          <span>{{ formatToLocalTime(data.time) }}</span>
          <span v-for="column in visibleColumns" :key="column">{{ data[column] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


  <script>
  export default {
    data() {
      return {
        sensorData: [],
        defaultColumns: {
          temperature: true,
          humidity: true,
          co: true,
          smoke: true,
          airQuality: true,
          light: true
        },
        showColumns: {
          time: true,
          temperature: true,
          humidity: true,
          co: true,
          smoke: true,
          airQuality: true,
          light: true
        },
        timeFilter: {
          start: '',
          end: ''
        }
      };
    },
    computed: {
      columnNames() {
        return {
          time: 'Czas',
          temperature: 'Temperatura',
          humidity: 'Wilgotność',
          co: 'Tlenek węgla',
          smoke: 'Dym',
          airQuality: 'Jakość powietrza',
          light: 'Światło'
        };
      },
      selectableColumns() {
        return Object.keys(this.columnNames).filter(column => column !== 'time');
      },
      visibleColumns() {
        return Object.keys(this.showColumns).filter(column => column !== 'time' && this.showColumns[column]);
      },
      filteredSensorData() {
        if (!this.timeFilter.start || !this.timeFilter.end) {
          return this.sensorData;
        }
        const start = new Date(this.timeFilter.start).getTime();
        const end = new Date(this.timeFilter.end).getTime();
        return this.sensorData.filter(item => {
          const itemTime = new Date(item.time).getTime();
          return itemTime >= start && itemTime <= end;
        });
      }
    },
    methods: {
      formatToLocalTime(utcTime) {
        const localDate = new Date(utcTime);
        return localDate.toLocaleString();
      },
      fetchData() {
        const url = `/api/sensor-data?start=${this.timeFilter.start}&end=${this.timeFilter.end}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.sensorData = data;
          })
          .catch((error) => console.error('Błąd podczas pobierania danych z czujników:', error));
      },
      clearFilters() {
        this.showColumns = { ...this.defaultColumns, time: true };
        this.timeFilter = { start: '', end: '' };
        this.sensorData = [];
      }
    }
  };
  </script>