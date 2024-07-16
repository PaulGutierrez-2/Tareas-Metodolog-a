'use strict'

console.log('--------------Ejercicio 1')//1er Ejercicio
function showSearchResult(arr, search) {
    return arr.includes(search) ? "Si se encuentra" : "No se encuentra"
}

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
console.log(showSearchResult(students, "Pedro"))

console.log('--------------Ejercicio 2')//2do Ejercicio
let phrase = 'La programación web es fundamental para el progreso'
function separateAndSize(phrase) {
    return `La frase tiene ${phrase.split(' ').length} palabras`
}

console.log(separateAndSize(phrase))

console.log('--------------Ejercicio 3')//3er Ejercicio
function searchMore3Letters(phrase) {
    return phrase.split(' ').filter(el => el.length > 3)
}

console.log(searchMore3Letters(phrase))

console.log('--------------Ejercicio 4')//4to Ejercicio

function showAssociatedBooks(arr, search) {
    return arr.filter(el => el.toLowerCase().includes(search.toLowerCase()))
}

const programmingBooks = [

    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
];

console.log(showAssociatedBooks(programmingBooks, "javascript"))

console.log('--------------Ejercicio 5')//5to Ejercicio

function createListObject(arr, search) {
    //Objeto de libro
    function Book(id, title) {
        this.id = id
        this.title = title
    }

    //Filtar libros que tenga el titulo
    let filter = arr.filter(title => title.toLowerCase().includes(search.toLowerCase()))
    
    let result = []

    //cada elemnto se pasa a objeto
    filter.map(el => result.push(new Book( filter.indexOf(el) + 1 , el)))

    return result //la salida sale [Book{id:1, title: titulo}, Book{id:2, title: titulo} ... Book{id:n, title: titulo}]
}

console.log(createListObject(programmingBooks, 'Git'))