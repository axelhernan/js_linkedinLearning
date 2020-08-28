"use strict"

// eventos multimedia
// play
// seeking
// ended

const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function(){
    console.log("le diste play")
})

video.addEventListener('seeking', function(){
    console.log("estas buscando algo", this.currentTime)
})

video.addEventListener('ended', function(){
    console.log("se termino")
})