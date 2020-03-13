$(document).ready(function(){

// eventos mouseOver y hover

// se selecciona un div con id caja
var caja =$("#caja");

/*
caja.mouseover(function(){
    $(this).css("background","red");
});
caja.mouseout(function(){
    $(this).css("background","green");
});
*/

// el evento hover realiza lo mismo que el codigo anterior
function cambiaRojo(){
    $(this).css("background", "red");
}

function cambiaVerde(){
    $(this).css("background", "green");
}

// el color es rojo al estar encima y al salir es verde
caja.hover(cambiaRojo, cambiaVerde);

// eventos click y doble click
caja.click(function(){
    $(this).css("background", "blue")
    .css("color", "white");
});
caja.dblclick(function(){
    $(this).css("background", "pink")
    .css("color", "yellow");
});

// eventos focus y blur
// se selecciona el input con id nombre
var nombre = $("#nombre");
// se selecciona el div con id datos
var datos = $("#datos");

nombre.focus(function(){
    $(this).css("border", "2px solid gold");
});
nombre.blur(function(){
    $(this).css("border", "2px solid lightblue");
   // se extrae el texto del formulario y se muestra 
   // en el div datos con el metodo .show() que equivale 
   // a un display block, el metodo .val() extrae el value
   // y el metodo .text() incrusta un texto en otra etiqueta
        datos.text($(this).val()).show();
});

// evento mousedown cuando se mantiene presionado el mouse
datos.mousedown(function(){
$(this).css("border-color", "yellow");
});
// evento mouseup cuando se deja de presionar el mouse
datos.mouseup(function(){
    $(this).css("border-color","purple");
})

// mousemove, pixeles de movimientos del raton
$(document).mousemove(function(){
    // se oculta el mouse del body
    $("body").css("cursor", "none")
    // coordenadas del mouse 
    console.log("coordenadas " + event.clientX + "en x");
    console.log("coordenadas " + event.clientY + " en y");
    // se captura un div y se lo mueve de acuerdo con las 
    // coordenadas del mouse 
    var sigueme = $("#sigueme");
    sigueme.css("left",  event.clientX)
           .css("top",  event.clientY);
})
});