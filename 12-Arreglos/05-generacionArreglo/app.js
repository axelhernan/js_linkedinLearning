"use strict"

// generacion de arreglos con split(), from() y off()

// split ()
// var mensaje = "ceviche,tacos,pasta";
// var platillos = mensaje.split(",");

// from ()
var platillosHtml = Array.from(document.querySelectorAll('.platillos p'));

// map ()
// permite hacer un mapeo de todos los contenidos, hace una interacion indefinida
var platillos = platillosHtml.map(platillo => platillo.textContent)


// off()

var platillos = Array.of("Ceviche", "tacos");

console.log(platillos)