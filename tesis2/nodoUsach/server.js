// Loading modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var b = require('bonescript');

//Definir nivel maximo del estanque en centimetros
var nivelMax = 46 ; 

// Create variables
var iVenti = 'P8_15' ;
var iHumo = 'P8_16' ;
var iIngreso = 'P8_11' ;
var i48Vdc = 'P8_12' ;
var iVacElec = 'P8_9' ;
var iContElec = 'P8_10' ;
var iContGru = 'P8_7' ;
var iVacGru = 'P8_8' ;
var oiCtrl = 'P8_37' ;     //para habilitar las "i" de estados
var oTransElec = 'P8_14' ;
var oLibDca = 'P8_18' ;
var oLibAux = 'P8_17' ;
var oSpa1 = 'P8_39' ;
var oSpa2 = 'P8_45' ;
var oStart = 'P8_40' ;
var oCalefa = 'P8_46' ;
var oOnOff = 'P9_27' ;
var pinTemperatura = 'P9_39';
var pinVdcBat = 'P9_37';
var pinNivel = 'P9_40';
var pinSpa3 = 'P9_38';

var estado = 0;
var dca = 0;   //estado inicial del Dca
var aux = 0;   //estado inicial del Dispositivo Aux
var tauAntesDeParar = 10;   //tiempo en vacio antes de detener grupo
var tauEstabilidad = 10;
var tauPetrolero = 10;        //tiempo de activar resistencia de calentamiento camara de combustion
var tauPrecalentamiento = 10; //tiempo una vez que partio el Grupo antes de hacer la transferencia Vac al Grupo
var tauStart = 3;             //Tiempo aplicado al motor de partida
var tauDca = 10;             //Tiempo aplicado al apagado del Dca
var tauAux = 10;             //Tiempo aplicado al apagado del Aux
var tauDescanso = 10;          //Tiempo antes de iniciar otro intento de partida
var tauContactor = 3;          //tiempo de activacion de contactor
var tipoMotor = 1 ;           //bencinero => tipoMotor=1 ; petrolero => tipoMotor=0
var contarIntentos = 3 ;      //Intentos permitidos si el motor no parte
var s;
var timeout = 0;
var contador = 0;
var dcaCounter = 0;
var auxCounter = 0;

var fileN ="/home/scripts/supervisorNodos/combustible";
var fileT ="/home/scripts/supervisorNodos/temperatura";
var fileA ="/home/scripts/supervisorNodos/alarmaHumo";
var fileI ="/home/scripts/supervisorNodos/ingreso";
var fileB ="/home/scripts/supervisorNodos/48VdcBanco";
var fileV ="/home/scripts/supervisorNodos/12VdcGrupo";
var fileE ="/home/scripts/supervisorNodos/vacElectrica";
var fileJ ="/home/scripts/supervisorNodos/contactorGrupo";
var fileG ="/home/scripts/supervisorNodos/vacGrupo";
var fileK ="/home/scripts/supervisorNodos/contactorElectrica";
var fileC ="/home/scripts/supervisorNodos/comando";

var humo = 0;
var ingre = 0;
var vdc48 = 0;
var vacE = 0;
var conE = 0;
var vacG = 0;
var conG = 0;
var valorB = 0;
var valorT = 0;
var valorN = 0;

var humoAnt = 0;
var ingreAnt = 0;
var vdc48Ant = 0;
var vacEAnt = 0;
var conEAnt = 0;
var vacGAnt = 0;
var conGAnt = 0;
var valorBAnt = 0;
var valorTAnt = 0;
var valorNAnt = 0;

b.writeTextFile(fileA,humo); 
b.writeTextFile(fileI,ingre);
b.writeTextFile(fileB,vdc48);
b.writeTextFile(fileE,vacE);
b.writeTextFile(fileK,conE);
b.writeTextFile(fileG,vacG);
b.writeTextFile(fileJ,conG);
b.writeTextFile(fileV,valorB);
b.writeTextFile(fileT,valorT)
b.writeTextFile(fileN,valorN);


var comando = 7 ; // comando procesado
b.writeTextFile(fileC,comando);

b.pinMode(iVenti, b.INPUT);
b.pinMode(iHumo, b.INPUT);
b.pinMode(iIngreso, b.INPUT);
b.pinMode(i48Vdc, b.INPUT);
b.pinMode(iVacElec, b.INPUT);
b.pinMode(iContElec, b.INPUT);
b.pinMode(iVacGru, b.INPUT);
b.pinMode(iContGru, b.INPUT);
b.pinMode(oiCtrl, b.OUTPUT);
b.digitalWrite(oiCtrl, b.LOW);   //"i" de estados habilitadas

b.pinMode(oLibDca, b.OUTPUT);
b.pinMode(oLibAux, b.OUTPUT);
b.pinMode(oTransElec, b.OUTPUT);
b.pinMode(oOnOff, b.OUTPUT);
b.pinMode(oStart, b.OUTPUT);
b.pinMode(oCalefa, b.OUTPUT);
b.pinMode(oSpa1, b.OUTPUT);
b.pinMode(oSpa2, b.OUTPUT);

