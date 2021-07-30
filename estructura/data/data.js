


//var DAT = {};
DAT.personas = {};



DAT.personas.a_galeria = function(base){
    var galeria = [];
    var lista = DAT.personas[base];
    for (var x=0; x<lista.length; x++){
        galeria[x] = {};
        galeria[x].imagen = lista[x].medio;
        galeria[x].titulo = lista[x].titulo;
        galeria[x].descripcion = lista[x].descripcion;
        galeria[x].enlace = lista[x].pagina;
    }
    return galeria;
}


DAT.personas.a_menu = function(base){
    var menu = {};
    menu.tex = [];
    menu.vin = [];
    var lista = DAT.personas[base];
    for (var x=0; x<lista.length; x++){
        menu.tex.push(lista[x].titulo);
        menu.vin.push(lista[x].pagina);
    }
    return menu;
}




f_dat(""
+"---- "
+"   - personas"                 // tipo
+"   - lista"                    // base
+"   - personas/logo/ .jpeg"      // medio
+"   - "                         // estados
+"   - nombre apellido titulo descripcion telefono correo pagina campos"    // campos
+"   --- "
+"     - justo   guevara   diseñador   diseño grafico y arquitectonico   023 658 745   pagina@gmail   publi.com"
+"     - justo   guevara   carpintero   diseño de tortar   023 658 745   pagina@gmail   publi.com"
+"     - mariela   linares   doctor   diseño grafico y arquitectonico   023 658 745   pagina@gmail   publi.com"
+"     - justo   guevara   estudiante   plomeria   023 658 745   pagina@gmail   publi.com"
+"     - justo   guevara   ama de casa   diseño grafico y arquitectonico   023 658 745   pagina@gmail   publi.com"
);


