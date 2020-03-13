'use strict'

// variables
var pais = "España"; 
var continente = "Europa";
var antiguedad = 1000;
var pais_y_contiente = pais + " " + continente;

// var y let

// prueba con var (para variables globales)
var numero = 45;
console.log(numero); // valor 45

if (true){
   var numero = 78;
    console.log(numero); // valor 78
}
console.log(numero);// valor 78

// prueba con let (limita el alcance de la variable)
let nombre ="carlos";
console.log(nombre); // carlos

if (true){
    let nombre = "mario"
    console.log(nombre); // mario
}

console.log(nombre); // carlos