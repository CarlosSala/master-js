var b = require('bonescript');

var inputPin = 'P9_35';
var valorB;

//console.log("hp");

setInterval (loop, 1000);

function loop() {
    //console.log("0");
  //  var vdcReading=12.45;
   var vdcReading = b.analogRead(inputPin);
   valorB = vdcReading.toFixed(5) ;
//    var value = b.analogRead(inputPin);
     console.log("valor : " + valorB);
   
//   console.log(value);
}
console.log("corriendo");
