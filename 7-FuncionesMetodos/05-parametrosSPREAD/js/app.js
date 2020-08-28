"use strict"

// parametros spread
// se declara (...) cuando invoco la función y no en la estructura de la funcion
// cuando esta informacion se procesa toma el primer valor y lo asigna a un parametro
// se pueden combinar con los parametros rest

function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log('ingrediente1: ', ingrediente1);
    console.log('ingrediente2: ', ingrediente2);
    console.log('ingrediente3: ', ingrediente3);
    console.log('otros: ', otros)
}

var ingredienteBase = ["pollo", "tomate"];

cocinar(...ingredienteBase, "Arroz", "tomate", "pimienta", "picante")