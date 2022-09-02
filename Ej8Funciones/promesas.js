function miAsinc(){
    //Hace una llamada a una base de datos externa
    //Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    if(true){
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))// Si OK
    .catch(() => console.log("ERROR"))//Si error
    .finally(() => console.log("Ha finalizado el proceso de carga"))//Se ejecuta siempre al acabar