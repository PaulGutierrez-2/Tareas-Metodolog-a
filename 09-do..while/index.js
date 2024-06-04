'use strict'

let premio = 19;
let cont = 0
let num;

do {

    num = Number(prompt("Ingrese numero"))
    cont++

    if (num == premio) break

} while (cont != 3)

alert(num == premio ? "You Win | " + cont + " Intentos" : "You Lose")
