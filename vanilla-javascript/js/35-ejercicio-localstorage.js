'use strict'

// se selecciona el formulario
var formulario = document.querySelector("#formpeliculas");

// se captura el evento submit cuando se añade una pelicula
formulario.addEventListener('submit', function() {
    //console.log("submit capturado");

    // se captura el valor ingresado en el input y se guarda
    var titulo = document.querySelector("#addpelicula").value;
    // se almacena la informacion en el local storage
    if (titulo.length >= 1) localStorage.setItem(titulo, titulo);
});

// se selecciona un elemento ul donde se mostraran las peliculas
var ul = document.querySelector("#peliculas-list");

// se recorre el local storage 
var i;
for (i in localStorage) {
    // console.log(localStorage[index]);
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
formulariob.addEventListener('submit', function() {
    //console.log("submit capturado");
     // se captura el valor ingresado en el input y se guarda
    var titulo = document.querySelector("#borrarPelicula").value;
    // elimina un elemento del localstorage
    if (titulo.length >= 1) localStorage.removeItem(titulo, titulo);
});