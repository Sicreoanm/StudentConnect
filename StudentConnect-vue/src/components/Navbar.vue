<template>
  <nav class="bg-blue-600 shadow-lg">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <router-link to="/" class="text-white text-2xl font-bold tracking-tight">
        🎓 StudentConnect
      </router-link>
      <div class="flex items-center gap-6">
        <router-link to="/" class="text-white hover:text-blue-200 transition">Početna</router-link>
        <router-link to="/tvrtke" class="text-white hover:text-blue-200 transition">Tvrtke</router-link>
        <router-link
          to="/dodaj"
          class="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          + Dodaj iskustvo
        </router-link>
        <div v-if="store.korisnik" class="flex items-center gap-3">
          <span class="text-white font-medium">👤 {{ store.korisnik.ime }}</span>
          <button
            @click="odjava"
            class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
          >
            Odjava
          </button>
        </div>
        <router-link
          v-else
          to="/prijava"
          class="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          Prijava
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { store, odjavaKorisnika } from '../store';

const router = useRouter();

function odjava() {
  odjavaKorisnika();
  router.push('/');
}
</script>
