//Formas de importar y exportar modulos
//1. CommonJS - require(antigua)
//2. Import ES6 - import

// IMPORT
// const moduloMatematicas = require("./modulos/matematicas.js")

// DECLARAR
// const factorial = moduloMatematicas.factorial;
// const suma = moduloMatematicas.suma;
// Que es lo mismo que:
// const {factorial, suma} = moduloMatematicas;

// O MEJOR AÚN:
const {factorial, suma} = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)
