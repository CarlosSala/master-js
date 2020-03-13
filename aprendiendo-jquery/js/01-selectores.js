'use strict';

// el simbolo dolar y la palabra jQuery son lo mismo
// despues del dolar viene un selector

$(document).ready(function(){
     
// Selector para los id utilizando #
// modifican propidades css de los elementos seleccionados
var rojo = $("#rojo").css("background", "red")
                     .css ("color", "white");
//  console.log(rojo);

$("#amarillo").css("background", "yellow")
              .css ("color", "purple");

              
$("#verde").css("background", "green")
              .css ("color", "orange");

// Selector para las clases
var mi_clase = $(".zebra");

mi_clase.css("padding","5px");
// se muestra en consola uno de los dos elemntos
// que poseen el arreglo de la clase .zebra
 console.log(mi_clase[0]);
// el metodo .eq() realiza la misma accion anterior
// console.log(mi_clase.eq(0));

// los elementos div de la clase .sin-borde, se les añade
// mediante el evento click la clase .zebra 
$(".sin-borde").click(function(){
  //  console.log("evento click capturado");
  // la palabra this hace referencia al elemento al cual
  // se le esta aplicando el evento click
  $(this).addClass("zebra");
});


// Selectores por etiqueta
// se selecciona el elemento parrafo
// cursor pointer transforma el cursor de flecha a dedo
var parrafos =$("p").css("cursor", "pointer");

parrafos.click(function(){
    var that = $(this);
    // .hasClass para verificar si existe la clase
    if(!that.hasClass("grande")){
        // cambia la clase
        that.addClass("grande");
    } else {
        // elimina la clase
        that.removeClass("grande");
    }
});


// Selector de atributos de elementos html

$('[title="Google"]').css('background', "orange");

$('[title="Facebook"]').css('background', "blue");


// otros aspectos de los selectores

// para agregar una clase a mas de un elemento html
// $('p, a').addClass('margen-superior');

// metodo .find() para encontrar elementos en un arbol html grande 
// en el cual no se tiene claridad de las ubicaciones de estos 
var busqueda = $("#caja").find('.resaltado');
// es lo mismoa que el metodo anterior
var busqueda1 = $("#caja .resaltado");
console.log(busqueda);
console.log(busqueda1);

// el metodo .parent() sirve para moverse entre etiquetas 
// del dom de forma jerarquica, se selecciona el elemento caja
//  con dos parents y con tres se retrocede hasta el body
var busqueda4 = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
console.log(busqueda4);

// otro ejemplo, se sale del li y luego del ul para llegar al 
// elemento del div y dentro de el encontrar el o los elemetos con
// la clase .resaltado
var busqueda5 = $("#elemento4").parent().parent().find('.resaltado');
console.log(busqueda5);
});