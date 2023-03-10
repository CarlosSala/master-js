'use strict'

window.addEventListener("load", () => {

    // timers setTimeout solo se ejecuta una vez

    var tiempo;

    function intervalo() {

        tiempo = setInterval(function () {

            console.log("setInterval ejecutando");

            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "40px")
                encabezado.style.fontSize = "20px";
            else
                encabezado.style.fontSize = "40px";

        }, 2000);

        return tiempo;
    }

    // para dar inicio al setInterval
    tiempo = intervalo();

    // para detener el setInterval
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function () {

        console.log("Detuviste el setInterval");
        clearInterval(tiempo);
    });

    // para reanudar el setInterval
    var start = document.querySelector("#start");

    start.addEventListener("click", function () {

        console.log("Iniciaste el setInterval");
        intervalo();
    });

});