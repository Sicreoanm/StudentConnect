import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../store';
import Home from '../views/Home.vue';
import Companies from '../views/Companies.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import AddExperience from '../views/AddExperience.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/tvrtke', name: 'tvrtke', component: Companies },
    { path: '/prijava', name: 'prijava', component: Login },
    { path: '/registracija', name: 'registracija', component: Register },
    {
      path: '/dodaj',
      name: 'dodaj',
      component: AddExperience,
      meta: { zahtijevaPrijavu: true },
    },
  ],
});

// Redirect to login if a route needs an authenticated user and there isn't one.
router.beforeEach((to) => {
  if (to.meta.zahtijevaPrijavu && !store.korisnik) {
    return { name: 'prijava' };
  }
  return true;
});

export default router;
