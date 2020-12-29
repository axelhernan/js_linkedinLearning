"use strict"

// las funciones también puede recibir elementos con los que puede trabajar


function saludar(nombre, edad){
    var resultado = nombre + " tiene " + edad;
    return resultado
}

var mensaje = saludar("Axelin", 27);

console.log(mensaje)