'use strict'

window.addEventListener("load", function () {

    console.log("DOM cargado");

    // se selecciona un formulario
    var formulario = document.querySelector("#formulario");
    // se selecciona un div, para mostrar los datos del usuario
    var box_dashed = document.querySelector(".dashed");
    // se oculta el div anterior
    box_dashed.style.display = "none";


    formulario.addEventListener("submit", function () {

        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if (nombre.trim() == null || nombre.trim().length == 0) {

            alert("El nombre no es válido");
            document.querySelector("#error_nombre").innerHTML = " El nombre no es válido";

            return false;

        } else {

            document.querySelector("#error_nombre").style.display = "none";
        }

        if (apellidos.trim() == null || apellidos.trim().length == 0) {

            alert("El apellido no es válido");

            return false;
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {

            alert("La edad no es válida");

            return false;
        }

        // se muestra en pantalla el div contenedor de los datos de usuario
        box_dashed.style.display = "block";

        // formas de mostrar los datos de usuario en el body
        
        // forma uno de agregar los datos de usuario al body

        // captura los span donde se incrustarán los datos del usuario
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        // se modifica el valor de los span con los datos del usuario
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;


        // formas opcionales de agregar los datos de usuario al body

        // var datos_usuario = [nombre, apellidos, edad];

        // var indice;

        // for (indice in datos_usuario) {

        //     var parrafo = document.createElement("p");
        //     parrafo.append(datos_usuario[indice]);
        //     box_dashed.append(parrafo);
        // }

        // otra de agregar los datos de usuario al body

        // var parrafo = document.createElement("p");
        // parrafo.append(nombre);
        // parrafo.append(apellidos);
        // parrafo.append(edad);
        // box_dashed.append(parrafo);
    });

});