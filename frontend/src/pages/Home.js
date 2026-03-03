import { useState } from 'react';

function Home({ iskustva }) {
  const [pretraga, setPretraga] = useState('');
  const [filterOcjena, setFilterOcjena] = useState('');

  const filtriranaIskustva = iskustva.filter(i => {
    const odgovaraPretrazi = i.tvrtka.toLowerCase().includes(pretraga.toLowerCase());
    const odgovaraOcjeni = filterOcjena === '' || Number(i.ocjena) >= Number(filterOcjena);
    return odgovaraPretrazi && odgovaraOcjeni;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Pronađi pravo iskustvo za tebe</h1>
        <p className="text-blue-100 text-lg mb-8">Stvarna iskustva studenata s praksi i studentskih poslova</p>
        <div className="max-w-2xl mx-auto flex gap-3">
          <input
            placeholder="🔍 Pretraži po tvrtki..."
            onChange={e => setPretraga(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <select
            onChange={e => setFilterOcjena(e.target.value)}
            className="px-5 py-3 rounded-full text-gray-800 focus:outline-none"
          >
            <option value="">⭐ Sve ocjene</option>
            <option value="5">⭐⭐⭐⭐⭐ Samo 5</option>
            <option value="4">⭐⭐⭐⭐ 4 i više</option>
            <option value="3">⭐⭐⭐ 3 i više</option>
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          {filtriranaIskustva.length} iskustava pronađeno
        </h2>
        {filtriranaIskustva.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">😕</p>
            <p className="text-xl">Nema rezultata za zadane filtere.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtriranaIskustva.map(iskustvo => (
              <div key={iskustvo.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-bold text-blue-600">{iskustvo.tvrtka}</h2>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ {iskustvo.ocjena}/5
                  </span>
                </div>
                <h3 className="text-gray-600 font-medium mb-3">{iskustvo.pozicija}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{iskustvo.opis}</p>
                <div className="flex justify-between text-sm text-gray-400 border-t pt-3">
                  <span>💰 {iskustvo.placa}</span>
                  <span>📍 {iskustvo.grad}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;