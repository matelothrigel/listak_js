const szinek = [
	'red', 'green', 'blue', 'yellow', 'orange',
	'purple', 'pink', 'brown', 'black', 'white',
	'gray', 'cyan', 'magenta', 'lime', 'navy',
	'teal', 'maroon', 'olive', 'silver', 'gold',
	'coral', 'salmon', 'crimson', 'indigo', 'violet',
	'turquoise', 'tan', 'beige', 'khaki', 'lavender',
	'orchid', 'plum', 'peru', 'sienna', 'chocolate',
	'tomato', 'darkorange', 'azure', 'ivory', 'darkviolet',
	'orangered', 'hotpink', 'deeppink', 'skyblue', 'steelblue',
	'royalblue', 'seagreen', 'forestgreen', 'limegreen', 'darkcyan'
];

const selectKontener = document.querySelector('#szin-valaszto');
const doboz = document.querySelectorAll('.szin-doboz');

szinek.forEach(szin => {
	const optionElem = document.createElement('option');
	optionElem.textContent = szin;
	optionElem.value = szin;
	selectKontener.appendChild(optionElem);
});

// hatterszin valtas
document.body.style.backgroundColor = selectKontener.value;   // induláskor a kiválasztott szín

selectKontener.addEventListener('change', (event) => {
	document.body.style.backgroundColor = event.target.value;
});

/*
for (let i = 0; i < szinek.length; i++) {
	const optionElem = document.createElement('option');
	optionElem.text.textContent = szinek[i];
	optionElem.value = szinek[i].toLocaleLowerCase();
	selectKontener.appendChild(optionElem);
}*/

const fejezetek = ['lorem1', 'lorem2', 'lorem3'];

// txt beolvasas
async function txtBeolvasas(fajl, elem) {
	const response = await fetch(fajl);
	const szoveg = await response.text();

	elem.textContent = szoveg;
}

function fejezetBetoltes(value) {
	const fajlutvonal = `./forras/${value}.txt`;
	const celElem = document.getElementById("elso_fej");

	txtBeolvasas(fajlutvonal, celElem);
}

const selectKontener2 = document.querySelector('#fejezet-valaszto');

fejezetek.forEach(fejezet => {
	const optionElem = document.createElement('option');
	optionElem.textContent = fejezet;
	optionElem.value = fejezet;
	selectKontener2.appendChild(optionElem);
});

selectKontener2.addEventListener('change', (event) => {
	fejezetBetoltes(event.target.value);
});

txtBeolvasas("./forras/lorem1.txt", document.getElementById("elso_fej"));