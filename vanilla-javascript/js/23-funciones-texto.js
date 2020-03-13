'use strict'

// funciones de textos
var numero = 44;
var texto1 = "Bienvenido al curso";
var texto2 = "Es muy bueno";

console.log(numero.toString());
console.log(texto1.toUpperCase());
console.log(texto1.toLowerCase());

// calcular longitud
var nombre = ["hola", "asi", "si"];

console.log("el largo del array es: " + nombre.length);

// concatenar o unir texto
var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);

// metodos de busqueda
var busqueda1 = texto1.search("curso");
var busqueda2 = texto1.indexOf("o", 10);
// cuando la palabra no existe search devuelve "-1"
// indexOf busca la letra "o" a partir del caracter 10
// .lastIndexOf es otro metodo y sirve para 
// encontrar la ultima palabra si esta se repite

console.log("La palabra buscada comienza despues del caracter: " + busqueda1);
console.log("La letra buscada comineza despues del caracter: " + busqueda2);

// .match realiza la busqueda y devuelve un array
// .match(/palabra_a_buscar/g); realiza un busqueda global
var busqueda4 = texto1.match("curso");

console.log(busqueda4);
console.log("Palabra encontrada, dentro del array devuelto: " + busqueda4[0]);

//metodo para substraer
var busqueda5 = texto1.substr(14, 5); // substrae desde el 14 al 18
var busqueda6 = texto1.charAt(15);// extrae la letra de la posicion 12

console.log("Palabra sustraida: " + busqueda5);
console.log("Letra sustraida: " + busqueda6);

// busca al inicio del texto, devuelve true si existe o false sino
var busqueda7 = texto1.startsWith("Bienvenido");
// busca al final del texto, devuelve true si existe o false sino
var busqueda8 = texto1.endsWith("curso");

console.log(busqueda7);
console.log(busqueda8);

//busca donde sea en el texto, si encuentra devuelve true
var busqueda9 = texto1.includes("al");
console.log(busqueda9);

// funciones para reemplazar, 
// busca la primera palabra y la reemplaza por la segunda palabra
var busqueda10 = texto1.replace("curso", "programa");
console.log(busqueda10);

// separa los caracteres de las posiciones indicadas
var busqueda11 = texto1.slice(0, 10);
console.log(busqueda11);

// genera un array separando todo a partir del caracter o
// separador indicado
var busqueda12 = texto1.split(" ");
console.log(busqueda12);

// la funcion trim quita los espacios (por delante y por detras)
// de un string
var libro = "   eso es, eso  es   ";
var busqueda14 = libro.trim();
console.log(busqueda14);