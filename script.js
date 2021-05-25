//-----------------------------------------ENLACES-------------------------------------------------------------------------------

let urlApi = 'https://genshinlist.com/api/characters';


//-----------------------------------------CONSTANTES----------------------------------------------------------------------------


const selectPersonaje = document.getElementById('personaje');

const buscador = document.getElementById("buscador");

const formulario = document.getElementById("barraBuscador");

const contenedorPersonajes = document.getElementById("contenedorPersonaje")


//-----------------------------------------FUNCIONES-----------------------------------------------------------------------------

async function obtenerJSON(url){
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}

obtenerJSON(urlApi).then(json => { 
	
	for(var i=0; i<json.length; i++){

		var valor = json[i].name;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor) );
		opcion.value = valor;
		selectPersonaje.appendChild(opcion);

	}

	filtrarPorPersonaje();

});

function filtrarPorPersonaje(){

	var personaje = selectPersonaje.value;

	obtenerJSON(urlApi + personaje).then(json => { 
	
		console.log(json);

	});
}


//*function barraBuscador(busqueda){

//	obtenerJSON(urlApi + busqueda).then(json => { 
//		console.log(json);
//		recargarListaPersonajes(json);
//	});
//}


//formulario.addEventListener("submit", (event) => {
//	event.preventDefault(); 
//	const busqueda = buscador.value;
//	if(busqueda){
//		barraBuscador(busqueda);
//		busqueda.value = "";
//	}
//});

function recargarListaPersonajes(personajes){
	contenedorPersonajes.innerHTML ="";
	personajes.forEach((personaje) => {
		const personajeElement = document.createElement("div");
		personajeElement.classList.add("personaje");
		personajeElement.innerHTML = 
		`<h2 class="nombrePersonaje">${personaje.name}</h2>
		 <p class="textoPersonaje">${personaje.vision}</p>
		 <p class="textoPersonaje">${personaje.weapon}</p>`;
		
	});
}

