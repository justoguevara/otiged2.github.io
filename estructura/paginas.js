

/************************

menu
	.tex
	.vin
	.selec
	.ess
		.tex
		.vin
		.menu

pagina
    .nombre
    .imagen
    .logo
    .info
    .fondo
    .menu
		...
    .sub_menu
		...	

*************************/
let es_seg_maq = "bor-0,0,0,1.0 bors borg-2 fon-255,255,255,1.0 xx espi-100 espey-10 espex-100";
let es_tex_seg_maq = "tex-50,50,100,1.0 texh-30 texcen text-Helvetica";
let es_tex_tit_maq = "0,0,0,1.0 texh-30 espi-20 texcen text-Helvetica";


Paginas = new Object();     // paginas con enlaces


function carga_paginas(){
	let es_seg = es_seg_maq;
	let es_tex_seg = es_tex_seg_maq;
	let es_tex_tit = es_tex_tit_maq;

	let menu_set = {tex:[],vin:[]};
	let menu = menu_set;
	// valores por defecto
	let pag = {
		imagen: "imagen.jpg",
		logo: "logo.jpg",
		menu: {
			tex: ["inicio","productos","servicios","contactos"],
			vin: ["inicio","productos","servicios","contactos"]
		},
		sub_menu: {
			tex: ["paletas","guantes","sobres"],
			vin: ["paletas","guantes","sobres"]
		},
		info: "Nuestros Productos y Servicios",
		fondo: ""
	}
	//sub_menu: DAT.personas.a_menu("lista"),

	var galeria_de_inicio = galeria( DAT.imagenes.a_galeria("casas") );  // galeria

	
	//menu.tex = ["productos","servicios"];
	//menu.vin = ["productos","servicios"];
	//var g = menu_exposicion(menu);
	//var gg = galeria_Design_For_You( DAT.imagenes.a_galeria("casas") );
	
	pagina_maqueta("inicio",pag);
	pagina_maqueta("productos",pag);
	pagina_maqueta("paletas",pag);
	pagina_maqueta("guantes",pag);
	pagina_maqueta("sobres",pag);
	pagina_maqueta("servicios",pag);
	pagina_maqueta("contactos",pag);

	p = Paginas.inicio;
	p.add_cuerpo( B(T("Bienvenidos",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("animacion de entrada",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("aplicativo 3D",es_tex_seg),es_seg) );

	menu.tex = ["paletas","guantes","sobres"];
	menu.vin = ["paletas","guantes","sobres"];
	p = Paginas.productos;
	p.add_cuerpo(menu_exposicion(menu));

	p = Paginas.paletas;
	p.add_cuerpo( T("OTIGED WDM-2909S",es_tex_tit) );
	p.add_cuerpo( B(T("animacion de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("manual y descarga de manual",es_tex_seg),es_seg) );
	p.add_cuerpo( menu_exposicion_maqueta( lista.a_menu(["operacion","rendimiento","caracteristicas","pruebas tipicas"]) ) );
	p.add_cuerpo( T("OTIGED WDM-0810S",es_tex_tit) );
	p.add_cuerpo( B(T("animacion de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("caracteristicas",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("descarga de manual",es_tex_seg),es_seg) );
	p.add_cuerpo( T("OTIGED WDM-0810V",es_tex_tit) );
	p.add_cuerpo( B(T("animacion de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("caracteristicas",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("descarga de manual",es_tex_seg),es_seg) );

	p = Paginas.guantes;
	p.add_cuerpo( B(T("animacion de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("informacion",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("area de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( T("AIDR 0811V",es_tex_tit) );
	p.add_cuerpo( B(T("informacion",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("rendimiento",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("descarga de manual",es_tex_seg),es_seg) );

	p = Paginas.sobres;
	p.add_cuerpo( B(T("animacion de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("informacion",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("area de uso",es_tex_seg),es_seg) );
	p.add_cuerpo( T("AIDR 0811V",es_tex_tit) );
	p.add_cuerpo( B(T("informacion",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("rendimiento",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("descarga de manual",es_tex_seg),es_seg) );

	p = Paginas.servicios;
	p.add_cuerpo( B(T("mantenimiento",es_tex_seg),es_seg) );

	p = Paginas.contactos;
	p.add_cuerpo( B(T("consulta",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("siguenos",es_tex_seg),es_seg) );
	p.add_cuerpo( B(T("preguntas frecuentes",es_tex_seg),es_seg) );


}

