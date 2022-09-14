class Persona {
    //Todas las variables, tanto en clases como en objetos, se denominan ATRIBUTOS.
    //en vez de esto:
    // nombre;
    // edad;
    // isDeveloper;
    //esto
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }
    //Todas las funciones, tanto en clases como en objetos, se denominan METODOS.
    //Desde esta función podemos acceder a todas la variables anteriores que están dentro de la misma clase.
    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

//Creamos un objeto de la clase persona

const nuevaPersona = new Persona("Pepa", 45, true)
console.log(nuevaPersona)
nuevaPersona.saludo()


//TERMINOLOGÍA

let numero = 0 //inicializamos variables
console.log(typeof numero)//number
//instanceof -> similar a typeof pero para clases
let persona_2 = new Persona("Maria", 78, false) //instanciamos objetos
console.log(typeof persona_2)


