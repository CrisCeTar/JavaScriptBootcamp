//Inheritance - Herencia
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

class Desarrollador extends Persona { // los métodos se comparten entre ellas automáticamente
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)// para "traer" las variables de la clase principal
        this.lenguaje = lenguaje
    }

    saludo() { //Polimorfismo-Override | sobreescribimos el método
        super.saludo()//Cogemos el del padre
        console.log(`Y soy desarrollador de ${this.lenguaje}`)//Y añadimos
    }
}

const nuevoDev = new Desarrollador("Pepo", 35, "JavaScript")
