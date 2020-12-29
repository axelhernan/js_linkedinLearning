"use strict"

// iniciacion de parametros
// puedo poner un parametro al final cuando invoco la funcion o cuando la estoy declarando, siempre va a tomar como primer importancia el parametro cuando la invoco

function contar (cantidad = 20){
    console.log('tiene ', cantidad);
}
contar (100);