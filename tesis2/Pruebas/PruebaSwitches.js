var b = require('bonescript');

var pacortar1='P9_41';
var pacortar2='P9_42';
var verde1='P9_11';
var amarillo1='P9_12';

b.pinMode(pacortar1, b.INPUT);
b.pinMode(pacortar2, b.INPUT);

b.pinMode(verde1, b.OUTPUT);
b.pinMode(amarillo1, b.OUTPUT);

setInterval(estado, 1000);
setInterval(estado1, 1000);

function estado (){

    b.digitalWrite(verde1, b.HIGH);
    var sa = b.digitalRead(pacortar1);
    if (sa == 1){
       b.digitalWrite(verde1, b.LOW); 
    }
}

function estado1 (){

    b.digitalWrite(amarillo1, b.HIGH);
    var sb = b.digitalRead(pacortar2);
    if (sb == 1){
       b.digitalWrite(amarillo1, b.LOW); 
    }
}