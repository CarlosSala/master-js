'use strict'

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('client'));

// endpoint test
app.get('/hola-mundo', function (req, res) {
    res.status(200).send('hola mundo desde una ruta');
});

var messages = [
    {
        id: 1,
        text: "bienvenido al chat privado de socket y node",
        nickname: "Bot-Carlos Salazar"
    }
];

// este metodo recibe las conexiones de los clientes
io.on('connection', function (socket) {
    console.log('El nodo con IP: ' + socket.handshake.address + " se ha conectado...");

    // se le envia un mensaje por defecto al cliente cuando este se conecte
    socket.emit('messages', messages);

    socket.on('add-message', function (data) {
        // la informacion anterior no se borra, por lo tanto
        // esta se va acumulando
        messages.push(data);
        console.log(data);
        // emitir a todos los clientes conctados el nuevo array actualizado
        io.sockets.emit('messages', messages);
    });

}); 

server.listen(8888, function () {
    console.log('Servidor esta funcionando en http://localhost:8888');
});