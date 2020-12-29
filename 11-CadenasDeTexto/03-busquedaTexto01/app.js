"use strict"

// metodos de busqueda ||| parte 1 

var mensaje = "Estoy aprendiendo javascript aprendiendo opera";
var resultado;

// indexOf
// buscar la primera incidencia y nos regresa la posicion que se encuentra en los caracteres
//resultado = mensaje.indexOf("aprendiendo");

// lastIndexOf
// buscar la ultima incidencia y nos regresa la posicion que se encuentra en los caracteres
//resultado = mensaje.lastIndexOf("aprendiendo");

// search
// es lo mismo que indexOf
//resultado = mensaje.search("aprendiendo");

// search | expresion regular
resultado = mensaje.search(/Ja/i);// se le agrega una I para evitar el case sensitive


console.log(resultado)