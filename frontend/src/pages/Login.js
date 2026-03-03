import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ prijavaKorisnika }) {
  const navigate = useNavigate();
  const [forma, setForma] = useState({ email: '', lozinka: '' });
  const [greska, setGreska] = useState('');

  function handlePromjena(e) {
    setForma({ ...forma, [e.target.name]: e.target.value });
  }

  function handleSlanje(e) {
    e.preventDefault();
    const korisnici = JSON.parse(localStorage.getItem('korisnici') || '[]');
    const korisnik = korisnici.find(k => k.email === forma.email && k.lozinka === forma.lozinka);

    if (korisnik) {
      prijavaKorisnika(korisnik);
      navigate('/');
    } else {
      setGreska('Pogrešan email ili lozinka!');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">Dobrodošao! 👋</h1>
        <p className="text-gray-400 text-center mb-8">Prijavi se na StudentConnect</p>
        {greska && (
          <div className="bg-red-50 text-red-500 px-4 py-3 rounded-xl mb-5 text-sm">
            {greska}
          </div>
        )}
        <div className="flex flex-col gap-5">
          <div>
            <label className="text-gray-600 font-medium mb-1 block">Email</label>
            <input name="email" type="email" placeholder="tvoj@email.com" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="text-gray-600 font-medium mb-1 block">Lozinka</label>
            <input name="lozinka" type="password" placeholder="••••••••" onChange={handlePromjena} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <button onClick={handleSlanje} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
            Prijavi se
          </button>
          <p className="text-center text-gray-400 text-sm">
            Nemaš račun? <Link to="/registracija" className="text-blue-600 font-medium hover:underline">Registriraj se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;