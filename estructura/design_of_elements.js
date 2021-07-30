var ele_clic_modifcar = null;


equiv_es = {}
equiv_es["borr"] = ["borderRadius","px","",""];
equiv_es["borg"] = ["borderWidth","px","",""];
equiv_es["espe"] = ["margin","px","",""];
equiv_es["espi"] = ["padding","px","",""];
equiv_es["bors"] = ["borderStyle","solid","",""];


var controles = {};


//design of elements
function editar(){

        //console.time("controles: ");

// define controles
        acceso_design.add("nivel_v","borr");  
        acceso_design.add("nivel_h","borg");
        acceso_design.add("nivel_v","espe");
        acceso_design.add("nivel_a","espi");
        acceso_design.add("caja","bors");
        acceso_design.ver()
        acceso_design.interaccion("seleccionar")

        //console.timeEnd("controles: ");

}



class control_nivel{
	constructor(id,sentido,funcion=null,max=100,valor=0) {
        this.tipo = "basico"
		this.min = 0;
        this.max = max;
        this.sentido = sentido;
        this.valor = valor;
        this.porcentaje = valor/max;
        this.aumentar = 10;
        this.id = id;
        controles[id] = this;
        this.funcion = funcion;
	};

	ejecutar(veri,val_x,val_y) {  // controlador ejecuta esta funcion por defecto...
        if(this.id == veri){
            if(this.funcion!=null){this.funcion(val_x,val_y);}
        }
	};

    activar(valor=null,valor2=null) {
        //valor = valor ? 100*valor/this.max : 100*this.porcentaje;
        valor = 100 * valor/this.max;
        console.log(valor)
        if(this.sentido == "h"){controlador(this.id,this.id,this.sentido,valor,"0");}
        if(this.sentido == "v"){controlador(this.id,this.id,this.sentido,"0",valor);}
        if(this.sentido == "a"){controlador(this.id,this.id,this.sentido,valor,valor2);}
	};

    ver(){
        let x = "";
        let y = "";
        if(this.sentido == "h"){x="x-150 ",y="h y-10 "}
        if(this.sentido == "v"){x="x-10 ",y="v y-150 "}
        if(this.sentido == "a"){x="x-150 ",y="y-150 "}
        let boton = B(this.id + "/noselec fon-30,30,30,0.9 bor-100,100,100,0.9 x-15 bors y-15 borr-10 posrel-*5-*5");
        let barra = B(boton,"rango_" + this.id + "/noselec fon-100,100,100,0.5 " + x + y + "espe-20 borr-8");
        return barra.ver(); // retorna array
    }
}


class control_caja_selec{
	constructor(id,funcion=null,max=100,valor=false) {
        this.tipo = "basico"
        this.valor = valor;
        this.id = id;
        controles[id] = this;
        this.funcion = funcion;
	};

	ejecutar(veri,val_x,val_y) {  // controlador ejecuta esta funcion por defecto...
        if(this.id == veri){
            if(this.funcion!=null){this.funcion(val_x,val_y);}
        }
	};

    activar(valor=null) {
        valor = 100 * valor/this.max;
        console.log(valor)
        controlador(this.id,this.id,"h",valor,"0");
	};

    ver(){
        let punto = B(this.id + "/noselec fon-100,100,100,0.9 x-11 y-11 borr-3");
        let caja = B(punto,"rango_" + this.id + "/noselec fon-30,30,30,0.9 bor-100,100,100,0.9 cen x-18 y-18 bors borr-5 espe-10");
        return caja.ver(); // retorna array
    }
}



var retro_estilo = null;  // temporral




class design{
	constructor() {
        this.es=null;
        this.ctr = new Array();
        controles = {};

        this.info = B(B("demo/noselec espi-5"),"info/ dim-0.2 esc-0.7 pos-20-20 x-150 y-270 fon-3,23,24,0.5 tex-150,220,200 borr-10");
        this.selector = B(T("","xxx/tex-100,255,100,1.0 texh-25 text-Helvetica"),"selector/noselec espi-10 fon-0,0,0,0.9 bor-255,255,255,0.5 borg-4 borr-5");
        this.enfoque = B("enfoque/noselec pos-0-0  bor-255,0,0,1.0 borg-2 bors");
        this.todo = new Array();
	}

