'use strict'

// DOM - Document Object Model, el arbol de todos los elementos html

// CONSEGUIR ELEMENTOS POR SU ETIQUETA

// se genera un arreglo con todos los div encontrados
var todosLosDivs = document.getElementsByTagName("div");

// .textContent extrae el texto contenido en el elemento
var contenidoEnTexto = todosLosDivs[2].textContent;

// console.log(todosLosDivs);
console.log(contenidoEnTexto);

// se modifica el texto de uno de los div's
var sextoDiv = todosLosDivs[5];
sextoDiv.innerHTML = "soy el sexto div, modificado ByTagName";
sextoDiv.style.background = "yellow";


// // CAPTURAR ELEMENTOS MEDIANTE SU ID

// var primerDiv = document.getElementById("div1");

// el query selector puede capturar la etiqueta, el id o la clase
var primerDiv = document.querySelector("#div1");

function cambiarColor(color) {
    primerDiv.style.background = color;
}

cambiarColor("green");

// se pueden modificar algunas propiedades del div
primerDiv.innerHTML = "soy el primer div, modificado por id";
primerDiv.style.color = "white";
primerDiv.className = "hola";


// se replican los textos de los divs existentes, dentro del elemento html section

var seccion = document.querySelector("#miSeccion");

// se crea un elemento <hr>
var hr = document.createElement("hr");

// forEach solo sirve para recorrer arreglos creados por el usuario
var valor;

for (valor in todosLosDivs) {

    if (typeof todosLosDivs[valor].textContent == "string") {

        // se crea un elemento html <p>
        var parrafo = document.createElement("p");

        // se captura el texto de los divs existentes y se crea un node de texto 
        var texto = document.createTextNode(todosLosDivs[valor].textContent);

        parrafo.append(texto);

        // se pasa el elemento parrafo al elemento section
        seccion.append(parrafo);
    }
}
// se ubica el elemento hr al final de section
seccion.append(hr);


// CONSEGUIR ELEMENTOS POR SU CLASE

var divRojos = document.getElementsByClassName("rojo");
var divAzul = document.getElementsByClassName("azul");

divRojos[0].style.background = "orange";

// se recorre el arreglo de div's con class="rojo" y se les cambia el color de fondo
var div;

for (div in divRojos) {

    if (divRojos[div].className == "rojo") {

        divRojos[div].style.background = "red";
    }
}

console.log(divRojos);

// querySelector selecciona el primer elemento que encuentra
// aun cuando existan mas elementos con el mismo id, clase o etiqueta
var claseAzul = document.querySelector(".azul");
console.log(claseAzul);

// querySelectorAll  crea un arreglo con todos los elementos que
// posean el mismo id o clases o etiqueta
var claseAzulTodos = document.querySelectorAll(".azul");
console.log(claseAzulTodos);