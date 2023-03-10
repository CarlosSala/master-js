'use strict'

// browser object model

// window.innerHeight para altura de la ventana 
// window.innerWidth para el ancho de la ventana

// screen.Height para altura de la pantalla 
// screen.Width para el ancho de la pantalla

//window.location para obtener el objeto del url actual

function getBom() {

    console.log(screen.height);
    console.log(screen.width);
    console.log(window.location.href);
}

getBom();

// se invoca la funcion redirect con el parametro url 
// desde la consola para redirigir

var url = "https://google.com";

function redirect(url) {

    window.location.href = url;
}


function abrirVentana(url) {

    // desde consola se le entrega una url

    window.open(url, "", "width=400,height=300");
}

