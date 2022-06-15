var listaCompra = ["Patatas", "Champú", "Galletas", "Sillas", "Vasos"]

listaCompra.push("Aceite de girasol")

listaCompra.pop("Aceite de girasol")

misPelis = [
    {titulo: "Nunca más", director: "Michael Apted", fecha: new Date(2002, 5, 21)},
    {titulo: "Avengers: Endgame", director: "Hermanos Russo", fecha: new Date (2019, 4, 26)},
    {titulo: "Ponyo", director: "Hayao Miyazaki", fecha: new Date (2009, 4, 24)}
]

misPelis2010 = misPelis.filter(misPelis => misPelis.fecha > new Date(2010, 01, 01))

directores = misPelis.map(misPelis => {
    return misPelis.director 
})

peliculas = misPelis.map(misPelis => {
    return misPelis.titulo
})

directoresTitulos = directores.concat(peliculas)

directoresTitulosP = [...directores, ...peliculas]

