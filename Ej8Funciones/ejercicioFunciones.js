function siempreTrue() {
    return true;
}

console.log(siempreTrue())

////////////////////////////////


function myAsinc() {
  timeOut = setTimeout(mensahe, 5000);
}

function mensahe() {
  console.log("Hola soy una promesa");
}

myAsinc()

////////////////////////////////

function* generarId() {
    let id = 2;
    while (id < 2) {
        id++
        if (id % 2 == 0) {
            return id
        }
        yield id
    }
}

const gen = generarId();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
