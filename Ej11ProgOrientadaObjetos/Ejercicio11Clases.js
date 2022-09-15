class Estudiante {

    asignaturas = ["JavaScript", "HTML", "CSS"];
    nombre;

    constructor(name) {
        this.nombre = name;
    }

    obtenDatos() {
        const propiedades = {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
        return propiedades
    }
}

const Estudiante1 = new Estudiante("Pablo")
console.log(Estudiante1.obtenDatos())