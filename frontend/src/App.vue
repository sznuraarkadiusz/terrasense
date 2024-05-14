<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <NavbarDashboard/>
    <div class="flex flex-1">
      <SidebarDashboard class="w-56"/>
      <div class="flex flex-col flex-1 main bg-white w-full">
        <router-view class="flex-1"/>
      </div>
    </div>
  </div>
</template>


<script>
import NavbarDashboard from './components/dashboard/NavbarDashboard.vue';
import SidebarDashboard from './components/dashboard/SidebarDashboard.vue';

export default {
  name: 'App',
  components: {
    NavbarDashboard,
    SidebarDashboard
  }
}
</script>