    // tipo: tipo de controlador, nombre: nombre, propiedad: estilo abreviado
    add(tipo,propiedad){
        let prop = equiv_es[propiedad];
        if(tipo=="nivel_h"){ 
            // se inicia control nivel
            let nivel = new control_nivel(propiedad,"h");
            // se asigna la tarea a realizar al control nivel
            nivel.funcion = function(x,y){ ele_clic_modifcar.style[prop[0]] = x + prop[1] };
            this.ctr.push( nivel );
        }
        if(tipo=="nivel_v"){ 
            // se inicia control nivel
            var nivel = new control_nivel(propiedad,"v");
            // se asigna la tarea a realizar al control nivel
            nivel.funcion = function(x,y){ ele_clic_modifcar.style[prop[0]] = y + prop[1] };
            this.ctr.push( nivel );
        }
        if(tipo=="nivel_a"){ 
            // se inicia control nivel
            var nivel = new control_nivel(propiedad,"a");
            // se asigna la tarea a realizar al control nivel
            nivel.funcion = function(x,y){ ele_clic_modifcar.style[prop[0]] = y + prop[1] };
            this.ctr.push( nivel );
        }
        if(tipo=="caja"){ 
            // se inicia control caja
            let caja = new control_caja_selec(propiedad);
            // se asigna la tarea a realizar al control caja
            caja.funcion = function(x,y){ ele_clic_modifcar.style[prop[0]] = y + prop[1] };
            this.ctr.push( caja );

        } 
    }

    // selecciona el objeto a modificar y lo guarda en  "ele_clic_modifcar"
    interaccion(estado){
        if(estado=="seleccionar"){
            accion_over = function(){acceso_design.interaccion("estilos")}
            accion_out = function(){acceso_design.interaccion("retro_estilos")}
            accion_clic = function(){acceso_design.interaccion("seleccionado")}
            console.log("seleccione un objeto...");
        }
        if(estado=="estilos"){
            //var enfoque = document.getElementById("enfoque");
            //enfoque.style.width = ele_over.offsetWidth + "px";
            //enfoque.style.height = ele_over.offsetHeight + "px";
            //enfoque.style.left = ele_over.offsetLeft + "px";
            //enfoque.style.top = ele_over.offsetTop + "px";
            retro_estilo = ele_over.style.background;
            ele_over.style.background = "rgba(0,0,255,0.7)";
        }
        if(estado=="retro_estilos"){
            //ele_out.style=retro_estilo;
            ele_out.style.background = retro_estilo;
        }
        if(estado=="seleccionado"){
            accion_over = null;
            accion_out = null;
            ele_clic.style.background=retro_estilo;
            accion_clic = function(){acceso_design.interaccion("inicio")};
            ele_clic_modifcar = ele_clic;
            acceso_design.activar();
            console.log("   listo.");
        }
        if(estado=="inicio"){
            if(ele_clic){ 
                if(ele_clic.id=="selector"){ 
                    acceso_design.interaccion("seleccionar"); 
                } 
            }
        }
    }

    
    activar(){
        for(var x=0; x<this.ctr.length; x++){
            var propiedad = equiv_es[this.ctr[x].id][0];
            //var valor = ele_clic_modifcar.style[propiedad];
            
            //if(valor == ""){
                var valor = window.getComputedStyle(ele_clic_modifcar)[propiedad];
            //}
            
            valor = parseInt( valor.split("px")[0] , 10 );
            this.ctr[x].activar(valor);
        }
    }

    // 004 330 641


    ver(){
        let es_nivel = "bor-100,100,100,0.7 bors borg-1 fon-10,10,10,0.5 v cen espe-10 xx-30 borr-5";
        let es_caja = "bor-150,150,150,0.5 fon-20,20,20,0.9 bors borg-2 h cen borr-5 pos-0-0 x-800 esc-1.0";
        let caja_1 = B(...this.ctr,es_nivel);
        let caja_2 = B(es_nivel);
        let caja_3 = B(es_nivel);
        let caja = B(caja_1,caja_2,caja_3,es_caja);

        let todo = caja.ver();
        todo += this.info.ver();
        todo += this.selector.ver();
        todo += this.enfoque.ver();
        console.log(todo);
        return mostrar(todo);
    }
}
var acceso_design = new design();  // inicio automatico de desing de controladores
accion_clic = function(){acceso_design.interaccion("inicial")} // inicia interaccion





