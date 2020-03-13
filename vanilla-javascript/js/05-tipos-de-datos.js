'use strict'

// operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

console.log(operacion);

//tipos de datos
var numero_entero = 44;
var cadena_texto = "las comillas dobles tiene mas prioridad que las simples";
var verdadero_falso = true; // false

var numero_falso = "22";
var numero_falso2 ="56.8";
var palabra_falsa = 67;

// convertir datos
console.log(Number (numero_falso)+ 8);
console.log(parseInt(numero_falso2));
console.log(parseFloat(numero_falso2));
console.log("hola tengo una " + palabra_falsa.toString());

// determinar el tipo de datos
console.log(typeof numero_falso);
console.log(typeof numero_falso2);
console.log(typeof palabra_falsa);
console.log(typeof verdadero_falso);