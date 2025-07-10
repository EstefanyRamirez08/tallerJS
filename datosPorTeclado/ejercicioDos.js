//•Pide dos números con prompt().
 //•Convierte los datos a número.
 //•Muestra la suma en consola.

 const prompt = require('prompt-sync')()

 let numero1 = parseInt(prompt("Ingrese el primer numero: "));
 let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
 let suma = numero1 + numero2;

 console.log("la suma es " + suma);