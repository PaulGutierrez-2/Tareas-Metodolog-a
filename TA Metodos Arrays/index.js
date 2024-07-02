'use strcit'

/*Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string. Retornando un array. */

function showlargerNum(arr) {
    return arr.filter(el => el >= 10).map(el => el.toFixed(2))
}

let nums = [13.676767, 3.123432, 5.34543543, 10.3452345]

console.log('------------------------EJERCICIO 1------------------------')
console.log(showlargerNum(nums))

/*Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.  Crear una función que 
reciba como parámetro el array de las asignaturas y un numero que indique el nivel. La función debe retornar solo las asignaturas 
que pertenecen a ese nivel. */

function filterLevelSubject(arr, numLevel) {
    return arr.filter(el => el.level == numLevel).map(el => el.subject)
}

const subjects = [
    //PRIMER NIVEL
    {
        subject: "MATEMATICA COMPUTACIONAL",
        curricularOrganization: "BÁSICA",
        credits: 3,
        level: 1
    },
    {
        subject: "METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS",
        curricularOrganization: "BÁSICA",
        credits: 3,
        level: 1
    },
    {
        subject: "BASE DE DATOS RELACIONALES",
        curricularOrganization: "BÁSICA",
        credits: 2,
        level: 1
    },
    {
        subject: "LAS TICS Y SOPORTE EN HARDWARE",
        curricularOrganization: "BÁSICA",
        credits: 2,
        level: 1
    },
    {
        subject: "PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS",
        curricularOrganization: "BÁSICA",
        credits: 2,
        level: 1
    },
    {
        subject: "PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO",
        curricularOrganization: "BÁSICA",
        credits: 1,
        level: 1
    },
    {
        subject: "PRÁCTICAS DE SERVICIO COMUNITARIO",
        curricularOrganization: "BÁSICA",
        credits: 2,
        level: 1
    },
    // SEGUNDO NIVEL
    {
        subject: "SISTEMAS DIGITALES PROGRAMABLES",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 2
    },
    {
        subject: "SISTEMAS DE INFORMACIÓN",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 2
    },
    {
        subject: "PROGRAMACIÓN ORIENTADA A OBJETOS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    {
        subject: "PROCESOS CONTABLES",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    {
        subject: "GESTION DE BASE DE DATOS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    {
        subject: "PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO CON BASE DE DATOS",
        curricularOrganization: "PROFESIONAL",
        credits: 1,
        level: 2
    },
    {
        subject: "PRÁCTICAS LABORALES",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 2
    },
    //TERCER NIVEL
    {
        subject: "PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MOVILES",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 3
    },
    {
        subject: "PROBABILIDADES Y PROCESOS ESTOCÁSTICOS",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 3
    },
    {
        subject: "HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    {
        subject: "APLICACIONES TECNOLOGICAS AUTONOMAS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    {
        subject: "SOFTWARE APLICATIVO",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    {
        subject: "PROYECTO INTEGRADOR DE SABERES CREACION DE APLICACIONES WEB CON BASE A LA ARQUITECTURA CLIENTE SERVIDOR",
        curricularOrganization: "PROFESIONAL",
        credits: 1,
        level: 3
    },
    {
        subject: "PRÁCTICAS LABORALES",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 3
    },
    //CUARTO NIVEL
    {
        subject: "COMUNICACIONES Y REDES DE DATOS",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 4
    },
    {
        subject: "SISTEMAS OPERATIVOS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "HERRAMIENTAS CASE",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "TENDENCIAS TECNOLÓGICAS",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "DESARROLLO DE PROYECTOS DE SOFTWARE",
        curricularOrganization: "PROFESIONAL",
        credits: 3,
        level: 4
    },
    {
        subject: "DERECHO Y SEGURIDAD INFORMATICA",
        curricularOrganization: "PROFESIONAL",
        credits: 2,
        level: 4
    },
    {
        subject: "PRÁCTICAS LABORALES",
        curricularOrganization: "PROFESIONAL",
        credits: 1,
        level: 4
    }
];

console.log('------------------------EJERCICIO 2------------------------')
console.log(filterLevelSubject(subjects, 1))

/*Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. La función debe recibir el 
array y devolver únicamente la parte entera del promedio.*/

function calcAverage(arr) {
    let result = arr.reduce((a, b) => a + b) / arr.length
    return Math.floor(result)
}

let list = [15.6, 16.2, 17.8, 18.156, 19.1];
let list2 = [1, 2, 3, 4, 5]

console.log('------------------------EJERCICIO 3------------------------')
console.log(calcAverage(list))
