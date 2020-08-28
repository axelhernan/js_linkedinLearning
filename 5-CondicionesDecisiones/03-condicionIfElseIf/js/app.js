"use strict"

// condicion if

var datoA = 110;
var datoB = 20;
var resultado = "sin datos";

if(datoA > datoB){
    resultado = "la condicion cumplió";
} else if(datoB == datoA){
    resultado = "la segunda condicion cumplió"
}else{
    resultado = "la ultima condicion cumplió"
}

console.log(resultado)
