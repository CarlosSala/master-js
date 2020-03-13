'use strict'

// date object js
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();


var textoHora = `

El año es: ${year}
El mes es: ${mes} 
El día es: ${dia}
La hora es: ${hora}

`;
console.log(textoHora);


// metodos matematicos

// el metodo Math.ceil(); le quita los decimales a las cifras
console.log(Math.ceil(Math.random()*100));