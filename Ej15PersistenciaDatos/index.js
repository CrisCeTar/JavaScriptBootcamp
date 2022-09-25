//LOCALSTORAGE

// localStorage.setItem("nombre", "Gorka") ->Seteamos o creamos el item
// localStorage.setItem("nombre", "Miguel") -> Cambiamos el valor de la key "nombre"

//Podemos conseguir el item(dándole la key)
//Si intentamos conseguir un item que no existe nos devolverá null
console.log(localStorage.getItem("nombre"))

//En localStorage podemos guardar lo que queramos
//Si queremos crear un objeto o un array tenemos que poner JSON.stringify
localStorage.setItem("persona",JSON.stringify({nombre:"Gorka", edad: 32}))

//JSON.parse para que nos lo devuelva como objeto de JavaScript
console.log(JSON.parse(localStorage.getItem("persona")))

//Podemos eliminar un item
localStorage.removeItem("nombre")

//SESSIONSTORAGE
//Es igual que localStorage

sessionStorage.setItem("nombre-sesion", "Timothy")

/* Cookies*/
//No es tan visual como los anteriores, tenemos que acceder a ellas con document.cookie

//Creamos una nueva cookie
document.cookie = "nombreCookie = CrisCookie"

//Si queremos fijar una fecha de expiración tenemos que hacerlo en modo fecha: new Date()
document.cookie = "nombreCaducidad = Nombre; expires=" + new Date(2023, 0, 1).toUTCString()
console.log(document.cookie)
