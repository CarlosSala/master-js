'use strict'

function Ejercicio() {

    var opcion = document.getElementById("mySelect").value;
    // console.log(opcion.toString());

    switch (opcion) {

        case "ejercicio11":

            ejercicio11()

            break;

        case "ejercicio12":

            ejercicio12()

            break;

        case "ejercicio13":

            ejercicio13()

            break;

        case "ejercicio14":

            ejercicio14()

            break;

        case "ejercicio15":

            ejercicio15()

            break;

        case "ejercicio16":

            ejercicio16()

            break;

        case "ejercicio17":

            ejercicio17()

            break;

        case "ejercicio18":

            ejercicio18()

            break;

        default:

            console.log("ningun ejercicio seleccionado")

            break;
    }
}


/*
-Pedir dos numeros y señalar cual es mayor, menor o si son iguales.
-Si los datos no son válidos, se debe volver a solicitarlos
*/

function ejercicio11() {

    var numero1 = parseInt(prompt("Ingresa el primer numero"));
    var numero2 = parseInt(prompt("Ingresa el segundo numero"));

    // si los numeros ingresados no son validos son vueltos a pedir
    // La fucinon isNaN ingresa a la estructura de control si detecta un string 
    while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {

        numero1 = parseInt(prompt("Ingresa el primer numero"));
        numero2 = parseInt(prompt("Ingresa el segundo numero"));
    }

    if (numero1 > numero2)
        alert("el numero: " + numero1 + " es mayor que " + numero2);
    else if (numero1 < numero2)
        alert("el numero: " + numero2 + " es mayor que " + numero1);
    else if (numero1 == numero2) alert(numero1 + " y " + numero2 + " son iguales")
}


/* 
Pedir valores al usuario hasta que este introduzca 
un numero negativo, luego mostrar la suma de los 
numeros y la media
*/

function ejercicio12() {

    var suma = 0;
    var contador = 0;

    do {
        var numero = parseInt(prompt("Ingresa un número"));

        if (isNaN(numero)) {

            numero = 0;
            alert("No ingresaste un valor válido");

        } else if (numero >= 0) {

            suma += numero;
            contador++;
        }

    } while (numero >= 0)

    alert("La suma es: " + suma);
    alert("El promedio es: " + suma / contador);
}


//  hacer un programa que pida dos numeros y 
//  que muestre los numeros existentes entre ambos

function ejercicio13() {

    var numero1 = parseInt(prompt("Ingresa el primer numero"));
    var numero2 = parseInt(prompt("Ingresa el segundo numero"));

    while (isNaN(numero1) || isNaN(numero2)) {

        numero1 = parseInt(prompt("Ingresa el primer numero"));
        numero2 = parseInt(prompt("Ingresa el segundo numero"));
    }

    if (numero1 > numero2) {

        for (var i = numero2 + 1; i < numero1; i++) {

            document.write(i + "<br>");
        }
    } else if (numero1 < numero2) {
        for (var i = numero1 + 1; i < numero2; i++) {

            document.write(i + "<br>");
        }
    } else document.write("los numeros son iguales");
}


// mostrar todos los numeros impares que hay
// entre dos numeros introducidos por el usuario

function ejercicio14() {

    var numero1 = parseInt(prompt("Ingresa el primer numero"));
    var numero2 = parseInt(prompt("Ingresa el segundo numero"));

    while (isNaN(numero1) || isNaN(numero2)) {

        numero1 = parseInt(prompt("Ingresa el primer numero"));
        numero2 = parseInt(prompt("Ingresa el segundo numero"));
    }

    if (numero1 > numero2) {

        for (var i = numero2 + 1; i < numero1; i++) {

            if (i % 2 == 1 || i % 2 == -1) document.write(i + "<br>");
        }
    } else if (numero1 < numero2) {
        for (var i = numero1 + 1; i < numero2; i++) {

            if (i % 2 == 1 || i % 2 == -1) document.write(i + "<br>");
        }
    } else document.write("los numeros son iguales");
}

// Mostrar todos los divisores de un numero introducido

function ejercicio15() {

    var numero = parseInt(prompt("introduce un numero:"));

    for (var i = 1; i <= numero; i++) {

        if (numero % i == 0) document.write(i + "<br>");
    }
}


//Introducir un numero y señalar si este es par o 
// impar, y en caso de no ser validdo, que se solicite
// ingresar un nuevo valor 

function ejercicio16() {

    do {
        var numero = parseInt(prompt("ingresa un numero"));

    } while (isNaN(numero))

    if (numero % 2 == 0) document.write("El numero es par");
    else document.write("El numero es impar");
}


// Mostrar la tabla de multiplicar de un numero introducido 

function ejercicio17() {

    var numero = parseInt(prompt("de que numero quieres la tabla"));

    document.write("<h1>Tabla del " + numero + "</h1>");

    for (var i = 1; i <= 10; i++) {

        document.write(i + " x " + numero + " = " + (i * numero) + "<br>");
    }

    // Todas las tablas de multiplicar

    // se ejecuta el primer for una vez y el segundo for se ejecuta por completo
    // luego el primer for se ejecuta por segunda vez y el segundo for se vuelve
    // a ejecutar por completo

    for (var c = 1; c <= 5; c++) {

        document.write("<h1> Tabla del " + c + "</h1>");

        for (var i = 1; i <= 10; i++) {

            document.write(i + " x " + c + " = " + (i * c) + "<br>");
        }
    }
}

// Que pida dos numeros por pantalla
// que pida datos validos si estos no lo fuesen
// debe mostrar en la pagina los resultados de 
// la suma, la resta, la multiplicacion y la division

function ejercicio18() {

    var numero1 = parseInt(prompt("introduce el primer numero:"));
    var numero2 = parseInt(prompt("introduce el segunfo numero:"));

    while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {

        numero1 = parseInt(prompt("Ingresa el primer numero"));
        numero2 = parseInt(prompt("Ingresa el segundo numero"));
    }

    var resultado = "La suma es: " + (numero1 + numero2) + "<br>" +
        "La resta es: " + (numero1 - numero2) + "<br>" +
        "La multiplicacion es: " + (numero1 * numero2) + "<br>" +
        "La division es: " + (numero1 / numero2) + "<br>";

    var resultado1 = "La suma es: " + (numero1 + numero2) + "\n" +
        "La resta es: " + (numero1 - numero2) + "\n" +
        "La multiplicacion es: " + (numero1 * numero2) + "\n" +
        "La division es: " + (numero1 / numero2) + "\n";

    document.write(resultado);
    alert(resultado1);
    console.log(resultado1);
}