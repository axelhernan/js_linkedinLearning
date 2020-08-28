"use strict"

var numero = "10.30";

// convertir un string en un numero
console.log('numero: ', Number(numero));

// no hacerlo decimal
console.log('parseInt: ', parseInt(numero));

// aceptar el decimal
console.log('parseFloat: ', parseFloat(numero));

// si un numero es realmente un numero
console.log('es un numero? ', isNaN(numero));

// pregunta si es un entero
console.log('es un numero entero? ', Number.isInteger(numero));