'use strict';


var selectorRellena = document.querySelector('.titulo__rellena');
var formularioRellena = document.querySelector('.form__rellena');


function plegar() {
    formularioRellena.classList.toggle("form__oculto");

}

selectorRellena.addEventListener("click", plegar);
