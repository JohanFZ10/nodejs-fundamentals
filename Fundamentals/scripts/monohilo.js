'use strict'

console.log("Primera Instruccion del Monohilo");

let i = 0;
// Evento Asincrono
setInterval(function () {
    console.log("Voy a contar hasta infinito, detenme con CTRL+C sino acabare con tus recursos");
},5000);

// Evento Asincrono
setInterval(function () {
    console.log(i);
    i++

    // // Forzando un error
    // if(i === 5){
    //     console.log("Hemos forzado un error...")
    //     let a = i + b;
    // }
    // /* Nota: Es importante testear cualquier funcion desarrollada
    // Para evitar que por causa de un error o un mal tratamiento del mismo,
    // se corte todo el programa o hilo de node */
},1000);

console.log("Segunda Instruccion del monohilo");
console.log("Tercera Instruccion del monohilo");

