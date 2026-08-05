<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-blue-600 text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-4">Dodaj iskustvo</h1>
      <p class="text-blue-100 text-lg">Podijeli svoje iskustvo s praksom ili studentskim poslom</p>
    </div>

    <div class="max-w-2xl mx-auto px-6 py-10">
      <div class="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <form @submit.prevent="handleSlanje" class="flex flex-col gap-5">
          <div>
            <label class="text-gray-600 font-medium mb-1 block">Naziv tvrtke</label>
            <input
              v-model="forma.tvrtka"
              required
              placeholder="npr. Infobip"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label class="text-gray-600 font-medium mb-1 block">Pozicija</label>
            <input
              v-model="forma.pozicija"
              required
              placeholder="npr. Frontend Developer"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label class="text-gray-600 font-medium mb-1 block">Plaća</label>
            <input
              v-model="forma.placa"
              required
              placeholder="npr. 600€/mj"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label class="text-gray-600 font-medium mb-1 block">Grad</label>
            <input
              v-model="forma.grad"
              required
              placeholder="npr. Zagreb"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label class="text-gray-600 font-medium mb-1 block">Ocjena</label>
            <select
              v-model="forma.ocjena"
              required
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="" disabled>Odaberi ocjenu</option>
              <option value="5">⭐⭐⭐⭐⭐ - Odlično</option>
              <option value="4">⭐⭐⭐⭐ - Vrlo dobro</option>
              <option value="3">⭐⭐⭐ - Dobro</option>
              <option value="2">⭐⭐ - Loše</option>
              <option value="1">⭐ - Vrlo loše</option>
            </select>
          </div>
          <div>
            <label class="text-gray-600 font-medium mb-1 block">Opis iskustva</label>
            <textarea
              v-model="forma.opis"
              required
              rows="4"
              placeholder="Opiši svoje iskustvo..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-lg"
          >
            Dodaj iskustvo
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store, dodajIskustvo } from '../store';

const router = useRouter();
const forma = ref({
  tvrtka: '',
  pozicija: '',
  ocjena: '',
  opis: '',
  placa: '',
  grad: '',
});

function handleSlanje() {
  dodajIskustvo({ ...forma.value, autor: store.korisnik.email });
  router.push('/');
}
</script>
