'use strict'

/*
-pedir 6 numeros y guardarlos en un array
-mostrar los elementos en la pagina y en la consola
-ordenar el array y mostrarlo
-invertir el orden y mostrarlo
-mostrar cuantos elementos posee el array 
-busqueda de un valor dentro del array y delvoler posicion
*/

var numeros = []; // new Array(6);

// funcion para mostrar array
function mostrarArray(numeros, textouCustom) {

    document.write("<h1>" + textouCustom + "</h1>");

    numeros.forEach((numero, index, arrayOriginal) => {

        document.write("<li>" + numero + "</li>");
    })
}

// para llenar el array con hasta 6 numeros
do {
    var elementos = parseInt(prompt("ingrese sus numeros: "));

    if (isNaN(elementos)) {

        alert("ingresa un valor valido");

    } else numeros.push(elementos);

} while (numeros.length < 6)


// mostrar el arreglo original
mostrarArray(numeros, "arreglo original");

// mostrar el arreglo ordenado
mostrarArray(numeros.sort(function (a, b) {
    return a - b
}), "Arreglo ordenado numericamente");

// mostrar arreglo invertido
mostrarArray(numeros.reverse(), "Arreglo de orden invertido");


// cantidad de elementos del array
document.write("<h1> el arreglo tiene " + (numeros.length) + " elementos </h1>");

// buscar un elemento en el arreglo
var buscar = parseInt(prompt("busca un numero en el arreglo"));

var posicion = numeros.findIndex(numero => numero == buscar);

if (posicion != -1) {

    document.write("<h1> el numero existe en la poscion " + posicion + "</h1>");

} else document.write("<h1> el numero no existe </h1>");