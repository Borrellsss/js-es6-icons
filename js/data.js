// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare
// in pagina un box per ogni icona, in cui è presente
// il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare
// questa proprietà per visualizzare le icone
// del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui
// le options corrispondono ai vari tipi di icone
// (animal, vegetable, user). Quando l'utente seleziona
// un tipo dalla select, visualizzare solamente
// le icone corrispondenti.

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la
// proprietà "color" in modo dinamico: generare in modo casuale
// un codice colore, sapendo che la notazione esadecimale è
// formata dal simbolo "#" seguito da 6 caratteri
// alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

// *ARRAYS*
const iconsArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// *sovrascrivo il colore dell'elemento con il nuovo colore in versione*
// *esadecimale con le varie sfumature di colore in base al colore di partenza:*
// *---se il colore di partenza è arancione chiamo la funzione "randomColorGen()" nella posizione*
// *3 e 4 del colore esadecimale avendo ff nella 1 e 2 posizione e 00 nella 5 e 6*
// *---se il colore di partenza è green chiamo la funzione "randomColorGen()" nella posizione*
// *1 e 2 del colore esadecimale avendo ff nella 3 e 4 posizione e 00 nella 5 e 6*
// *---se il colore di partenza è blue chiamo la funzione "randomColorGen()" nella posizione*
// *3 e 4 del colore esadecimale avendo ff nella 5 e 6 posizione e 00 nella 1 e 2*
iconsArray.forEach((element) => {
	if(element.color === "orange") {
		element.color = `#ff${randomColorGen()}00`;
	} else if (element.color === "green") {
		element.color = `#${randomColorGen()}ff00`;
	} else if (element.color === "blue") {
		element.color = `#00${randomColorGen()}ff`;
	}
});
// !DEBUG!
// console.log(iconsArray);

const typeArray = [];

// *FUNCTIONS*
function printIcons(array, wrapper) {
	array.forEach((element) => {
		// !DEBUG!
		// console.log(element);
		const thisIcon = `${element.family} ${element.prefix}${element.name}`;
	
		wrapper.innerHTML += `
		<span style="color: ${element.color}">
			<i class="${thisIcon}">
		</i></span>
		`;
	});
}

// *dichiaro una funzione che genera una stringa contentente due valori randomici*
// *tra 0 e f e ritorno la stringa salavata in "hexCodePart"*
function randomColorGen() {
	const hexCodeValues = "0123456789abcdef";
	let hexCodePart = "";
	for(let i = 0; i < 2; i++) {
		hexCodePart += hexCodeValues[getRndInteger(0, hexCodeValues.length)];
	}

	return hexCodePart;
	// !DEBUG!
	// console.log(hexCodePart);
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

// *VARIABLES*
// *DOM elemnts*
const iconsWrapper = document.getElementById("icons-wrapper");
// !DEBUG!
// console.log(iconsWrapper);

const selectType = document.getElementById("type");
// !DEBUG!
// console.log(selectType);

// *other variables*
const thisSelect = 'all'
let option = `<option value="${thisSelect}">${thisSelect}</option>`;
selectType.innerHTML += option;

// *LOGIC*
// *inizio un ciclo "forEach" e pusho in un array vuoto "typeArray" il valore*
// *della proprietà "color" di ogni singolo "object" solo se non è*
// *già incluso nell'array stesso*
iconsArray.forEach((element) => {
    if(!typeArray.includes(element.type)) {
        typeArray.push (element.type);
    } 
})
// !DEBUG!
// console.log(typeArray);

// *una volta popolato l'array "typeArray" stampo in pagina il template*
// *con "value" = al singolo elemento dell'array che ho ricavato tramite il ciclo "forEach"*
typeArray.forEach((element) => {
    option = `<option value="${element}">${element}</option>`;
    selectType.innerHTML += option;
})

// *resetto la value a "all" al caricamento della pagina*
selectType.value = "all";

// *chiamo la funzione che stampa le icone in pagina*
printIcons(iconsArray, iconsWrapper);

// *ADD-EVENT-LISTENERS*
selectType.addEventListener("change", function() {
	iconsWrapper.innerHTML = "";
	const thisType = this.value;
	// !DEBUG!
	// console.log(thisType);

	if(thisType !== "all") {
		const filteredArray = iconsArray.filter((element) => {
			const filteredObject = (element.type === thisType);
			// !DEBUG!
			// console.log(filteredObject);

			return filteredObject;
		});
		// !DEBUG!
		// console.log(filteredArray);
		printIcons(filteredArray, iconsWrapper);
	} else {
		printIcons(iconsArray, iconsWrapper);
	}

});