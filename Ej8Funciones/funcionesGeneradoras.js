function* generarId() {
    let id = 0;
    while (true) {
        id++
        if (id === 10) {
            return id
        }
        yield id
    }
}

const gen = generarId();

console.log(gen.next());//{ value: 1, done: false }
console.log(gen.next());//{ value: 2, done: false }
console.log(gen.next());//{ value: 3, done: false }
console.log(gen.next());
console.log(gen.next());// ...
console.log(gen.next());
console.log(gen.next());//{ value: 10, done: true }
