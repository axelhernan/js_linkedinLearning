"use strict"

//trabajamos con un objeto de referencia al mismo objeto co nel que se esta trabajando
// addEventListener escucha cada vez que hago click en un boton


const boton = document.querySelector('.boton');
/*
boton.addEventListener('click', function(){
    console.log(this.innerHTML)
})
*/

boton.addEventListener('click', () => {
    console.log(this)
})