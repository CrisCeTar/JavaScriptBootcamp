class Persona {
    //Privated -> #
    //#Solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    #obtenEdad

    //Protected -> _
    //_Se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(name, age) {
        this.#nombre = name;
        this.#edad = age;
    }

    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }

    #obtenNombre() {
        return this.#nombre
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}

//Solo se puede acceder a los atributos a través de un método
const persona = new Persona("Pedro", 70)
console.log(persona.getEdad())
console.log(persona._isDeveloper)

//SON SIEMPRE PUBLICOS

//GETTER -> métodos que nos permiten obtener atributos/métodos privados o protegidos
//getEdad() es una función getter-> nos permite ACCEDER (de forma controlada) a algún atributo protegido
const edad = persona.getEdad()
console.log(edad) //70

//SETTER -> métodos que nos permiten CAMBIAR el valor de alguno de los atributos privados o protegidos
persona.setEdad(34)
console.log(persona.getEdad()) //34

