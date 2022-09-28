const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const papelera = document.querySelectorAll('.papelera');

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => { 
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
    // papelera.addEventListener("drop", event => {
    //     event.dataTransfer.clearData("parrafo")
    // })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })
    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })    
})

if ("drop") {
    document.querySelectorAll(".parrafo").remove()
}

