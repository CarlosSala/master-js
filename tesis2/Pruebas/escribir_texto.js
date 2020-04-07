

var fs = require('fs');

fs.writeFile('/var/lib/cloud9/archivo.txt', 'primera linea = 0\nsegunda linea = 1\ntercera linea = 2', (err) => {
  if (err) throw err;
  console.log('el archivo fue guardado');
});



// el archivo.txt se va a crear solo o tambien puedes crearlo antes si quieres
// el  "\n" es para saltarse una linea
// despues de ejecutar este codigo revisa que el archivo tenga escrito lo que pusiste
// listo eso es todo
