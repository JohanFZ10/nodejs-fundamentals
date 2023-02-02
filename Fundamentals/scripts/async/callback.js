'use strict';

function soyAsincrona(name,elCallback){
    setTimeout(function(){
        console.log(`hola ${name} soy una funcion asincrona`);
        elCallback();
    },1000);
}

function miFuncionAsincrona(callback){
    setTimeout(()=>{
        console.log("Hola, yo soy otra funcion asincrona");
        callback();
    },3000)
}

console.log("Iniciando proceso de Node");
soyAsincrona('johan', function (){
    console.log("Proceso de Node terminado");
});

miFuncionAsincrona(()=>{
    console.log("miFuncionAsincrona se ejecuto con exito!");
})
