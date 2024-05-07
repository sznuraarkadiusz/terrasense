import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    sidebarBgColor: state.sidebarBgColor
  })
});

export default createStore({
  state: {
    sensors: {
      temperature: true,
      humidity: true,
      light: true,
      co: true,
      smoke: true,
      airQuality: true
    },
    sidebarBgColor: localStorage.getItem('sidebarBgColor') || '#1f2937'
  },
  mutations: {
    toggleSensor(state, sensor) {
      state.sensors[sensor] = !state.sensors[sensor];
    },
    setSidebarBgColor(state, color) {
      state.sidebarBgColor = color;
    }
  },
  actions: {
    toggleSensor({ commit }, sensor) {
      commit('toggleSensor', sensor);
    },
    setSidebarBgColor({ commit }, color) {
      commit('setSidebarBgColor', color);
      localStorage.setItem('sidebarBgColor', color);
    }
  },
  getters: {
    sensors: state => state.sensors,
    sidebarBgColor: state => state.sidebarBgColor
  },
  plugins: [vuexLocal.plugin]
});
