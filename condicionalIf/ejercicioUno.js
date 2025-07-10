 //Ejercicio 1:
// •Pide al usuario su edad.
// •Si es mayor o igual a 18, muestra "Puedes entrar".
//•Si no, muestra "No puedes entrar"//

const prompt = require('prompt-sync')()

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}