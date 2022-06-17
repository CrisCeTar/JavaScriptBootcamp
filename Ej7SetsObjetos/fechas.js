const fecha = new Date()

const nacimiento = new Date("1995,September,11")

let masTarde = fecha > nacimiento;

let diaNacimiento = nacimiento.getDate()

let mesNacimiento = nacimiento.getMonth()+1

let anyoNacimiento = nacimiento.getFullYear()
