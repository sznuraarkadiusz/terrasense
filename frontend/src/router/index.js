import { createRouter, createWebHistory } from 'vue-router';
import MainDashboard from '@/views/MainDashboard.vue';
import LoginPrompt from '@/components/dashboard/LoginPrompt.vue';
import Notifications from '@/components/dashboard/NotificationsSettings.vue';
import SensorManager from '@/components/settings/SensorManager.vue';
import Settings from '@/views/SystemSettings.vue';
import CalendarView from '@/views/CalendarView';
import loginUser from '@/components/users/loginUser';
import registerUser from '@/components/users/registerUser';
import managementUser from '@/components/users/managementUser'
import axios from 'axios';

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
  },
  {
    path: '/login',
    name: 'Login',
    component: loginUser
  },
  {
  path: '/user-management',
  name: 'managementUser',
  component: managementUser,
  meta: {
    requiresAuth: true
  }
  },
  {
  path: '/register',
  name: 'Register',
  component: registerUser
  }
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (requiresAuth && !isAuthenticated) {
    axios.get('/session-status').then(response => {
      if (response.data.logged_in) {
        localStorage.setItem('isAuthenticated', 'true');
        next();
      } else {
        localStorage.removeItem('isAuthenticated');
        next('/login-prompt');
      }
    }).catch(() => {
      localStorage.removeItem('isAuthenticated');
      next('/login-prompt');
    });
  } else {
    next();
  }
});

export default router;