'use strict'

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

if(year > 2000 && year < 2020)
    console.log("millennials");
else 
    console.log("generación x");

if (year == 2028 || (year >= 2018 && year < 2019 )) 
    console.log("el año termina en 8");
else 
    console.log("el año no termina en 8");