'use strict';

// el simbolo dolar y la palabra jQuery son lo mismo
// despues del dolar viene un selector

$(document).ready(function () {

    // Selector para los id utilizando #

    // se pueden modificar propidades css de los elementos seleccionados

    var rojo = $("#rojo").css("background", "red").css("color", "white");
    // console.log(rojo);

    $("#amarillo").css("background", "yellow").css("color", "black");

    $("#verde").css("background", "green").css("color", "orange");

    // Selector para las clases

    var mi_clase = $(".zebra");

    mi_clase.css("padding", "10px");

    // se muestra en consola uno de los dos elementos que poseen la clase .zebra
    console.log(mi_clase[0]);

    // el metodo .eq() realiza la misma accion anterior, pero devuelve un objeto
    // console.log(mi_clase.eq(0));

    // a los elementos <p> con clase .sin-borde, se les añade mediante el evento click la clase .zebra 
    $(".sin-borde").click(function () {

        // la palabra this hace referencia al elemento al cual se le esta aplicando el evento click
        $(this).addClass("zebra");
    });


    // Selectores por etiqueta
    // cursor pointer transforma el cursor de flecha a dedo
    var parrafos = $("p").css("cursor", "pointer");

    parrafos.click(function () {

        var that = $(this);

        // .hasClass para verificar si existe la clase
        if (!that.hasClass("fontSizeGrande")) {

            // cambia la clase
            that.addClass("fontSizeGrande");

        } else {

            // elimina la clase
            that.removeClass("fontSizeGrande");
        }
    });


    // Selector de atributos de elementos html

    $('[title="Google"]').css('background', "orange");

    $('[title="Facebook"]').css('background', "lightblue");


    // otros aspectos de los selectores

    // para agregar una clase a mas de un elemento html
    $('p, a').addClass('margen-superior');

    // metodo .find() para encontrar elementos en un arbol html grande 
    // en el cual no se tiene claridad de las ubicaciones de estos 
    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);

    // es lo mismo que el metodo anterior (si se busca con id y clase para hacer la busqueda mas especifica)
    var busqueda1 = $("#caja .resaltado");
    console.log(busqueda1);

    // el metodo .parent() sirve para moverse entre etiquetas del dom de forma jerarquica
    // se selecciona el elemento caja con dos parents y con tres se retrocede hasta el body
    var busqueda2 = $("#caja .resaltado").parent().parent().parent().find('[title="Google"]');
    console.log(busqueda2);

    // otro ejemplo, desde el elemento con el id="elemento3" se comienza a retroceder 
    // saliendo del li y luego del ul hasta llegar al elemento del div
    // se mostraran todos los elementos encontrados en el camino que contengan la clase .resaltado
    var busqueda3 = $("#elemento3").parent().parent().find('.resaltado');
    console.log(busqueda3);
});