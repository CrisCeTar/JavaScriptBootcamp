const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val;
    }
    throw new Error("El valor debe ser un número.")
}

const numero = "8";

try {
    //código que puede fallar
    console.log("Está ejecutandose correctamente.")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    //En caso de fallar quiero que ejecutes
    console.error(`El valor de e es: ${e}`)// El valor de e es: Error: El valor debe ser un número. 
    console.error("ERROR!")
} finally {
    console.log("Esto se ejecutará siempre.")
}