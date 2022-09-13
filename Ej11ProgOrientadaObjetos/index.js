const persona = {
    nombre: "Cristina",
    edad: 27,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola")
    }
}

console.log(persona)
persona.saludo()

const otraPersona = {
    nombre: "Miguel",
    edad: 14,
    isDeveloper: false,
    saludo: function(){
        console.log('Hola')
    }
}

//Función factory

const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //que es lo mismo que -> nombre: nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log('Hello')
        }
    }
}

const nuevaPersona = crearPersona("Pablo", 23, false);
console.log(nuevaPersona)