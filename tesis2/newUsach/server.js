// Loading modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var b = require('bonescript');

// Create variables
var xxx = "normal";
var s;

// Create a variable called led, which refers to P9_14
var led = "P9_14";
// Initialize the led as an OUTPUT
b.pinMode(led, b.OUTPUT);

//crear rutas de archivos
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
    // Execute updateSensors function every 3 seconds
    setInterval(updateSensores, 3000);
    setInterval(updateVentilador, 3000);
    setInterval(updateAlarmaHumo, 3000);
    setInterval(updateIngreso, 3000);
    setInterval(update48VdcBanco, 3000);
    setInterval(updateVacElectrica, 3000);
    setInterval(updateContactorElectrica, 3000);
    setInterval(updateContactorGrupo, 3000);
    setInterval(updateVacGrupo, 3000);
});

// Change led state when a button is pressed
function handleChangeState(data) {
    var newData = JSON.parse(data);
    console.log("LED = " + newData.state);
    b.digitalWrite(led, newData.state);
}


// Actualizar valores sensores analogos
function updateSensores(){
    //actualizar temperatura
    var temperaturaReading = b.readTextFile(fileT); 
//    console.log("Updating temperatura : " + temperaturaReading );    
    s.emit("temperaturaUpdate", '{"temperatura":"' + temperaturaReading + '"}');
    //nivel de combustible
    var combustibleReading = b.readTextFile(fileN);  
//    console.log("Updating nivel : " + combustibleReading );    
    s.emit("combustibleUpdate", '{"combustible":"' + combustibleReading + '"}');
}
// Actualizar estado del ventilador
 function updateVentilador(){
        var ventiladorReading = b.readTextFile(fileV);
        if(ventiladorReading==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("ventiladorUpdate", '{"ventilador":"' + xxx + '"}');
//        console.log("Updating ventilador : " + xxx );
 }
// Actualizar estado alarma de humo
 function updateAlarmaHumo(){
        var alarmaHumoReading = b.readTextFile(fileA);
        if(alarmaHumoReading==1)
        {var xxx="Activada";}
        else
        {var xxx="Desactivada";}
        s.emit("alarmaHumoUpdate", '{"alarmaHumo":"' + xxx + '"}');
 //       console.log("Updating Alarma Humo : " + xxx );
 }
 // Actualizar estado de ingreso
 function updateIngreso(){
        var ingresoReading = b.readTextFile(fileI);
        if(ingresoReading==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("ingresoUpdate", '{"ingreso":"' + xxx + '"}');
//        console.log("Updating Ingreso : " + xxx );
 }
// Actualizar estado 48 vdc de banco de baterias
function update48VdcBanco(){
    var vdcBancoReading = b.readTextFile(fileB);
        if(vdcBancoReading==1)
        {var xxx="Presente";}
        else
        {var xxx="Fuera";}
        s.emit("vdcBancoUpdate", '{"vdcBanco":"' + xxx + '"}');
//        console.log("Updating 48 VDC Bateria : " + xxx );
 }
// Actualizar estado Vac Electrica
function updateVacElectrica(){
    var vacElectricaReading = b.readTextFile(fileE);
        if(vacElectricaReading==1)
        {var xxx="Presente";}
        else
        {var xxx="Fuera";}
        s.emit("vacElectricaUpdate", '{"vacElectrica":"' + xxx + '"}');
//        console.log("Updating vac chilectra : " + xxx );
 }
// Actualizar estado contactor chilectra
 function updateContactorElectrica(){
        var contactorElectricaReading = b.readTextFile(fileK);
        if(contactorElectricaReading==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("contactorElectricaUpdate", '{"contactorElectrica":"' + xxx + '"}');
//        console.log("Updating contactor Chilectra : " + xxx );
 }
// Actualizar estado contactor grupo
 function updateContactorGrupo(){
        var contactorGrupoReading = b.readTextFile(fileJ);
        if(contactorGrupoReading==1)
        {var xxx="Activado";}
        else
        {var xxx="Desactivado";}
        s.emit("contactorGrupoUpdate", '{"contactorGrupo":"' + xxx + '"}');
//        console.log("Updating contactor grupo : " + xxx );
 }
 // Actualizar estado vac grupo
 function updateVacGrupo(){
        var vacGrupoReading = b.readTextFile(fileG);
        if(vacGrupoReading==1)
        {var xxx="Presente";}
        else
        {var xxx="Fuera";}
        s.emit("vacGrupoUpdate", '{"vacGrupo":"' + xxx + '"}');
//        console.log("Updating vac grupo : " + xxx );
 }
// Displaying a console message for user feedback
server.listen(console.log("Server Running ..."));