'use strict'

let calcPlus = (num1, num2) => console.log(`El resultado de la Suma es ${num1 + num2}`)

let calcMinus = (num1, num2) => console.log(`El resultado de la Resta es ${num1 - num2}`)

function calc(op, plus, minus) {
    let a = Number(prompt("valor A:"))
    let b = Number(prompt("valor B:"))

    return op == "suma" ? plus(a,b) : minus(a,b)
}

let op = prompt("Suma o Resta")

calc(op.toLowerCase(), calcPlus, calcMinus)
