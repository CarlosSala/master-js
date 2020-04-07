// Carga de módulos
var http = require('http');
var url = require('url');
var fs = require('fs');
var b = require('bonescript');

// Código del servidor web / Inicializado en el puerto 8888 
var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon'
};
var modo = "2";
var servidor = http.createServer(function(pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = 'static' + objetourl.pathname;
    if (camino == 'static/')
        camino = 'static/index1P.html';
    fs.exists(camino, function(existe) {
        if (existe) {
            fs.readFile(camino, function(error, contenido) {
                if (error) {
                    respuesta.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    respuesta.write('Error interno');
                    respuesta.end();
                } else {
                    var vec = camino.split('.');
                    var extension = vec[vec.length - 1];
                    var mimearchivo = mime[extension];
                    respuesta.writeHead(200, {
                        'Content-Type': mimearchivo
                    });
                    respuesta.write(contenido);
                    respuesta.end();
                }
            });
        } else {
            respuesta.writeHead(404, {
                'Content-Type': 'text/html'
            });
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
            respuesta.end();
        }
    });
});

servidor.listen(8888);

// Carga del módulo socket.io
var io = require('socket.io').listen(servidor);
var s;


var fileA ="/home/scripts/supervisorGLP/tempnodo2";
var fileB ="/home/scripts/supervisorGLP/estanque2";
var fileC ="/home/scripts/supervisorGLP/vccSensor2";
var fileD ="/home/scripts/supervisorGLP/am";
var fileE ="/home/scripts/supervisorGLP/sptemp";

var fileAA ="/home/scripts/supervisorGLP/humdnodo1";
var fileBB ="/home/scripts/supervisorGLP/estanque1";
var fileCC ="/home/scripts/supervisorGLP/vccSensor1";


/*
// Create variables
var fileA ="/var/lib/cloud9/paulina/archivos/tempnodo2";
var fileB ="/var/lib/cloud9/paulina/archivos/estanque2";
var fileC ="/var/lib/cloud9/paulina/archivos/vccSensor2";
var fileD ="/var/lib/cloud9/paulina/archivos/am";
var fileE ="/var/lib/cloud9/paulina/archivos/sptemp";


var fileAA ="/var/lib/cloud9/paulina/archivos/humdnodo1";
var fileBB ="/var/lib/cloud9/paulina/archivos/estanque1";
var fileCC ="/var/lib/cloud9/paulina/archivos/vccSensor1";
*/

// Establecimiento de comunicación
io.on('connection', function(socket) {
    s = socket;
    socket.on('modoManual', manual)
    socket.on('ajusteSetpoint', setpoint)
    socket.on('ajusteSetpoint1', setpoint1)
    
   
   setInterval(actualizarSensores, 5000);
   setInterval(escribirModo, 2000);
});


var sp;
var ajustesp;
var ajustesp1;
var separador = "\n";
var vec;


function actualizarSensores() {
    
//Sensor temp ambiente
var tempAmbReading = b.readTextFile(fileA);
    s.emit("temperaturaAmbiente", tempAmbReading);
var nivelEstanqueReading = b.readTextFile(fileB);
    s.emit("nivelEstanque", nivelEstanqueReading);
var nivelBateriaReading = b.readTextFile(fileC);    
    s.emit("nivelBateriaXbee", nivelBateriaReading);
var amReading = b.readTextFile(fileD);
    s.emit("modoManual", amReading);


// Sensor humedad abiente
    sp = b.readTextFile(fileE);
    s.emit("setpoint", sp);
    //console.log(sp);
    vec = sp.split(separador, 2);
   // console.log(vec[0]);
   // console.log(vec[1]);
    ajustesp = vec[0];
    ajustesp1 = vec[1];

    
    s.emit("manual", objeto1);
    
// Sensor humedad abiente
var humAmbReading = b.readTextFile(fileAA);
    s.emit("humedadAmbiente", humAmbReading);
var nivelEstanque1Reading = b.readTextFile(fileBB);
    s.emit("nivelEstanque1", nivelEstanque1Reading);
var nivelBateria1Reading = b.readTextFile(fileCC);    
    s.emit("nivelBateriaXbee1", nivelBateria1Reading);
}

// Función que entrega la orden de inicio (del usuario) al sist. de Ctrl Manual
var modo;
function manual(data) {
    modo = JSON.parse(data);
    console.log("Modo manual: " + modo );
}

function setpoint(data) {
    ajustesp = JSON.parse(data);
    b.writeTextFile(fileE, ajustesp + "\n" + ajustesp1);
    console.log("setpoint max: " + ajustesp);
}

function setpoint1(data) {
     ajustesp1 = JSON.parse(data);
    b.writeTextFile(fileE, ajustesp + "\n" + ajustesp1);
    console.log("setpoint min: " + ajustesp1);
}


var objeto1;
function escribirModo() {
//	console.log("hola" + modo);
	b.writeTextFile(fileD, modo); 
    objeto1 = {
                "am":modo,
            };
} 


servidor.listen(console.log("Server Running ..."));