b.digitalWrite(oLibDca, b.LOW);
b.digitalWrite(oLibAux, b.LOW);
b.digitalWrite(oTransElec, b.LOW);
b.digitalWrite(oOnOff, b.LOW);
b.digitalWrite(oStart, b.LOW);
b.digitalWrite(oCalefa, b.LOW);
b.digitalWrite(oSpa1, b.LOW);
b.digitalWrite(oSpa2, b.LOW);


//Actualizar Estado Automata Secuencial Estadoa Finitos

    setInterval(updateSensors, 4000);
    setInterval(updateInputs, 4000);
    setInterval(updateEstado, 1000);    

// actualizar estado de sensores
function updateSensors(){
    //actualizar valor vdc bateria
    var vdcReading = b.analogRead(pinVdcBat)*19.8;
    valorB = vdcReading.toFixed(1) ;
    if (valorB != valorBAnt) {
        b.writeTextFile(fileV,valorB);
        if (b.readTextFile(fileV) == valorB) {
            valorBAnt = valorB;
        }
    }     
    // actualizar grado temperatura
    // var temperatureReading = b.analogRead(pinTemperatura)*180;
     var temperatureReading = ((b.analogRead(pinTemperatura)*1.8)-0.5)*100;
//    console.log("temperatura : "+temperatureReading);
    valorT = Math.round(temperatureReading);
    if (valorT != valorTAnt) {
        b.writeTextFile(fileT,valorT);
        if (b.readTextFile(fileT) == valorT) {
            valorTAnt = valorT;
        }
    }    
//actualizar nivel combustible    
    var nivelReading = b.analogRead(pinNivel)*108;
    nivelReading = (nivelReading/nivelMax)*100;
    valorN = Math.round(nivelReading);    
    if (valorN != valorNAnt) {
        b.writeTextFile(fileN,valorN)
        if (b.readTextFile(fileN) == valorN) {
            valorNAnt = valorN;
        }
    }    
    
}
// actualizar estado de entradas digitales
function updateInputs(){
    
    //actualizar entrada alarma humo    
    humo = b.digitalRead(iHumo);
    if (humo != humoAnt) {
        b.writeTextFile(fileA,humo);
        if (b.readTextFile(fileA) == humo) {
            humoAnt = humo;
        }
    }    
    //actualizar entrada ingreso
    ingre = b.digitalRead(iIngreso);
    if (ingre != ingreAnt) {
        b.writeTextFile(fileI,ingre);
        if (b.readTextFile(fileI) == ingre) {
            ingreAnt = ingre;
        }
    } 
    //actualizar entrada 48 Vdc Banco Baterias
    vdc48 = b.digitalRead(i48Vdc);
    if (vdc48 != vdc48Ant) {
        b.writeTextFile(fileB,vdc48);
        if (b.readTextFile(fileB) == vdc48) {
            vdc48Ant = vdc48;
        }
    }  
    //actualizar entrada vac Electrica
    vacE = b.digitalRead(iVacElec);
    if (vacE != vacEAnt) {
        b.writeTextFile(fileE,vacE);
        if (b.readTextFile(fileE) == vacE) {
            vacEAnt = vacE;
        }
    }    
    //actualizar entrada Contactor Electrica
    conE = b.digitalRead(iContElec);
    if (conE != conEAnt) {
    b.writeTextFile(fileK,conE);
        if (b.readTextFile(fileK) == conE) {
            conEAnt = conE;
        }
    }    
    //actualizar entrada vac Grupo Motor Generador
    vacG = b.digitalRead(iVacGru);
    if (vacG != vacGAnt) {
        b.writeTextFile(fileG,vacG)
        if (b.readTextFile(fileG) == vacG) {
            vacGAnt = vacG;
        }
    }    
    //actualizar entrada Contactor Grupo Motor Generador
    conG = b.digitalRead(iContGru);
    if (conG != conGAnt) {
        b.writeTextFile(fileJ,conG);
        if (b.readTextFile(fileJ) == conG) {
            conGAnt = conG;
        }
    }    

}

