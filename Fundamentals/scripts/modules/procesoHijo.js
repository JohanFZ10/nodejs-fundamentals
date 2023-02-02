// NodeJS permite ejecutar comandos de consola a traves de script, permitiendo controlar otros procesos
// que se esten ejecutando en tiempo real. Estos procesos no tienen porque ser de Node, podrian ser 
// cualquier otro proceso
// child processes: Paquete integrado en Node por defecto
console.clear();

const {exec, spawn} = require('child_process');

// exec('mkdir test', function(err, stdout){
//     if (err) {
//         console.error(err);
//     }
//     console.log(stdout);
//     console.log("Test Folder created successfully");
// });
// exec('dir', function(err, stdout){
//     if (err) {
//         console.error(err);
//     }
//     console.log(stdout);
//     console.log("List of files found");
// });

// exec('node console.js', function(err, stdout){
//    if(err) {
//     console.error(err);
//    }
//    console.log(stdout);
// });

// Usando el metodo spawn
// let proceso = spawn('dir', {shell: true});

// proceso.stdout.on('data', function(data) {
//     console.log("PID: "+ proceso.pid);
//     console.log(data.toString());
// });

// proceso.on('exit', function(){
//     console.log('¿El proceso esta muerto?');
//     console.log(proceso.killed);
//     console.log('Process exited with code:'+ proceso.exitCode);
// });

// proceso.on('close', function(){
//     console.log('¿El proceso esta muerto?');
//     console.log(proceso.killed);
//     console.log('Process closed successfully');
// });


// Ejercicio 1: Hacer ping a una Ip especifica

const ip = '8.8.8.8';

const ping = (ipAddres) =>{
    return new Promise((resolve, reject) => {
        exec(`ping ${ipAddres}`,function(err,stdout) {
            if(err){return reject(err)}
            else{
                resolve(stdout);
            }
        })
    })
}

ping(ip)
   .then(result => console.log(result))
   .catch(err => console.error(err))

// Ejecutar Google Chrome
// exec('start chrome', function (err,stdout){
//     if(err) {
//         console.error(err);
//     }
//     console.log(stdout);
//     console.log("Google Chrome started successfully");
// });
// Ejecutar CMD
exec('start', function (err,stdout){
    if(err) {
        console.error(err);
    }
    console.log(stdout);
    console.log("CMD started successfully");
});