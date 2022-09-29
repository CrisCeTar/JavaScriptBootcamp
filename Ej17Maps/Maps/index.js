// https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
//Accedemos a la URL copiamos el script en HTML
//Creamos la API key y la cambiamos en el enlace del script
//Copiamos el código CSS
//Como indica el script se llama a una funcion (initMap) que creamos en el fichero JS
//Definimos en la función una posición

let marker, map;

function initMap() {
    const posicion = {
        lat: -25.344,
        lng: 131.031
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    //Le ponemos una chincheta en un lugar concreto de forma predeterminada
    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })
}

//GEOLOCALIZACIÓN

function geoPosiciona(){
    if(navigator.geolocation){ // Porque no todos los navegadores lo admiten
        const geoLoc = navigator.geolocation
        const options = {timeOut: 60000}
        const WatchPosicion = geoLoc.watchPosition(centraMapa, onError, options) //En el caso de que no consiga las coordenadas se recargará en 1min, si sigue igual lanzará un error
    }else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.error(error)
}