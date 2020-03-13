'use strict'

//Introducir un numero y señalar si este es par o 
// impar, y en caso de no ser validdo, que se solicite
// ingresar un nuevo valor 

do {
    var numero = parseInt(prompt("ingresa un numero"));

} while (isNaN(numero))

if (numero % 2 == 0) document.write("El numero es par");
else document.write("El numero es impar");