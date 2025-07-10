 //•Pide un número con prompt().
 //•Usa un while para contar desde 1 hasta ese número.
 //•Muestra cada número en consola

 const prompt = require('prompt-sync')()

 let numero = parseInt(prompt("Ingrese un numero: "));

 let contador = 1;

 while (contador <= numero) {
     console.log(contador);
     contador++;
 }