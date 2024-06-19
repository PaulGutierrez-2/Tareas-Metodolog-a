'use strict'

function validateField(isVisible, show, hide) {
    isVisible ? show() : hide()
}

let showField = function () {
    alert("Campo Visible")
}

let hideField = () => alert("Campo oculto")

validateField(false, showField, hideField) //---> Vallbacks function

/**
  * Devuelve x elevado a la potencia de n.
  *
  * @param {number} x El número a elevar.
  * @param {number} n La potencia, debe ser un número natural.
  * @return {number} x elevado a la potencia de n.
  */
function pow(x, n) {
    return
  }

//calcular -> calc
function calcResta(a, b) {
    return a - b
}

item1 = {}
item2 = {}


