#!/usr/bin/node
// Loading modules , inicializar variables
var b = require ("bonescript");
// Create variables

var verde1 = 'P9_11' ;
var amarillo1 = 'P9_12' ;
var rojo1 = 'P9_13' ;
var verde2 = 'P9_15' ;
var amarillo2 = 'P9_17' ;
var rojo2 = 'P9_23' ;
var pacortar1 = 'P9_41' ;
var pacortar2 = 'P9_42' ;
var estado = 0;
var tiempov1 = 10;
var tiempoa1 = 3;
var tiempov2 = 10;
var tiempoa2 = 3;
var contador = tiempov1;
var tiempoint = 1000;
var stacortar1 = 0;
var stacortar2 = 0;
var presiona = b.LOW;  

console.log("entrando a pinmode");
b.pinMode(verde1, b.OUTPUT);
b.pinMode(amarillo1, b.OUTPUT);
b.pinMode(rojo1, b.OUTPUT);
b.pinMode(verde2, b.OUTPUT);
b.pinMode(amarillo2, b.OUTPUT);
b.pinMode(rojo2, b.OUTPUT);
b.pinMode(pacortar1, b.INPUT);
b.pinMode(pacortar2, b.INPUT);

console.log("entrando a digitalwrite");
b.digitalWrite(verde1, b.HIGH);
b.digitalWrite(amarillo1, b.LOW);
b.digitalWrite(rojo1, b.LOW);
b.digitalWrite(verde2, b.LOW);
b.digitalWrite(amarillo2, b.LOW);
b.digitalWrite(rojo2, b.HIGH);


//Actualizar Estado Automata Secuencial Estadoa Finitos


    console.log("paso1");
    setInterval(updateEstado, tiempoint);

function updateEstado(){

                switch (estado) {
                case 0:
                        contador --;
                        if(contador == 0){
                           estado=1; 
                           b.digitalWrite(verde1, b.LOW);
                           b.digitalWrite(amarillo1, b.HIGH);
                           b.digitalWrite(rojo1, b.LOW);
                           b.digitalWrite(verde2, b.LOW);
                           b.digitalWrite(amarillo2, b.LOW);
                           b.digitalWrite(rojo2, b.HIGH);
                           contador=tiempoa1;
                           stacortar2 = 0;
                           presiona = 0;
                           console.log("Saliendo del verde1");
                                                   }
                        else {
                //              b.digitalRead(pacortar2, activate);
                               presiona = b.digitalRead(pacortar2);
                              console.log("Pinacortar2:" ,presiona);
                              if (stacortar2 == 0 && presiona == b.HIGH){
                                  contador =  Math.round(contador/2) ;
                                  stacortar2 = 1;
                                  console.log("Presionaron boton en semaforo2");
                              }    
                        }
                break;
        
                case 1:
                        contador --;
                        if(contador == 0){
                           estado=2; 
                           b.digitalWrite(verde1, b.LOW);
                           b.digitalWrite(amarillo1, b.LOW);
                           b.digitalWrite(rojo1, b.HIGH);
                           b.digitalWrite(verde2, b.HIGH);
                           b.digitalWrite(amarillo2, b.LOW);
                           b.digitalWrite(rojo2, b.LOW);
                           contador=tiempov2;
                           console.log("Saliendo del amarillo1");
                        }

                break;
                
                case 2:
                        contador --;
                        
     //                 b.digitalRead(pacortar1, activate);
                        presiona = b.digitalRead(pacortar1);
                        if(contador == 0){
                           estado=3; 
                           b.digitalWrite(verde1, b.LOW);
                           b.digitalWrite(amarillo1, b.LOW);
                           b.digitalWrite(rojo1, b.HIGH);
                           b.digitalWrite(verde2, b.LOW);
                           b.digitalWrite(amarillo2, b.HIGH);
                           b.digitalWrite(rojo2, b.LOW);
                           contador=tiempoa2;
                           stacortar1 =0;
                           presiona = 0;
                           console.log("Saliendo del verde2");
                        }
                        else {
                              console.log("Pinacortar1:" ,presiona);
                              if (stacortar1 == 0 && presiona == 1){
                                  contador = Math.round(contador/2) ;
                                  stacortar1 = 1;
                                  console.log("Presionaron boton en semáforo1");
                              }    
                        }
                break; 
                
                case 3:
                        contador --;
                        if(contador == 0){
                           estado=0; 
                           b.digitalWrite(verde1, b.HIGH);
                           b.digitalWrite(amarillo1, b.LOW);
                           b.digitalWrite(rojo1, b.LOW);
                           b.digitalWrite(verde2, b.LOW);
                           b.digitalWrite(amarillo2, b.LOW);
                           b.digitalWrite(rojo2, b.HIGH);
                           contador=tiempov1;
                           console.log("Saliendo del amarillo2");
                        }        
                        
                
                break;
                
        }
    
        
}    
    
// function activate(x){
//     presiona = x.value ;
//     console.log("Entro a leer");
// }