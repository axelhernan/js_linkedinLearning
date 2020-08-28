"use strict"

// hay 2 tipos de validacion de arreglos, el some() y el every();

var menu = [
    {nombre: "alfajor", precio: 20, pais: "argentina"},
    {nombre: "taco", precio: 10, pais: "mex"},
    {nombre: "pizza", precio: 40, pais: "italia"}
]

var resultado = menu.some(plato => plato.precio > 10)
console.log("Hay algun plato abajo de los 20 pesos?", resultado)

var resultado2 = menu.every(plato => plato.precio > 20)
console.log("Todos los platos son abajo de los 10 pesos?", resultado2)