'use strict'

//Ejercicio 1
console.log('/////////////EJERCICIO 1/////////////')
let showArr = (Arr) => {
    for (let i = 0; i < Arr.length; i++) {
        for (let j = 0; j < Arr.length; j++) {
            console.log( String(Arr[i]) + Arr[j] )
        }
    }
    return
}

let list = [0, 2, 4, 8]

showArr(list)

//Ejercicio 2
console.log('/////////////EJERCICIO 2/////////////')
let showArr1 = (Arr) => {
    for (let i = 0; i < Arr.length; i++) {
        for (let j = i; j < Arr.length; j++) {
            if (Arr[i] !== Arr[j]) {
                console.log( String(Arr[i]) + Arr[j] )
            }
        }
    }
    return
}

let list1 = [0, 2, 4, 8]

showArr1(list1)
