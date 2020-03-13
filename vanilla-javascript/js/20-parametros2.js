'use strict'

// parametros REST y SPRED
// el tercer parametro de la función es de tipo rest cuando 
// se le agregan tres puntos y este se convierte en un arreglo

function listadoFruta(fruta1, fruta2, ...resto_de_frutas){

    console.log("fruta1: ", fruta1);
    console.log("fruta2: ", fruta2);
    console.log(resto_de_frutas);
}


// se invoca la funcion tres veces y se le pasan parametros
// los siguientes lineas son identicas

listadoFruta("manzana", "naranja", "sandia", "pera", "coco");

var frutas =["manzana", "naranja"];
listadoFruta(...frutas, "sandia", "pera", "coco"); 

// la siguiente linea hace que la función adopte como su parametro uno
// al arreglo frutas y como segundo parametro a "sandia" 
listadoFruta(frutas, "sandia", "pera", "coco");

