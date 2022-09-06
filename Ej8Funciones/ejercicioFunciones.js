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
  let id = 0;
  while (true) {
      id +=2;
      yield id;
  }
}

const gen = generarId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
