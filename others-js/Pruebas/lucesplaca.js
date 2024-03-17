 var b = require('bonescript');


var estado = 0;
var tiempo = 50;

b.pinMode("USR0", b.OUTPUT);
b.pinMode("USR1", b.OUTPUT);
b.pinMode("USR2", b.OUTPUT);
b.pinMode("USR3", b.OUTPUT);

setInterval(giroMotor, tiempo);

function giroMotor (){

    switch (estado) {
                case 0:
                      
    b.digitalWrite("USR0", b.HIGH);
    b.digitalWrite("USR1", b.LOW);
    b.digitalWrite("USR2", b.LOW);
    b.digitalWrite("USR3", b.LOW);
    estado = 1;
                break;
        
                case 1:
                     
   b.digitalWrite("USR0", b.LOW);
    b.digitalWrite("USR1", b.HIGH);
    b.digitalWrite("USR2", b.LOW);
    b.digitalWrite("USR3", b.LOW);
    estado = 2;
                break;
        
               case 2:
    b.digitalWrite("USR0", b.LOW);
    b.digitalWrite("USR1", b.LOW);
    b.digitalWrite("USR2", b.HIGH);
    b.digitalWrite("USR3", b.LOW);
    estado = 3;
                break;
        
                
                case 3:
                    
    b.digitalWrite("USR0", b.LOW);
    b.digitalWrite("USR1", b.LOW);
    b.digitalWrite("USR2", b.LOW);
    b.digitalWrite("USR3", b.HIGH);
    estado = 0;
                break;
        
             }
}  

