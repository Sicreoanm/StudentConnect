import { reactive, watch } from 'vue';

const pocetnaIskustva = [
  {
    id: 1,
    tvrtka: 'Infobip',
    pozicija: 'Frontend Developer',
    ocjena: 5,
    opis: 'Odlična praksa, naučio sam Vue i radio na pravim projektima.',
    placa: '600€/mj',
    grad: 'Zagreb',
    autor: null,
  },
  {
    id: 2,
    tvrtka: 'Rimac Automobili',
    pozicija: 'Software Engineer',
    ocjena: 4,
    opis: 'Super tim, zanimljivi projekti vezani uz električna vozila.',
    placa: '700€/mj',
    grad: 'Zagreb',
    autor: null,
  },
  {
    id: 3,
    tvrtka: 'Span',
    pozicija: 'Backend Developer',
    ocjena: 4,
    opis: 'Dobro mentorstvo, naučio sam puno o cloud tehnologijama.',
    placa: '550€/mj',
    grad: 'Zagreb',
    autor: null,
  },
];

function ucitaj(kljuc, zadano) {
  try {
    const spremljeno = localStorage.getItem(kljuc);
    return spremljeno ? JSON.parse(spremljeno) : zadano;
  } catch {
    return zadano;
  }
}

// Monotonically-increasing id generator so ids never collide after deletes.
function sljedeciId(lista) {
  return lista.reduce((max, stavka) => Math.max(max, Number(stavka.id) || 0), 0) + 1;
}

export const store = reactive({
  korisnik: ucitaj('korisnik', null),
  iskustva: ucitaj('iskustva', pocetnaIskustva),
});

watch(
  () => store.korisnik,
  (vrijednost) => {
    if (vrijednost) {
      localStorage.setItem('korisnik', JSON.stringify(vrijednost));
    } else {
      localStorage.removeItem('korisnik');
    }
  }
);

watch(
  () => store.iskustva,
  (vrijednost) => localStorage.setItem('iskustva', JSON.stringify(vrijednost)),
  { deep: true }
);

export function prijavaKorisnika(korisnik) {
  store.korisnik = korisnik;
}

export function odjavaKorisnika() {
  store.korisnik = null;
}

export function dodajIskustvo(novoIskustvo) {
  store.iskustva.push({ ...novoIskustvo, id: sljedeciId(store.iskustva) });
}

export function obrisiIskustvo(id) {
  store.iskustva = store.iskustva.filter((i) => i.id !== id);
}

export function registrirajKorisnika(noviKorisnik) {
  const korisnici = ucitaj('korisnici', []);
  const postoji = korisnici.some((k) => k.email === noviKorisnik.email);
  if (postoji) return { uspjeh: false, poruka: 'Korisnik s tim emailom već postoji!' };

  const korisnikSId = { ...noviKorisnik, id: sljedeciId(korisnici) };
  localStorage.setItem('korisnici', JSON.stringify([...korisnici, korisnikSId]));
  return { uspjeh: true, korisnik: korisnikSId };
}

export function prijaviKorisnika(email, lozinka) {
  const korisnici = ucitaj('korisnici', []);
  const korisnik = korisnici.find((k) => k.email === email && k.lozinka === lozinka);
  return korisnik || null;
}
