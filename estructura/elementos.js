
// ******  Este nivel se definen codigos html ******

function decidifica_estilos(caracteristicas){
	cadena = "";
	caracteristicas = caracteristicas.split(" ");
	for(var i=0; i<caracteristicas.length; i++){
		var partes = caracteristicas[i].split("-");
		tipo = partes[0]; dato = partes[1]; dato2 = partes[2];

		if( tipo == "cur" && dato == "normal" ){ cadena += "cursor:default;" }  // cursor = normal

		if( tipo == "h" ){ cadena += "flex-direction:row;" }     // horizontal (def)
		if( tipo == "v" ){ cadena += "flex-direction:column;" }  // vertical
		
		if( tipo == "x" ){ cadena += "width:" + dato + "px;" }                  // ancho = px
		if( tipo == "y" ){ cadena += "height:" + dato + "px;" }                 // alto = px
		if( tipo == "xx" && dato != null ){ cadena += "width:" + dato + "%;" }    // ancho = %
		if( tipo == "yy" && dato != null ){ cadena += "height:" + dato + "%;" }   // alto = %
		if( tipo == "xx" && dato == null ){ cadena += "width:100%;" }             // ancho = 100%
		if( tipo == "yy" && dato == null ){ cadena += "height:100%;" }            // alto = 100%

		if( tipo == "espi" ){ cadena += "padding:" + dato + "px;" }  // espacio interior
		if( tipo == "espe" ){ cadena += "margin:" + dato + "px;" }   // espacio exterior 

		if( tipo == "espix" ){ cadena += "padding-left:" + dato + "px;padding-right:" + dato + "px;"}   // espacio exterior
		if( tipo == "espiy" ){ cadena += "padding-top:" + dato + "px;padding-bottom:" + dato + "px;"}   // espacio exterior
		if( tipo == "espex" ){ cadena += "margin-left:" + dato + "px;margin-right:" + dato + "px;"}   // espacio exterior
		if( tipo == "espey" ){ cadena += "margin-top:" + dato + "px;margin-bottom:" + dato + "px;"}   // espacio exterior

		//if( tipo == "flex" ){ cadena += "flex-wrap:wrap; " }       // flexible en una sola linea (def)
		//if( tipo == "rig" ){ cadena += "flex-wrap:nowrap; " }      // rigido en varias lineas

		if( tipo == "ajus" && dato == "x" ){ cadena += "width:fit-content;" }   // dx ajustado al contenido
		if( tipo == "ajus" && dato == "y" ){ cadena += "height:fit-content;" }  // dy ajustado al contenido
		if( tipo == "expa" && dato == "x" ){ cadena += "width:inherit;" }       // dx expandido al padre
		if( tipo == "expa" && dato == "y" ){ cadena += "height:inherit;" }      // dy expandido al padre

		// alineacio: hiz cen der seguido de complemento: arri aba disx disy
		var rig = "flex-wrap:wrap;"; var alix = "justify-content:"; var aliy = "align-content:";
		var c = "center;"; var ini = "flex-star;"; var fin = "flex-end;";
		if( tipo == "cen" ){ cadena += rig + alix + c   + aliy + c }    // centro centro
		if( tipo == "hiz" ){ cadena += rig + alix + ini + aliy + c   }  // centro hizquierda
		if( tipo == "der" ){ cadena += rig + alix + fin + aliy + c   }  // centro derecha
		if( tipo == "arri"){ cadena += rig + alix + c   + aliy + ini }  // centro arriba
		if( tipo == "aba" ){ cadena += rig + alix + c   + aliy + fin }  // centro abajo

		if( tipo == "esq1" ){ cadena += rig + alix + ini + aliy + ini}  // hizquierda arriba
		if( tipo == "esq2" ){ cadena += rig + alix + fin + aliy + ini}  // derecha arriba
		if( tipo == "esq3" ){ cadena += rig + alix + fin + aliy + fin}  // derecha abajo
		if( tipo == "esq4" ){ cadena += rig + alix + ini + aliy + fin}  // hizquierda abajo

		if( tipo == "disx" ){ cadena += alix + "space-between;" }   // distribuido horizontal (complemento)
		if( tipo == "disy" ){ cadena += aliy + "space-between;" }   // distribuido vertical   (complemento)

		var cover = "background-size:cover;";
		if( tipo == "fon" ){ cadena += "background:rgba("+ dato +");"}    // color de fondo
		if( tipo == "foni" ){ cadena += "background-image:url(images/"+ dato +");"+cover}   // color de imagen

		if( tipo == "bor" ){ cadena += "border-color:rgba("+ dato +");"}  // color de fondo
		if( tipo == "borg" ){ cadena += "border-width:"+ dato +"px;"}     // color de fondo
		if( tipo == "borr" ){ cadena += "border-radius:"+ dato +"px;" }   // esquinas redondeadas
		if( tipo == "bors" ){ cadena += "border-style:solid;"}           // solido
		if( tipo == "borseg" ){ cadena += "border-style:dashed;"}  // segmentado
		if( tipo == "borpun" ){ cadena += "border-style:;"}        // punteado
		if( tipo == "bordob" ){ cadena += "border-style:; "}       // doble

		if( tipo == "tex" ){ cadena += "color:rgba(" + dato + ");" }    // color texto
		if( tipo == "text"){ cadena += "font-family:" + dato + ";" }    // tipo texto
		if( tipo == "texh" ){ cadena += "font-size:" + dato + "px;" }   // alto texto
		if( tipo == "texn"){ cadena += "font-weight: bold;" }           // negrita
		if( tipo == "texo" ){ cadena += "color:" + dato + ";" }         // oblicua
		if( tipo == "texcen" ){ cadena += "margin:auto;" }              // centrado xy del texto

		if( tipo == "esc" ){ cadena += "transform: scale(" + dato + ");" }   // escala

		if( tipo == "dim" ){ cadena += "transition: all "+ dato +"s;"; }  // tienpo de transicion  
		
		if(dato){if(dato.includes("*")){dato = "-" + dato.split("*")[1];}}
		if(dato2){if(dato2.includes("*")){dato2 = "-" + dato2.split("*")[1];}}
		if( tipo == "pos" ){ cadena += "position:absolute;left:"+ dato +"px;top:"+ dato2 +"px;"; }  // tienpo de transicion
		if( tipo == "posrel" ){ cadena += "position:relative;left:"+ dato +"px;top:"+ dato2 +"px;"; }  // tienpo de transicion  
		if( tipo == "posbar" ){ cadena += "position:-webkit-sticky;position:sticky;top:"+ dato +"px;"; }  // posicion de cielo

		if( tipo == "noselec" ){ cadena += "-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"; }  // neutraliza seleccion
		
	}
	return cadena;
}



