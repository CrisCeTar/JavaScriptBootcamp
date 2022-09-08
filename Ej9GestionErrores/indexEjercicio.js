function miFuncion() {
    c= numero
    if (c == 3) {
        return c;
    }

    throw new Error("El valor de c debe ser 3.")
}

const numero = 10;

try {
    console.log("Está ejecutandose correctamente.")
    const doble = miFuncion(numero)
    console.log(doble)

} catch (e) {
    console.error(e)
    const doble = miFuncion(numero)//Error: El valor de c debe ser 3.
    console.log(doble)

} finally {
    console.log("Esto se ejecutará siempre.")
}