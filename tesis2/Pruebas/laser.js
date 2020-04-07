var b = require('bonescript');

var laser = 'P8_26';
var state = 0;

b.pinMode(laser, b.OUTPUT);

b.digitalWrite(laser, b.LOW);

setInterval(led, 1000); 


function led() { 
    
    if (state == 0) state = 1; 
    else state = 0; 
 
 b.digitalWrite(laser, state);
    
    console.log("estado: " + state);
}

console.log("running ", state);