function inicio_animado(es1,es2){
	origen = document.getElementsByClassName(es1);
	for(var x=0; x<origen.length; x++){
		origen[x].className = es2;
	}
}




function estilos(elemento,ess){  // dimencionado
	var veri = valid_add(ess.id);
	var id = veri.id;
	var pref = "es_";     // pref: prefijo clase es
	var pr_sel = "sel_";  // pr_sel: prefijo clase selec
	var identidad = "";
	if(veri.existe==false){
		if(typeof(ess.es)=="string"){

			if(ess.es.includes("/")){
				codigos =  ess.es.split("/");
				identidad = " id='" + codigos[0] + "'";
				codigo = codigos[1];
			}else{codigo = ess.es}

			var cadena = decidifica_estilos(codigo);
			if(elemento == "capa"){cadena_general_es += "." + pref + id + "{display:flex;" + cadena + "}";}
			if(elemento == "imagen"){cadena_general_es += "." + pref + id + "{" + cadena + "}";}
			if(elemento == "texto"){cadena_general_es += "." + pref + id + "{margin-block:0px;" + cadena + "}";}
		}
		if(typeof(ess.dim)=="string"){
			var cadena_dim = decidifica_estilos(ess.dim);
			if(elemento == "capa"){cadena_general_es += "." + pref + id + ":hover{" + cadena_dim + "}";}
			if(elemento == "imagen"){cadena_general_es += "." + pref + id + ":hover{" + cadena_dim + "}";}
			if(elemento == "texto"){cadena_general_es += "." + pref + id + ":hover{" + cadena_dim + "}";}
		}
		if(typeof(ess.selec)=="string"){
			var cadena = decidifica_estilos(ess.selec);
			if(elemento == "capa"){cadena_general_es += "." + pr_sel + id + "{display:flex;" + cadena + "}";}
			if(elemento == "imagen"){cadena_general_es += "." + pr_sel + id + "{" + cadena + "}";}
			if(elemento == "texto"){cadena_general_es += "." + pr_sel + id + "{margin-block:0px;" + cadena + "}";}
		}
	}
	if(ess.marc){
		return identidad + " class='" +  pr_sel + id + "'"; // retorna cadena de selec
	}else{
		return identidad + " class='" +  pref + id + "'"; // retorna cadena de es
	}
}


function valid_add(dat){
	veri = {};
	veri.existe = false;
	if(!dat){
		list_es.push(list_es.length);
		veri.id = list_es.length-1;
		return veri;
	}
	list_es.includes(dat) ? veri.existe = true : list_es.push(dat) ;
	veri.id = dat;
	return veri;
}


function ele_capa(contenido,accion,ess){
	if(contenido==null){contenido="";}
	var cad_estilos = estilos("capa",ess);
	var dat = "<div" + eventos(accion) + cad_estilos + ">" + contenido + "</div>";
	return dat;
}

function ele_imagen(enlace,accion,ess){
	var cad_estilos = estilos("imagen",ess);
	var dat = "<img" + eventos(accion) + cad_estilos + "src='images/" + enlace + "'>";
	return dat;
}

function ele_texto(contenido,accion,ess){
	var cad_estilos = estilos("texto",ess);
	var dat = "<p" + eventos(accion) + cad_estilos + ">" + contenido + "</p>";
	return dat;
}












