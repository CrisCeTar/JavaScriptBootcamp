//$("selector").acción()

// $("h1").hide()
//Todo esto se ejecutaría al acabar de cargar la página, lo que podría darnos algún error si la página no se cargara del todo
//Para asegurarnos podemos hacer
$(document).ready(() => {
    //Selectores:
    //id="el-1" => "#el-1"
    //class="el-1" => ".el-1"
    // $("h1").hide()
    // $("#el-1").hide()

    $(".hide-btn").click(() => { //click
        $("h1").hide()
        //$("h1").fideOut() -> desaparece de manera mas gradual que hide
    })

    $(".show-btn").click(() => {
        $("h1").show()
        //$("h1").fideIn()
    })

    $("li").dblclick(() => { //doble click
        $("h1").css({ color: "red"})
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Element</li>")
        //podríamos poner .prepend paraque lo añadiera al principio de la lista
    })

    $("li").mouseenter((elem) => { //hover
        elem.target.style.color = "blue"
    })

    $("li").mouseleave((elem) => { //dejar de hacer hover sobre el elemento
        elem.target.style.color = "black"
    })
})