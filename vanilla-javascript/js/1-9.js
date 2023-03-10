'use strict'

// para escribir en el body
// document.write("<h3>Hola desde un document.write<h3>");

// console.log se utiliza mayormente para seguir el flujo del programa
console.log("hola desde la consola");

// variables

var pais = "España";
var continente = "Europa";
var antiguedad = 1000;
var pais_y_contiente = pais + " " + continente;

// var y let

// prueba con var (variable global)
var numero = 45;

console.log(numero); // valor 45

if (true) {

    var numero = 78;

    console.log(numero); // valor 78
}

console.log(numero);// valor 78

// prueba con let (limita el alcance de la variable)
let nombre = "carlos";

console.log(nombre); // carlos

if (true) {

    let nombre = "mario"

    console.log(nombre); // mario
}

console.log(nombre); // carlos

// constantes, su valor no puede ser modificado

const web = "https://facebook.com";
const ip = "192.168.0.12";

console.log('Ejemplo de constantes:\n' + web + "\n" + ip);


// operadores

// suma: +
// resta:  -
// division: /
// multiplicacion: *
// modulo
// incremento: ++
// decremento: --
// acumulador: +=

var numero1 = 8;
var numero2 = 12;
var operacion = numero1 * numero2;

// console.log(operacion)

//tipos de datos

var numero_entero = 44; // number
var cadena_texto = "las comillas dobles tiene mas prioridad que las simples"; // string
var verdadero_falso = true; // boolean

var numero_falso = "22";
var numero_falso_2 = "56.8";
var palabra_falsa = 67;

// convertir datos
console.log(Number(numero_falso) + 8);
console.log(parseInt(numero_falso_2) + 4);
console.log(parseFloat(numero_falso_2) + 4);
console.log(parseFloat(numero_falso_2) + 4.1);
console.log("de number a string " + palabra_falsa.toString());

// determinar el tipo de datos
console.log(typeof numero_falso);
console.log(typeof numero_falso_2);
console.log(typeof palabra_falsa);
console.log(typeof verdadero_falso);

//codicionales o estructuras de control

/* operadores relacionales
mayor: >
menor: <
mayor o igual: >=
menor o igual: <=
igual: ==
distinto: !=
*/

/* operadores lógicos
and : &&
or : ||
negación : !
*/

var year = 2018;

if (year != 2016) console.log("el año no es 2016, sino " + year);

if (year > 2000 && year < 2020)
    console.log("millennials");
else
    console.log("generación x");

if (year == 2028 || (year >= 2018 && year < 2019)) {

    console.log("el año termina en 8");
} else {
    console.log("el año no termina en 8");
}


// switch

var edad = 48;

switch (edad) {

    case 18:
        console.log("edad 18");
        break;

    case 24:
        console.log("edad 24");
        break;

    default:
        console.log("no se tu edad");
        break;
}

// bucle-for

var numero = 5;

for (var i = 0; i <= numero; i++) {

    console.log("vamos en el número: " + i);

    // debugger; permite obserbar los pasos de ejecución del bucle 
    // debugger; 
}


// while
// comprueba un condicion y ejecuta instrucciones

var numero2 = 2018;

while (numero2 >= 2000) {

    console.log("La cuenta regresiva va en el año: " + numero2);

    // se utiliza un break; para detener el bucle
    if (numero2 == 2015) break;

    numero2--;
}

// do while, ejecuta las instrucciones al menos una vez 
// y luego comprueba la condición

var dinero = 40;

do {
    console.log("tengo esta contidad de dinero:  " + dinero);
    dinero--;

} while (dinero > 35)