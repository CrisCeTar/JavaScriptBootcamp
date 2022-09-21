const f = document.getElementById("formulario")

console.log("f")

f.addEventListener("submit", evento => { //cada vez que haya un submit quiero que ejecute esta función con parámetro evento
    console.log(evento)
    evento.preventDefault() //evita que se ejecute el comportamiento por defecto, en este caso no dará error.
})