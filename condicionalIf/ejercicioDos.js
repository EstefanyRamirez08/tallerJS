 //•Pide un número.
 //•Si es positivo, muestra "Es positivo".
 //•Si es negativo, muestra "Es negativo".
 //•Si es cero, muestra "Es cero"

const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Ingrese un numero: "));

if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}