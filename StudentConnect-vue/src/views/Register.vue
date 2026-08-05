<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-md p-10 w-full max-w-md border border-gray-100">
      <h1 class="text-3xl font-bold text-blue-600 mb-2 text-center">Stvori račun 🎓</h1>
      <p class="text-gray-400 text-center mb-8">Pridruži se StudentConnect zajednici</p>

      <div v-if="greska" class="bg-red-50 text-red-500 px-4 py-3 rounded-xl mb-5 text-sm">
        {{ greska }}
      </div>

      <form @submit.prevent="handleSlanje" class="flex flex-col gap-5">
        <div>
          <label class="text-gray-600 font-medium mb-1 block">Ime i prezime</label>
          <input
            v-model="forma.ime"
            required
            placeholder="Ivan Horvat"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label class="text-gray-600 font-medium mb-1 block">Email</label>
          <input
            v-model="forma.email"
            type="email"
            required
            placeholder="tvoj@email.com"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label class="text-gray-600 font-medium mb-1 block">Lozinka</label>
          <input
            v-model="forma.lozinka"
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-lg"
        >
          Registriraj se
        </button>
        <p class="text-center text-gray-400 text-sm">
          Već imaš račun?
          <router-link to="/prijava" class="text-blue-600 font-medium hover:underline">Prijavi se</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registrirajKorisnika, prijavaKorisnika } from '../store';

const router = useRouter();
const forma = ref({ ime: '', email: '', lozinka: '' });
const greska = ref('');

function handleSlanje() {
  const rezultat = registrirajKorisnika(forma.value);
  if (!rezultat.uspjeh) {
    greska.value = rezultat.poruka;
    return;
  }
  prijavaKorisnika(rezultat.korisnik);
  router.push('/');
}
</script>
