//Ponemos en el archivo JSON-> "type": "module",

// import{suma, eleva} from './Modulos/Matematicas.js'
import getAutor, {libro} from './Modulos/literatura.js'

// const sum = suma(4, 12)
// console.log(sum)

// const potencia = eleva(2, 11)
// console.log(potencia)

//O para importar el módulo entero

import * as moduloMatematicas from './Modulos/Matematicas.js'

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 11)
console.log(potencia)

console.log(getAutor())
console.log(libro)