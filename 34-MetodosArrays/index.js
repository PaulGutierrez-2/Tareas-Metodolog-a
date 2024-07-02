'use sctrict'

///////////////////////////////////////////////////////////////////////

let students = []

students.push('junior', 'carlos', 'sergio', 'darwin', 'ian')

console.log(students.splice(1, 3, 'Mateo'))

students.unshift('mateo')

students.pop()

students.shift()

console.log(students);

console.log(students.find(i => i === 'carlos'))


//////////////////////////////////////////////////////////////////////

let ages = [16, 18, 20, 25, 30]

let agesFilter = ages.filter(i => i < 20)

console.log(agesFilter)

console.log(ages.map(i => i/2))

console.log(ages.reverse())

let text = "La vida es una obra de teatro, tú decides cómo interpretar tu papel."

console.log(text.split(' '))
console.log(text.split(' ').join("__"))