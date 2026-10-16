// adatok a menükhöz (value = amit a function.js figyel, felirat = amit látunk)
const fejezetek = [
	{ value: 'fejezet1', felirat: 'Felfedezésük története' },
	{ value: 'fejezet2', felirat: 'Az exobolygók keresésének módszerei' },
	{ value: 'fejezet3', felirat: 'Exobolygó-keresési programok' }
];

const temak = [
	{ value: 'vilagos', felirat: 'Világos' },
	{ value: 'sotet', felirat: 'Sötét' },
	{ value: 'urkek', felirat: 'Űrkék' }
];

const kartya = document.createElement('div');
kartya.className = 'kartya';

const focim = document.createElement('h1');
focim.textContent = 'Exobolygók';

const menuSor = document.createElement('div');
menuSor.className = 'menu-sor';

// fejezet menü
const fejezetValaszto = document.createElement('select');
fejezetValaszto.id = 'fejezet-valaszto';
for (const adat of fejezetek) {
	const opcio = document.createElement('option');
	opcio.value = adat.value;
	opcio.textContent = adat.felirat;
	fejezetValaszto.appendChild(opcio);
}

// design menü
const temaValaszto = document.createElement('select');
temaValaszto.id = 'tema-valaszto';
for (const adat of temak) {
	const opcio = document.createElement('option');
	opcio.value = adat.value;
	opcio.textContent = 'Design: ' + adat.felirat;
	temaValaszto.appendChild(opcio);
}

// ide kerül a beolvasott szöveg
const tartalom = document.createElement('p');
tartalom.id = 'tartalom';

const forras = document.createElement('small');
forras.textContent = 'Forrás: Wikipédia – Exobolygó (CC BY-SA)';

menuSor.append(fejezetValaszto, temaValaszto);
kartya.append(focim, menuSor, tartalom, forras);
document.body.appendChild(kartya);