'use strict'

var peliculas = ["titanic", "spiderman", "johnQ", "it"];
var categorias = ["accion", "terror", "amor"];

// el método .sort(); ordena alfabeticamente el array
console.log(peliculas.sort());

// el método .reverse(); invierte el orden del array
console.log(peliculas.reverse());

// el método .join(); convierte un array a string
console.log(peliculas.join());

// el método .split(); convierte texto a array
var cadena = "texto1, texto2, texto4";
console.log(cadena.split(", "));

var cine = [categorias, peliculas];

// se acccede al array categorias y luego al primer elemento de este
console.log(cine[0][0]);

// se acccede al array peliculas y luego tercer elemento de este
console.log(cine[1][2]);


// añadir un elemento al array
// do {
//     var elemento = prompt("introduce una pelicula: \n(para finalizar escribe acabar)");

//     if (elemento != null && elemento != "")
//         peliculas.push(elemento);
// }
// while (elemento != "acabar")

// // elimina el ultimo elemento
// peliculas.pop();
// console.log(peliculas);


console.log(peliculas);

// indexOf entrega la posicion del elemnto
var indice = peliculas.indexOf("spiderman");

// console.log(peliculas);
// console.log(indice);

if (indice > -1) {

    // el metodo .splice() elimina elementos, indice es la ubicación del primer elemento eliminado,
    // el segundo parametro represente la cantidad de elementos que se eliminarán a partir de esa posición

    peliculas.splice(indice, 2); // se eliminan dos peliculas (spiderman incluida)
}
console.log(peliculas);


var equipos = ["uc", "cc", "uch", "union", "u.dec"];

// "for in" para recorrer arrays

for (let indice in equipos) {

    document.write("<li>" + equipos[indice] + "</li>");
}


// el método .find(); retorna el elemento buscado, sino undefined
var encontrar = equipos.find(escuadras => escuadras == "uc");
console.log(encontrar);

// el método .findIndex(); retorna la posicion del elemento buscado
encontrar = equipos.findIndex(escuadras => escuadras == "union");
console.log(encontrar);

// el método .some(); devuleve true or false a las consultas
var precios = [10, 20, 40, 50];

encontrar = precios.some(precio => precio <= 40);
console.log(encontrar);