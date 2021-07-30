var info = {};
info.var = function(){
console.log(
"**************  VARIABLES GLOBALES  ****************\n"  + 
"----------------------------------------------------\n" +
"TEXTOS         DESCRIPCION                          \n" + 
"----------------------------------------------------\n" +
"ELEMENTOS            LO ASIGNA       CAUSADO        \n" +
"ele_clic_modifcar    ele_clic        al interactuar \n" + 
"ele_clic             seleccionador   por clic       \n" + 
"----------------------------------------------------\n" +
"FUNCIONES      DE DONDE        LO EJECUTA           \n" +
"info           -               usuario              \n" + 
"accion_clic    desing          seleccionador        \n" +
"controles      controles       controlador          \n" +
"\n");}


//   seleccciona los objetos al hacer clic sobre el


var ele_clic = null;  // elemento capturado por click
var accion_clic = null; // para asignarle funcion y ser ejecutado con el clic
document.onclick = function(e){
     ele_clic = !e ? Event.srcElement : e.target;
     if(accion_clic){ 
          accion_clic(ele_clic);
     }
}


var ele_over = null;  // elemento capturado por click
var accion_over = null; // para asignarle funcion y ser ejecutado con el clic
document.onmouseover = function(e){
     ele_over = !e ? Event.srcElement : e.target;
     if(accion_over){ 
          accion_over(ele_over);
     }
}


var ele_out = null;  // elemento capturado por click
var accion_out = null; // para asignarle funcion y ser ejecutado con el clic
document.onmouseout = function(e){
     ele_out = !e ? Event.srcElement : e.target;
     if(accion_out){ 
          accion_out(ele_out);
     }
}

