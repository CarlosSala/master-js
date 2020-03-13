'use strict'

// javascript object notation
// son una especie de array asociativo

// se crea un objeto json
var pelicula = {
    titulo: "batman vs superman",
    year: "2017",
    pasi: "USA"
}
 
// se modifica uno de sus atributos
pelicula.titulo = "los vengadores";
console.log(pelicula);

// se crea un arreglo que contiene tres objetos json
var peliculas = [
    {titulo:"it", year:2016, pais:"Francia"},
    pelicula, 
    {titulo:"anaconda", year:1996, pais:"USA"}
];

// se obseva el arreglo por consola
console.log(peliculas);

// se captura un elemento div donde mostrar informacion
var caja_peliculas = document.querySelector("#peliculas");

// se recorre el arreglo y se extrae un informacion de sus elementos
// para luego mostrar la informacion en pantalla
var index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}