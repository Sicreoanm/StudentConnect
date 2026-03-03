import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddExperience from './pages/AddExperience';
import Companies from './pages/Companies';
import Login from './pages/Login';
import Register from './pages/Register';

const pocetnaIskustva = [
  {
    id: 1,
    tvrtka: "Infobip",
    pozicija: "Frontend Developer",
    ocjena: 5,
    opis: "Odlična praksa, naučio sam React i radio na pravim projektima.",
    placa: "600€/mj",
    grad: "Zagreb"
  },
  {
    id: 2,
    tvrtka: "Rimac Automobili",
    pozicija: "Software Engineer",
    ocjena: 4,
    opis: "Super tim, zanimljivi projekti vezani uz električna vozila.",
    placa: "700€/mj",
    grad: "Zagreb"
  },
  {
    id: 3,
    tvrtka: "Span",
    pozicija: "Backend Developer",
    ocjena: 4,
    opis: "Dobro mentorstvo, naučio sam puno o cloud tehnologijama.",
    placa: "550€/mj",
    grad: "Zagreb"
  }
];

function App() {
  const [iskustva, setIskustva] = useState(() => {
    const spremljeno = localStorage.getItem('iskustva');
    return spremljeno ? JSON.parse(spremljeno) : pocetnaIskustva;
  });

  const [korisnik, setKorisnik] = useState(() => {
    const spremljeno = localStorage.getItem('korisnik');
    return spremljeno ? JSON.parse(spremljeno) : null;
  });

  useEffect(() => {
    localStorage.setItem('iskustva', JSON.stringify(iskustva));
  }, [iskustva]);

  function dodajIskustvo(novoIskustvo) {
    setIskustva([...iskustva, { ...novoIskustvo, id: iskustva.length + 1 }]);
  }

  function prijavaKorisnika(k) {
    setKorisnik(k);
    localStorage.setItem('korisnik', JSON.stringify(k));
  }

  function odjavKorisnika() {
    setKorisnik(null);
    localStorage.removeItem('korisnik');
  }

  return (
    <BrowserRouter>
      <Navbar korisnik={korisnik} odjavKorisnika={odjavKorisnika} />
      <Routes>
        <Route path="/" element={<Home iskustva={iskustva} />} />
        <Route path="/dodaj" element={<AddExperience dodajIskustvo={dodajIskustvo} />} />
        <Route path="/tvrtke" element={<Companies iskustva={iskustva} />} />
        <Route path="/prijava" element={<Login prijavaKorisnika={prijavaKorisnika} />} />
        <Route path="/registracija" element={<Register prijavaKorisnika={prijavaKorisnika} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;