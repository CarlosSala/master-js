'use strict'

/* Pedir valores al usuario hasta que este introduzca 
un numero negativo, luego mostrar la suma de los 
numeros y la media
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Ingresa un número"));

    if (isNaN(numero)) {
        numero = 0;
        alert("No ingresaste un valor válido");
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }

} while (numero >= 0)

alert("La suma es: " + suma);
alert("El promedio es: " + suma / contador);