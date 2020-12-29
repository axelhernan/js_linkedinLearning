"use strict"

var mensaje = "estoy aprendiendo JavaScript";
var resultado;

// startsWith
// nos retorna un valor booleano si empieza o no con tal palabra ademas son sensibles a mayus/minus
// puedo combinar, en este caso, busca la palabra "Ja" desde la posicion de la palabra "javascript"

// var textoEn = mensaje.indexOf("JavaScript") 
// resultado = mensaje.startsWith("Ja",textoEn)

// endsWith
// resultado = mensaje.endsWith("pt")

// includes
// puedo combinar las posiciones
resultado = mensaje.includes("estoy", 6)

console.log(resultado);