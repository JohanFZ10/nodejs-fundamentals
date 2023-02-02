'use strict';

console.log("Uso de variables de entorno en nodeJS");

let name = process.env.NAME || "No tiene nombre";
let web = process.env.MI_WEB || "No tiene web";

console.log("Usuario: " + name);
console.log("Sitio Web: " + web);


// Para usar variables de entorno de manera mas eficiente, se recomienda usar el paquete de npm dotenv
// 1- npm install --save dotenv
// 2- crear un archivo .env donde guardaremos todas las variables de entorno
// 3- Dentro del archivo .env, declarar las variables de entorno asi: NAME_VARIABLE = "VALUE"
// 4- Para instanciar variables de entorno dentro del hilo principal usar:
    // require('dotenv').config();
    // console.log(process.env.NAME);