$(document).ready(function(){

	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];
	
	const colors = [
		'blue',
		'orange',
		'purple'
	];
	
	// Milestone 1
	// Partendo dalla seguente struttura dati , 
	// mostriamo in pagina tutte le icone disponibili come da layout.
	
	// Milestone 2
	// Coloriamo le icone per tipo
	
	// Milestone 3
	// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
	

	//Milestone 1

	//costante per individuare elemento html
	const iconeContainer = $('#iconeContainer');

	//invoco funzione
	stampaIcone(icons, iconeContainer);


	//Milestone2

	//devo creare un nuovo array di oggetti icona che presentino anche la proprietà colore
	const arrayColorato = 

	iconeColorate(icons,colors);
	

	iconeTipo(icons);





	//FUNZIONI//

	//Funzione stampa icone
	//creo una funzione che popoli un oggetto jQuery (container) con le icone
	//arrayOriginale --> array di oggetti
	//container --> un oggetto jQuary in cui stampare le icone

	function stampaIcone (arrayOriginale, container){
		//console.log(container);

		//itero l' array con for each
		arrayOriginale.forEach((element)=>{
			//console.log(element);

			//destrutturo gli elementi per ottenere i valori che mi servono per stampare
			const {name, prefix, family} = element;
			//console.log(name, prefix, family);

			//template che riproduce html con proprietà degli oggetti
			const iconeHTML = `
				<div class="icon">
					<i class="${family} ${prefix}${name} "></i>
					<div>${name}</div>
				</div> 
			`;
			//console.log(iconeHTML);

			container.append(iconeHTML);

		});
	}


	//Funzione icone colorate
	//arrayOriginale --> array di oggetti
	//arrayColori --> array di colori
	//return --> un array di oggetti con anche la proprietà color

	function iconeColorate (arrayOriginale, arrayColori){

		const iconeType = iconeTipo(arrayOriginale);
		console.log(iconeType);

		//creo un nuovo array copia per non modificare l'originale
		const arrayColorato = arrayOriginale.map((element)=>{
			nuovoOggetto = {
				...element
			};
			//console.log(nuovoOggetto);

			//confronto gli array dei tipi con quello dei colori 
			//assegno il colore in base all' indice uguale

			//trovo indice degli elementi dell'array dei tipi
			const iconeTipoIndice = iconeType.indexOf(nuovoOggetto.type);
			//console.log(iconeTipoIndice);

			if(iconeTipoIndice != -1){
				nuovoOggetto.colore = arrayColori[iconeTipoIndice];
			}

			return nuovoOggetto;
		
		});

		console.log(arrayColorato);
		return arrayColorato;

	}



	//Funzione array tipi di icone
	//creo un array che raggruppa i tipi di icone presenti nell' array originale
	//arrayOriginale --> array di oggetti icone
	//return --> array con i tipi di icona

	function iconeTipo (arrayOriginale){
		const typeArray = [];
		//console.log('array dei tipi:', typeArray);

		arrayOriginale.forEach((element)=>{
			//console.log(element);

			const elementType = element.type;
			//console.log(elementType);

			if(!typeArray.includes(elementType)){
				typeArray.push(elementType);
			}

		});

		return typeArray;
		
	}
	





});

