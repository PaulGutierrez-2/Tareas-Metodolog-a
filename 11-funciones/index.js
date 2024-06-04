'use strict'

function showMessage(nombre) {
    alert("Hola " + nombre)
}

showMessage("Paul")

/////////////////////////////////////////////////////

function generarFrase() {
    return "Hola mundo"
}

let result = generarFrase()
alert("El valor de retorno de la funcion es: " + result)


/////////////////////////////////////////////////////

function getSuma(a, b) {
    return a + b
}

let a = Number(prompt("Valor a: "))
let b = Number(prompt("Valor b: "))

alert(getSuma(a, b))
