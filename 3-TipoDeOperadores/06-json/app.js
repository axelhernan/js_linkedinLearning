"use strict"

var persona = {
    nombre: "Axel",
    twitter: "axelin"
}

var personaJson = JSON.stringify(persona);
var nuevaPersona = JSON.parse(personaJson);