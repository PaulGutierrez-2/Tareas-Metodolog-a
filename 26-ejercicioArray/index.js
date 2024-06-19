'use strcict'

let array = [2,8,9]

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

console.log(sumArray(array))
