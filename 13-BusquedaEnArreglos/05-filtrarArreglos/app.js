"use strict"

// filtrar arreglos con la funcion filter()
// con el find() solo te retorna la primera incidencia, el fiter todo lo que coincida con mi busqueda


var menu = [
    {nombre: "alfajor", precio: 20, pais: "argentina"},
    {nombre: "taco", precio: 20, pais: "mex"},
    {nombre: "asado", precio: 20, pais: "argentina"}
]

var resultado = menu.filter(plato => plato.pais == "argentina");
console.log(resultado)