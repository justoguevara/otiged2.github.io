
// ******  Este nivel se definen codigos html de eventos ******


function eventos(parametros){
	var salida = "";
	if(parametros != null){
		var parametros = parametros.split(".");
		
		var evento = parametros[0];
		var reaccion = parametros[1];
		var datos = parametros[2];

		if(reaccion=="v"){ //vinculo
			salida = "paginas('" + datos + "')";  // datos[0]: nombre de pagina
		}	
		if(reaccion=="f"){ //vinculo
			salida = "funciones('" + datos + "')";  // datos[0]: nombre de funcion, datos[1]: parametros
		}
		if(reaccion=="es"){ //estilo
			salida = "estilos_dim(" + datos + ")";  // datos[0]: nombre de funcion, datos[1]: parametros
		}

		// eventos
		if(evento=="c"){ // clic
			salida = " onclick=\"" + salida + ";\"";
		}
		if(evento=="cc"){ // doble clic
			salida = " ondblclick=\"" + salida + ";\"";
		}
		if(evento=="s"){ // sobre
			salida = " onmouseover=\"" + salida + ";\"";
		}
	}
	return salida;
}
