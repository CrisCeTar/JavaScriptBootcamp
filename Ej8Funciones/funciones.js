
//En el caso de las variables con valores primitivos(ej.: string), la variable respeta el orden en el que se le ha dado este valor
//Pero en el caso de objetos, si se le da un nuevo valor, éste se cambia en el objeto original
let persona = { nombre: "Juan", apellido: "Gómez" }

saludarPersona(persona)
console.log(persona) // { nombre: 'Juan', apellido: 'Pérez' }

function saludarPersona(objeto) {
    objeto.apellido = "Pérez";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`) // Hola Juan Pérez
}

//////////////////////////////
//Parámetros opcionales / Si no me pasamos un valor por parámetro, utilizará el valor por defecto

function imprimirNumero(numero = 7) {
    console.log(numero) // 7
}

imprimirNumero()

//////////////////////////////
//FACTOR DE PROPAGACIÓN
function imprimir(...parametros) { //para que coja todos los parámetros independientemente del tipo que sean
    console.log(parametros) //[ 1, 2, 4, 'hola', { id: 9 } ]
}

imprimir(1, 2, 4, "hola", { id: 9 })

////////////////////////////////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 4)

console.log(s) // 7