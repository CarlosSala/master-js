'use strict'

// Es recomendado trabajar los eventos javascript separandolos de html
// como por ejemplo los eventos onclick u ondblclick.

window.addEventListener("load", () => {

    var boton = document.querySelector("#boton");

    function cambiarColor() {

        var bg = boton.style.background;

        if (bg == "green")
            boton.style.background = "red";
        else
            boton.style.background = "green";
    }

    // capturar eventos con .addEventListener escuchador de eventos
    // sin agregar codigo javascript en html

    // evento click o dblclick
    boton.addEventListener('click', function () {

        cambiarColor();
        // this hace referencia al elemento en concreto sobre el cual se ha lanzado el evento
        console.log(this);
        this.style.border = "5px solid black";
    });

    // evento mouse over, pasas por encima y cambia el color 
    boton.addEventListener("mouseover", function () {

        boton.style.background = "orange";
    });

    // evento mouse out, al salir de encima cambia el color 
    boton.addEventListener("mouseout", function () {

        boton.style.background = "lightblue";
    });

    // evento focus, al hacer foco en un elemento
    var input = document.querySelector("#campo_nombre");

    input.addEventListener("focus", function () {

        console.log("estas dentro del input");
    });

    // evento blur, cuando se deja de hacer focus
    input.addEventListener("blur", function () {

        console.log("estas fuera del input");
    });

    // evento keydown, se genera al pulsar una tecla, devuelve mayusculas mas rapido que kespress
    input.addEventListener("keydown", function (event) {

        console.log("Tecla presionada: " + String.fromCharCode(event.keyCode));
    });

    // evento keypress, se genera al pulsar una tecla
    input.addEventListener("keypress", function (event) {

        console.log("Tecla presionada: " + String.fromCharCode(event.keyCode));
    });

    // evento keyup, se genera al soltar una tecla, devuelve mayusculas
    input.addEventListener("keyup", function (event) {

        console.log("Tecla soltada: " + String.fromCharCode(event.keyCode));
    });

});
// final del evento load, que permite lanzar los script despues de cargar los elementos html