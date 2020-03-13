'use strict'

//while, comprueba un condicion y ejecuta instrucciones

var year = 2018;

while(year >= 2000){
console.log("La cuenta regresiva va en el año: " + year);

// se utiliza un break; para detener el bucle
    if (year == 2005) break;  

year--;
} 

// do while, ejecuta las instrucciones al menos una vez 
// y luego comprueba la condición

var dinero = 40;

do{
console.log("tengo esta contidad de dinero:  " + dinero);
dinero--; 
          
} while (dinero > 10)