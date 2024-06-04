'use strict'

//variables
let tarifaMinima
let costoxKm = 0.29
let arranque = 0.50

let esNoche = confirm("Es Noche? ")

//condicion
esNoche 
    ? tarifaMinima = 1.75 
    : tarifaMinima = 1.50

let totalKms = prompt("Total Km: ")

//calcular el precio
const valor = (totalKms * costoxKm) + arranque
console.log(valor)

//cuanto de debe pagar
valor < tarifaMinima 
    ? alert("Pagar " + tarifaMinima) 
    : alert("Pagar " + valor) 

