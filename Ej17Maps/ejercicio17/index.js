let marker, map;

function initMap() {
    const posicion = {
        lat: 40.167017, 
        lng: -3.921071
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    //CHINCHETAS
    const marker1 = new google.maps.Marker({
        position: { lat:42.88304633219152, lng:-9.272173145464077},
        map,
        title: "Finisterre"
    })
    const marker2 = new google.maps.Marker({
        position: { lat:43.36274959226921, lng:-5.8496469484789895},
        map,
        title: "Paseo de la Herradura"
    })
    const marker3 = new google.maps.Marker({
        position: { lat:42.1900580609406, lng:-8.812843401212936},
        map,
        title: "Praia da Buraca"
    })
}