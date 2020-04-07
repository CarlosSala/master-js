#!/usr/bin/node
// Loading modules , inicializar variables
var b = require ("bonescript");

// Create variables
var nivelMax = 66 ;
var iVenti = 'P8_15' ;
var iHumo = 'P8_16' ;
var iIngreso = 'P8_11' ;
var i48Vdc = 'P8_12' ;
var iVacElec = 'P8_9' ;
var iContElec = 'P8_10' ;
var iContGru = 'P8_7' ;
var iVacGru = 'P8_8' ;
var iTemperatura = 'P9_39';
var iNivel = 'P9_40';

// crear rutas de archivos
var fileN ="/home/scripts/supervisorNodos/combustible";
var fileT ="/home/scripts/supervisorNodos/temperatura";
var fileV ="/home/scripts/supervisorNodos/ventilador";
var fileA ="/home/scripts/supervisorNodos/alarmaHumo";
var fileI ="/home/scripts/supervisorNodos/ingreso";
var fileB ="/home/scripts/supervisorNodos/48VdcBanco";
var fileE ="/home/scripts/supervisorNodos/vacElectrica";
var fileJ ="/home/scripts/supervisorNodos/contactorGrupo";
var fileG ="/home/scripts/supervisorNodos/vacGrupo";
var fileK ="/home/scripts/supervisorNodos/contactorElectrica";

// definir pines de entrada digital
b.pinMode(iVenti, b.INPUT);
b.pinMode(iHumo, b.INPUT);
b.pinMode(iIngreso, b.INPUT);
b.pinMode(i48Vdc, b.INPUT);
b.pinMode(iVacElec, b.INPUT);
b.pinMode(iContElec, b.INPUT);
b.pinMode(iVacGru, b.INPUT);
b.pinMode(iContGru, b.INPUT);

//establer periodo de actualizacion variables de entrada
    setInterval(updateSensors, 1000);
    setInterval(updateInputs, 1000);
    
// actualizar estado de sensores
function updateSensors(){
// actualizar grado temperatura
     var temperatureReading = b.analogRead(iTemperatura)*180;
//    console.log("temperatura : "+temperatureReading);
    var valorT = Math.round(temperatureReading);
    b.writeTextFile(fileT,valorT);
//actualizar nivel combustible    
    var nivelReading = b.analogRead(iNivel)*108;
//    var valorN = nivelReading.toFixed(1) ;   
    nivelReading = (nivelReading/nivelMax)*100;
    var valorN = Math.round(nivelReading);
    b.writeTextFile(fileN,valorN);    
}

// actualizar estado de entradas digitales
function updateInputs(){
    //actualizar estado del ventilador    
    var venti = b.digitalRead(iVenti);
    b.writeTextFile(fileV,venti);     
    //actualizar entrada alarma humo    
    var humo = b.digitalRead(iHumo);
    b.writeTextFile(fileA,humo); 
    //actualizar entrada ingreso
    var ingre = b.digitalRead(iIngreso);
    b.writeTextFile(fileI,ingre);
    //actualizar entrada 48 Vdc Banco Baterias
    var vdc48 = b.digitalRead(i48Vdc);
    b.writeTextFile(fileB,vdc48);
    //actualizar entrada vac Electrica
    var vacE = b.digitalRead(iVacElec);
    b.writeTextFile(fileE,vacE);
    //actualizar entrada Contactor Electrica
    var conE = b.digitalRead(iContElec);
    b.writeTextFile(fileK,conE);
    //actualizar entrada vac Grupo Motor Generador
    var vacG = b.digitalRead(iVacGru);
    b.writeTextFile(fileG,vacG);
    //actualizar entrada Contactor Grupo Motor Generador
    var conG = b.digitalRead(iContGru);
    b.writeTextFile(fileJ,conG);    
}

// Displaying a console message for user feedback
    console.log("serverEstados Operando ");
