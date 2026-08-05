<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-blue-600 text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-4">Tvrtke</h1>
      <p class="text-blue-100 text-lg">Pregledaj sve tvrtke i njihove ocjene</p>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold text-gray-700 mb-6">{{ tvrtke.length }} tvrtki pronađeno</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="tvrtka in tvrtke"
          :key="tvrtka.naziv"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
        >
          <h2 class="text-xl font-bold text-blue-600 mb-4">{{ tvrtka.naziv }}</h2>
          <div class="flex justify-between text-sm text-gray-500 border-t pt-3">
            <span>⭐ Prosječna ocjena: <strong>{{ tvrtka.prosjecnaOcjena }}/5</strong></span>
            <span>📝 {{ tvrtka.brojIskustava }} iskustava</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { store } from '../store';

const tvrtke = computed(() => {
  const nazivi = [...new Set(store.iskustva.map((i) => i.tvrtka))];
  return nazivi.map((naziv) => {
    const iskustvaTvrtke = store.iskustva.filter((i) => i.tvrtka === naziv);
    const prosjecnaOcjena = (
      iskustvaTvrtke.reduce((sum, i) => sum + Number(i.ocjena), 0) / iskustvaTvrtke.length
    ).toFixed(1);
    return { naziv, prosjecnaOcjena, brojIskustava: iskustvaTvrtke.length };
  });
});
</script>
