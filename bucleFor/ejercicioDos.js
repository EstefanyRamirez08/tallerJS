//•Pide un número con prompt().
// •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10).

const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Ingrese un numero: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + (numero * i));
}   