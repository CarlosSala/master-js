'use strict'

// api rest es un servicio que devuelve datos en json simulando un backend

// fetch (ajax) Asynchronous Javascript and XML o peticiones a servicios de api rest

// se capturan las cajas donde se imprimirá la futura informacion
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

// funciones que realizan las peticiones fetch correspondientes

// esta funcion retorna informacion relacionada a un grupo de usuarios
function getUsers() {

    return fetch("https://reqres.in/api/users");
}

// esta funcion retorna informacion relacionada a un usuario especifico
function getJanet() {

    return fetch("https://reqres.in/api/users/2");
}

// esta funcion contiene un objeto json y una promesa para simular una peticion local
function getInfo() {

    var profesor =
    {
        nombre: "Carlos",
        apellidos: "Salazar",
        url: "https://loscruzados.cl"
    };

    // se declara un promesa (resuelto o no resuelto)
    return new Promise((resolve, reject) => {

        var profesor_string = "";

        // se espera 2 seg y se convierte en string el objeto json
        setTimeout(function () {

            profesor_string = JSON.stringify(profesor);

            // si el objeto json no es string o no existe se da error
            if (typeof profesor_string != "string" || profesor_string == "")
                return reject("error");

            // se retorna la promesa 
            return resolve(profesor_string);

        }, 2000);
    });
}


// se invoca la primera peticion fetch para capturar la data
getUsers()
    // la data se convierte a un objeto json 
    .then(data => data.json())

    // la variable users guarda la data json
    .then(users => {

        // se le pasa a la función solo la informacion de interes venida en el objeto JSON 
        listadoUsruarios(users.data);

        // console.log(users.data[0].first_name);
        // console.log(typeof users.data[0].first_name);

        // se encadena la siguinte promesa
        return getInfo();
    })

    // en este caso la informacion ya viene en formato json string 
    .then(data => {

        // console.log(data);
        div_profesor.innerHTML = data;
        // tras ejecutarse esta promesa por completo se encadena la ultima promesa
        return getJanet();
    })

    // la data se convierte a un objeto json 
    .then(data => data.json())

    // la variable janet guarda la data json
    .then(janet => {

        // se le pasa la informacion como parametro a una funcion
        mostrarJanet(janet.data);
    })

    // para capturar errores se usa el metodo .catch()
    .catch(error => {
        console.log("error en las peticiones");
    });



// Funciones para trabajar la informacion recibida

function listadoUsruarios(usuarios) {
    // console.log(typeof usuarios);

    // se recorre el objeto 
    usuarios.map((user, i) => {

        // se crea un elemento html 
        let nombre = document.createElement("h2");

        // se introduce en cada elemento creado el texto de cada usuario 
        nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

        // los elementos son incluidos en un div para imprimirse en pantalla
        div_usuarios.appendChild(nombre);

        // se oculta el elemento "cargando" de la pagina
        document.querySelector(".loading").style.display = "none";
    });

}

// se ejecuta la funcion y se le pasa como parametro la informacion 
// en formato json de un usuario especifico venido del api rest

function mostrarJanet(ella) {
    // console.log(ella);

    // se crean elementos html donde se mostrara la informacion
    let nombre = document.createElement("h4");
    let avatar = document.createElement("img");

    // se muestra la informacion en pantalla
    nombre.innerHTML = ella.first_name + " " + ella.last_name;

    // se extra la url de la imagen y se pasa como atributo al src de img
    avatar.src = ella.avatar;
    avatar.width = "100";

    // se le pasa la informacion al div correspondiente
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);

    // se oculta el elemento con la clase loading al interior del div
    document.querySelector("#janet .loading").style.display = "none";
}

/*
.then(function(data){
    return data.json()
})
*/

// las promesas suelen utilizarse cuando se leen archivos o para enviar cosas por post o ajax