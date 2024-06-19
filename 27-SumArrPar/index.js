'use strcit'

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function calcSumArrPar(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 2)) sum += arr[i] 
    }
    return `Suma: ${sum}`
}

console.log(calcSumArrPar(array));