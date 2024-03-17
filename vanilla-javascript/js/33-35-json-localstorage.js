'use strict'

// Javascript Object Notation, es una especie de array asociativo

// se crea un objeto json
var pelicula =
{
    titulo: "batman vs superman",
    year: "2017",
    pais: "USA"
}

// se modifica uno de sus atributos
pelicula.titulo = "los vengadores";
console.log(pelicula);

// se crea un arreglo que contiene tres objetos json
var peliculas = [
    { titulo: "it", year: 2016, pais: "Francia" },
    pelicula,
    { titulo: "anaconda", year: 1996, pais: "USA" }
];

// se obseva el arreglo de objetos json
console.log(peliculas);

// se captura un elemento div donde mostrar informacion
var caja_peliculas = document.querySelector("#ObjetosJson");

// se recorre el arreglo y se extrae la  informacion de sus elementos
// para luego mostrar la informacion en pantalla

var index;

for (index in peliculas) {

    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}


// localstorage


// comprobar que localstorage esta disponible
if (typeof (Storage) !== "undefined") {

    console.log("localstorage disponible");
}
else {
    console.log("incompatible con local storage");
}

// guardar datos en el navegador, a traves de un key y un value
localStorage.setItem("titulo", "curso de javascript");

// console.log(localStorage.getItem("titulo"));

// recuperar elemento
document.querySelector("#localStorage").innerHTML = localStorage.getItem("titulo");

// los datos a guardar en el localstorage deben ser string o number
// para guardar objetos json se deben convertir a string antes

// guardar objetos
var usuario =
{
    nombre: " carloncho",
    email: "carlos@gmail.com",
    web: "cruzados.cl"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto del localstorage
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#datos").append(userjs.nombre + ", " + userjs.email);

// borrar un key especifico del localstorage
//localStorage.removeItem("usuario");

// borrar todo el localstorage
// localStorage.clear();


// Ejercicio Local Storage


// se selecciona el formulario
var formulario = document.querySelector("#formPeliculas");

// se captura el evento submit cuando se añade una pelicula
formulario.addEventListener('submit', function () {

    // se captura el valor ingresado en el input y se guarda
    var pelicula = document.querySelector("#addPelicula").value;

    // se almacena la informacion en el local storage
    if (pelicula.length >= 1)
        localStorage.setItem(pelicula, pelicula);
});

// se selecciona un elemento ul donde se mostraran las peliculas
var ul = document.querySelector("#peliculas-list");

// se recorre el local storage 
var i;

// si se guardan datos con el mismo key, estos se sobreesciben
// localStorage.setItem("mario", "tiene dos hijos");
// localStorage.setItem("mario", "tiene tres hijos");
// console.log(localStorage.getItem("mario"));

// trae de vuelta el key de esa posicion
// console.log(localStorage.key(0));

// trae de vuelta todo lo que contenga el localstorage
for (i in localStorage) {

    // se crean elementos li a los cuales se les pasa la informacion 
    // del localstorage y luego son añadidos al elemento ul
    if (typeof localStorage[i] == 'string') {

        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

// se seleciona un segundo formulario
var formulariob = document.querySelector("#formBorrarPeliculas");

// se captura el evento submit 
formulariob.addEventListener('submit', function () {

    // se captura el valor ingresado en el input y se guarda
    var pelicula = document.querySelector("#borrarPelicula").value;

    // elimina un elemento del localstorage
    if (pelicula.length >= 1)
        localStorage.removeItem(pelicula, pelicula);
});