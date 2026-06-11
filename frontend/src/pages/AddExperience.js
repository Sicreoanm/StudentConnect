import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddExperience({ dodajIskustvo, korisnik }) {
  const navigate = useNavigate();
  const [forma, setForma] = useState({
    tvrtka: '',
    pozicija: '',
    ocjena: '',
    opis: '',
    placa: '',
    grad: ''
  });

  function handlePromjena(e) {
    setForma({ ...forma, [e.target.name]: e.target.value });
  }

  function handleSlanje(e) {
    e.preventDefault();
    dodajIskustvo({ ...forma, autor: korisnik.email });
    navigate('/');
}

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Dodaj iskustvo</h1>
        <p className="text-blue-100 text-lg">Podijeli svoje iskustvo s praksom ili studentskim poslom</p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-gray-600 font-medium mb-1 block">Naziv tvrtke</label>
              <input name="tvrtka" placeholder="npr. Infobip" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="text-gray-600 font-medium mb-1 block">Pozicija</label>
              <input name="pozicija" placeholder="npr. Frontend Developer" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="text-gray-600 font-medium mb-1 block">Plaća</label>
              <input name="placa" placeholder="npr. 600€/mj" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="text-gray-600 font-medium mb-1 block">Grad</label>
              <input name="grad" placeholder="npr. Zagreb" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="text-gray-600 font-medium mb-1 block">Ocjena</label>
              <select name="ocjena" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="">Odaberi ocjenu</option>
                <option value="5">⭐⭐⭐⭐⭐ - Odlično</option>
                <option value="4">⭐⭐⭐⭐ - Vrlo dobro</option>
                <option value="3">⭐⭐⭐ - Dobro</option>
                <option value="2">⭐⭐ - Loše</option>
                <option value="1">⭐ - Vrlo loše</option>
              </select>
            </div>
            <div>
              <label className="text-gray-600 font-medium mb-1 block">Opis iskustva</label>
              <textarea name="opis" placeholder="Opiši svoje iskustvo..." onChange={handlePromjena} rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <button onClick={handleSlanje} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
              Dodaj iskustvo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExperience;