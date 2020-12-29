"use strict"
// temporizadores

// setInterval
// la ejecucion de un elemento de manera infinita por un tiempo determinado

/* 
var temporizador = setInterval(function(){
    setColor();
}, 2000);
*/

// setTimeOut
// va a ejecutar una accion despues del tiempo que le determino y solo se va a repetir una vez

var temporizador = setTimeout(function(){
    setColor();
}, 2000);


// funcion de ejemplo
function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue"
}

// con clearInterval puedo frenar un intervalo
function stopChangecolor(){
    clearInterval(temporizador)
}