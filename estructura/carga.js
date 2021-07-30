

function carga_js(dir){
    var script  = document.createElement('script');
    script.src  = dir;
    script.type = 'text/javascript';
    //script.async;
    document.head.appendChild(script);
}

/*
async function incluir(lista) {
    nombre = lista.split(" ");
    for(var x=0; x<nombre.length; x++){

        var script  = document.createElement('script');
        script.src  = "estructura/" + nombre[x] + ".js";
        script.type = 'text/javascript';
        //script.defer = true;
        document.head.appendChild(script);

    }
}
*/


// incluir variables
carga_js("estructura/variables.js");


// incluir datas
carga_js("estructura/data/decodifica_data.js");      
carga_js("estructura/data/imagenes.js");
carga_js("estructura/data/data.js");


// inclir archivos estructura html 
carga_js("estructura/elementos.js");
carga_js("estructura/eventos.js");
carga_js("estructura/bloques.js");
carga_js("estructura/plantillas/galerias.js");
carga_js("estructura/plantillas/menus.js");
carga_js("estructura/plantillas/paginas.js");
carga_js("estructura/paginas.js");
carga_js("estructura/comandos.js");
carga_js("estructura/gestor.js");


// incluir controles de diseño
carga_js("estructura/controladores/seleccionador.js");


// incluir controles de diseño
carga_js("estructura/design_of_elements.js");