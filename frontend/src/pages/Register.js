import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register({ prijavaKorisnika }) {
  const navigate = useNavigate();
  const [forma, setForma] = useState({ ime: '', email: '', lozinka: '' });
  const [greska, setGreska] = useState('');

  function handlePromjena(e) {
    setForma({ ...forma, [e.target.name]: e.target.value });
  }

  function handleSlanje(e) {
    e.preventDefault();
    const korisnici = JSON.parse(localStorage.getItem('korisnici') || '[]');
    const postojiKorisnik = korisnici.find(k => k.email === forma.email);

    if (postojiKorisnik) {
      setGreska('Korisnik s tim emailom već postoji!');
      return;
    }

    const noviKorisnik = { ...forma, id: korisnici.length + 1 };
    localStorage.setItem('korisnici', JSON.stringify([...korisnici, noviKorisnik]));
    prijavaKorisnika(noviKorisnik);
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Stvori račun 🎓</h1>
        <p className="text-gray-400 text-center mb-8">Pridruži se StudentConnect zajednici</p>
        {greska && (
          <div className="bg-red-50 text-red-500 px-4 py-3 rounded-xl mb-5 text-sm">
            {greska}
          </div>
        )}
        <div className="flex flex-col gap-5">
          <div>
            <label className="text-gray-600 font-medium mb-1 block">Ime i prezime</label>
            <input name="ime" placeholder="Ivan Horvat" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="text-gray-600 font-medium mb-1 block">Email</label>
            <input name="email" type="email" placeholder="tvoj@email.com" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="text-gray-600 font-medium mb-1 block">Lozinka</label>
            <input name="lozinka" type="password" placeholder="••••••••" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <button onClick={handleSlanje} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
            Registriraj se
          </button>
          <p className="text-center text-gray-400 text-sm">
            Već imaš račun? <Link to="/prijava" className="text-blue-600 font-medium hover:underline">Prijavi se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;