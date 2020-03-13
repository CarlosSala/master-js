'use strict'

// Una funcion anonima no tiene nombre y 
// se puede llamar a traves de la variable asociada

var varMovie = function (nombre) {
    return "la pelicula es: " + nombre;
}
console.log(varMovie("JhonQ"));

// las funciones que se ejecutan dentro de otra y que no poseen
// nombre son funciones anonimas de callback

function sumame(numero1, numero2, funcion1, funcion2) {
    var sumar = numero1 + numero2;

    // Los dos ultimos parametros de la funcion sumame no tienen una estricta funcion definida,
    // sino que a estos parametros se les pasa una funcion
    funcion1(sumar);
    funcion2(sumar);

    return sumar;
}

// se invoca la funcion sumame utilizando sus cuatro parametros
sumame(4, 5, function (dato) {

    console.log("La suma es: " + dato);
}, function (dato) {
    console.log("La suma por dos es: " + (dato * 2));
});

// las funciones de flecha "=>" simplemente reemplazan la
// palabra function por la flecha y los parentesis del parametro en
//  las funciones de callback

sumame(4, 5, dato => {
    console.log("La suma es: " + dato);
}, dato => {
    console.log("La suma por tres es: " + (dato * 3));
});