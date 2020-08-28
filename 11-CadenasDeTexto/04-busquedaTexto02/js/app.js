"use strict"

// metodos de busqueda ||| parte 2

var mensaje = "Estoy aprendiendo javascript aprendiendo opera";
var resultado;

// match
// te devuelve un array con todos los match que encuentra en la oración
//resultado = mensaje.match(/aprendiendo/g)

// substr
// recibe los caracteres desde el primer valor que designe hasta el ultimo, no retorna una posicion, retorna un pedazo de texto que estoy buscando
//resultado = mensaje.substr(6,11)

// substring
// es lo mismo que substr, la unica diferencia es que devuelve un resultado desde el inicio de la cadena y no desde un parametro
//resultado = mensaje.substring(6,11)

// charAt
// nos indica cual es el caracter que estoy buscando
resultado = mensaje.charAt(1)

console.log(resultado)