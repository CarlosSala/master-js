'use strict'

var texto = "hola mundo soy una variable global";
var numero = 12;

function holaMundo(parametro) {

    var hola_mundo = "texto dentro de la funcion";

    console.log(parametro);
    console.log(numero);
    console.log(hola_mundo);
}

holaMundo(texto);

 // hola_mundo no esta definida fuera del ambito de la funcion
//console.log(hola_mundo);
