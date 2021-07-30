



function actualizar() {

	list_es = []; // set lista de estilos compactados
	cadena_general_es = "";  // set lista de estilos compactados

	//carga_paginas();
	
	Esq = Paginas[Ubic.pagina].ver();    // decodifica la estructura de la ubicacion
	document.getElementById("contenedor").innerHTML = Esq;    // imprimeelementos...

	var elemento = document.createElement('style')
	elemento.innerHTML = cadena_general_es;
	document.getElementById("contenedor").appendChild(elemento); // imprime estilos...  

}


function paginas(nombre){
	Ubic.pagina = nombre        // nueva direccion
	actualizar();             // actualiza
	console.log("Ubicacion: " + nombre);
}

function funciones(nombre){
	Funciones[nombre]();      // ejecuta orden
	actualizar();             // actualiza
	console.log("Funcion: " + nombre);
}


carga_paginas();     // define y entrelaza todas las estructuras de paginas 
actualizar();
//console.log(Esq);
