//•Pide una contraseña con prompt().
 //•Usa un while para seguir preguntando hasta que ingrese "1234".
 //•Cuando acierte, muestra "Contraseña correcta".

const prompt = require('prompt-sync')();

let contrasena = prompt("Ingrese su contraseña (Recuerda que es de 4 números): ");

while (contrasena !== "1234") {
    contrasena = prompt("Ingrese su contraseña: ");
}

console.log("Contraseña correcta"); 