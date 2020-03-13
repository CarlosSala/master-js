'use strict'

// DOM - Document Object Model, el arbol de todos los elementos html

// CONSEGUIR ELEMENTOS POR SU ETIQUETA

// se genera un arreglo con todos los div encontrados
var todosLosDivs = document.getElementsByTagName("div");

// .textContent extrae el texto contenido en el elemento
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);

// se modifica el texto de uno de los div's
contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "soy el tercero div, modificado por etiqueta";
contenidoEnTexto.style.background = "blue";


// CAPTURAR ELEMENTOS MEDIANTE SU ID

// var caja = document.getElementById("div1");
// el query selector puede capturar la etiqueta, el id o la clase
var caja = document.querySelector("#div1");

function cambiarColor(color) {
    caja.style.background = color;
}

cambiarColor("green");

// se pueden modificar algunas propiedades del div
caja.innerHTML = "soy el primer div, modificado por id";
caja.style.color = "white";
caja.className = "hola";

// se replican los div existentes dentro del elemento html section
var seccion = document.querySelector("#miseccion");
// se crea un elemento <hr>
var hr = document.createElement("hr");

// forEach solo sirve para recorrer arreglos creados por el usuario
var elemento;

for (elemento in todosLosDivs) {
    if (typeof todosLosDivs[elemento].textContent == "string") {
        // se crea un elemento html de parrafo
        var parrafo = document.createElement("p");
        // se crea un node de texto, con el texto capturado de cada div
        var texto = document.createTextNode(todosLosDivs[elemento].textContent)
        // se se le pasa el texto al elemento parrafo
        parrafo.prepend(texto);
        //se pasa el elemento parrafo al elemento section
        seccion.append(parrafo);
    }
}
// se ubica el elemento hr al final de section
seccion.append(hr);


// CONSEGUIR ELEMENTOS POR SU CLASE

var divRojos = document.getElementsByClassName("rojo");
var divAzul = document.getElementsByClassName("azul");

// divRojos[0].style.background ="red";

// se recorre el arreglo de div's con id="rojo" y se les cambia el color de fondo
var div;
for (div in divRojos) {
    if (divRojos[div].className == "rojo") {
        divRojos[div].style.background = "red";
    }
}
// console.log(divRojos);

// query selector selecciona el primer elemento que encuentra 
// aun cuando existan mas elementos con el mismo id, clase o etiqueta
var claseAzul = document.querySelector(".azul");
console.log(claseAzul);

// query selector all  crea un arreglo con todos los elementos que 
// posean el mismo id o clases o etiqueta
var claseAzulTodos = document.querySelectorAll(".azul");
console.log(claseAzulTodos);