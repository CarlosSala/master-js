$(document).ready(function(){

    // esta condicion se utiliza para solo ejecutar
    // aquello necesario, como en este caso en que el
    // archivo main.js es compartido por varios html
    // si se encuentra la palabra index en la ruta ejecuta esto
    if (window.location.href.indexOf('index') > -1){

// para tener el slider de imagenes bajo el header
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });
   
}

if (window.location.href.indexOf('index') > -1){
// Posts
// Los post podrian venir de un api rest y trabajar igual
var posts = [
    {
        title: 'Prueba de titulo',
        date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") +  " de " + moment().format("YYYY"),
        content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure'
    },
    { title: 'Prueba de titulo 2',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") +  " de " + moment().format("YYYY"),
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure'
    },
    { title: 'Prueba de titulo 3',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") +  " de " + moment().format("YYYY"),
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure'
    },
    { title: 'Prueba de titulo 4',
    date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") +  " de " + moment().format("YYYY"),
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure'
    }
];
//console.log(posts);

posts.forEach((item, index) => {

var post = `

<article class="post">
<h2>${item.title}</h2>
<span class="date">Fecha de publicación</span>
<p>
${item.content}       
</p>
<a href="#" class="button-more">Leer más</a>
</article>
`;

$("#posts").append(post)

});
}
// selector de tema
var theme = $("#theme");

$("#to-green").click(function(){
    theme.attr("href", "css/green.css")
});

$("#to-red").click(function(){
    theme.attr("href", "css/red.css")
});

$("#to-blue").click(function(){
    theme.attr("href", "css/blue.css")
});


// scroll arriba de la web

$('.subir').click(function(e){
    // para que el link cumpla su funcion sin 
    // redireccionar a ninguna parte
    // pasar un parametro cualquiera a la funcion y a
    e.preventDefault();

$('html, body').animate({
    // para subir al inicio
    scrollTop: 0
}, 1000);

return false;
});

// login falso, utilizando localStorage

$("#login form").submit(function(){
    var form_name = $('#form_name').val();

    console.log(form_name);

    localStorage.setItem("form_name", form_name);
});

var form_name1 = localStorage.getItem("form_name");

if (form_name1 != null && form_name1 != "undefined"){
    var about_parrafo = $('#about p');
    about_parrafo.html("<br><strong> Bienvenido, "+ form_name1+ " " + "</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $('#login').hide();
    $('#logout').click(function(){
        localStorage.clear();
        location.reload();
    });
} 

// acordeon
if (window.location.href.indexOf('about') > -1){

    $('#acordeon').accordion();
}

// reloj
 if (window.location.href.indexOf('reloj') > -1){
 setInterval(function(){
    var reloj = moment().format("hh:mm:ss");
    $("#reloj").html(reloj);
 }, 1000);  

}


// validacion de formulario con plugin 
if (window.location.href.indexOf('contact') > -1){
    // se le pasa un json a date picker para modificar sus atributos
    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });

$.validate({
    lang: 'es',
    // manejar errores personalizados gracias al plugin validador
    errorMessagePosition: 'top',
    scrollToTopOnError: true
  });
}


});