'use strict'

/*
Funcion que reciba como arg la edad de una persona y devuelva true si es mayor a 18 y false si es menor
*/

/*
function calEdad(edad) {
    return edad >= 18 ? true : false
}

let edadIng = Number(prompt("Ingrese su edad"))
alert("El resultado es " + calEdad(edadIng))
*/


/* 
Funcion que multiplique dos numeros y devuelva el resultado
N: usar solo la operacion +
*/

function calMult(a, b) {
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
    }
    return result
}

let valorA = Number(prompt("Ingrese valor A:"))
let valorB = Number(prompt("Ingrese valor B:"))

alert("El resultado es: " + calMult(valorA, valorB))