//Este es el archivo que vamos a utilizar
const nombre = "Gorka"

//MANERAS DE DESACTIVAR ESLINT EN DETERMINADAS LÍNEAS

// ->/*eslint-disable*/ -> para desactivar
const persona = "Maria"
// ->/*eslint-disable*/ -> volvemos a activar

//En esta línea quiero desactivar la regla de las comillas dobles
const nuevoString = "Esto es un nuevo String"// ->  // eslint-disable-line

/*eslint-disable-next-line indent*/
 const string2 = "Más strings"

//Si queremos que se registren todos los errores de la carpeta creamos un script en packaje.json "lint":"eslint ."-> el . significa que
//analizará toda la carpeta, si quisiéramos analizar un solo archivo sería "eslint index.js". Lo lanzamos en consola->npm run lint


console.log("Hola")// eslint-disable-line

//Si queremos arreglar estos problemas automáticamente creamos el script "lint-fix": "eslint --fix ." y lanzamos->npm run lint-fix
//Solucionará todos los errores a excepción de los console.log ya que lo considera codigo sensible.