'use strict'

let a = Number(prompt("Ingrese el valor a: "))
let b = Number(prompt("Ingrese el valor b: "))

let result

//suma
result = a + b
alert("suma: " + result)

//multiplicacion
result = a * b
alert("mutliplicacion: " + result)

//Resto
result = a % b
alert("Resto: " + result)

//Convertir en negativo
let a2 = -a
alert("Numero negativo de a: " + a2)

//Incrementar a 
alert("++a: " + (++a) + "a++: " + (a++))

//Decrementar a
alert("--a: " + (--a) + "a--: " + (a--))