'use strict'

// funciones de textos

var numero = 44;
var texto1 = "Bienvenido al cursoX";
var texto2 = "Es muy bueno";

console.log(numero.toString());
console.log(texto1.toUpperCase());
console.log(texto1.toLowerCase());

// calcular longitud

var nombre = ["hola", "asi", "si"];

console.log("el largo del array es: " + nombre.length);

// concatenar o unir texto

var textoTotal = texto1.concat(". " + texto2);

console.log(textoTotal);

// metodos de busqueda

// cuando la palabra no existe search devuelve "-1"
var busqueda1 = texto1.search("curso");

// indexOf busca la letra "o" a partir de la posicion 10
var busqueda2 = texto1.indexOf("o", 10);

// .lastIndexOf es otro metodo y sirve para 
// encontrar la ultima palabra si esta se repite

console.log("La palabra buscada comienza en la posición: " + busqueda1 + " considerando la primera posicion como 0");
console.log("La letra buscada esta en la posición : " + busqueda2 + " considerando la primera posicion como 0");

// .match realiza la busqueda y devuelve un array
// .match(/palabra_a_buscar/g); realiza un busqueda global
var busqueda3 = texto1.match("curso");

console.log(busqueda3);
console.log("Palabra encontrada dentro del array devuelto: " + busqueda3[0]);

//metodo para substraer
var busqueda4 = texto1.substring(0, 2); // substrae el caracter de la pos 0 y una pos menos a la indicada
var busqueda5 = texto1.charAt(15); // extrae la letra de la posicion 15

console.log("Palabra sustraida: " + busqueda4);
console.log("Letra sustraida: " + busqueda5);

// busca al inicio del texto, devuelve true si existe o false sino
var busqueda6 = texto1.startsWith("Bienvenido");

console.log(busqueda6);

// busca al final del texto, devuelve true si existe o false sino
var busqueda7 = texto1.endsWith("cursoX");

console.log(busqueda7);

//busca donde sea en el texto, si encuentra devuelve true
var busqueda8 = texto1.includes("al");

console.log(busqueda8);

// funciones para reemplazar

// busca la primera palabra y la reemplaza por la segunda palabra
var busqueda9 = texto1.replace("curso", "programa");

console.log(busqueda9);

// separa los caracteres de las posiciones indicadas
var busqueda10 = texto1.slice(0, 10);

console.log(busqueda10);

// genera un array separando todo a partir del caracter o separador indicado
var busqueda11 = texto1.split(" ");

console.log(busqueda11);

// la funcion trim quita los espacios (por delante y por detras) de un string
var libro = "   eso es, eso  es   ";

var busqueda12 = libro.trim();

console.log(busqueda12);

// plantillas de texto

// var nombre = prompt("Ingresa tu nombre");
// var apellido = prompt("Ingresa tu apellido");

// var plantilla = ` 
//     <h1>Bienvenido</h1>
//     <h2>Mi nombre es: ${nombre} </h2>
//     <h2>Mi apellido es: ${apellido}</h2>
// `;

// document.write(plantilla);