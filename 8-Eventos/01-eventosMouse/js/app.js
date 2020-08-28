"use strict"
// el elemento addEventListener permite escuchar algo cuando sucede una acción 

const boton = document.querySelector('.boton');

// cuando hace click
boton.addEventListener('click', function(){
    console.log("estas haciendo click");
})

// cuando hace hover
boton.addEventListener('mouseover', function(){
    console.log("estas haciendo hover");
})

// cuando sale del hover
boton.addEventListener('mouseout', function(){
    console.log("saliste del hover");
})