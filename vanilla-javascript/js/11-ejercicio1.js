'use strict'

/*
Enunciado:
-Pedir dos numeros y señalar cual es mayor,
menor o si son iguales.
-Si los datos no son válidos, se debe volver a solicitarlos
*/

var numero1 = parseInt(prompt("Ingresa el primer numero"));
var numero2 = parseInt(prompt("Ingresa el segundo numero"));

// La fucinon isNaN ingresa a la estructura de control si detecta string 
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt("Ingresa el primer numero"));
    numero2 = parseInt(prompt("Ingresa el segundo numero"));
}

if (numero1 > numero2)
    alert("el numero: " + numero1 + " es mayor que " + numero2);
else if (numero1 < numero2)
    alert("el numero: " + numero2 + " es mayor que " + numero1);
else if (numero1 == numero2) alert(numero1 + " y " + numero2 + " son iguales");

