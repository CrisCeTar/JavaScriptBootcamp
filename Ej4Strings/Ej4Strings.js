let nombre = "Cristina";
let apellido = "Cerro";
let estudiante = nombre + " " + apellido;
let estudianteMayus = estudiante.toUpperCase()//CRISTINA CERRO | No modifica el String original
let estudianteMinus = estudiante.toLowerCase()//cristina cerro | No modifica el String original
let numLetras = estudiante.length//14 | espacios incluidos
let primLetra = nombre[0]//C
let ultLetra = apellido.charAt(apellido.length-1)//o | charAt() devuelve el caracter que esté en la posición que le indiquemos entre los paréntesis
let no_space = estudiante.trim();//Cristina Cerro | trim() elimina los espacios en blanco de los extremos del String
let incluyeNombre = estudiante.includes(nombre)//true



