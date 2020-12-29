"use strict"
// eventos del teclado

//keydown
//keypress
// keyup

// cuando usamos window es en relacion a la pantalla (cuando hago una accion en la pantalla)

window.addEventListener('keydown', function(){
    console.log("estas tocando una letra");
    console.log(String.fromCharCode(event.keyCode)) // metodo para convertir un numero en un string
})

window.addEventListener('keypress', function(){
    console.log("estas presionando una letra");
})

window.addEventListener('keyup', function(){
    console.log("estas soltando una letra");
})