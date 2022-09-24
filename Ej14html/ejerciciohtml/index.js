const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    alert('Click en el botón')
})

$("#btn").click(() => {
    console.log("Hola estoy utilizando jQuery.")
})