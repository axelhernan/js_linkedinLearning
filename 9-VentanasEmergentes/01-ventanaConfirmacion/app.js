"use strict"

// confirmacion via alerta

const video = document.querySelector('.bostonVideo');

video.addEventListener('ended', function(){
    let resultado = confirm("Queres volver a ver el video?");
    if(resultado){
        video.play();
    }else{{
        console.log("no quiso volver a ver el video")
    }}
})