let nombre = "Cristina"
let apellido = "Cerro"

let nombreApellido = {
    nombre,
    apellido
}

sessionStorage.setItem("persona", "nombreApellido")
localStorage.setItem("persona", "nombreApellido")

console.log(localStorage.getItem("persona"))
console.log(sessionStorage.getItem("persona"))

document.cookie = "persona = nombreApellido; expires=" + new Date(Date.now() + (2 * 60 * 1000))
console.log(document.cookie)