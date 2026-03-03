import { Link } from 'react-router-dom';

function Navbar({ korisnik, odjavKorisnika }) {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold tracking-tight">
          🎓 StudentConnect
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-blue-200 transition">Početna</Link>
          <Link to="/tvrtke" className="text-white hover:text-blue-200 transition">Tvrtke</Link>
          <Link to="/dodaj" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
            + Dodaj iskustvo
          </Link>
          {korisnik ? (
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">👤 {korisnik.ime}</span>
              <button onClick={odjavKorisnika} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                Odjava
              </button>
            </div>
          ) : (
            <Link to="/prijava" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
              Prijava
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;