
$(document).ready(function () {

    // se seleciona un div
    var caja = $('#caja');

    // efectos para mostrar y ocultar

    // El boton mostrar esta oculto por defecto
    $('#mostrar').hide();

    $('#mostrar').click(function () {

        // si esta habilitado al hacer click este se oculta
        $(this).hide();

        // se muestra el otro boton
        $('#ocultar').show();

        // aplica un efecto sobre el div con id caja
        // caja.show("fast");
        caja.show("normal");
        // caja.show("slow");

        // la opacidad se mueve en un rando de 1 a 0
        // uno se muestra y cero se oculta
        caja.fadeTo('normal', 1);
    });

    // El boton ocultar se muestra por defecto
    // al hacer click sobre el este se oculta
    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();
        caja.hide('fast');
        caja.hide('normal');
        caja.hide('slow');
        caja.fadeTo('normal', 0.2)
    });


    // solo un boton para mostrar y ocultar el div
    $('#todoEnUno').click(function () {

        // estos efectos muestran u ocultan elementos automaticamente
        // los efectos tiene la posibilidad de tener una funcion 
        // de callbak una vez que termina su ejecucion
        // otros efectos toggle, fadeToggle, slideToggle
        caja.slideToggle('fast', function () {

            console.log("termina la animacion");
        });
    })

    // animaciones personalizadas
    $('#animar').click(function () {

        // las intrucciones van dentro de un json
        // left solo sirve para elementos que poseen posicion absoluta
        caja.animate({

            marginLeft: '250px',
            borderRadius: '900px',
            fontSize: '40px'
        }, 'low')
            .animate({

                borderRadius: '900px',
                marginTop: '150px'
            }, 'low')

            .animate({

                borderRadius: '900px',
                marginLeft: '0px'
            }, 'low')

            .animate({

                borderRadius: '900px',
                marginTop: '10px'
            }, 'low')

            .animate({

                borderRadius: '0px',
                fontSize: '20px'
            }, 'low')
    });

});