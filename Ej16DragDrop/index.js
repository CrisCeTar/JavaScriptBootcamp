// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => { //Cuando agarramos
        console.log("Estoy arrastrando el párrafo " + parrafo.innerText)
        parrafo.classList.add("dragging") //Quiero que al arrastrarlo cambie de clase
        event.dataTransfer.setData("id", parrafo.id) // Transferimos los datos
        const elemento_fantasma = document.querySelector(".imagen-fantasma") //cambiamos la imagen fantasma al arrastrar
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => { //Cuando soltamos
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging") //Quiero que al soltar deje de usar la clase
    })
})

//EVENTOS DRAG AND DROP

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => { //Cuando arrastramos por encima de otros elementos
        event.preventDefault() //Prevenimos el comportamiento predeterminado de HTML que obvia el evento drop
        event.dataTransfer.dropEffect = "copy"
        //console.log("Drag Over") 
    })
    seccion.addEventListener("drop", event => { //Cuando soltamos después del dragover
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })    
})