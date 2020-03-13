'use strict'

// plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");
var plantilla = ` 
    <h1>Bienvenido</h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h2>Mi apellido es: ${apellido}</h2>
`;

document.write(plantilla);