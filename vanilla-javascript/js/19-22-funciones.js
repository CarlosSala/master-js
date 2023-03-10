'use strict'

// funciones: conjunto de ordenes que se ejecutan 
// cuando son invocadas, pueden tener parametros 
// obligatorios como tambien opcionales

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {

        console.log("suma: " + (numero1 + numero2));
        console.log("resta: " + (numero1 - numero2));
        console.log("multiplicación: " + (numero1 * numero2));
        console.log("división: " + (numero1 / numero2));

        return "Soy la calculadora";

    } else {

        document.write("suma: " + (numero1 + numero2) + "<br>");
        document.write("resta: " + (numero1 - numero2) + "<br>");
        document.write("multiplicación: " + (numero1 * numero2) + "<br>");
        document.write("división: " + (numero1 / numero2) + "<br>");

        return "se muestra en pantalla"
    }
}


// parametros REST y SPRED
// el tercer parametro de la función es de tipo rest cuando 
// se le agregan tres puntos y este se convierte en un arreglo

function listadoFruta(fruta1, fruta2, ...resto_de_frutas) {

    console.log("fruta1: ", fruta1);
    console.log("fruta2: ", fruta2);
    console.log(resto_de_frutas);
}


// se invoca la funcion anterior tres veces y se le pasan parametros

listadoFruta("manzana", "naranja", "sandia", "pera", "coco");

var frutas = ["manzana", "naranja"];

// frutas es un arreglo de dos strings, pero los tres puntos hacen que
// se tome cada parametro por separado
listadoFruta(...frutas, "sandia", "pera", "coco");

// en este caso si se toma como arreglo al parametro uno frutas y 
// como segundo parametro a "sandia" 
listadoFruta(frutas, "sandia", "pera", "coco");


// Una funcion anonima no tiene nombre y se puede llamar a traves de la variable asociada

var movie = function (nombre) {
    return "la pelicula es: " + nombre;
}
console.log(movie("JhonQ"));

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
},
    function (dato) {

        console.log("La suma multiplicada por dos es: " + (dato * 2));
    });

// las funciones de flecha "=>" simplemente reemplazan la
// palabra function por la flecha y los parentesis del parametro en
// las funciones de callback

sumame(4, 5, dato => {

    console.log("La suma es: " + dato);

},
    dato => {

        console.log("La suma por tres es: " + (dato * 3));
    });

// ambitos, existen variables que solo estan definidas en el ambito de la funcion

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
// console.log(hola_mundo);
