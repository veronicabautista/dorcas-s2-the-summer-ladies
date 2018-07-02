"use strict";


var selectorDisena = document.querySelector(".title__disena");
var formularioDisena = document.querySelector(".form__disena--fontsColors");
var selectorRellena = document.querySelector(".titulo__rellena");
var formularioRellena = document.querySelector(".form__rellena");
var selectorComparte = document.querySelector(".container__comparte--icon");
var formularioComparte = document.querySelector(".wrapform");



function desplegarDisena() {
    console.log("desplegardiseña");
    if (formularioDisena.classList.contains("form__oculto")) {
      formularioDisena.classList.remove("form__oculto");
      formularioRellena.classList.add("form__oculto");
      formularioComparte.classList.add("form__oculto");
    }
    else {
      formularioDisena.classList.add("form__oculto")
    }
  
  }


function desplegarRellena() {
    console.log("desplegarRellena");
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
  }
  else {
    formularioRellena.classList.add("form__oculto");
  }

}

function desplegarComparte() {
    console.log("desplegarComparte");
    if (formularioComparte.classList.contains("form__oculto")) {
      formularioComparte.classList.remove("form__oculto");
      formularioDisena.classList.add("form__oculto");
      formularioRellena.classList.add("form__oculto");
    }
    else {
      formularioComparte.classList.add("form__oculto");
    }
  
  }

selectorDisena.addEventListener("click", desplegarDisena);
selectorRellena.addEventListener("click", desplegarRellena);
selectorComparte.addEventListener("click", desplegarComparte);