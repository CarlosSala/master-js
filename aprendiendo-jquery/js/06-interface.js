$(document).ready(function(){
   
   // draggable, para mover elementos por la pagina
$('.elemento').draggable();

// resizable, para redimensionar elementos
$('.elemento').resizable();

// selectable, para seleccionar elementos
// $('.lista-seleccionable').selectable();

// sortable, permite organizar los elementos
// se debe desactivar el selectable antes

$('.lista-seleccionable').sortable({
    update:function(event, ui){
        console.log("ha cambiado la lista");
    }
});

// Drop, para detectar el posicionamiento sobre el
$('#elemento-movido').draggable();
// div mas grande 
$('#area').droppable({
    drop:function (){
        console.log("has soltado dentro del area");
    }
});

// efectos 
// toggle("explode");
// toggle("fade");
// fadeToggle();
// effect("blind");
// toggle(blind);
// toggle("drop");
// toggle("fold");
// toggle("shake");
// toggle("scale");
// toggle("slide");

$("#mostrar").click(function(){
    $(".caja-efectos").toggle("puff",500);
});

// tooltit, para mostrar el texto de los titles al pasar por 
// los distintos elementos
// realizar un tooltip para toda la pagina
$(document).tooltip();

// dialog, para cuadros de dialogo
// se presiona el boton y lanza un div con un parrafo 
// al interior como un popup o cuadro de dialogo
$('#lanzar-popup').click(function(){

    $('#popup').dialog();
})

// calendario, para insertar un calendario
$('#calendario').datepicker();

// tabs, para incluir pestañas
$("#pestanas").tabs();

}); 