'use strict'

// mostrar todos los numeros impares que hay
// entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Ingresa el primer numero"));
var numero2 = parseInt(prompt("Ingresa el segundo numero"));

while (isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt("Ingresa el primer numero"));
    numero2 = parseInt(prompt("Ingresa el segundo numero"));
}

console.log(numero1, numero2);

if (numero1 > numero2) {

    for (var i = numero2 + 1; i < numero1; i++) {
       
      if ( i % 2 == 1 || i % 2 == -1) document.write(i + "<br>");
    }
} else if (numero1 < numero2) {
    for (var i = numero1 + 1; i < numero2; i++) {

        if ( i % 2 == 1 || i % 2 == -1) document.write(i + "<br>");
    }
} else document.write("los numeros son iguales");