/* 
    Los callback hell se presentan cuando existe una llamada de funciones callback en cascada. Es decir,
    existe una funcion de orden superior que recibe como parametro una funcion callback, que a su vez
    en su definicion, recibe como parametro otra funcion de callback y asi sucesivamente...
    Ej:
    hola('Alejandro', function (nombre) {
        hablar(function () {
            hablar(function () {
                hablar(function () {
                    adios(nombre, function() {
                        console.log('Terminando proceso...');
                    });
                });
            });
        });
    });
*/

/* Los callbackHell se resuelven utilizando funciones Recursivas y estructuras de control */

function hola(name, callback){
    setTimeout(function(){
        console.log(`Hola ${name}`);
        callback(name);
    },1500);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("Bla bla bla...");
        callbackHablar();
    },1000);
}

function Adios(name, callback){
    setTimeout(function(){
        console.log(`Adios ${name}`);
        callback();
    },1500);
}

function conversacion(name,veces,callback){
    if(veces > 0){
        hablar(function(){
            conversacion(name,--veces,callback);
        });
    }else{
        Adios(name,callback);
    }
}

console.log("Iniciando proceso...");
hola('Johan',function(name){
    conversacion(name,5,()=>{
        console.log("Terminando proceso...");
    });
});
