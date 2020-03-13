'use strict'

// Mostrar la tabla de multiplicar de un numero introducido 

var numero = parseInt(prompt("de que numero quieres la tabla"));

document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i + " x " +numero+ " = " + (i*numero) + "<br>");
}


// Todas las tablas de multiplicar

// se ejecuta el primer for una vez y el segundo for se ejecuta por completo
// luego el primer for se ejecuta por segunda vez y el segundo for se vuelve
// a ejecutar por completo

for (var c = 1; c <= 20; c++) {
    document.write("<h1> Tabla del " + c + "</h1>");

    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + c + " = " + (i * c) + "<br>");
    }
}