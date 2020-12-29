"use strict"
// funciones anonimas = arrow


var saludar = nombre => " hola " + nombre;
console.log(saludar("Susana"));

var sumar = cantidad => cantidad+10;
console.log(sumar(10));

var restar = (datoA, datoB) => datoA - datoB;
console.log(restar(50,20));

var datoMultiple = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC;
}
console.log(datoMultiple(50,25));

var validar = () => {
    return "validacion correcta";
}
console.log(validar())