// ajax una tecnologia para hacer peticiones asincronas
// sin necesidad de actualizar la pagina completa
// sino que solo una parte de ella

// con ajax se puede incrustar html en la pagina 
// o recoger json y mostrarlo como uno lo desee
// una app monolitica son aquellas construidas a partir 
// de solo un framework como laravel o simfony

$(document).ready(function () {

    // formas de hacer peticiones ajax con jquery

    // metodo load, realiza peticions get
    // incrusta el html proveniente de una peticion en la pagina 

    //  $('#datos').load("https://reqres.in/");


    // Get y Post, metodo get obtiene datos y post los envia
    $.get("https://reqres.in/api/users", function (response) {

        console.log(response);

        // se obtienen los datos de response en un json y se puede realizar lo que se desee con ellos
        // por cada usuario que se obtiene de la data se agrega contenido html
        response.data.forEach((element, index) => {

            $('#datos').append("<p>" + element.first_name + " " + element.last_name + "</p>");
            $('p').css("margin-left", "10px");
            // console.log(element.first_name);

        });
    });

    // metodo post normal, para enviarle datos a un servidor remoto

    $('#formulario').submit(function (e) {

        e.preventDefault();

        var usuario = {

            // se capturan los inputs de los formularios
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };

        console.log(usuario);

        // se captura la url que genera el formulario
        
        //     $.post($(this).attr("action"), usuario, function (response) {

        //         console.log(response);

        //     }).done(function () {

        //         alert("usuario añadido correctamente")
        //     })

        //     return false;

        // });


        // metodo $.ajax de jquery, para enviarle datos a un servidor remoto
        // es un metodo mas manipulable

        $.ajax({

            type: 'POST',
            dataType: 'json',
            url: $(this).attr("action"),
            data: usuario,

            // para realizar una accion antes de enviar la peticion 
            beforeSend: function () {

                console.log("Enviando usuario...");
            },
            success: function (response) {

                console.log(response);
            },
            error: function () {

                console.log("ha ocurrido un error");
            },

            // cuanto tiempo se desea que tarde como maximo la 
            // peticion, sino mostrar error
            timeout: 10000
        });

        return false;

    });
});