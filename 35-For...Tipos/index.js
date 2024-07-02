'use strict'

let nums = [4,6,3,7,1]

for (let i = 0; i < nums.length; i++) {
    console.log(`indide:${i} | elemento: ${nums[i]}`);
    
}

for (let pos of nums) {
    console.log(pos)//solo muestra el elemento no el indice
}

/*console.log(nums.forEach(alert))*/

let listNum = [13.676767, 3.123432, 5.34543543, 10.3452345]

function getLargetsNums10(arr) {
    return arr.filter(el => (el > 10).toFixed(2))
}

console.log(getLargetsNums10(listNum))