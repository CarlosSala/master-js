var fs = require('fs');

var stream = fs.createWriteStream("/var/lib/cloud9/Pruebas/archivo1.txt");
stream.once('open', function(fd) {
  stream.write("primera linea\n");
  stream.write("segunda linea\n");
  stream.end();
});

console.log("listo");
