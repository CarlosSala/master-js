'use strict'

// localstorage

// comprobar que localstorage esta disponible
if (typeof (Storage) !== "undefined")
console.log("localstorage disponible");
else 
console.log("incompatible con local storage");

// guardar datos en el navegador, a traves de un key y un value
localStorage.setItem("titulo","curso de javascript");

// recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// los datos a guardar en el localstorage deben ser string o number
// para guardar objetos json se deben convertir a string antes

// guardar objetos
var usuario = {
    nombre: " carloncho",
    email: "carlos@gmail.com",
    web: "cruzados"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto del localstorage
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.nombre+ " " +userjs.email);

// borrar un key especifico del localstorage
//localStorage.removeItem("usuario");
// borrar todo el localstorage
// localStorage.clear();
