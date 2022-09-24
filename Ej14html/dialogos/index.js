// const boton = document.getElementById("btn")
//O con jQuery
const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    // alert("Se ha hecho click !! Uhuu!!")
    // confirm("Estás de acuerdo?") && console.log ("OK") -> si el confirm es true se ejecurá el console.log
    // const respuesta = confirm("¿Seguro?")
    // if (respuesta) {
    //     console.log("Estas de acuerdo!")
    // }else {
    //     console.log("No estás de acuerdo")
    // }
    
    //O mejor

    confirm("Estás de acuerdo?")
        ? console.log("OK") // Si le damos a aceptar
        : console.log("NO!!") //Si le damos a cancelar
    
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cual es tu nombre?")
    if(nombre) {
        console.log("Tu nombre es " + nombre)
    }else {
        console.log("No has escrito nada.")
    }
    
})

const lista = [{
    nombre: "Groka",
    edad: 34
},{
    nombre: "Julián",
    edad: 78
},{
    nombre: "Paula",
    edad: 65
}]

console.table(lista)