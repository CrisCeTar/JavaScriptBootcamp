var datosPersonales = {
    nombre : "Cristina",
    apellido : "Cerro",
    edad : 26,
    eresDesarrollador: true
    }

var miEdad = datosPersonales.edad

var datosPersonalesAmigos = datosPersonales

datosPersonalesAmigos = {
    nombre: "Marta",
    apellido: "Martin",
    edad: 25,
    nombre: "Patricia",
    apellido: "Galán",
    edad: "27"
}

datosPersonalesAmigos = {...datosPersonales};

datosPersonalesAmigos.sort((a, b) => a.edad - b.edad)

console.log(datosPersonalesAmigos)