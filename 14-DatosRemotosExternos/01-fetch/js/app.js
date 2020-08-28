"use strict"

// traer datos de afuera con metodo fetch()
// las promesas se quedan esperando hasta que cumplan

var boton = document.getElementById("boton");
var contenedor = document.getElementById("contenedor");
var posts = null;


boton.addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json()) // aca preformateamos los datos y lo convertimos en json
    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })
});

function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido)

    })
}

// posts es una variable
// post es un parametro simple