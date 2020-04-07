//Loading modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var b = require('bonescript');

// Create a variable called servo, which refers to P9_14
var servo = "P9_14";

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
    socket.on('changePosition', handleChangePosition);
});

// Change servo position according to the slider value
function handleChangePosition(data) {
    var newData = JSON.parse(data);
    b.analogWrite(servo, newData.position, 60,
        console.log("Servo Position = " + newData.position));
}

// Displaying a console message for user feedback
server.listen(console.log("Server Running ..."));