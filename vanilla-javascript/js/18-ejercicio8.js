'use strict'

// Que pida dos numeros por pantalla
// que pida datos validos si estos no lo fuesen
// debe mostrar en la pagina los resultados de 
// la suma, la resta, la multiplicacion y la division

var numero1 = parseInt(prompt("introduce el primer numero:"));
var numero2 = parseInt(prompt("introduce el segunfo numero:"));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt("Ingresa el primer numero"));
    numero2 = parseInt(prompt("Ingresa el segundo numero"));
}

var resultado = "La suma es: " + (numero1 + numero2)+ "<br>" +
                "La resta es: " +  (numero1 - numero2) + "<br>" +
                "La multiplicacion es: " + (numero1 * numero2) + "<br>" +
                "La division es: " + (numero1 / numero2)+ "<br>";

var resultado1 = "La suma es: " + (numero1 + numero2)+ "\n" +
                "La resta es: " +  (numero1 - numero2) + "\n" +
                "La multiplicacion es: " + (numero1 * numero2) + "\n" +
                "La division es: " + (numero1 / numero2)+ "\n";


document.write(resultado);
alert(resultado1);
console.log(resultado1);