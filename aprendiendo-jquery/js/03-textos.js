
$(document).ready(function(){
    //console.log($("a").length);

    // primero recorren elementos a mostrar en pantalla
   reloadLinks();

    // se selecciona el boton con su id y se remueve
    // el atributo disabled con .removeAttr();
    $('#add_button').removeAttr('disabled')
    // se captura el evento click
                    .click(function(){
       // con el metodo .html() se puede reeplazar html
       // prepend añade al principio
       // append añade al final
       // se añade mediante el id del ul, el correspondiente link 
       // capturado desde el input 
       $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
       // borrar el texto introducido al input
       $('#add_link').val('');
       // se llama a la funcion para que vuelva a recorrer los elementos 
       // "a" del html
       reloadLinks();
    });
});

// funcion para recorrer los elementos "a" del html
function reloadLinks(){
  // each recorre los elementos "a" del html
    $("a").each(function(index){
      //console.log($("a"));
      // se guarda en la variable that el elemento "a" de html
        var that = $(this);
       // console.log(that);
        // mediante .attr() se extrae el atributo href
         var enlace = that.attr('href');
        // se añade un atributo y un valor a los los elementos "a"
        // that.attr('target','blank');
        // se incrusta el atributo href al elemento "a", pero como texto
         that.text(enlace);
        });
      }