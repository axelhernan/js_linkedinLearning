"use strict"

// busqueda desde la funcion find();

var platillos = ["ceviche","pizza","alfajor"];
// var elegido = platillos.find(i => i == "alfajor");

var menu = [
    {nombre: "alfajor", precio: 20, pais: "argentina"},
    {nombre: "taco", precio: 20, pais: "mex"},
    {nombre: "pizza", precio: 20, pais: "italia"}
]
var elegido = menu.find(i => i.nombre == "alfajor")
console.log(elegido);
