  <template>
        <div class="max-w-md w-full lg:w-1/2 px-4 sm:py-4">
          <div class="bg-white p-6 rounded-lg shadow-xl">
    <div class="colors-customizaton">
      <h2 class="colors-customizaton__title text-xl font-semibold mb-4">Kolor motywu</h2>
      <input type="color" v-model="bgColor" @change="updateColor" class="mx-2">
      <button class="py-2 px-4 bg-red-700 hover:bg-red-600 rounded text-white" @click="resetColor">Przywróć domyślny</button>
    </div>
          </div>
        </div>
  </template>

  <script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['sidebarBgColor']),
    },
    methods: {
      ...mapActions(['setSidebarBgColor']),
      updateColor(event) {
        this.setSidebarBgColor(event.target.value);
      },
      resetColor() {
        const defaultColor = '#1f2937';
        this.setSidebarBgColor(defaultColor);
      }
    }
  };
  </script>