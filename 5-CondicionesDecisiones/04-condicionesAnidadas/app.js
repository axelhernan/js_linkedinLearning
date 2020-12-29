"use strict"

// condicion if

var datoA = 110;
var datoB = 20;
var datoC = 500;
var resultado = "sin datos";

if(datoA > datoB){
    resultado = "la condicion cumplió";

    if(datoC < datoB){
        resultado = "la condicion anidada cumplió";
    }else{
        resultado = "la condicion anidada no cumplió";
    }
} else{
    resultado = "la ultima condicion cumplió"
}

console.log(resultado)
