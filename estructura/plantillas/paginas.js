

/*************************
    .nombre
    .imagen
    .logo
    .menu
    .sub_menu
    .info
    .fondo
*************************/

function pagina_maqueta(nombre,pag){
    let esp = "espi-" + 5 + " espe-" + 5;
    let basic_pag = "bor-255,0,255,1.0 borseg borg-4 " + esp + " fon-0,0,0,0"
    let basic_men = "bor-0,0,255,1.0 bors borg-2 " + esp + " fon-0,0,255,0.5"
    let basic_img = "bor-0,0,0,1.0 bors borg-2 " + esp + " fon-255,255,255,1.0"
    let basic_seg = "bor-0,0,255,1.0 bors borg-2 " + esp + " fon-0,0,255,0.4"
	var todo = [];
                imagen = I(pag.imagen,"x-250 y-150 " + basic_img);
                    logo = I(pag.logo,"x-400 y-65 " + basic_img);
                    let menu = menu_principal(pag.menu); ///////////// menu de cabeza
                centro = B(logo,menu,"aba expa " + basic_seg);
                opciones = B("x-250 y-150 " + basic_seg);
            franja_menu = B(imagen,centro,opciones,"xx disx " + basic_seg);
                menu = menu_principal(pag.sub_menu); ///////////// sub menu de cabeza
            franja_sub_menu = B(menu,"cen " + basic_seg);
            franja_info = B(pag.info,"xx y-20 dim-0.5 " + basic_seg);
        cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen xx " + basic_seg);
            fondo = pag.fondo ? " foni-"+pag.fondo : "";
        cuerpo = B("cen xx foni-"+fondo+" " + basic_seg);  // contenido
            let plus = menu_exposicion_maqueta( lista.a_menu(["garantia","embalaje","servicios"]) );
            let contactos = menu_exposicion_maqueta( lista.a_menu(["siguenos","consulta"]) );
            let datos = B(T("datos de la empresa",es_tex_seg_maq),es_seg_maq);
        pies = B(plus,contactos,datos,"cen xx " + basic_seg);            // temporal
    todo = B(cabeza,cuerpo,pies,"cen expa " + basic_pag);
    P(nombre,todo); // creacion de la pagina
}


function pagina_basica(nombre,pag){
	var todo = [];
                imagen = I(pag.imagen,"x-250 y-150 espe-20");
                    logo = I(pag.logo,"x-400 y-65");
                    let menu = menu_principal(pag.menu); ///////////// menu de cabeza
                centro = B(logo,menu,"aba expa");
                opciones = B("x-250 y-150");
            franja_menu = B(imagen,centro,opciones,"xx disx fon-35,40,45,1");
                menu = menu_principal(pag.sub_menu); ///////////// sub menu de cabeza
            franja_sub_menu = B(menu,"xx fon-3,113,174,1 cen");
            franja_info = B(pag.info,"xx y-20 fon-210,213,218,1 dim-0.5");
        cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen xx");
            fondo = pag.fondo ? " foni-"+pag.fondo : "";
        cuerpo = B("cen xx fon-240,240,240,1 foni-"+fondo);  // contenido
        pies = B(franja_info,franja_menu,"cen xx");            // temporal
    todo = B(cabeza,cuerpo,pies,"cen expa");
    P(nombre,todo); // creacion de la pagina
}



function pagina_Design_For_You(nombre,pag){
	var todo = [];
                imagen = I(pag.imagen,"x-250 y-150 espe-20");
                    logo = I(pag.logo,"x-400 y-65");
                    menu = menu_principal(pag.menu);
                centro = B(logo,menu,"aba expa");
                opciones = B("x-250 y-150");
            franja_menu = B(imagen,centro,opciones,"xx disx fon-30,30,30,1");
                menu = menu_principal(pag.sub_menu);
            franja_sub_menu = B(menu,"xx cen espi-10");
            franja_info = B(pag.info,"xx y-30 fon-20,20,20,1 dim-0.5");
        cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen fon-15,15,15 xx");
            fondo = pag.fondo ? " foni-"+pag.fondo : "";
        cuerpo = B("cen xx fon-30,30,30,1"+fondo);     // contenido
        pies = B(franja_info,franja_menu,"cen xx");    // temporal
    todo = B(cabeza,cuerpo,pies,"cen fon-15,15,15 expa");
    P(nombre,todo); // creacion de la pagina
}



function pagina_otiged(nombre,pag){
	var todo = [];
                imagen = I(pag.imagen,"x-250 y-150 espe-20");
                    logo = I(pag.logo,"x-400 y-65");
                    let menu = menu_principal(pag.menu); ///////////// menu de cabeza
                centro = B(logo,menu,"aba expa");
                opciones = B("x-250 y-150");
            franja_menu = B(imagen,centro,opciones,"xx disx fon-35,40,45,1");
                menu = menu_principal(pag.sub_menu); ///////////// sub menu de cabeza
            franja_sub_menu = B(menu,"xx fon-3,113,174,1 cen");
            franja_info = B(pag.info,"xx y-20 fon-210,213,218,1 dim-0.5");
        cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen xx");
            fondo = pag.fondo ? " foni-"+pag.fondo : "";
        cuerpo = B("cen xx fon-240,240,240,1 foni-"+fondo);  // contenido
        pies = B(franja_info,franja_menu,"cen xx");            // temporal
    todo = B(cabeza,cuerpo,pies,"cen expa");
    P(nombre,todo); // creacion de la pagina
}


function pagina_migu(nombre,pag){
	var todo = [];
                imagen = I(pag.imagen,"x-250 y-150 espe-20");
                    logo = I(pag.logo,"x-400 y-65");
                    let menu = menu_principal(pag.menu); ///////////// menu de cabeza
                centro = B(logo,menu,"aba expa");
                opciones = B("x-250 y-150");
            franja_menu = B(imagen,centro,opciones,"xx disx fon-35,40,45,1");
                menu = menu_principal(pag.sub_menu); ///////////// sub menu de cabeza
            franja_sub_menu = B(menu,"xx fon-3,113,174,1 cen");
            franja_info = B(pag.info,"xx y-20 fon-210,213,218,1 dim-0.5");
        cabeza = B(franja_menu,franja_sub_menu,franja_info,"cen xx");
            fondo = pag.fondo ? " foni-"+pag.fondo : "";
        cuerpo = B("cen xx fon-240,240,240,1 foni-"+fondo);  // contenido
        pies = B(franja_info,franja_menu,"cen xx");            // temporal
    todo = B(cabeza,cuerpo,pies,"cen expa");
    P(nombre,todo); // creacion de la pagina
}