function updateEstado(){
//    console.log("Ex="+estado);
    if (b.readTextFile(fileC) == 7) {
        
//Actualizar Estado del DCA
        if (dca == 1 ) { 
                dcaCounter--;
                if (dcaCounter == 0) {
                    b.digitalWrite(oLibDca, b.LOW); 
                    dca = 0 ;
                }    
        }
//Actualizar Estado del AUX
        if (aux == 1 ) { 
                auxCounter--;
                if (auxCounter == 0) {
                    b.digitalWrite(oLibAux, b.LOW); 
                    aux = 0 ;
                }    
        }
    }  
    else {
        
//PROCESAR COMANDO 
        comando = b.readTextFile(fileC)
        b.writeTextFile(fileC,7);   
        
            if (comando == 0 ) {
            //Liberar Dca 
                dcaCounter = tauDca;
                b.digitalWrite(oLibDca, b.HIGH); 
                dca = 1 ;  
//                console.log("dcaCx="+dcaCounter);
//                console.log("dcaEx="+dca);                
            }        
            if (comando == 1 ) {
            //Liberar Aux 
                auxCounter = tauAux;
                b.digitalWrite(oLibAux, b.HIGH); 
                aux = 1 ;  
//                console.log("dcaCx="+auxCounter);
//                console.log("dcaEx="+aux);                
            }        
    }
}


var s;

//while (b.readTextFile(fileE) != 0) {
// Initialize the server on port 8888
var server = http.createServer(function (req, res) {
    // requesting files
    var file = '.'+((req.url=='/')?'/index.html':req.url);
    var fileExtension = path.extname(file);
    var contentType = 'text/html';
    if(fileExtension == '.css'){
        contentType = 'text/css';
    }
    fs.exists(file, function(exists){
        if(exists){
            fs.readFile(file, function(error, content){
                if(!error){
                    // Page found, write content
                    res.writeHead(200,{'content-type':contentType});
                    res.end(content);
                }
            })
        }
        else{
            // Page not found
            res.writeHead(404);
            res.end('Page not found');
        }
    })
}).listen(8888);

// Loading socket io module
var io = require('socket.io').listen(server);
// When communication is established
io.on('connection', function (socket) {
    socket.on('changeState', handleChangeState);
    s = socket;

    // Execute updateSensors function every one second

    setInterval(updateSensores, 4000);
    setInterval(updateAlarmaHumo, 4000);
    setInterval(updateIngreso, 4000);
    setInterval(update48VdcBanco, 4000);
    setInterval(updateVacElectrica, 4000);
    setInterval(updateContactorElectrica, 4000);
    setInterval(updateContactorGrupo, 4000);
    setInterval(updateVacGrupo, 4000);

});


// obtener comando requerido y almacenarlo para que lo procese server de Estados
function handleChangeState(data) {
    var newData = JSON.parse(data);
    b.writeTextFile(fileC, newData.state);    
//    console.log("COMANDO = " + newData.state);
}


// Actualizar valores sensores analogos
function updateSensores(){
//actualizar valor vdc Grupo
    s.emit("vdcGrupoUpdate", '{"vdcGrupo":"' + valorB + '"}');
    //actualizar temperatura
    s.emit("temperaturaUpdate", '{"temperatura":"' + valorT + '"}');
//nivel de combustible
    s.emit("combustibleUpdate", '{"combustible":"' + valorN + '"}');
}

// Actualizar estado alarma de humo
 function updateAlarmaHumo(){
        if(humo==1)
        {var xxx="Activada";}
        else
        {var xxx="Desactivada";}
        s.emit("alarmaHumoUpdate", '{"alarmaHumo":"' + xxx + '"}');
 //       console.log("Updating Alarma Humo : " + xxx );
 }
 // Actualizar estado de ingreso
 function updateIngreso(){
        if(ingre==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("ingresoUpdate", '{"ingreso":"' + xxx + '"}');
//        console.log("Updating Ingreso : " + xxx );
 }
// Actualizar estado 48 vdc de banco de baterias
function update48VdcBanco(){
        if(vdc48==1)
        {var xxx="Presente";}
        else
        {var xxx="Fuera";}
        s.emit("vdcBancoUpdate", '{"vdcBanco":"' + xxx + '"}');
//        console.log("Updating 48 VDC Bateria : " + xxx );
 }
// Actualizar estado Vac Electrica
function updateVacElectrica(){
        if(vacE==1)
        {var xxx="Presente";}
        else
        {var xxx="Fuera";}
        s.emit("vacElectricaUpdate", '{"vacElectrica":"' + xxx + '"}');
//        console.log("Updating vac chilectra : " + xxx );
 }
// Actualizar estado contactor chilectra
 function updateContactorElectrica(){
        if(conE==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("contactorElectricaUpdate", '{"contactorElectrica":"' + xxx + '"}');
//        console.log("Updating contactor Chilectra : " + xxx );
 }
// Actualizar estado contactor grupo
 function updateContactorGrupo(){
        if(conG==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("contactorGrupoUpdate", '{"contactorGrupo":"' + xxx + '"}');
//        console.log("Updating contactor grupo : " + xxx );
 }
 // Actualizar estado vac grupo
 function updateVacGrupo(){
        if(vacG==1)
        {var xxx="Presente";}
        else
        {var xxx="Fuera";}
        s.emit("vacGrupoUpdate", '{"vacGrupo":"' + xxx + '"}');
//        console.log("Updating vac grupo : " + xxx );
 } 
 
 
// Displaying a console message for user feedback
server.listen(console.log("Server Running ..."));