"use strict"

// buscar el indice de un arreglo con findIndex()

var platillos = ["ceviche","pizza","alfajor"];

var menu = [
    {nombre: "alfajor", precio: 20, pais: "argentina"},
    {nombre: "taco", precio: 20, pais: "mex"},
    {nombre: "pizza", precio: 20, pais: "italia"}
]

var seleccionPlato = menu.findIndex(plato => plato.nombre == "taco")

console.log("La posicion del plato es:", seleccionPlato)