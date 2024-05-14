import { createRouter, createWebHistory } from 'vue-router';
import MainDashboard from '@/views/MainDashboard.vue';
import LoginPrompt from '@/components/dashboard/LoginPrompt.vue';
import Notifications from '@/components/dashboard/NotificationsSettings.vue';
import SensorManager from '@/components/settings/SensorManager.vue';
import Settings from '@/views/SystemSettings.vue';
import CalendarView from '@/views/CalendarView';


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: MainDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/login-prompt',
    name: 'LoginPrompt',
    component: LoginPrompt
  },
  {
    path: '/notifications',
    component: Notifications
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/manage-sensor',
    name: 'ManageSensors',
    component: SensorManager
  },
  {
    path: '/calendar',
    name: 'CalendarView',
    component: CalendarView
  }
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'LoginPrompt' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;