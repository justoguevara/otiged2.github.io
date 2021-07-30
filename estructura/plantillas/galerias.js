




function galeria(dat){
    dat.tipo
	var todo = new Array();
	for (var x=0; x < dat.length; x++) {
            img = I(dat[x].imagen,"x-200 y-200 espe-10");
                titulo = B(T(dat[x].titulo,"tex-100,100,120,1 texh-13 texn text-Helvetica"),"espi-5 cen");
                descripcion = B(T(dat[x].descripcion,"tex-0,0,0,1 texh-13 text-Helvetica"),"espi-5");
            textos = B(titulo,descripcion,"xx cen v");
                    let menu_gale = {}
                    menu_gale.tex = ["pagina","mas"];
                    menu_gale.vin = [dat[x],""];
                let menu = menu_geleria(menu_gale);
                //menu.selec = 
            controles = B(menu,"fon-30,30,30,1");
		todo[x] = B(img,textos,controles,"bor-210,210,220,1 bors borg-3 v cen espe-10 borr-5");
	}
	return todo; // retorna array
}


function galeria_Design_For_You(dat){
	var todo = new Array();
	for (var x=0; x < dat.length; x++) {
            img = I(dat[x].imagen,"x-200 y-200");
                titulo = B(T(dat[x].titulo,"tex-200,200,200,1 texh-15 texn text-Helvetica"),"espe-5 cen");
                descripcion = B(T(dat[x].descripcion,"tex-180,180,150,1 texh-12 text-Helvetica"),"espe-5");
            textos = B(titulo,descripcion,"xx cen v");
                    let menu_gale = {}
                    menu_gale.tex = ["pagina","mas"];
                    menu_gale.vin = [dat[x],""];
                let menu = menu_principal(menu_gale);   //// nenu principal no va
                //menu.selec = 
            controles = B(menu,"fon-45,45,45 borr-3");
		todo[x] = B(img,textos,controles,"bor-50,50,50,1 bors borg-2 v cen espi-3 espe-10 borr-6");
	}
	return todo; // retorna array
}


function galeria_MiGu(dat){
	var todo = new Array();
	for (var x=0; x < dat.length; x++) {
            img = I(dat[x].imagen,"x-200 y-200");
                titulo = B(T(dat[x].titulo,"tex-200,200,200,1 texh-15 texn text-Helvetica"),"espe-5 cen");
                descripcion = B(T(dat[x].descripcion,"tex-180,180,150,1 texh-12 text-Helvetica"),"espe-5");
            textos = B(titulo,descripcion,"xx cen v");
                    let menu_gale = {}
                    menu_gale.tex = ["pagina","mas"];
                    menu_gale.vin = [dat[x],""];
                let menu = menu_principal(menu_gale);   //// nenu principal no va
                //menu.selec = 
            controles = B(menu,"fon-45,45,45 borr-3");
		todo[x] = B(img,textos,controles,"bor-50,50,50,1 bors borg-2 v cen espi-3 espe-10 borr-6");
	}
	return todo; // retorna array
}
