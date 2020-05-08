'use strict'

var socket = io.connect('http://192.168.1.4:8888',{'forceNew':true});

// informacion recibida del servidor
socket.on('messages', render);
 
// socket.on('messages', function(data){
//     console.log(data);
//     render(data);
// });
 
function render (data){

    // el metodo .map() itera el array con informacion data
    // la informacion se guarda en
    var html = data.map(function(message, index){

        return (`
        <div class="message">
            <strong>${message.nickname}</strong> dice:
            <p>${message.text}</p>
        </div>       
        `);
        // el metodo .join() itroducir un espacio entre elementos
    }).join(' ');

    var div_msg = document.getElementById('messages');
    div_msg.innerHTML = html;
    div_msg.scrollTop = div_msg.scrollHeight;
}

// se extrae la informacion de los formularios,
// para enviarla al servidor
function addMessage(e){

    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('textarea').value
    };

    // se oculta el input del nick
    document.getElementById('nickname').style.display = "none";

    // se limpia la textarea
    document.forms['myform']['textarea'].value = ''; 

    socket.emit('add-message', message);
    
    console.log(message);
    // para que corte la ejecucion de la funcion
    return false;
}