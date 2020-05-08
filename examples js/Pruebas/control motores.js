var b = require('bonescript');

var dir ='P9_11';
var pul ='P9_13';
var estado = 0;
var tiempo = 10;
var step = 0;

b.pinMode(dir, b.OUTPUT);
b.pinMode(pul, b.OUTPUT);

b.digitalWrite(dir, b.HIGH);
b.digitalWrite(pul, b.LOW);

var eso = setInterval(giroMotor, tiempo);

function giroMotor (){
    
    switch (estado) {
    
    case 0:
    
    b.digitalWrite(pul, b.HIGH);
    estado = 1;
    
    break;
        
    case 1:
        
    b.digitalWrite(pul, b.LOW);  
    
    if (step <= 400) // media revolucion
    { step++;}
    else { clearInterval(eso);
    }  
    estado = 0;
   
   break;
}}

console.log("en marcha");