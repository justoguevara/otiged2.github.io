
//var DAT = {};
DAT.imagenes = {};



DAT.imagenes.a_galeria = function(base){
    var galeria = [];
    var lista = DAT.imagenes[base];
    for (var x=0; x<lista.length; x++){
        galeria[x] = {};
        galeria[x].imagen = lista[x].medio;
        galeria[x].titulo = lista[x].titulo;
        galeria[x].descripcion = lista[x].descripcion;
    }
    return galeria;
}


DAT.imagenes.a_menu = function(base){
    var menu = {};
    menu.tex = [];
    menu.vin = [];
    var lista = DAT.imagenes[base];
    for (var x=0; x<lista.length; x++){
        menu.tex.push(lista[x].titulo);
        menu.vin.push(null);
    }
    return menu;
}






f_dat(""
+"---- "
+"   - imagenes"                 // tipo
+"   - casas"                    // base
+"   - MiGu/productos/ .jpeg"    // medio
+"   - "                         // estados
+"   - titulo descripcion"       // campos
+"   --- "
+"     - fachadas   limpias"
+"     - iluminacion   escencia del diseño"
+"     - escalera escultorica   "
+"     - mininmalisto   elementos metalicos"
+"     - minimalismo   elementos metalicos"
+"     - simplicidad   elementos verticales"
+"     - espacios sociales   jardin posterior "
+"     - jardines   integracion a la vivienda"
+"     - simplicidad y elegancia   protagonismo del blnco"
+"     - trancisiones   espacios que se complementan"
+"     - jardines secos   ahorro en mantenimiento"
);


f_dat(""
+"---- "
+"   - imagenes"                 // tipo
+"   - parques"                  // base
+"   - MiGu/productos/ .jpeg"    // medio
+"   - "                         // estados
+"   - titulo descripcion"       // campos
+"   --- "
+"     - fachadas   limpias"
);


f_dat(""
+"---- "
+"   - imagenes"                 // tipo
+"   - aereos"                   // base
+"   - MiGu/productos/ .jpeg"    // medio
+"   - "                         // estados
+"   - titulo descripcion"       // campos
+"   --- "
+"     - fachadas   limpias"
+"     - iluminacion   escencia del diseño"
+"     - escalera escultorica   "
+"     - mininmalisto   elementos metalicos"
+"     - trancisiones   espacios que se complementan"
+"     - jardines secos   ahorro en mantenimiento"
);

