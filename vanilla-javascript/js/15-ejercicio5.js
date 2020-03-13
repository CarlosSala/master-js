'use strict'

// Mostrar todos los divisores de un numero introducido

var numero = parseInt(prompt("introduce un numero:"));

for (var i = 1; i <= numero; i++){

if (numero % i == 0) document.write(i + "<br>");
}