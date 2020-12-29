"use strict"

// parametros rest
// te devuelve un objeto con el resto de los parametros no declarados individualmente


function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
    console.log('ingrediente1: ', ingrediente1);
    console.log('ingrediente2: ', ingrediente2);
    console.log('masIngredientes', masIngredientes);
}

cocinar("pollo", "tomate", "arroz", "frijoles", "pescado")