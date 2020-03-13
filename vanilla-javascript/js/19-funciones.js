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
    }
}

/*
for (var i = 1; i < 11 ; i++){
    console.log(i);
    calculadora(i,1, false);
}
*/