'use strict'

// arrays, arreglos o matrices 

var nombres = ["carlos sala", "chica", 12, true];
var lenguajes = new Array("PHP", "JS", "Java", "C++", "PYTHON");

// primer elemento
console.log("El primer elemento del arreglo nombres es: " + nombres[0]);

// longitud de un array
console.log("El largo del arreglo lenguajes es : " + lenguajes.length);

// mostrar un elemento del array
// var elemento = parseInt(prompt("Que elemento del array quieres?"));
// if (elemento >= lenguajes.length) {
//     alert("introduce un numero menor que " + lenguajes.length);
// } else alert(lenguajes[elemento]);


// recorrer el array con for y mostrar en el body
document.write("<h1>Array de lenguajes de programación</h1>");
document.write("<ul>");

for (var i = 0; i < lenguajes.length; i++) {

    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");

// recorrer el array con forEach y mostrar en pantalla
lenguajes.forEach((elemento, index, arrayOriginal) => {
    
    document.write("<li>" + index + " - " + elemento + "</li>");
})