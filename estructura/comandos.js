

//******************  comandos ***********************//

Funciones = new Object();   // funciones con llamadas

Funciones["estilo temporal"] = function(){Es_modos = "temp";}
Funciones["estilo normal"] = function(){Es_modos = "normal";}
Funciones["estilo intenso"] = function(){Es_modos = "intenso";}
Funciones["estilo siguiente"] = function(){
    var nuevo = null;
    if(Es_modos == "intenso"){nuevo = "temp";}
    if(Es_modos == "normal"){nuevo = "intenso";}
    if(Es_modos == "temp"){nuevo = "normal";}
    if(nuevo != null){Es_modos = nuevo;}
}