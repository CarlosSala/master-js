// Loading modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var b = require('bonescript');

// Create variables
var temperature = 'P9_39';
var s;

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
    s = socket;
    // Execute updateSensors function every one second
    setInterval(updateSensors, 1000);
});

// Update the new temperature value
function updateSensors(){
    voltageReading = b.analogRead(temperature)*1.8;
    temperatureReading = (voltageReading)*100;
    s.emit("sensorsUpdate", '{"temperature":"' + temperatureReading + '"}');
    console.log("Updating Sensor : "+temperatureReading);
}

// Displaying a console message for user feedback
server.listen(console.log("Server Running ..."));