function interaccion_eventos(lugar=null){
    var t = new Array();
    var ele_clic_id = ele_clic? ele_clic.id : null ;
    var ele_over_id = ele_over? ele_over.id : null ;
    t.push( "ele_clic     :  " + ele_clic_id );
    t.push( "ele_over     :  " + ele_over_id );
    t.push( "accion_clic  :  " + accion_clic );
    t.push( "accion_over  :  " + accion_over );
    var todo = "";
    if(lugar==null){
        // consola
        for(var x=0; x<t.length; x++){
            todo += t[x] + "\n"
        }
        console.clear();
        console.log(todo);
    }else{
        // imprimir
        for(var x=0; x<t.length; x++){
            todo += t[x] + "<br>"
        }
        document.getElementById(lugar).innerHTML = todo;
    }
}




function mostrar(cadena) {

	document.getElementById("contenedor").innerHTML += cadena;    // imprimeelementos...

	var elemento = document.createElement('style')
	elemento.innerHTML = cadena_general_es;
	document.getElementById("contenedor").appendChild(elemento); // imprime estilos...  

}








var ctr = {};
function controlador(id,plano,tipo,valx_ini,valy_ini){
    plano = "rango_" + plano;
    ctr[id] = {};   
    c = ctr[id];
    c.moviendo = false;
    c.valx = valx_ini;
    c.valy = valy_ini;
    // carga valores
    c = ctr[id];
    x0 = document.getElementById(plano).offsetLeft;  // pos absoluto de caja
    y0 = document.getElementById(plano).offsetTop;   // pos absoluto de caja
    dx = document.getElementById(plano).offsetWidth;   // ancho de caja
    dy = document.getElementById(plano).offsetHeight;  // alto de caja      
    dx_pun = document.getElementById(id).offsetWidth;   // ancho de puntero
    dy_pun = document.getElementById(id).offsetHeight;  // alto de puntero   
    x = c.valx * dx / 100;
    y = c.valy * dy / 100;
    c.moviendo=false;
    if(tipo=="h"|tipo=="a"){document.getElementById(id).style.left = x - dx_pun/2 + "px";}
    if(tipo=="v"|tipo=="a"){document.getElementById(id).style.top = y - dy_pun/2 + "px";}
    controles[id].ejecutar(id,c.valx,c.valy);  // el controlador ejecuta sus codigos...

        //info
        info = "id boton: " + id + "<br>";
        info += "id plano: " + plano + "<br>";
        info += "tipo : " + tipo + "<br>";
        info += "valor x: " + c.valx + "<br>";
        info += "valor y: " + c.valy + "<br>";
        info += "activado : " + ctr[id].moviendo + "<br>";
        info += "estado : inicio <br>";
        info += "x: " + x + "<br>";
        info += "y: " + y + "<br>";
        info += "dx: " + dx + "<br>";
        info += "dy: " + dy + "<br>";
        info += "x0: " + x0 + "<br>";
        info += "y0: " + y0 + "<br>";
        document.getElementById("demo").innerHTML = info;
        document.getElementById("info").style.left = x0 + x + 50 + "px";
        document.getElementById("info").style.top = y0 + y + "px";
        document.getElementById("info").style.opacity = "0.0";
        document.getElementById("info").style.transform = "scale(0.0)";
    document.getElementById(plano).addEventListener("mousedown",  //************ CLIC *************
        function(e){
            c = ctr[id];
            x0 = document.getElementById(plano).offsetLeft;  // pos absoluto de caja
            y0 = document.getElementById(plano).offsetTop;   // pos absoluto de caja
            dx = document.getElementById(plano).offsetWidth;   // ancho de caja
            dy = document.getElementById(plano).offsetHeight;  // alto de caja      
            dx_pun = document.getElementById(id).offsetWidth;   // ancho de puntero
            dy_pun = document.getElementById(id).offsetHeight;  // alto de puntero   
            x = e.x - x0;
            y = e.y - y0;
            c.moviendo=true;
            if(tipo=="h"|tipo=="a"){document.getElementById(id).style.left = x - dx_pun/2 + "px";}
            if(tipo=="v"|tipo=="a"){document.getElementById(id).style.top = y - dy_pun/2 + "px";}
            c.valx = Math.round(100 / dx * x);
            c.valy = Math.round(100 / dy * y);
            controles[id].ejecutar(id,c.valx,c.valy);  // el controlador ejecuta sus codigos...

                //info
                info = "id boton: " + id + "<br>";
                info += "id plano: " + plano + "<br>";
                info += "tipo : " + tipo + "<br>";
                info += "valor x: " + c.valx + "<br>";
                info += "valor y: " + c.valy + "<br>";
                info += "activado : " + ctr[id].moviendo + "<br>";
                info += "estado : clic <br>";
                info += "x: " + x + "<br>";
                info += "y: " + y + "<br>";
                info += "dx: " + dx + "<br>";
                info += "dy: " + dy + "<br>";
                info += "x0: " + x0 + "<br>";
                info += "y0: " + y0 + "<br>";
                document.getElementById("demo").innerHTML = info;
                document.getElementById("info").style.left = e.x + 50 + "px";
                document.getElementById("info").style.top = e.y + "px";
                document.getElementById("info").style.opacity = "1.0";
                document.getElementById("info").style.transform = "scale(1.0)";
        })
    document.getElementsByTagName("html")[0].addEventListener("mousemove",  //************ MOVE *************
        function(e){ 
            if(ctr[id].moviendo){
                c = ctr[id];
                x0 = document.getElementById(plano).offsetLeft;  // pos absoluto de caja
                y0 = document.getElementById(plano).offsetTop;   // pos absoluto de caja
                dx = document.getElementById(plano).offsetWidth;   // ancho de caja
                dy = document.getElementById(plano).offsetHeight;  // alto de caja      
                dx_pun = document.getElementById(id).offsetWidth;   // ancho de puntero
                dy_pun = document.getElementById(id).offsetHeight;  // alto de puntero                          
                x = e.x - x0;  // pos relativo de puntero
                y = e.y - y0;  // pos relativo de puntero
                if(x < 0){x=0};if(x > dx){x=dx};  // limites x
                if(y < 0){y=0};if(y > dy){y=dy};  // limites y
                if(tipo=="h"|tipo=="a"){document.getElementById(id).style.left = x - dx_pun/2 + "px";}
                if(tipo=="v"|tipo=="a"){document.getElementById(id).style.top = y - dy_pun/2 + "px";}
                c.valx = Math.round(100 / dx * x);
                c.valy = Math.round(100 / dy * y);
                controles[id].ejecutar(id,c.valx,c.valy);  // el controlador ejecuta sus codigos...

                //info
                info = "id boton: " + id + "<br>";
                info += "id plano: " + plano + "<br>";
                info += "tipo : " + tipo + "<br>";
                info += "valor x: " + c.valx + "<br>";
                info += "valor y: " + c.valy + "<br>";
                info += "activado : " + ctr[id].moviendo + "<br>";
                info += "estado : mover <br>";
                info += "x: " + x + "<br>";
                info += "y: " + y + "<br>";
                info += "dx: " + dx + "<br>";
                info += "dy: " + dy + "<br>";
                info += "x0: " + x0 + "<br>";
                info += "y0: " + y0 + "<br>";
                document.getElementById("demo").innerHTML = info;
                document.getElementById("info").style.left = e.x + 50 + "px";
                document.getElementById("info").style.top = e.y + "px";
            }})
    document.getElementsByTagName("html")[0].addEventListener("mouseup",
     function(e){
            if(ctr[id].moviendo){ controles[id].ejecutar(id,c.valx,c.valy) };  // el controlador ejecuta sus codigos...
            ctr[id].moviendo=false;

                //info
                info = "id boton: " + id + "<br>";
                info += "id plano: " + plano + "<br>";
                info += "tipo : " + tipo + "<br>";
                info += "valor x: " + c.valx + "<br>";
                info += "valor y: " + c.valy + "<br>";
                info += "activado : " + ctr[id].moviendo + "<br>";
                info += "estado : soltar <br>";
                info += "x: " + x + "<br>";
                info += "y: " + y + "<br>";
                info += "dx: " + dx + "<br>";
                info += "dy: " + dy + "<br>";
                info += "x0: " + x0 + "<br>";
                info += "y0: " + y0 + "<br>";
                document.getElementById("demo").innerHTML = info;
                document.getElementById("info").style.left = e.x + 50 + "px";
                document.getElementById("info").style.top = e.y + "px";
                document.getElementById("info").style.opacity = "0.0";
                document.getElementById("info").style.transform = "scale(0.0)";
        })
}
