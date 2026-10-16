// txt beolvasas
async function txtBeolvasas(fajl, elem) {
	const response = await fetch(fajl);
	const szoveg = await response.text();

	elem.textContent = szoveg;
}

function fejezetBetoltes(value) {
	txtBeolvasas(`./forras/${value}.txt`, tartalom);
}

// fejezet váltás
fejezetValaszto.addEventListener('change', function () {
	fejezetBetoltes(this.value);
});

// design váltás: a body osztályát cseréljük, a style.css intézi a többit
temaValaszto.addEventListener('change', function () {
	document.body.className = this.value;
});

// induláskor
document.body.className = temaValaszto.value;
fejezetBetoltes(fejezetValaszto.value);