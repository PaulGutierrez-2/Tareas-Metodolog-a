'use strict'

//Crear algoritmo que reciba el ano de nacimiento y devuelva la edad
let yearOfBirth = function (year) {
    let date = new Date()
    return date.getFullYear() - year
}

console.log("Crear algoritmo que reciba el ano de nacimiento y devuelva la edad")
console.log("Edad Actual : " + yearOfBirth(2004))

//Crear algoritmo que reciba un num y muestre la tabla de multiplicar del num ingresado
let showTableM = function (num) {
    let table = []
    for (let i = 1; i <= 10; i++) {
        let multiply = num * i
        table.push(" " + num + " x " + i + " = " + multiply)
    }
    return table
}

console.log("Crear algoritmo que reciba un num y muestre la tabla de multiplicar del num ingresado")
console.log(showTableM(2))

//Crear Funcion flecha que convierta unidades de temp celcius a Farenheit

let calcFahrenheit = (celsius) => 9 / 5 * celsius + 32

console.log("Crear Funcion flecha que convierta unidades de temp celcius a Farenheit")
console.log(calcFahrenheit(50))