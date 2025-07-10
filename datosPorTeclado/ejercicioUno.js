//•Pide al usuario su año de nacimiento con prompt().
 //•Calcula su edad.
 //•Muestra.
const prompt = require('prompt-sync')()

let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let anioActual = 2025;
let edad =  anioActual - anioNacimiento;

console.log("sue edad es " + edad);


