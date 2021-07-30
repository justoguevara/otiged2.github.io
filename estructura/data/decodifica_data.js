



//convierte de texto a valores

function f_dat(dat){
    if(dat){
        var partes = dat.split("---- ")[1].split("   --- ");
        var sub_partes = partes[0].split("   - ");
    //console.log(dat.split("---- ")[1]);
        // variables de la BD
        var tipo = sub_partes[1];
        var base = sub_partes[2];
        var medio = sub_partes[3].split(" ");
        var estados = sub_partes[4];
        var campos = sub_partes[5].split(" ");
        // datos de la BD
        var datos = partes[1].split("     - ");
        var ele = [];
        for(var x=1; x<datos.length; x++){
            var valores = datos[x].split("   ");
            ele[x-1] = {};
            ele[x-1].medio = "./images/" + medio[0] + x + medio[1];
            ele[x-1].estados = estados;
            for(var xx=0; xx<valores.length; xx++){
                ele[x-1][campos[xx]] = valores[xx];
            }
        }
        DAT[tipo][base]=ele;    
    }
}


//convierte de valores a otros valores

let lista = {

    a_menu: function(todo){
        let menu = {vin:[],tex:[]};
        for (var x=0; x<todo.length; x++){
            menu.tex.push(todo[x]);
            menu.vin.push(todo[x]);
        }
        return menu;
    }

}