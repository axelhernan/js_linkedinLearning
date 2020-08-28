"use strict"

// usamos el prompt para mandar una consulta para llenar un field en una alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function(){
    let consulta = prompt("deseas cargar mas datos");

    if(consulta == null || consulta == ""){
        console.log("el usuario no cargo nada")
    }else{
        console.log("el usuario cargo esta informacion: " +consulta)
    }
})