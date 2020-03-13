'use strict'

// hacer un programa que pida dos numeros y 
// que muestre los numeros existentes entre ambos


var numero1 = parseInt(prompt("Ingresa el primer numero"));
var numero2 = parseInt(prompt("Ingresa el segundo numero"));

while (isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt("Ingresa el primer numero"));
    numero2 = parseInt(prompt("Ingresa el segundo numero"));
}

if (numero1 > numero2) {

    for (var i = numero2 + 1; i < numero1; i++) {
        document.write(i + "<br>");
    }
} else if (numero1 < numero2) {
    for (var i = numero1 + 1; i < numero2; i++) {
        document.write(i + "<br>");
    }
} else document.write("los numeros son iguales");