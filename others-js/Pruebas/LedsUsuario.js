/* Código para encender y apagar intermitentemente 
el led "USR0" a bordo de la BeagleBone Black */
var b = require('bonescript'); // cargar módulo Bonescript
var state = b.LOW; // crear una variable que guarde el estado del led
b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);
// opcional, ya viene definido como salida
setInterval(led, 1000); // llamada a función “led” cada 1 segundo
function led() { // crear función llamada "led"
    if (state == b.LOW) state = b.HIGH; // sí es "LOW" cambiar a "HIGH"
    else state = b.LOW; // sino cambiar a "LOW"
    b.digitalWrite("USR0", state);
    b.digitalWrite("USR1", state);
    b.digitalWrite("USR2", state);
    b.digitalWrite("USR3", state);
    // cambiar el estado del led
    console.log("led :", state); // mostrar valor de "USR0" en consola
}// cierre de "llave" de la función "led"


