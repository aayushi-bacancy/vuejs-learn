import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoaches from './pages/requests/ContactCoaches.vue';
import RequestsRecieve from './pages/requests/RequestsRecieve.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { name: 'Coaches', path: '/coaches', component: CoachList },
    {
      name: 'Detailed Coach',
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          name: 'Contact',
          path: 'contact',
          component: ContactCoaches
        }
      ]
    },
    {
      name: 'Register',
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    {
      name: 'userAuth',
      path: '/auth',
      component: UserAuth,
      meta: { requiresunAuth: true }
    },
    {
      name: 'Request',
      path: '/requests',
      component: RequestsRecieve,
      meta: { requiresAuth: true }
    },
    {
      name: 'NotFound',
      path: '/:notfound(.*)',
      component: NotFound
    }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
