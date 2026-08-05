<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-blue-600 text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-4">Pronađi pravo iskustvo za tebe</h1>
      <p class="text-blue-100 text-lg mb-8">Stvarna iskustva studenata s praksi i studentskih poslova</p>
      <div class="max-w-2xl mx-auto flex gap-3">
        <input
          v-model="pretraga"
          placeholder="🔍 Pretraži po tvrtki..."
          class="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <select
          v-model="filterOcjena"
          class="px-5 py-3 rounded-full text-gray-800 focus:outline-none"
        >
          <option value="">⭐ Sve ocjene</option>
          <option value="5">⭐⭐⭐⭐⭐ Samo 5</option>
          <option value="4">⭐⭐⭐⭐ 4 i više</option>
          <option value="3">⭐⭐⭐ 3 i više</option>
        </select>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold text-gray-700 mb-6">
        {{ filtriranaIskustva.length }} iskustava pronađeno
      </h2>

      <div v-if="filtriranaIskustva.length === 0" class="text-center py-20 text-gray-400">
        <p class="text-5xl mb-4">😕</p>
        <p class="text-xl">Nema rezultata za zadane filtere.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="iskustvo in filtriranaIskustva"
          :key="iskustvo.id"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
        >
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-xl font-bold text-blue-600">{{ iskustvo.tvrtka }}</h2>
            <span class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              ⭐ {{ iskustvo.ocjena }}/5
            </span>
          </div>
          <h3 class="text-gray-600 font-medium mb-3">{{ iskustvo.pozicija }}</h3>
          <p class="text-gray-500 text-sm mb-4 line-clamp-3">{{ iskustvo.opis }}</p>
          <div class="flex justify-between text-sm text-gray-400 border-t pt-3">
            <span>💰 {{ iskustvo.placa }}</span>
            <span>📍 {{ iskustvo.grad }}</span>
          </div>
          <button
            v-if="store.korisnik && iskustvo.autor === store.korisnik.email"
            @click="obrisiIskustvo(iskustvo.id)"
            class="mt-3 w-full bg-red-50 text-red-500 py-2 rounded-xl hover:bg-red-100 transition text-sm font-medium"
          >
            🗑️ Obriši iskustvo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { store, obrisiIskustvo } from '../store';

const pretraga = ref('');
const filterOcjena = ref('');

const filtriranaIskustva = computed(() =>
  store.iskustva.filter((i) => {
    const odgovaraPretrazi = i.tvrtka.toLowerCase().includes(pretraga.value.toLowerCase());
    const odgovaraOcjeni = filterOcjena.value === '' || Number(i.ocjena) >= Number(filterOcjena.value);
    return odgovaraPretrazi && odgovaraOcjeni;
  })
);
</script>
