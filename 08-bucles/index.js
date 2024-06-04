'use strict'

let t = Number(prompt("Numero: "))

//Bucle FOR
for (let i = 0; i < t; i++) {
    console.log(i)
}

console.log("Termina el bucle FOR")

//Bucle WHILE
let i = 0
while( i < t){
    i++
    console.log(i)
}

console.log("Termina el bucle WHILE")

//Bucle DO...WHILE
let x = 0
do {
    x++
    console.log(x)
} while (x < t);

console.log("Termina el bucle DO...WHILE")