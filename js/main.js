"use strict";

var selectorDisena = document.querySelector(".title__disena");
var formularioDisena = document.querySelector(".form__disena--fontsColors");
var selectorRellena = document.querySelector(".titulo__rellena");
var formularioRellena = document.querySelector(".form__rellena");
var selectorComparte = document.querySelector(".container__comparte--icon");
var formularioComparte = document.querySelector(".form__comparte");
var tarjetaCreada = document.querySelector(".container--comparte-created");
var botonCrearTarjeta = document.querySelector(
  ".container__comparte--buttonstyle"
);

function desplegarDisena() {
  if (formularioDisena.classList.contains("form__oculto")) {
    formularioDisena.classList.remove("form__oculto");
    formularioRellena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
  } else {
    formularioDisena.classList.add("form__oculto");
  }
}

function desplegarRellena() {
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
  } else {
    formularioRellena.classList.add("form__oculto");
  }
}

function desplegarComparte() {
  if (formularioComparte.classList.contains("form__oculto")) {
    formularioComparte.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioRellena.classList.add("form__oculto");
  } else {
    formularioComparte.classList.add("form__oculto");
  }
}

function crearTarjeta() {
  if (tarjetaCreada.classList.contains("form__oculto")) {
    tarjetaCreada.classList.remove("form__oculto");
  } else {
    tarjetaCreada.classList.add("form__oculto");
  }
}
selectorDisena.addEventListener("click", desplegarDisena);
selectorRellena.addEventListener("click", desplegarRellena);
selectorComparte.addEventListener("click", desplegarComparte);
botonCrearTarjeta.addEventListener("click", crearTarjeta);


///foto editor//

var fr = new FileReader();

var uploadBtn = document.querySelector('.form__rellena--button');

var fileField = document.querySelector('#imagen');
var profileImage = document.querySelector('.visor__image-foto');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src= fr.result;
}

function fakeFileClick() {
 fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
