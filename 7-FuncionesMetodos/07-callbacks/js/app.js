"use strict"
// callbacks
// una funcion puede recibir funciones como parametros (ademas de parametros de numero, string, también funciones)
// los callbacks controlan procesos asincronos, en una funcion puedo invocar muchos procesos y en otra funcion puedo controlar otros pocos

function calculo (datoA, datoB, sumaCallBack, restaCallBack){
    var suma = datoA + datoB;
    var resta = datoA - datoB;

    sumaCallBack(suma);
    restaCallBack(resta);
}

calculo(5, 4, function(resultado){
    console.log("Suma " + resultado);
}, function(resultado){
    console.log("Resta " + resultado);
});

